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
        <el-table-column prop="date" label="申请日期" width="100">
        </el-table-column>
        <el-table-column prop="applyername" label="申请人员" width="120">
        </el-table-column>
        <el-table-column prop="projectname" label="项目名称" width="150">
        </el-table-column>
        <el-table-column prop="stopdate" label="剩余授权时长" width="120" >
        </el-table-column>
        <el-table-column prop="passername" label="审核人" width="150">
        </el-table-column>
        <el-table-column prop="address" label="所属单位" width="">
        </el-table-column>
        <el-table-column prop="look" label=" " width="200">
          <el-button type="warning" @click="repass">申请重新重新授权</el-button>
        </el-table-column>
      </el-table> 
    </el-main>
    <el-pagination class="fenye" background layout="prev, pager, next" :total="100">
    </el-pagination>
  </el-container>
  </el-container>
</template>


<script>
  import axios from 'axios';
  export default {
    data() {

      return {
                  dialogTableVisible: false,
          tableData: [],

      }
    },
    methods: {
      repass() {
        this.$confirm('申请授权三个月', '', {})
      },

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
          axios.get('http://192.168.17.73:8088/get', {
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