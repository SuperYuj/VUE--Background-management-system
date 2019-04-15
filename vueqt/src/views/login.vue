<template>
  <div class="main">
    <div class="box">
      <img class="bgimg" src="../assets/img/timg.jpg">
      <el-form ref="form" :rules="rules" class="loginform" :model="form" label-width="80px">
        <h1 class="title">登录界面</h1>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="form.checked">记住密码</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onLogin('form')" style="width:100%">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')" style="width:100%">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "api/apiaxios.js";
export default {
  name: "Login",
  data() {
    return {
      form: { username: "", password: "", checked: "" },
      error: "",
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  created() {
        this.getCookie();
    },
  methods: {
    onLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          login({
            username: this.form.username,
            password: this.form.password
          }).then(data => {
            let resultCode = data.resultCode;
            let resultInfo = data.resultInfo;
            if (resultCode === 1) {
              //进入主界面
              console.log(JSON.stringify(data.resultInfo));
              let users = {
                username: this.form.username,
                headurl: resultInfo.headurl,
                token: resultInfo.token
              };
              if (this.form.checked == true) {
                            console.log("checked == true");
                            //传入账号名，密码，和保存天数3个参数
                            this.setCookie(this.form.username, this.form.password, 7);
                        }else {
                          console.log("清空Cookie");
                          //清空Cookie
                          this.clearCookie();
                        }
              this.$store.dispatch("setUser", users);
              this.$router.push({
                path: "/index",
                params: {
                  username: data.resultInfo.name,
                  img: data.resultInfo.headurl
                }
              });
            } else {
              // 登录失败
              // this.error = data.resultInfo;
              this.open();
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
     open() {
        this.$message.error('用户名或者密码出错');
      },
      setCookie(c_name, c_pwd, exdays) {
                var exdate = new Date(); //获取时间
                exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
                //字符串拼接cookie
                window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
                window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
            },
            //读取cookie
            getCookie: function() {
                if (document.cookie.length > 0) {
                    var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
                    for (var i = 0; i < arr.length; i++) {
                        var arr2 = arr[i].split('='); //再次切割
                        //判断查找相对应的值
                        if (arr2[0] == 'userName') {
                            this.form.username = arr2[1]; //保存到保存数据的地方
                        } else if (arr2[0] == 'userPwd') {
                            this.form.password = arr2[1];
                        }
                    }
                }
            },
            //清除cookie
            clearCookie: function() {
                this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
            }
}
  }
</script>
<style scoped>
@import "../assets/css/login.css";
</style>
