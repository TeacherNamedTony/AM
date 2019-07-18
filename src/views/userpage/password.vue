<template>
    <div class="main">
        <el-alert title="修改密码后请牢记密码，需要重置密码请联络管理员。" type="success" :closable="false" show-icon close-text="知道了"></el-alert>
        <div class="body">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                class="changepassword-ruleForm">
                <el-form-item label="旧密码" prop="oldpass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newpass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="newpass0">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" round @click="submitForm('ruleForm')">提交</el-button>
                    <el-button type="primary" round @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    export default {
        data() {

            return {
                ruleForm: {

                },
            };
        },

    }
</script>
<style scoped>
    .main {
        width: 100%;
    }

    .body {
        width: 30%;
        margin-top: 2%;
        text-align:center;
    }

    /* .demo-ruleForm{
    text-align: center;
    align-self: center;
    align-content: center;
} */
</style>