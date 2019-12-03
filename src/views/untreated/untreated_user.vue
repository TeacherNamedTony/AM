  <template>
    <el-container>
      <el-header style="height:0px">
      </el-header>
      <el-main>
        <el-alert title="您的申请尚未通过审核，请耐心等待。" type="info" show-icon close-text="知道了"></el-alert>
        <el-table
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
          <el-table-column prop="" label="审核人" width="">
            <el-tag type="info">尚未通过审核</el-tag>
          </el-table-column>
          <el-table-column>
            <template slot="header" slot-scope="scope">
              <el-input v-model="search" size="max" placeholder="项目名称以检索" />
            </template>
            <template slot-scope="scope">
              <el-button type="primary" round @click="changeDialog(scope.row)">查看申请</el-button>
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
          username: '',
          id: '',
          dialogTableVisible: false,
          tableData: [],
          dialogData: ''
        }
      },
      methods: {
        loadAll() {
          axios.get(g.apiUrl + '/getUntreatedState?id=' + this.id).then((data) => {
            this.tableData = data.data.data;
          })
        },
        changeDialog(params) {
          this.dialogData = params.applyDetail
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
  </style>