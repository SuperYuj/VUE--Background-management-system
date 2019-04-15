<template>
    <div>
  <!-- <form name="client_form" @submit.prevent="userupdate" method="post" enctype="multipart/form-data"> -->
    <table>
      <tbody>
        <tr bgcolor="#f5f5f5">
          <td>
            <div>
              <font>*</font> 姓名:
            </div>
          </td>
          <td id="boxtd">
              <input type="hidden" v-model="uid" >
            <input id="clientname" type="text"  v-model="clientname" value="" size="30" />
          </td>
        </tr>
        <tr bgcolor="#f0f0f0">
          <td>
            <div>
              <font>*</font> 密码:
            </div>
          </td>
          <td>
            <input id="password" type="password" name="password" v-model="password" value="" size="30" />
          </td>
        </tr>
        <tr bgcolor="#f0f0f0">
          <td>
            <div>
              <font>*</font> 上传头像:
            </div>
          </td>
          <td>
            <input  type="file" name="head"  @change="changeimg($event)" size="30" />
            <!-- <img  :src="`http://192.168.35.11:8080${this.headurl}`" alt=""> -->
          </td>
        </tr>
        <tr bgcolor="#f5f5f5">
          <td></td>
          <td colspan="2">
            <input type="button" @click="userupdate" value="提交" />
            <input type="reset" value="重置" />
          </td>
        </tr>
      </tbody>
    </table>
  <!-- </form> -->
</div>
</template>
<script>
import {reqfind,requpdate} from 'api/apiaxios.js'
export default {
    data(){
        return{
        clientname:'',
        password:'',
        uid:'',
        headurl:''
        }
    },
     created(){
        let uid = this.$route.query.uid;
        console.log(`uid = ${uid}`);
        reqfind({params:{uid:uid}}).then(data=>{
          console.log(data.resultInfo.username)
            this.clientname = data.resultInfo.name;
            this.password =  data.resultInfo.password;
            this.uid = data.resultInfo.id;
            this.headurl=data.resultInfo.headurl
        })
        // this.$axios.get('http://192.168.35.11:8080/update',{params:{id:uid}}).then( response => {
        //     const data =  response.data;
        //     this.username = data.resultInfo.username;
        //     this.password =  data.resultInfo.password;
        //     this.uid = data.resultInfo.uid;
        // });
    },
     methods:{
       changeimg(event){
       let img=event.target.files[0];
       console.log('+++'+img )
       this.headurl=img
       },
        userupdate(){
        console.log(`uid = ${this.uid}; username = ${this.clientname}; psw = ${this.password}`);
        let formData=new FormData();
        formData.append('clientname',this.clientname);
        formData.append('password',this.password);
        formData.append('head',this.headurl);
        formData.append('id',this.uid);
        let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
            requpdate(formData,config).then(
              data=>{
                if(data.resultCode === 1){
                    this.message='修改成功!';
                    this.$router.push({name:'用户列表'});
                }else{
                    this.message = '修改失败';
                }
              }
            ).catch(error=>{
              console.log(error)
            });
            // this.$axios.post('http://192.168.35.11:8080/update',{id:this.uid,username:this.username,psw:this.password}).then( response => {
            //     if(response.data.resultCode === 1){
            //         this.message='修改成功!';
            //         this.$router.push({name:'UserList'});
            //     }else{
            //         this.message = '修改失败';
            //     }
            // }).catch( error => {
            //     console.error(error);
            // });
        }
    }
}
</script>
<style scoped>
table {
      background-color: #CCCCCC;
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
      .mylable{
      color: red;
      font-size: 12px;
      }
</style>

