<template>
  <el-container>
    <el-header style="height:0px">
    </el-header>
    <el-main>
      <el-alert title="授权时长即将过期，如有需要请重新新建申请" type="warning" show-icon close-text="知道了"></el-alert>
      <el-table
        :data="tableData.filter(data => !search || data.applyDetail.project.toLowerCase().includes(search.toLowerCase()))"
        tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="applyDetail.applydate" label="申请日期" width="100">
        </el-table-column>
        <el-table-column prop="applyDetail.applyername" label="申请人员" width="80">
        </el-table-column>
        <el-table-column prop="applyDetail.project" label="项目名称" width="120">
        </el-table-column>
        <el-table-column prop="applyDetail.grantbegindate" label="开始时间" width="100">
        </el-table-column>
        <el-table-column prop="applyDetail.grantenddate" label="结束时间" width="100">
        </el-table-column>
        <el-table-column prop="userRatifyDetail.realname" label="审核人" width="80">
        </el-table-column>
        <el-table-column prop="userRatifyDetail.company" label="所属单位" width="">
        </el-table-column>
        <el-table-column prop="look">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="max" placeholder="输入项目名称以检索" />
          </template>
          <template slot-scope="scope">
            <el-button type="primary" round @click="changeDialog(scope.row)">查看申请</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="fenye" background layout="prev, pager, next" :total="20">
      </el-pagination>
    </el-main>
    <!-- dialog开始，授权申请单弹窗 -->
    <el-dialog title="#" :visible.sync="dialogTableVisible">
      <applyTable :dialogData='dialogData'></applyTable>
    </el-dialog>
  </el-container>
</template>


<script>
  import applyTable from '../table/table.vue'
  import axios from 'axios';
  export default {
    components: {
      'applyTable': applyTable
    },
    data() {
      return {
        search: '',
        username: '',
        id: '',
        dialogTableVisible: false,
        tableData: [],
        dialogData: ''
      }
    },
    methods: {
      // passnow() {
      //   this.$confirm('确认下载授权文件。此文件请妥善保管', '提示', {})
      // },
      loadAll() {
        axios.get(g.apiUrl + '/getNearOverdue?id=' + this.id).then((data) => {
          this.tableData = data.data.data;
        })
      },
      changeDialog(params) {
        this.dialogData = params.applyDetail;
        this.dialogTableVisible = true;
      }
    },
    mounted() {
      var user = sessionStorage.getItem('user');
      var id = sessionStorage.getItem('id');
      if (user) {
        this.username = user;
        this.id = id;
      }
      this.loadAll();
    },
  };
</script>
<style scoped>

  .fenye {
    text-align: center;
    margin-top: 2%
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>