<template>
    <div class="login-container">
        <el-form :model="ruleForm2" :rules="rules2" status-icon ref="ruleForm2" label-position="left" label-width="0px"
            class="demo-ruleForm login-page">
            <h3 class="title">授权系统系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text" @keyup.enter.native="handleSubmit" v-model="ruleForm2.username"
                    auto-complete="off" placeholder="用户名">
                    <template slot="prepend"><span class="fa fa-user fa-lg" style="width: 13px"></span>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" @keyup.enter.native="handleSubmit" v-model="ruleForm2.password"
                    auto-complete="off" placeholder="密码">
                    <template slot="prepend"><span class="fa fa-lock fa-lg" style="width: 13px"></span>
                    </template>
                </el-input>
            </el-form-item>
            <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import $ from 'jquery'
    import axios from 'axios';

    export default {
        data() {
            return {
                logining: false,
                ruleForm2: {
                    username: '',
                    password: '',
                },
                rules2: {
                    username: [{
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }]
                },
                checked: false
            }
        },
        created: function () {
            window.console.log($('#app'));
        },
        methods: {
            handleSubmit() {
                this.$refs.ruleForm2.validate((valid) => {
                    if (valid) {
                        this.logining = true;
                        axios.get('http://192.168.17.73:8088/login?username=' + this.ruleForm2.username +
                            '&password=' + this.ruleForm2.password).then((data) => {
                            if (data.data.data != null) {
                                if (data.data.data.isadmin == 1 && data.data.data.isdel == 0) {
                                    sessionStorage.setItem('username', data.data.data.username);
                                    sessionStorage.setItem('company', data.data.data.company);
                                    sessionStorage.setItem('user', data.data.data.realname);
                                    sessionStorage.setItem('id', data.data.data.id);
                                    this.$router.push({
                                        path: '/user'
                                    });
                                } else if (data.data.data.isadmin == 0 && data.data.data.isdel == 0) {
                                    sessionStorage.setItem('username', data.data.data.username);
                                    sessionStorage.setItem('company', data.data.data.company);
                                    sessionStorage.setItem('user', data.data.data.realname);
                                    sessionStorage.setItem('id', data.data.data.id);
                                    this.$router.push({
                                        path: '/admin'
                                    });
                                } else if (data.data.data.isdel == 1) {
                                    location.reload()
                                    alert('您的账户以及被冻结，请联系管理员恢复！')
                                    // this.$confirm('您的账户以及被冻结，请联系管理员恢复！', '提示', {})
                                    return false;
                                }
                            } else {
                                location.reload()
                                alert('用户名或密码错误!请重新登录！')
                                // this.$confirm('用户名或密码错误!请重新登录！', '提示', {})
                                return false;
                            }
                        })
                    }
                })
            }
        }
    };
</script>

<style scoped>
    .login-container {
        width: 100%;
        height: 100%;
        background: url("../assets/bg.jpg") repeat;
    }

    .login-page {
        width: 20%;
        margin: -200px 0 0 -250px;
        position: absolute;
        top: 40%;
        left: 50%;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        padding: 35px 35px 15px;
        background: #ffffff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    label.el-checkbox.rememberme {
        margin: 0px 0px 15px;
        text-align: center;
    }
</style>

// this.logining = true;
// if (this.ruleForm2.username === 'admin' &&
// this.ruleForm2.password === '1') {
// this.logining = false;
// sessionStorage.setItem('user', this.ruleForm2.username);
// this.$router.push({
// path: '/'
// });
// } else if (this.ruleForm2.username === 'user' &&
// this.ruleForm2.password === '1') {
// this.logining = false;
// sessionStorage.setItem('user', this.ruleForm2.username);
// this.$router.push({
// path: '/user'
// })
// }