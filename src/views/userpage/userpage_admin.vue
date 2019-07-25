<template>
  <el-container>

    <el-main>
      <el-alert title="在这里您可以对系统中的用户进行操作。默认重置初始密码为：123456。" type="info" show-icon close-text="知道了"></el-alert>
      <el-table :data="tableData.filter(data => !search || data.realname.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
        <el-table-column label="登录用户名" width="100">
          <template slot-scope="scope">
            <i class="el-icon-user-solid"></i>
            <span style="margin-left: 10px">{{ scope.row.username }}</span>
          </template>
        </el-table-column>
        <el-table-column label="是否管理员" width="100">
          <template slot-scope="scope">
            <p v-if="scope.row.isadmin==0">管理员</p>
            <p v-if="scope.row.isadmin==1">普通用户</p>
          </template>
        </el-table-column>
        <el-table-column label="账户状态" width="100">
          <template slot-scope="scope">
            <p v-if="scope.row.isdel==0">正常</p>
            <p v-if="scope.row.isdel==1">冻结中</p>
          </template>
        </el-table-column>
        <el-table-column label="密码情况" width="100">
          <template slot-scope="scope">
            <p v-if="scope.row.password=='e1110aaadccc39994999baaa5999abbbbeee5666e0005777f2220fff88883eee'">初始密码</p>
            <p v-if="scope.row.password!=='e1110aaadccc39994999baaa5999abbbbeee5666e0005777f2220fff88883eee'">已修改</p>
          </template>
        </el-table-column>

        <el-table-column label="用户详情信息">
          <template slot-scope="scope">
            <p>真实姓名：{{ scope.row.realname }}</p>
            <p>单位所属：{{ scope.row.company }}</p>
            <p>联系方式：{{ scope.row.tel }}</p>
            <p>创建时间：{{ scope.row.more }}</p>
          </template>
        </el-table-column>

        <el-table-column>
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="max" placeholder="用户名以查找信息" />
          </template>

          <template slot-scope="scope">
            <el-button size="max" round type="primary" @click="ResetPassword(scope.$index, scope.row)">重置密码</el-button>
            <el-button size="max" round type="danger" @click="FrozenUser(scope.$index, scope.row)">冻结账户</el-button>
            <el-button size="max" round type="info" @click="ReUser(scope.$index, scope.row)">恢复账户</el-button>.
            <!-- <el-button size="max" round type="warning" @click="DeleteUser(scope.$index, scope.row)">删除账户</el-button> -->
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
        search: '',
        tableData: [],
      }
    },
    methods: {
      ResetPassword(index, row) {
        // window.console.log(index, row.id);
        axios.get('http://192.168.40.205:13998/ResetPassword?id=' + row.id).then(() => {}).then(() => {
          this.$confirm('已重置用户' + row.realname + '的密码!', '提示', {})
          axios.get('http://192.168.40.205:13998/getAllUser?').then((data) => {
            this.tableData = data.data.data;
            this.loadAll();
          })
        });
      },
      FrozenUser(index, row) {
        // window.console.log(index, row.id);
        axios.get('http://192.168.40.205:13998/FrozenUser?id=' + row.id).then(() => {}).then(() => {
          this.$confirm('已冻结用户' + row.realname + '!', '提示', {})
          axios.get('http://192.168.40.205:13998/getAllUser?').then((data) => {
            this.tableData = data.data.data;
            this.loadAll();
          })
        });
      },
      ReUser(index, row) {
        // window.console.log(index, row.id);
        axios.get('http://192.168.40.205:13998/ReUser?id=' + row.id).then(() => {}).then(() => {
          this.$confirm('已恢复用户' + row.realname + '!', '提示', {})
          axios.get('http://192.168.40.205:13998/getAllUser?').then((data) => {
            this.tableData = data.data.data;
            this.loadAll();
          })
        });
      },
      // DeleteUser(index, row) {
      //   window.console.log(index, row.id);
      //   alert("冻结账户即可")
      //   axios.get('http://192.168.40.205:13998/DeleteUser?id=' + row.id).then(() => {}).then(() => {
      //     alert('已重置用户' + row.realname + '的密码!');
      //     axios.get('http://192.168.40.205:13998/getAllUser?').then((data) => {
      //       this.tableData = data.data.data;
      //       this.loadAll();
      //     })
      //   });
      // },

      loadAll() {
        axios.get('http://192.168.40.205:13998/getAllUser?').then((data) => {
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