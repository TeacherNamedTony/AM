<template>
  <el-container>
    
    <el-main>
       <el-alert title="在这里您可以对系统中的用户进行操作。默认重置密码为：123456。" type="info" show-icon close-text="知道了"></el-alert>
      <el-table :data="tableData" style="width: 100%">

        <el-table-column label="登录用户名" width="100">
          <template slot-scope="scope">
            <i class="el-icon-user-solid"></i>
            <span style="margin-left: 10px">{{ scope.row.username }}</span>
          </template>
        </el-table-column>
       <el-table-column label="是否管理员"  width="100">
          <template slot-scope="scope">
            <p v-if="scope.row.isadmin==0">管理员</p>
            <p v-if="scope.row.isadmin==1">普通用户</p>
          </template>
        </el-table-column>
                <el-table-column label="账户状态"  width="100">
          <template slot-scope="scope">
            <p v-if="scope.row.isdel==0">正常</p>
            <p v-if="scope.row.isdel==1">冻结中</p>
          </template>
        </el-table-column>

        <el-table-column label="用户详情信息">
          <template slot-scope="scope">
            <p>真实姓名：{{ scope.row.realname }}</p>
            <p>单位所属：{{ scope.row.company }}</p>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope" >
            <el-button size="max" round type="primary" @click="handleReset(scope.$index, scope.row)">重置密码</el-button>
            <el-button size="max" round type="danger" @click="handleFrozen(scope.$index, scope.row)">冻结账户</el-button>
            <el-button size="max" round type="info" @click="handleRe(scope.$index, scope.row)">恢复账户</el-button>.
            <el-button size="max" round type="warning" @click="handleDelete(scope.$index, scope.row)">删除账户</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        tableData: [],
      }
    },
    methods: {
      handleReset(index, row) {
        window.console.log(index, row);
      },
      handleFrozen(index, row) {
        window.console.log(index, row);
      },
      handleRe(index, row) {
        window.console.log(index, row);
      },
      handleDelete(index, row) {
        window.console.log(index, row);
      },
      
      loadAll() {
        axios.get('http://192.168.17.73:8088/getAllUser?').then((data) => {
          this.tableData = data.data.data;
        })
      },
    },
    mounted() {
      this.loadAll();
    },
  }
</script>
<style scoped>
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