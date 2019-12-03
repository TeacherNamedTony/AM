<template>
    <el-container>
        <el-main>
            <el-alert title="您可以输入授权码信息反向追踪授权情况，搜索模式支持模糊搜索。" type="info" show-icon close-text="知道了"></el-alert>
            <el-table
                :data="tableData.filter(data => !search || data.license.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
                <el-table-column label="授权时间" prop="grantdate" width="100">
                </el-table-column>
                <el-table-column label="项目名称" prop="applyDetail.project" width="120">
                </el-table-column>
                <el-table-column label="授权状态" width="100">
                    <template slot-scope="scope">
                        <p v-if="scope.row.isgrant==0">未审批</p>
                        <p v-if="scope.row.isgrant==1">已审批</p>
                        <p v-if="scope.row.isgrant==2">授权到期</p>
                        <p v-if="scope.row.isgrant==3">授权撤销</p>
                    </template>
                </el-table-column>
                <el-table-column label="授权码" prop="license">
                </el-table-column>
                <el-table-column label="机器码" prop="applyDetail.machinenum">
                </el-table-column>
                <el-table-column>
                    <template slot="header" slot-scope="scope">
                        <el-input v-model="search" size="max" placeholder="授权码以追踪授权信息" />
                    </template>
                    <template slot-scope="scope">
                        <el-button size="max" type="info" round="" @click="changeDialog(scope.row)">授权信息
                        </el-button>
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
                dialogTableVisible: false,
                tableData: [],
                dialogData: ''
            }
        },
        methods: {
            loadAll() {
                axios.get(g.apiUrl + '/getAllState?').then((data) => {
                    this.tableData = data.data.data;
                })
            },
            changeDialog(params) {
                this.dialogData = params.applyDetail;
                this.dialogTableVisible = true;
            },
        },
        mounted() {
            this.loadAll();
        },
    }
</script>
<style scoped>
    .fenye {
        text-align: center;
        margin-top: 2%
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