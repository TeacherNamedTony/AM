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
        <el-table-column prop="applyername" label="申请人员" width="100">
        </el-table-column>
        <el-table-column prop="projectname" label="项目名称" width="230">
        </el-table-column>
        <el-table-column prop="stopdate" label="剩余授权时长" width="120" >
        </el-table-column>
        <el-table-column prop="address" label="所属单位" width="">
        </el-table-column>
        <el-table-column prop="passername" label="审核人" width="200">
        </el-table-column>
        <el-table-column prop="look" label=" " width="180">
          <el-button type="warning" @click="repass">申请重新重新授权</el-button>
        </el-table-column>

      </el-table>
  
    </el-main>
    <el-pagination class="fenye" background layout="prev, pager, next" :total="100">
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
  export default {
    data() {
      const item = {
        date: '2019-05-06',
        applyername: '托尼老师',
        stopdate: '15天',
        projectname: '厂商授权系统-测试显示适配情况',
        address: '中软信息系统工程有限公司',
        passername:'斯达克',
      };
      return {
        tableData: Array(6).fill(item),
        restaurants: [],
        state: '',
        timeout: null
      }
    },
    methods: {
      repass() {
        this.$confirm('申请授权三个月', '', {})
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
    },
  };
</script>