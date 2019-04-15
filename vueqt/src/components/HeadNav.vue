<template>
  <div>
    <!-- <h1>
        <div v-if="headurl"><img class="logo" :src="baseurl+headurl"></div>
        <div v-else><img class="logo" src="../assets/img/y.jpg"></div>
      <span class="ht">后台管理中心</span>
      <p class="admin1">欢迎回来
        <span>{{user}}</span>
      </p>
    </h1> -->
    <el-col :span='24' class="headnav">
      <el-col :span='20'>后台管理中心</el-col>
      <el-col :span='4'>
        <el-dropdown trigger="hover">
          <div v-if="headurl" class="username" ><img class="logo" :src="baseurl+headurl"><span >{{user}}</span> </div>
          <div v-else class="username"><img class="logo" src="../assets/img/y.jpg"><span >{{user}}</span></div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
  </div>
</template>
<style scoped>
  .username {
    font-size: 18px;
    color: rgb(27, 116, 233);
    cursor: pointer;
  }
  .logo {
     float:left;
     height: 50px;
     width: 50px;
     border-radius: 50%;
     display: inline-block;
     margin-right: 20px;
     margin-top: 20px;
 }
 .headnav{
     position: absolute;
     top: 0;
     left: 0;
     height: 80px;
     width: 100%;
     background: url('../assets/img/bg.jpg') no-repeat 0 -1000px;
     padding-left: 50px;
     box-sizing: border-box;
     align-items: center;
     font-size: 24px;
     color: #fff;
     font-weight: 400;
     line-height: 80px;
 }
</style>
<script>
  import { baseUrl } from "api/apiaxios.js";
  export default {
    data() {
      return {
        user: '',
        headurl: '',
        baseurl: baseUrl
      }
    },
    mounted() {
      // this.user=sessionStorage.getItem('user');
      // this.headurl=sessionStorage.getItem('headurl')
      console.log(this.$store.getters.getUser.headurl)
      this.user = this.$store.getters.getUser.username;
      this.headurl = this.$store.getters.getUser.headurl;
    },
    methods:{
    loginout(){
      // sessionStorage.removeItem('user');
      this.$store.dispatch('clearUser')
      this.$router.push({name:'Login'})
    }
  }
  }
</script>