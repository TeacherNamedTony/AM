  <template>
    <el-container>
      <el-header style="height:0px">
      </el-header>

      <el-main>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column prop="date" label="申请日期" width="100">
          </el-table-column>
          <el-table-column prop="name" label="申请人员" width="100">
          </el-table-column>
          <el-table-column prop="projectname" label="项目名称" width="180">
          </el-table-column>
          <el-table-column prop="stopdate" label="申请时长" width="180">
          </el-table-column>
          <el-table-column prop="passername" label="审核人" width="100">
          </el-table-column>
          <el-table-column prop="address" label="所属单位" width="">
          </el-table-column>
          <el-table-column prop="look" label=" " width="180">
            <el-button type="primary" @click="dialogTableVisible = true">查看申请</el-button>
            <el-dialog title="#" :visible.sync="dialogTableVisible">
              <ApplyPage></ApplyPage>

            </el-dialog>
          </el-table-column>

        </el-table>
      </el-main>
      <el-pagination class="fenye" background layout="prev, pager, next" :total="100">
      </el-pagination>
    </el-container>
  </template>
  <style scoped>
    .fenye {
      text-align: center
    }
  </style>

  <script>
    import axios from 'axios';
    import ApplyPage from '@/views/applypage/index.vue'

    export default {
      components: {
        'ApplyPage': ApplyPage,
      },

      data() {
        const item = {
          date: '2019-05-06',
          name: '托尼老师',
          stopdate: '2019-05-01' + '~' + '2019-06-31',
          projectname: '厂商授权系统-测试显示适配情况',
          address: '中软信息系统工程有限公司',
          passername:'尚未审核'
        };
        return {
          dialogTableVisible: false,
          tableData: Array(6).fill(item),
          restaurants: [],
          state: '',
          timeout: null


        }
      },
      methods: {
        lookapply() {

        },
        toggleSelection() {

          this.$refs.multipleTable.clearSelection();

        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        passnow() {
          this.$confirm('授权成功', '提示', {})
        },

        loadAll() {
          return [{
              "value": "用户1",
              "address": "中软公司"
            },
            {
              "value": "用户2",
              "address": "中软公司"
            },
            {
              "value": "用户3",
              "address": "中软公司"
            },
          ];
        },
        querySearchAsync(queryString, cb) {
          var restaurants = this.restaurants;
          var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            cb(results);
          }, 3000 * Math.random());
        },
        createStateFilter(queryString) {
          return (state) => {
            return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
          };
        },
        handleSelect(item) {
          window.console.log(item);
        }
      },
      mounted() {
        this.restaurants = this.loadAll();
        axios.get('/ssss', {
          "name": "ddfdf"
        }).then((data) => {
          alert(1111);
          this.tableData = data.tableData;
        })
      },
    };
  </script>