<template>
  <el-container>
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
        <el-table-column prop="stopdate" label="申请时长" width="180">
        </el-table-column>
        <el-table-column prop="address" label="所属单位" width="">
        </el-table-column>
        <el-table-column prop="passername" label="审核人" width="200">
        </el-table-column>
        <el-table-column prop="look" label=" " width="180">
          <el-button type="danger" @click="dialogTableVisible = true">查看详情</el-button>
              <el-dialog title="#" :visible.sync="dialogTableVisible">
          <ApplyPage></ApplyPage>

          </el-dialog>
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
    import ApplyPage from '@/views/applypage/index.vue'
  export default {
          components: {
        'ApplyPage': ApplyPage,
      },
    data() {
      const item = {
        date: '2019-05-06',
        applyername: '托尼老师',
        stopdate: '2019-05-01' + '~' + '2019-06-31',
        projectname: '厂商授权系统-测试显示适配情况',
        address: '中软信息系统工程有限公司',
        passername: '斯达克',
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
      passnow() {
        this.$confirm('授权成功', '提示', {})
      },
      lookapply() {
        this.$router.push({
          path: '/applypage'
        });
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
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
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