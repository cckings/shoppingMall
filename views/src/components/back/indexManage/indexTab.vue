<!--用户列表-->
<template>
  <div class="dataBox">
    <div class="whiteBac">
      <div class="operationGroup">

      </div>
      <template>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'backUser',
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'user',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: 'user',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: 'user',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: 'user',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>

</style>
