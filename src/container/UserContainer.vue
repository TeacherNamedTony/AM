<template>
    <div class="app">
        <el-container>
            <el-aside class="app-side app-side-left" background-color="#545c64"
                :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'">
                <div class="app-side-logo">
                    <img src="@/assets/timg.png" :width="isCollapse ? '60' : '60'" height="60" />
                </div>
                <div style="margin-top: 10%;">
                    <i class="paper-plane"></i>
                    <el-menu class="el-menu-vertical-demo" @open="handleOpen" :collapse="isCollapse">
                        <el-menu-item>
                            <li style="list-style-type:none;">
                                <i class="el-icon-s-custom"></i>姓名：张三
                            </li>
                        </el-menu-item>
                        <el-menu-item>
                            <li style="list-style-type:none;">
                                <i class="el-icon-info"></i>单位：中软信息
                            </li>
                        </el-menu-item>
                        <el-menu-item>
                            <li style="list-style-type:none;">
                                <i class="el-icon-s-data"></i>授权个数：4
                            </li>
                        </el-menu-item>
                        <el-menu-item>
                            <li style="list-style-type:none;">
                                <i class="el-icon-warning"></i>即将到期：0
                            </li>
                        </el-menu-item>
                        <el-menu-item>
                            <li style="list-style-type:none;">
                                <i class="el-icon-error"></i>注销个数：0
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
                        <h1 style=" font-size: large;">授权申请中心</h1>
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
                                <el-dropdown-item>设置</el-dropdown-item>
                                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-header>
                <el-main class="app-body">
                    <template>
                        <div class="line"></div>
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                            @select="handleSelect" background-color="#545c64" text-color="#fff"
                            active-text-color="#ffd04b">
                            <el-menu-item @click='alertFunc(1)' index="1"><i class="el-icon-s-promotion"></i>待授权
                            </el-menu-item>
                            <!-- <el-menu-item @click='alertFunc(2)' index="2"><i class="el-icon-s-order"></i><a>新建申请</a>
                            </el-menu-item> -->
                            <el-menu-item @click='alertFunc(2)' index="2"><i class="el-icon-s-order"></i><a>新建申请</a>
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(3)' index="3"><i class="el-icon-s-claim"></i>已授权
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(4)' index="4"><i class="el-icon-s-release"></i>授权过期
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(5)' index="5"><i class="el-icon-s-release"></i>授权异常
                            </el-menu-item>
                            <el-menu-item @click='alertFunc(6)' index="6"><i class="el-icon-warning"></i>授权即将过期
                            </el-menu-item>
                            <!-- <el-menu-item @click='alertFunc(6)' index="6" disabled><i class="el-icon-s-home"></i>个人中心
                            </el-menu-item> -->
                            <!-- <el-menu-item @click='alertFunc(7)' index="7" disabled><i
                                    class="el-icon-message-solid"></i>消息中心
                            </el-menu-item> -->
                        </el-menu>
                        <div class="ajaxpage">
                            <Untreated v-if="itemIndex==1"></Untreated>
                            <NewApply v-if="itemIndex==2"></NewApply>
                            <Audited v-if="itemIndex==3"></Audited>
                            <Overdue v-if="itemIndex==4"></Overdue>
                            <Revoke v-if="itemIndex==5"></Revoke>
                            <NearOverdue v-if="itemIndex==6"></NearOverdue>
                        </div>
                    </template>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Untreated from '@/views/untreated/index1.vue'

    import NewApply from '@/views/newapply/index1.vue'

    import Audited from '@/views/audited/index1.vue'

    import NearOverdue from '@/views/nearoverdue/index1.vue'

    import Overdue from '@/views/overdue/index1.vue'

    import Revoke from '@/views/revoke/index1.vue'


    export default {
        name: 'UserContainer',
        components: {
            'Untreated': Untreated,
            'NewApply': NewApply,
            'Audited': Audited,
            'NearOverdue': NearOverdue,
            'Overdue': Overdue,
            'Revoke': Revoke,
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

    .app-side-expanded {
        /* width: 12% !important; */
    }
</style>