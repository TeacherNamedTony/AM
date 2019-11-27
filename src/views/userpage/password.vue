<template>
    <el-container>
        <el-main>
            <el-alert title="温馨提示：修改密码后请牢记，如需重置密码请联络系统管理员。" type="success" :closable="false" show-icon close-text="知道了">
            </el-alert>
            <div class="body">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                    class="demo-ruleForm">

                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" round @click="submitForm('ruleForm')">重置密码</el-button>
                        <el-button type="primary" round @click="resetForm('ruleForm')">清空表格</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-main>
    </el-container>


</template>

<script>
    import axios from 'axios';
    export default {
        data() {

            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    checkPass: '',
                },
                rules: {
                    pass: [{
                        validator: validatePass,
                        trigger: 'blur'
                    }],
                    checkPass: [{
                        validator: validatePass2,
                        trigger: 'blur'
                    }],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$confirm('密码修改成功!', '提示', {})
                        axios.get(g.apiUrl+'/changePassword/' + this.ruleForm.pass + '?id=' +
                            this.id).then(() => {
                            this.$confirm('您的密码已修改，请重新登录', '提示', {})
                                .then(() => {
                                    sessionStorage.removeItem('user');
                                    this.$router.push('/login');
                                })
                                .catch(() => {});
                        })
                    } else {
                        window.console.log('错误的提交!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        mounted() {
            var user = sessionStorage.getItem('user');
            var id = sessionStorage.getItem('id');
            if (user) {
                this.username = user;
                this.id = id;
            }
        },

    }
</script>
<style scoped>
    .body {
        text-align: center;
        width: 30%
    }
</style>