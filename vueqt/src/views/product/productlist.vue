<template>
  <div>
    <el-table :data="productlists.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%">
      <el-table-column fixed prop="shop" label="商店名">
      </el-table-column>
      <el-table-column prop="picture" label="图片">
        <template slot-scope="scope"> <img :src="baseurl+scope.row.picture" min-width="70" height="70" /> </template>
      </el-table-column>
      <el-table-column prop="product" label="产品">
      </el-table-column>
      <el-table-column prop="price" label="价格">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="deleteproduct(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[5, 10, 20, 40]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper"
      :total="productlists.length"  align= "center">

    </el-pagination>
  </div>
</template>
<script>
  import { reqproductlist, baseUrl, reqproductdelete } from "api/apiaxios.js";
  export default {
    methods: {
      handleClick(row) {
        this.$router.push({ name: 'Productupdate', query: { id: row.id } })
        console.log(JSON.stringify(row));
      },
      deleteproduct(row) {
        console.log(JSON.stringify(row));
        let id = row.id;
        //  console.log(`uid = ${uid}`);
        // 箭头函数中this
        reqproductdelete({ params: { id: id } }).then(data => {
          if (data.resultCode === 1) {
            this.productlist();
          }
        })
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
        console.log(this.pagesize)  //每页下拉显示数据
      },
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage;
        console.log(this.currentPage)  //点击第几页
      },
      productlist() {
        reqproductlist().then(data => {
          if (data.resultCode === 1) {
            this.productlists = data.resultInfo;
          }
        })
      }
    },
    created() {
      this.productlist();
      console.log(">>>>>>>>>>" + this.productlists)
    },
    data() {
      return {
        productlists: '',
        baseurl: baseUrl,
        currentPage: 1, //初始页
        pagesize: 5,    //每页的数据
        // userList: []
      }
    }
  }
</script>