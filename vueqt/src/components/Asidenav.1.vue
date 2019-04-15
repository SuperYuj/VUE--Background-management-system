<template>
  <div class="leftbox">
    <el-menu default-active="1" class="el-menu-vertical-demo"  unique-opened router>
        <el-menu-item >
            <i class="el-icon-menu"></i>
            <span slot="title" style="color:rgb(50, 168, 207);font-size:18px">菜单列表</span>
        </el-menu-item>
      <el-submenu :index="index" v-for='(item,index) in $router.options.routes' v-if='!item.hidden' :key='index'>
        <template slot="title">
          <i :class="item.iconCls"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item v-for='(sub,i) in item.children' v-if='!sub.hidden' :index="sub.path" :key='i'>
          <i :class="sub.iconCls"></i>
          <span>{{sub.name}}</span>
        </el-menu-item>
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