<template>
        <div>
                <el-form ref="form" :rules="rules" class="loginform" :model="addproduct" label-width="80px">
                  <el-form-item label="商店名" prop="shop">
                    <el-input v-model="addproduct.shop" placeholder="请输入商店名"></el-input>
                  </el-form-item>
                  <el-form-item label="产品" prop="product">
                    <el-input v-model="addproduct.product" placeholder="请输入产品名"></el-input>
                  </el-form-item>
                  <el-form-item label="价格" prop="price">
                          <el-input v-model="addproduct.price" placeholder="请输入价格"></el-input>
                        </el-form-item>
                  <el-form-item label="上传产品图片" prop="producturl">
                    <!-- <el-upload
                      class="upload-demo"
                      action="/"
                      :limit="1"
                      :on-preview="handlePreview"
                      :before-upload="beforeUpload"
                    >
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload> -->
                    <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" 
                       multiple :limit="1" 
                       :before-upload="beforeUpload">
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="productUpdate()">修改商品</el-button>
                  </el-form-item>
                </el-form>
              </div>
</template>
<script>
        import { requpdateproduct, baseUrl,reqproductfind} from "api/apiaxios.js";
        export default {
          data() {
            return {
              addproduct: {
                id:'',
                shop: "",
                picture: "",
                product: "",
                price: ""
              },
              file: "",
              rules: {
                shop: [{ required: true, message: "请输入商店名", trigger: "blur" }],
                product: [{ required: true, message: "请输入产品", trigger: "blur" }],
                price: [{ required: true, message: "请输入价格", trigger: "blur" }]
              }
            };
          },
          created(){
            let uid=this.$route.query.id;
            this.addproduct.id=this.$route.query.id;
            reqproductfind({params:{uid:uid}}).then(data=>{
          console.log('find' + JSON.stringify(data.resultInfo))
            this.addproduct.shop = data.resultInfo.shop;
            this.addproduct.picture =  data.resultInfo.picture;
            this.addproduct.product = data.resultInfo.product;
            this.addproduct.price=data.resultInfo.price
        })

        },
          methods: {
            // changeFile(event) {
            //   let file = event.target.files[0];
            //   this.adduser.file = file;
            // },
            beforeUpload(file) {
              let formData = new FormData();
              formData.append('head', file);
              this.$axios.post(`${baseUrl}/uploadFile`, formData).then(res => {
                this.addproduct.picture = res.data;
              });
            },
            productUpdate(){
              let formData={
                id:this.addproduct.id,
                shop:this.addproduct.shop,
                product:this.addproduct.product,
                picture:this.addproduct.picture,
                price:this.addproduct.price,
              }
              console.log('传值'+ JSON.stringify(formData))
              requpdateproduct(formData)
                .then(data => {
                  if (data.resultCode === 1) {
                      console.log('修改成功')
                    this.$router.push({ name: "商品列表" });
                  } else {
                    this.message = "修改商品失败";
                  }
                })
                .catch(error => {
                  console.log(error);
                });
            }
          }
        };
      </script>
      