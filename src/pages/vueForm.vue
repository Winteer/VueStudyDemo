<template>
  <el-form class="vue-form" ref="form" :model="form" label-width="80px">
    <el-form-item label="名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="地址">
      <el-input v-model="form.address"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-input v-model="form.sex"></el-input>
    </el-form-item>
    <el-form-item>
      <!-- <el-button type="primary" @click="onSubmit(form.name,form.address,form.sex)">立即创建</el-button> -->
      <el-button type="primary" @click="onSubmit(form)">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          address: '',
          sex: ''
        }
      }
    },
    methods: {
      onSubmit(form) {
        var flag = -1;
         var params = new URLSearchParams();
              params.append('name', form.name); 
              params.append('address', form.address); 
              params.append('sex', form.sex); 
        this.$axios({
                            url:'http://127.0.0.1:8000/api/persons/insertPerson',
                            method:'post',
                            data:params
                        })
                        .then((response) => {
                          flag=response.data;
                          if(flag > 0){
                            this.$message('插入成功！');
                          }else{
                            this.$message('插入失败！');
                          }
                          // this.open();
                          this.selectDemo();
                            console.log(response.data);
                        }).catch(function (response) {
                        console.log(response)
                    });
                        this.$emit('onSubmit');
      }
    }
  }
</script>
<style type="text/css">
@import url("//unpkg.com/element-ui@2.9.2/lib/theme-chalk/index.css");

</style>
