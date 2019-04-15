<template>
<div class="emp_contaner">
    <h2>用户列表</h2>
    <table>
        <tr>
            <th>头像</th>
            <th>用户名</th>
            <th>密码</th>
            <th colspan="2">操作</th>
        </tr>
        <tr v-for="(item,index) in userLists "  :key="index">
            <td v-if="item.headurl"><img :src="baseurl+item.headurl" width="80px" height="80px"/></td>
            <td v-else><img src='../../assets/img/y.jpg' width="80px" height="80px"/></td>
            <td>{{item.name}}</td>
            <td>{{item.password}}</td>
            <td><router-link :to="{name:'用户列表',query:{uid:item.id}}" @click.native="userDelete">删除</router-link></td>
            <td><router-link :to="{name:'Userupdate',query:{uid:item.id}}">修改</router-link></td>
        </tr>
    </table>
</div>
</template>
<style scoped>
@import "../../assets/css/tables.css";
body{margin: 0;}
</style>
<script>
import {reqlist,reqdelete,baseUrl} from "api/apiaxios.js";
export default {
    created(){
       this.userlist();
    },
    data(){
        return{
            userLists:[],
            baseurl:baseUrl
        }
    },
    methods:{
        userlist(){
            reqlist().then(data=>{
               if(data.resultCode===1){
                    this.userLists=data.resultInfo;
                } 
            })
        // const that=this;
        // this.$axios.get('http://192.168.35.11:8080/list').then(
        //     response =>{
        //         if(response.data.resultCode===1){
        //             this.userLists=response.data.resultInfo;
        //         }
        //     }
        // )
        },
      userDelete() {
      let uid = this.$route.query.uid;
      //  console.log(`uid = ${uid}`);
      // 箭头函数中this
      reqdelete({ params: { uid: uid } }).then(data=>{
          if(data.resultCode===1){
              this.userlist();
          }
      })
    //   const that = this;
    //   this.$axios.get("http://192.168.35.11:8080/delete", { params: { uid: uid } })
    //     .then(response => {
    //       if (response.data.resultCode === 1) {
    //         that.userlist();
    //       }
    //     });
    }
    }
}
</script>
