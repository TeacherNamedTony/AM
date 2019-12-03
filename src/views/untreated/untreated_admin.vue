  <template>
    <el-container>
      <el-main>
        <el-alert title="尚有申请仍未通过审核，请尽快审批。" type="info" show-icon close-text="知道了"></el-alert>
        <el-table ref="multipleTable"
          :data="tableData.filter(data => !search || data.applyDetail.project.toLowerCase().includes(search.toLowerCase()))"
          tooltip-effect="dark" style="width: 100%">
          <el-table-column prop="applyDetail.applydate" label="申请日期" width="100">
          </el-table-column>
          <el-table-column prop="applyDetail.applyername" label="申请人员" width="80">
          </el-table-column>
          <el-table-column prop="applyDetail.project" label="项目名称" width="100">
          </el-table-column>
          <el-table-column prop="applyDetail.grantbegindate" label="开始时间" width="100">
          </el-table-column>
          <el-table-column prop="applyDetail.grantenddate" label="结束时间" width="100">
          </el-table-column>
          <el-table-column prop="userApplyDetail.company" label="所属单位" width="120">
          </el-table-column>
          <el-table-column prop="" label="审核状态" width="">
            <el-tag type="info">尽快给予审核</el-tag>
          </el-table-column>
          <el-table-column>
            <template slot="header" slot-scope="scope">
              <el-input v-model="search" size="max" placeholder="项目名称以检索" />
            </template>
            <template slot-scope="scope">
              <el-button size="max" round type="info" @click="changeDialog(scope.row)">查看详情</el-button>
              <el-button class="button-pass" size="max" round type="success" @click="passnow(scope.row)">通过审批
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination class="fenye" background layout="prev, pager, next" :total="1">
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
    import qs from 'qs';
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
          user: '',
          company: '',
          machinenum: '',
          dialogTableVisible: false,
          tableData: [],
          dialogData:'',
        }
      },
      methods: {
        loadAll() {
          axios.get(g.apiUrl + '/getAllStateNotPass', {}).then((data) => {
            this.tableData = data.data.data;
          })
        },
        changeDialog(params) {
          this.dialogData = params.applyDetail
          this.dialogTableVisible = true;
        },
        passnow(params) {
          window.console.log(params.sid)
          let data = {
            sid: params.sid,
            machinenum: params.applyDetail.machinenum,
            productversion: params.applyDetail.productversion,
            desktopcon: params.applyDetail.desktopcon,
            grantbegindate: params.applyDetail.grantbegindate,
            grantenddate: params.applyDetail.grantenddate
          }
          axios({
            method: 'get',
            url: g.apiUrl + '/ratify/' + this.id + '?' + qs.stringify(data),
          }).then(() => {
            this.$confirm('授权成功！', '提示', {})
            axios.get(g.apiUrl + '/getAllStateNotPass', {}).then((data) => {
              this.tableData = data.data.data;
              this.loadAll();
            })
          })
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
    .fenye {
      text-align: center;
      margin-top: 3%
    }

    .el-header {
      background-color: #B3C0D1;
      color: #333;
      line-height: 60px;
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