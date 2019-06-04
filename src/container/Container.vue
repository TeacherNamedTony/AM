<template>
    <div class="app">
        <el-container>
            <el-aside class="app-side app-side-left" :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'">
                <div class="app-side-logo">
                    <img src="@/assets/timg.png" :width="isCollapse ? '60' : '60'" height="60" />
                </div>
                <div style="margin-top: 3%;">
                    <el-menu :default-active="defaultActive" router class="el-menu-vertical-demo" @open="handleOpen"
                        :collapse="isCollapse">
                        <!-- <template v-for="route in $router.options.routes" 
                        v-if="route.children && route.children.length"> -->
                        <template v-for="route in $router.options.routes">
                            <template v-for="item in route.children">
                                <el-menu-item :key="route.path + '/' + item.path" :index="item.path">
                                    <span slot="title"><i class="el-icon-document"></i>{{ item.name }}</span>
                                </el-menu-item>
                            </template>
                        </template>
                    </el-menu>
                </div>
            </el-aside>
            <el-container>
                <el-header class="app-header">
                    
                    <div style="width: 60px; cursor: pointer;" @click.prevent="toggleSideBar">

                        <i v-show="!isCollapse" class="el-icon-s-fold"></i>
                        <i v-show="isCollapse" class="el-icon-s-unfold"></i>
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
                                <el-dropdown-item>设置</el-dropdown-item>
                                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-header>

                <el-main class="app-body">
                    <template>
                        
                        <router-view />
                    </template>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'Container',

        data() {
            return {
                username: '',
                isCollapse: false
            }
        },
        methods: {
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