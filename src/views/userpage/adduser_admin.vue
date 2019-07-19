<template>
  <el-container>
    <el-main>
      <el-alert title="温馨提示：新建用户默认为普通用户，如需申请管理员账户请联系平台。" type="success" :closable="false" show-icon close-text="知道了">
      </el-alert>
      <div class="body">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>

          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="ruleForm.realname"></el-input>
          </el-form-item>

          <el-form-item label="公司" prop="company">
            <el-input v-model="ruleForm.company"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" round @click="submitForm('ruleForm')">添加</el-button>
            <el-button type="primary" round @click="resetForm('ruleForm')">重置</el-button>
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
      return {
        ruleForm: {
          username: '',
          realname: '',
          company: '',
        },
        rules: {
          username: [{
              required: true,
              message: '请输入登陆用户名',
              trigger: 'blur'
            },
            {
              min: 2,
              max: 8,
              message: '长度在 2 到 8 个字符',
              trigger: 'blur'
            }
          ],
          realname: [{
              required: true,
              message: '请输入用户真实姓名',
              trigger: 'blur'
            },
            {
              min: 2,
              max: 5,
              message: '长度在 2 到 5 个字符',
              trigger: 'blur'
            }
          ],
          company: [{
              required: true,
              message: '请输入用户所属公司',
              trigger: 'blur'
            },
            {
              min: 2,
              max: 15,
              message: '长度在 2 到 15 个字符',
              trigger: 'blur'
            }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$confirm('正在创建用户' + this.ruleForm.realname + '!', '提示', {})
            axios.get('http://192.168.17.73:8088/addUser?' +
              'username=' + this.ruleForm.username +
              '&realname=' + this.ruleForm.realname +
              '&company=' + this.ruleForm.company).then(() => {
              this.$confirm('创建用户' + this.ruleForm.realname + '成功', '提示', {})
                .then(() => {
                  this.$refs[formName].resetFields();
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
  }
</script>
<style scoped>
  .body {
    text-align: center;
    width: 30%
  }
</style>