  <template>
    <el-container>
      <el-main>
        <el-alert title="您的申请已经通过审核，如有需要可撤销授权。" type="success" show-icon close-text="知道了"></el-alert>
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
          <el-table-column prop="userApplyDetail.company" label="所属单位" width="120">
          </el-table-column>
          <el-table-column prop="userRatifyDetail.realname" label="审核人" width="80">
          </el-table-column>
          <el-table-column prop="grantdate" label="审批时间" width="">
          </el-table-column>
          <el-table-column>
            <template slot="header" slot-scope="scope">
              <el-input v-model="search" size="max" placeholder="项目名称以检索" />
            </template>
            <template slot-scope="scope">
              <el-button size="max" type="info" round @click="changeDialog(scope.row)">查看申请</el-button>
              <el-button class="button-pass" size="max" type="danger" round @click="nopass(scope.row.sid)">撤销授权</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination class="fenye" background layout="prev, pager, next" :total="10">
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
          dialogTableVisible: false,
          tableData: [],
          dialogData: ''
        }
      },
      methods: {
        loadAll() {
          axios.get(g.apiUrl+'/getAllPassState', {}).then((data) => {
            this.tableData = data.data.data;
          })
        },
        nopass(sid) {
          axios.get(g.apiUrl+'/unratify/' + this.id + '?sid=' + sid).then(() => {
            axios.get(g.apiUrl+'/getAllPassState', {}).then((data) => {
              this.tableData = data.data.data;
              this.loadAll();
            })
          })
        },
        changeDialog(params) {
          this.dialogData= params.applyDetail;
          this.dialogTableVisible = true;
        },
      },
      mounted() {
        var user = sessionStorage.getItem('user');
        var id = sessionStorage.getItem('id');
        var username = sessionStorage.getItem('username');
        var company = sessionStorage.getItem('company');
        if (user) {
          this.user = user;
          this.username = username;
          this.id = id;
          this.company = company;
        }
        this.loadAll();
      },
    };
  </script>



  <style scoped>

    /* Page Definitions */
    @page WordSection1 {
      size: 595.3pt 841.9pt;
      margin: 72.0pt 90.0pt 72.0pt 90.0pt;
      layout-grid: 15.6pt;
    }

    .fenye {
      text-align: center;
      margin-top: 2%
    }

    .el-header {
      background-color: #B3C0D1;
      color: #333;
      line-height: 60px;
    }

    .button-pass {
      float: right;
    }

    .button-pass {
      float: right;
    }


    .el-aside {
      color: #333;
    }

    .el-button--info {
      background-color: #33CCCC;
      border-color: white;
    }

    .el-button--info.is-active,
    .el-button--info:active {
      background-color: rgb(6, 158, 158);
      border-color: white;
    }

    .el-button--info:focus,
    .el-button--info:hover {
      background-color: rgb(6, 158, 158);
      border-color: white;
    }
  </style>