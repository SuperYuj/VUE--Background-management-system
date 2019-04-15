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
              <el-button type="primary" @click="productAdd()">添加商品</el-button>
            </el-form-item>
          </el-form>
        </div>
      </template>
      <script>
        import { reqaddproduct, baseUrl } from "api/apiaxios.js";
        export default {
          data() {
            return {
              addproduct: {
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
          methods: {
            changeFile(event) {
              let file = event.target.files[0];
              this.adduser.file = file;
            },
            beforeUpload(file) {
              let formData = new FormData();
              formData.append('head', file);
              this.$axios.post(`${baseUrl}/uploadFile`, formData).then(res => {
                this.addproduct.picture = res.data;
              });
            },
            productAdd(){
              let formData={
                shop:this.addproduct.shop,
                product:this.addproduct.product,
                picture:this.addproduct.picture,
                price:this.addproduct.price,
              }
              reqaddproduct(formData)
                .then(data => {
                  if (data.resultCode === 1) {
                    this.$router.push({ name: "商品列表" });
                  } else {
                    this.message = "添加用户失败";
                  }
                })
                .catch(error => {
                  console.log(error);
                });
            }
          }
        };
      </script>
      