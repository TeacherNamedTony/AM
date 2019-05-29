<template>
  <el-container>
    <!-- <el-header style="text-align:left; font-size: 12px">


      <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入项目名称或者申请人"
        @select="handleSelect">

      </el-autocomplete>
    </el-header> -->
    <el-header style="height:0px">
    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="applyDetail.applydate" label="申请日期" width="100">
        </el-table-column>
        <el-table-column prop="applyDetail.applyername" label="申请人员" width="90">
        </el-table-column>
        <el-table-column prop="applyDetail.project" label="项目名称" width="100">
        </el-table-column>
          <el-table-column prop="applyDetail.grantbegindate" label="开始时间" width="100">
          </el-table-column>
          <el-table-column prop="applyDetail.grantenddate" label="结束时间" width="100">
          </el-table-column>
        <el-table-column prop="userRatifyDetail.realname" label="审核人" width="100">
        </el-table-column>
        <el-table-column prop="userRatifyDetail.company" label="所属单位" width="">
        </el-table-column>
        <el-table-column prop="look" label=" " width="150">
          <el-button type="primary" @click="dialogTableVisible = true">查看授权</el-button>
          <el-dialog title="#" :visible.sync="dialogTableVisible">
            <ApplyPage></ApplyPage>

          </el-dialog>
        </el-table-column>
        <el-table-column prop="address" label=" " width="200">
          <el-button type="success" round @click="passnow">下载授权文件</el-button>
        </el-table-column>

      </el-table>

    </el-main>
    <el-pagination class="fenye" background layout="prev, pager, next" :total="10">
    </el-pagination>
  </el-container>
  </el-container>
</template>
<style scoped>
  .fenye {
    text-align: center
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

<script>
  import axios from 'axios';
  import ApplyPage from '@/views/applypage/index.vue'
  export default {
    components: {
      'ApplyPage': ApplyPage,
    },
    data() {
      // const item = {
      //   date: '2019-05-06',
      //   applyername: '托尼老师',
      //   stopdate: '2019-05-01' + '~' + '2019-06-31',
      //   projectname: '厂商授权系统-测试显示适配情况',
      //   address: '中软信息系统工程有限公司',
      //   passername: '斯达克',
      // };
      return {
          dialogTableVisible: false,
          tableData: [],
      }
    },
    methods: {
      passnow() {
        this.$confirm('确认下载授权文件。此文件请妥善保管', '提示', {})
      },
      toggleSelection() {
          this.$refs.multipleTable.clearSelection();
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        loadAll(){
          axios.get('http://192.168.17.73:8088/getAuditedState?id=3', {
            "pagenum": "ddfdf"
          }).then((data) => {
            this.tableData = data.data.data;
          })
        }
    },
      mounted() {
        this.loadAll();

      },

  };
</script>