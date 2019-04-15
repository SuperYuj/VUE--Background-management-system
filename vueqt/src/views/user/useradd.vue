<template>
  <div>
    <el-form ref="form" :rules="rules" class="loginform" :model="adduser" label-width="80px">
      <el-form-item label="姓名" prop="username">
        <el-input v-model="adduser.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="adduser.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="上传头像" prop="headurl">
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
        <el-button type="primary" @click="userAdd()">添加用户</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import { reqadd1, baseUrl } from "api/apiaxios.js";
  export default {
    data() {
      return {
        adduser: {
          username: "",
          password: "",
          fileurl: "",
          message: ""
        },
        file: "",
        rules: {
          username: [
            { required: true, message: "请输入用户名", trigger: "blur" }
          ],
          password: [{ required: true, message: "请输入密码", trigger: "blur" }]
        }
      };
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
          this.adduser.fileurl = res.data;
        });
      },
      userAdd(){
        let formData={
          clientname:this.adduser.username,
          password:this.adduser.password,
          headurl:this.adduser.fileurl
        }
        reqadd1(formData)
          .then(data => {
            if (data.resultCode === 1) {
              this.$router.push({ name: "用户列表" });
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

<style scoped>
  table {
    background-color: #cccccc;
    border: 1px;
    width: 100%;
  }

  table tr {
    height: 20px;
  }

  table tr div {
    text-align: right;
  }

  td font {
    color: red;
  }

  .mylable {
    color: red;
    font-size: 12px;
  }
</style>