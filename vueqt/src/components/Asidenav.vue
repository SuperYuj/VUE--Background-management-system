<template>
  <div class="leftbox">
    <el-menu default-active="2" class="el-menu-vertical-demo"  unique-opened router>
        <el-menu-item >
            <i class="el-icon-menu"></i>
            <span slot="title" style="color:rgb(50, 168, 207);font-size:18px">菜单列表</span>
        </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/Useradd">
          <i class="el-icon-location"></i>
          <span>添加用户</span>
        </el-menu-item>
        <el-menu-item index="/Userlist"><i class="el-icon-location"></i>
          <span>用户列表</span></el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item index="2-1"><i class="el-icon-location"></i>
          <span>添加商品类型</span></el-menu-item>
        <el-menu-item index="2-2"><i class="el-icon-location"></i>
          <span>添加商品</span></el-menu-item>
        <el-menu-item index="2-3"><i class="el-icon-location"></i>
          <span>商品列表</span></el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style scoped>
  .leftbox {
height: 100%;
width: 180px;
box-sizing: border-box;
margin-bottom: 0;
overflow: hidden;
float: left;
}
</style>
<script>
  export default {
    
  };
</script>