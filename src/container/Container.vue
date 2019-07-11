<template>
    <div class="app">
        <el-container>
            <el-aside class="app-side app-side-left" :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'">
                <div class="app-side-logo">
                    <img src="@/assets/timg.png" :width="isCollapse ? '60' : '60'" height="60" />
                </div>
                <div style="margin-top: 10%;">
                    <i class="paper-plane"></i>
                    <el-menu class="el-menu-vertical-demo" @open="handleOpen" :collapse="isCollapse">
                        <el-menu-item>
                            <li style="list-style-type:none;text-align:center ;">
                                <i class="el-icon-star-on"></i>
                                <i class="el-icon-star-on"></i> 
                                <i class="el-icon-star-on"></i>
                            </li>
                        </el-menu-item>
                        <el-menu-item>
                            <li style="list-style-type:none;">
                                <i class="el-icon-s-custom"></i>用户类型：授权人
                            </li>
                        </el-menu-item>
                        <el-menu-item>
                            <li style="list-style-type:none;">
                                <i class="el-icon-info"></i>单位：中软系统
                            </li>
                        </el-menu-item>
                        <el-menu-item>
                            <li style="list-style-type:none;">
                                <i class="el-icon-s-claim"></i>授权个数：*
                            </li>
                        </el-menu-item>
                        <el-menu-item>
                            <li style="list-style-type:none;">
                                <i class="el-icon-warning"></i>即将到期：*
                            </li>
                        </el-menu-item>
                        <el-menu-item>
                            <li style="list-style-type:none;">
                                <i class="el-icon-s-release"></i>异常个数：*
                            </li>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-aside>
            <el-container>
                <el-header class="app-header">

                    <div style="width: 60px; cursor: pointer;" @click.prevent="toggleSideBar">
                        <!-- <i v-show="!isCollapse" class="el-icon-s-fold"></i>
                        <i v-show="isCollapse" class="el-icon-s-unfold"></i> -->
                    </div>
                    <el-menu default-active="/" router class="el-menu-demo tab-page" mode="horizontal"
                        @select="handleSelect" active-text-color="#409EFF">
                        <h1 style=" font-size: large;">授权管理中心</h1>
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
                                <el-dropdown-item>修改密码</el-dropdown-item>
                                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-header>

                <el-main class="app-body">
                    <template>
                        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                            background-color="#009999" text-color="#fff" active-text-color="#ffd04b">
                            <el-menu-item @click='alertFunc(1)' index="1"><i style="color:#fff;"
                                    class="el-icon-loading"></i>待授权
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(2)' index="2"><i style="color:#fff;"
                                    class="el-icon-circle-check"></i>已授权
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(3)' index="3"><i style="color:#fff;"
                                    class="el-icon-warning-outline"></i>授权过期
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(4)' index="4"><i style="color:#fff;"
                                    class="el-icon-circle-close"></i>授权撤销
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(5)' index="5"><i style="color:red;"
                                    class="el-icon-message-solid"></i>授权即将过期
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(6)' index="6"><i style="color:#fff;"
                                    class="el-icon-aim"></i>追中授权情况
                            </el-menu-item>
                        </el-menu>
                        <div class="ajaxpage">
                            <Untreated v-if="itemIndex==1"></Untreated>
                            <Audited v-if="itemIndex==2"></Audited>
                            <Overdue v-if="itemIndex==3"></Overdue>
                            <Revoke v-if="itemIndex==4"></Revoke>
                            <NearOverdue v-if="itemIndex==5"></NearOverdue>
                            <Select v-if="itemIndex==6"></Select>
                        </div>
                    </template>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Untreated from '@/views/untreated/index.vue'
    import Audited from '@/views/audited/index.vue'
    import Overdue from '@/views/overdue/index.vue'
    import Revoke from '@/views/revoke/index.vue'
    import NearOverdue from '@/views/nearoverdue/index.vue'
    import Select from '@/views/newapply/select.vue'

    export default {
        name: 'Container',
        components: {
            'Untreated': Untreated,
            'Audited': Audited,
            'NearOverdue': NearOverdue,
            'Overdue': Overdue,
            'Revoke': Revoke,
            'Select': Select,
        },

        data() {
            return {
                itemIndex: 1,
                username: '',
                isCollapse: false
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
            handleOpen(key, keyPath) {
                window.console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                window.console.log(key, keyPath);
            },
            handleSelect(key, keyPath) {
                window.console.log(key, keyPath);
            },
        },
        mounted: function () {
            let user = sessionStorage.getItem('user');
            if (user) {
                this.username = user;
            }
        },
    }
</script>

<style scoped>
    .app-side-left {
        background-color: #fff;
    }
</style>