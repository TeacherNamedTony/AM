<template>

    <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">

        <el-table-column label="授权时间" prop="date">
        </el-table-column>
        <el-table-column label="授权码" prop="name">
        </el-table-column>
        <el-table-column label="机器码" prop="code">
        </el-table-column>
        <el-table-column align="center">
            <template slot="header" slot-scope="scope">
                <el-input v-model="search" size="max" placeholder="输入授权码追踪授权信息" />
            </template>
            <template slot-scope="scope">
                <el-button size="max" type="info" round="" @click="handleEdit(scope.$index, scope.row)">查看授权</el-button>
                <el-button size="max" type="danger" round="" @click="handleDelete(scope.$index, scope.row)">撤销授权</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    code: 'sugoSvig3SYQo5xdrUlyqvAgGLtH9v98wfUSc4vl2BoA',
                    name: 'ZEaL0ReD1ilqCUdMWlBKcMq48me201i6EllABjywhyICzjlV3M3UgoBOYfJ0NP4+fJ8bjQAW8US5XBhWSAuXvnINnLYNxnCMxIGYc2gEivtqpWNjdh4tnhwvZhoyd7PIyfpydDX/fZx/DH0+weEkEW3m0b4ox0tAK1pcEm9VDtI='
                }, {
                    date: '2016-05-04',
                    code: '2',
                    name: 'ZEaL0ReD1ilqCUdMWlBKcMq48me201i6EllABjywhyICzjlV3M3UgoBOYfJ0NP4+fJ8bjQAW8US5XBhWSAuXvnINnLYNxnCMxIGYc2gEivtqpWNjdh4tnhwvZhoyd7PIyfpydDX/fZx/DH0+weEkEW3m0b4ox0tAK1pcEm9VDtI='
                }, {
                    date: '2016-05-01',
                    code: '3',
                    name: '123'
                }, {
                    date: '2016-05-03',
                    code: '4',
                    name: '321'
                }],
                search: ''
            }
        },
        methods: {
            handleEdit(index, row) {
                window.console.log(index, row);
            },
            handleDelete(index, row) {
                window.console.log(index, row);
            }
        },
    }
</script>
<style scoped>
    .el-button--info {
      background-color: #33CCCC;
      border-color: white;
    }
</style>
