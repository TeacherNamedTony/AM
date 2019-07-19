<template>
    <div class="app">
        <el-container>
            <el-aside class="app-side app-side-left" background-color="#545c64"
                :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'">
                <div class="app-side-logo" style="margin-top: 10%;">
                    <img src="@/assets/1.png" :width="isCollapse ? '60' : '60'" height="" />
                    <img src="@/assets/2.png" :width="isCollapse ? '60' : '60'" height="" />
                </div>
                <div>
                    <i class="paper-plane"></i>
                    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
                        <el-menu-item>
                            <li style="list-style-type:none;text-align:center ;">
                                <i class="el-icon-star-on"></i>
                                <i class="el-icon-star-on"></i>
                                <i class="el-icon-star-on"></i>
                                <i class="el-icon-star-on"></i>
                                <i class="el-icon-star-on"></i>
                            </li>
                        </el-menu-item>
                        <el-menu-item>
                            <li style="list-style-type:none;">
                                <i class="el-icon-s-custom"></i>用户姓名：{{user}}
                            </li>
                        </el-menu-item>
                        <el-menu-item>
                            <li style="list-style-type:none;">
                                <i class="el-icon-info"></i>用户类型：授权用户
                            </li>
                        </el-menu-item>
                        <el-menu-item>
                            <li style="list-style-type:none;">
                                <i class="el-icon-info"></i>单位所属：{{company}}
                            </li>
                        </el-menu-item>
                        <!-- <el-menu-item>
                            <li style="list-style-type:none;" >
                                <i class="el-icon-s-claim"></i>授权个数：9
                            </li>
                        </el-menu-item>
                        <el-menu-item>
                            <li style="list-style-type:none;">
                                <i class="el-icon-warning"></i>授权过期：2
                            </li>
                        </el-menu-item>
                        <el-menu-item>
                            <li style="list-style-type:none;">
                                <i class="el-icon-s-release"></i>撤销异常：1
                            </li>
                        </el-menu-item> -->
                    </el-menu>
                </div>
            </el-aside>
            <el-container>
                <el-header class="app-header">
                    <el-menu default-active="1" router class="el-menu-demo tab-page" mode="horizontal"
                        active-text-color="#409EFF">
                        <h1 style=" font-size: large;">{{user}}的授权申请中心</h1>
                    </el-menu>
                    <div class="app-header-userinfo">
                        <el-dropdown trigger="hover" :hide-on-click="false">
                            <span class="el-dropdown-link">
                                <img src="@/assets/user.png" :width="isCollapse ? '30' : '30'" height="30" />
                                {{username}}
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>我的消息</el-dropdown-item>
                                <!-- <el-dropdown-item divided @click='alertFunc(7)'>修改密码</el-dropdown-item> -->
                                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-header>
                <el-main class="app-body">
                    <template>
                        <div class="line"></div>
                        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" background-color="#25567B"
                            text-color="#fff" active-text-color="#ffd04b">
                            <el-menu-item @click='alertFunc(1)' index="1"><i style="color:#fff;"
                                    class="el-icon-chat-dot-square"></i>待审批
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(2)' index="2"><i style="color:#fff;"
                                    class="el-icon-document-add"></i><a>新建申请</a>
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(3)' index="3"><i style="color:#fff;"
                                    class="el-icon-circle-check"></i>已审批
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(4)' index="4"><i style="color:#fff;"
                                    class="el-icon-warning-outline"></i>授权过期
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(5)' index="5"><i style="color:#fff;"
                                    class="el-icon-circle-close"></i>授权撤销
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(6)' index="6"><i style="color:red;"
                                    class="el-icon-s-flag"></i>授权即将过期
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(7)' index="7"><i style="color:#fff;"
                                    class="el-icon-house"></i>个人中心
                            </el-menu-item>
                        </el-menu>
                        <div class="ajaxpage">
                            <Untreated v-if="itemIndex==1"></Untreated>
                            <NewApply v-if="itemIndex==2"></NewApply>
                            <Audited v-if="itemIndex==3"></Audited>
                            <Overdue v-if="itemIndex==4"></Overdue>
                            <Revoke v-if="itemIndex==5"></Revoke>
                            <NearOverdue v-if="itemIndex==6"></NearOverdue>
                            <Password v-if="itemIndex==7"></Password>
                        </div>
                    </template>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Untreated from '@/views/untreated/untreated_user.vue'
    import NewApply from '@/views/newapply/newapply_user.vue'
    import Audited from '@/views/audited/audited_user'
    import NearOverdue from '@/views/nearoverdue/nearoverdue_user.vue'
    import Overdue from '@/views/overdue/overdue-user.vue'
    import Revoke from '@/views/revoke/revoke_user.vue'
    import Password from '@/views/userpage/password.vue'
    
    export default {
        name: 'UserContainer',
        components: {
            'Untreated': Untreated,
            'NewApply': NewApply,
            'Audited': Audited,
            'NearOverdue': NearOverdue,
            'Overdue': Overdue,
            'Revoke': Revoke,
            'Password':Password,
        },
        data() {
            return {
                itemIndex: 1,
                username: '',
                id: '',
                user:'',
                company:'',
                isCollapse: false
            }
        },
        methods: {
            alertFunc(index) {
                this.itemIndex = index;
                // alert(index)
            },
            logout: function () {
                this.$confirm('确认退出?', '提示', {})
                    .then(() => {
                        sessionStorage.removeItem('user');
                        this.$router.push('/login');
                    })
                    .catch(() => {});
            },
        },
        mounted: function () {
            var user = sessionStorage.getItem('user');
            var id = sessionStorage.getItem('id');
            var username = sessionStorage.getItem('username');
            var company = sessionStorage.getItem('company');
            if (user) {
                this.user = user;
                this.username = username;
                this.id = id;
                this.company = company;
            }
        },
    }
</script>

<style scoped>
    a:link {
        text-decoration: none;
    }

    /* .app-header{
    background-color: rgb(37,42,47)
}
.el-menu-vertical-demo {
    background-color: rgb(37,42,47)
} */
    .asidecircle {
        margin-top: 20%;
        text-align: center
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }

    .app-side-left {
        background-color: #fff;
    }

    /* .app-side-expanded {
        width: 12% !important;
    } */
    .el-icon-star-on {
        color: #ffd04b;
    }
</style>