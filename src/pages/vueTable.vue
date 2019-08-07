<template>
  <el-table :data="tableData" style="width: 100%">
    <!-- <button @click="selectDemo">点击请求</button> -->
    <el-table-column label="姓名" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="地址" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.address }}</span>
      </template>
    </el-table-column>
    <el-table-column label="日期" width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.row.id)">删除</el-button>
        <el-popover placement="right" width="400" trigger="click">
          <el-table :data="gridData">
            <el-table-column width="150" property="date" label="日期"></el-table-column>
            <el-table-column width="100" property="name" label="姓名"></el-table-column>
            <el-table-column width="300" property="address" label="地址"></el-table-column>
          </el-table>
          <el-button slot="reference">修改</el-button>
        </el-popover>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
      data:function() {
        return {
          tableData: [{
            id:'',
            date: '',
            name: '',
            address: ''
          }],
          gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
        }
      },
      mounted:function(){
        this.selectDemo();
      },
      methods: {
            selectDemo: function () {
                     this.$axios({
                            url:'http://127.0.0.1:8000/api/persons/getAllInfo',
                            method:'post'
                        })
                        .then((response) => {
                            this.tableData = response.data;
                            console.log(response.data);
                        }).catch(function (response) {
                        console.log(response)
                    });
            },
            handleEdit:function(index, row) {
                console.log(index, row);
              },
            handleDelete:function(id) {
                  this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  this.delete(id);
                  this.$message({
                    type: 'success',
                    message: '删除成功!'
                  });
                }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '已取消删除'
                  });          
                });
            },
            delete(id) {
              var params = new URLSearchParams();
              params.append('id', id); 
                  this.$axios({
                            url:'http://127.0.0.1:8000/api/persons/deleteByID',
                            method:'post',
                            data:params
                        })
                        .then((response) => {
                          // this.open();
                          this.selectDemo();
                            console.log(response.data);
                        }).catch(function (response) {
                        console.log(response)
                    });
              },
            open() {
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  this.$message({
                    type: 'success',
                    message: '删除成功!'
                  });
                }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '已取消删除'
                  });          
                });
            }
        }
    }
  </script>
<style type="text/css">
@import url("//unpkg.com/element-ui@2.9.2/lib/theme-chalk/index.css");

</style>
