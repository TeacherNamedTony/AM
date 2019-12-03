<template>
  <el-container>
    <el-header style="height:0px">
    </el-header>
    <el-main>
      <el-alert title="您的申请已经通过审核，下载授权码后注意妥善保管。" type="success" show-icon close-text="知道了"></el-alert>
      <el-table ref="multipleTable"
        :data="tableData.filter(data => !search || data.applyDetail.project.toLowerCase().includes(search.toLowerCase()))"
        tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="applyDetail.applydate" label="申请日期" width="100">
        </el-table-column>
        <el-table-column prop="applyDetail.applyername" label="申请人员" width="80">
        </el-table-column>
        <el-table-column prop="applyDetail.project" label="项目名称" width="110">
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
            <el-input v-model="search" size="max" placeholder="项目名称以检索" />
          </template>
          <template slot-scope="scope">
            <el-button type="primary" round @click="changeDialog(scope.row)">查看申请</el-button>
            <el-button class="button-pass" size="max" type="success" round @click="download(scope.row)">下载授权码
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="fenye" background layout="prev, pager, next" :total="10">
      </el-pagination>
    </el-main>
    <!-- dialog开始，授权申请单弹窗 -->
    <el-dialog top=0hv :visible.sync="dialogTableVisible">
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
        license: '',
        project: '',
        company: '',
        grantbegindate: '',
        grantenddate: '',
        productversion: '',
        dialogTableVisible: false,
        tableData: [],
        dialogData:''
      }
    },
    methods: {
      download(data) {
        this.$confirm("请妥善保管授权码文件------" +
          data.applyDetail.project + '_' +
          data.applyDetail.softwarename + '_' +
          data.applyDetail.grantbegindate + '_' +
          data.applyDetail.grantenddate + '_' +
          data.applyDetail.productversion + '_', '提示', {
            confirmButtonText: '下载',
            cancelButtonText: '关闭',
            type: 'warning'
          }).then(() => {
          this.$message({
            type: 'success',
            message: '开始下载!'
          });
          this.loadFile(
            data.applyDetail.project + '_' +
            data.applyDetail.softwarename + '_' +
            data.applyDetail.grantbegindate + '_' +
            data.applyDetail.grantenddate + '_' +
            data.applyDetail.productversion + '_' +
            "license.txt", data.license);
        }).catch(() => {
          this.$message({
            type: 'close',
            message: '已关闭'
          });
        });
      },
      loadFile(fileName, content) {
        var aLink = document.createElement('a');
        var blob = new Blob([content], {
          type: 'text/plain'
        });
        var evt = new Event('click');
        aLink.download = fileName;
        aLink.href = URL.createObjectURL(blob);
        aLink.click();
        URL.revokeObjectURL(blob);
      },
      loadAll() {
        axios.get(g.apiUrl + '/getAuditedState?id=' + this.id).then((data) => {
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

  .button-pass {
    float: right;
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