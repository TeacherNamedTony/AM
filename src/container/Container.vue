<template>
    <div class="app">
        <el-container>
            <el-aside class="app-side app-side-left" :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'">
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
                                <i class="el-icon-info"></i>用户类型：授权管理员
                            </li>
                        </el-menu-item>
                        <el-menu-item>
                            <li style="list-style-type:none;">
                                <i class="el-icon-info"></i>单位所属：{{company}}
                            </li>
                        </el-menu-item>
                        <!-- <div class="block">
                            <el-timeline>
                                <el-timeline-item v-for="(activity, index) in activities" :key="index"
                                    :icon="activity.icon" :type="activity.type" :color="activity.color"
                                    :size="activity.size" :timestamp="activity.timestamp">
                                    {{activity.content}}
                                </el-timeline-item>
                            </el-timeline>
                        </div> -->
                        <!-- <el-menu-item>
                            <li style="list-style-type:none;">
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
                        <h1 style=" font-size: large;">{{user}}的授权管理中心</h1>

                    </el-menu>
                    <div class="app-header-userinfo">
                        <el-dropdown trigger="hover" :hide-on-click="false">
                            <span class="el-dropdown-link">
                                <img src="@/assets/user.png" :width="isCollapse ? '30' : '30'" height="30" />
                                {{ username }}
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>我的消息</el-dropdown-item>
                                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-header>
                <el-main class="app-body">
                    <template>
                        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" background-color="#009999"
                            text-color="#fff" active-text-color="#ffd04b">
                            <el-menu-item @click='alertFunc(1)' index="1"><i style="color:#fff;"
                                    class="el-icon-chat-dot-square"></i>待审批
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(2)' index="2"><i style="color:#fff;"
                                    class="el-icon-circle-check"></i>已审批
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(3)' index="3"><i style="color:#fff;"
                                    class="el-icon-warning-outline"></i>授权过期
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(4)' index="4"><i style="color:#fff;"
                                    class="el-icon-circle-close"></i>授权撤销
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(5)' index="5"><i style="color:red;"
                                    class="el-icon-s-flag"></i>授权即将过期
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(6)' index="6"><i style="color:#fff;"
                                    class="el-icon-aim"></i>追中授权情况
                            </el-menu-item>
                            <el-submenu index="7">
                                <template slot="title"><i class="el-icon-user" style="color:#fff;"></i>用户中心</template>
                                <el-menu-item @click='alertFunc(7.1)' index="7.1">新增用户</el-menu-item>
                                <el-menu-item @click='alertFunc(7.2)' index="7.2">用户管理</el-menu-item>
                            </el-submenu>
                            <el-menu-item @click='alertFunc(8)' index="8"><i style="color:#fff;"
                                    class="el-icon-house"></i>个人中心
                            </el-menu-item>
                        </el-menu>
                        <div class="ajaxpage">
                            <Untreated v-if="itemIndex==1"></Untreated>
                            <Audited v-if="itemIndex==2"></Audited>
                            <Overdue v-if="itemIndex==3"></Overdue>
                            <Revoke v-if="itemIndex==4"></Revoke>
                            <NearOverdue v-if="itemIndex==5"></NearOverdue>
                            <Select v-if="itemIndex==6"></Select>
                            <AddUser v-if="itemIndex==7.1"></AddUser>
                            <Userpage v-if="itemIndex==7.2"></Userpage>
                            <Password v-if="itemIndex==8"></Password>
                        </div>
                    </template>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Untreated from '@/views/untreated/untreated_admin.vue'
    import Audited from '@/views/audited/audited_admin.vue'
    import Overdue from '@/views/overdue/overdue_admin.vue'
    import Revoke from '@/views/revoke/revoke_admin.vue'
    import NearOverdue from '@/views/nearoverdue/nearoverdue_admin.vue'
    import Select from '@/views/aim/aim_admin.vue'
    import Userpage from '@/views/userpage/userpage_admin.vue'
    import AddUser from '@/views/userpage/adduser_admin.vue'
    import Password from '@/views/userpage/password.vue'


    export default {
        name: 'Container',
        components: {
            'Untreated': Untreated,
            'Audited': Audited,
            'NearOverdue': NearOverdue,
            'Overdue': Overdue,
            'Revoke': Revoke,
            'Select': Select,
            'Userpage': Userpage,
            'Password': Password,
            'AddUser': AddUser,
        },

        data() {
            return {
                itemIndex: 1,
                username: '',
                id: '',
                user: '',
                company: '',
                isCollapse: false,
                // activities: [{
                //     content: '支持使用图标',
                //     timestamp: '2018-04-12 20:46',
                //     size: 'large',
                //     type: 'primary',
                //     icon: 'el-icon-more'
                // }, {
                //     content: '支持自定义颜色',
                //     timestamp: '2018-04-03 20:46',
                //     color: '#0bbd87'
                // }, {
                //     content: '支持自定义尺寸',
                //     timestamp: '2018-04-03 20:46',
                //     size: 'large'
                // }, {
                //     content: '默认样式的节点',
                //     timestamp: '2018-04-03 20:46'
                // }]

            }
        },
        methods: {
            alertFunc(index) {
                this.itemIndex = index;
                // alert(index)
            },
            toggleSideBar() {
                this.isCollapse = !this.isCollapse
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
    .app-side-left {
        background-color: #fff;
    }

    .el-icon-star-on {
        color: #ffd04b;
    }
</style>