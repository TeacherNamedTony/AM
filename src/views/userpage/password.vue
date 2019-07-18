<template>
    <el-container>

        <el-main>
            <el-alert title="修改密码后请牢记密码，需要重置密码请联络管理员。" type="success" :closable="false" show-icon close-text="知道了">
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
                        <el-button type="primary" round @click="submitForm('ruleForm')">提交</el-button>
                        <el-button type="primary" round @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-main>
    </el-container>


</template>

<script>
    export default {
        data() {
            // var checkoldpass = (rule, value, callback) => {
            //     if (!value) {
            //         return callback(new Error('旧密码不能为空'));
            //     }
            //     setTimeout(() => {
            //         if (false) {
            //             callback(new Error('请输入正确旧密码'));
            //         } 
            //     }, 1000);
            // };
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
                        alert('submit!');
                    } else {
                        window.console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style scoped>
.body{
    width: 30%
}
</style>