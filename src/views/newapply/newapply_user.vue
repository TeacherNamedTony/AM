<template>

  <el-form :model="applyForm" :inline="true" :rules="rules" ref="applyForm" label-width="200px" class="applyForm">
    <br>
    <el-alert title="请严格按照输入框提示键入内容，否则授权码无效。" type="info" show-icon close-text="知道了"></el-alert>
    <br>
    <div style="text-align: center;">
      <span style='font-size:20.0pt;font-family:黑体;color:black'><i class="el-icon-edit-outline"></i>授权审批单</span>
    </div>
    <br>
    <el-divider content-position="center">基本信息</el-divider>
    <br>
    <el-form-item label="项目名称/标识" prop="project">
      <el-input v-model="applyForm.project" style="width: 100%;border-color: #394956;}" placeholder="项目名称/标识">
      </el-input>
    </el-form-item>
    <el-form-item label="申请人" prop="applyername">
      <el-input v-model="applyForm.applyername" style="width: 100%;" placeholder="申请人"></el-input>
    </el-form-item>
    <br>
    <el-form-item label="授权软件名称" prop="softwwarename">
      <el-input v-model="applyForm.softwarename" style="width: 100%;" placeholder="授权软件名称"></el-input>
    </el-form-item>
    <el-form-item label="申请时间" required>
      <el-col :span="11">
        <el-form-item prop="applydate">
          <el-date-picker type="date" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" placeholder="选择申请时间"
            v-model="applyForm.applydate" default-time=" " style="width: 200%;">
          </el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>


    <el-divider content-position="center">申请及用户信息</el-divider>
    <br>
    <el-form-item label="授权申请人" prop="applyername">
      <el-input v-model="applyForm.applyername" style="width: 100%;" placeholder="授权申请人"></el-input>
    </el-form-item>
    <el-form-item label="授权申请人联系方式" prop="applyertel">
      <el-input v-model="applyForm.applyertel" style="width: 100%;" placeholder="授权申请人联系方式"></el-input>
    </el-form-item>
    <br>

    <el-form-item label="授权用户" prop="grantuser">
      <el-input v-model="applyForm.grantuser" style="width: 100%;" placeholder="授权用户"></el-input>
    </el-form-item>
    <el-form-item label="授权用户联系人" prop="grantuserperson">
      <el-input v-model="applyForm.grantuserperson" style="width: 100%;" placeholder="授权用户联系人"></el-input>
    </el-form-item>
    <el-form-item label="授权用户联系方式" prop="grantuserpersontel">
      <el-input v-model="applyForm.grantuserpersontel" style="width: 100%;" placeholder="授权用户联系方式"></el-input>
    </el-form-item>


    <el-divider content-position="center">设备信息</el-divider>
    <br>
    <el-form-item label="部署类型" prop="deploymenttype">
      <el-select v-model="applyForm.deploymenttype" placeholder="请选择部署类型" style="width:93%;">
        <el-option label="物理机" value="物理机"></el-option>
        <el-option label="单控云" value="单控云"></el-option>
        <el-option label="三控云" value="三控云"></el-option>
      </el-select>
    </el-form-item>
    <!-- <el-form-item label="部署类型" prop="deploymenttype">
      <el-input v-model="applyForm.deploymenttype" style="width: 100%;" placeholder="物理机/单控云/三控云"></el-input>
    </el-form-item> -->
    <!-- <el-form-item label="授权类型" prop="granttype">
      <el-input v-model="applyForm.granttype" style="width: 100%;" placeholder="开发测试/正式运行"></el-input>
    </el-form-item> -->
    <el-form-item label="机器设备码" prop="machinenum">
      <el-input v-model="applyForm.machinenum" style="width: 100%;" placeholder="请输入机器设备码"></el-input>
    </el-form-item>
    <el-form-item label="授权服务器型号" prop="servertype">
      <el-input v-model="applyForm.servertype" style="width: 100%;" placeholder="授权服务器型号"></el-input>
    </el-form-item>
    <br>


    <el-form-item label="授权类型" prop="granttype">
      <el-select v-model="applyForm.granttype" placeholder="请选择授权类型" style="width: 93%;">
        <el-option label="开发测试授权" value="开发测试授权"></el-option>
        <el-option label="正式运行授权" value="正式运行授权"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="授权服务器OS" prop="serveros">
      <el-input v-model="applyForm.serveros" style="width: 100%;" placeholder="授权服务器OS"></el-input>
    </el-form-item>
    <el-form-item label="授权服务器IP" prop="serverip">
      <el-input v-model="applyForm.serverip" style="width: 100%;" placeholder="授权服务器IP"></el-input>
    </el-form-item>


    <el-divider content-position="center">版本信息</el-divider>
    <br>
    <el-form-item label="平台产品版本" prop="productversion">
      <el-input v-model="applyForm.productversion" style="width: 100%;" placeholder="四位格式：0.0.8.1"></el-input>
    </el-form-item>
    <el-form-item label="授权文件版本" prop="grantfiletype">
      <el-input v-model="applyForm.grantfiletype" style="width: 100%;" placeholder="授权文件版本"></el-input>
    </el-form-item>

    <el-divider content-position="center">授权信息</el-divider>
    <br>
    <el-form-item label="微服务-服务用户量" prop="usernum">
      <el-input v-model.number="applyForm.usernum" style="width: 100%;" placeholder="微服务-服务用户量"></el-input>
    </el-form-item>
    <el-form-item label="容器云-控制节点数量" prop="controlnum">
      <el-input v-model.number="applyForm.controlnum" style="width: 100%;" placeholder="容器云-控制节点数量"></el-input>
    </el-form-item>
    <el-form-item label="容器云-计算节点数量" prop="computenum">
      <el-input v-model.numberl="applyForm.computenum" style="width: 100%;" placeholder="容器云-计算节点数量"></el-input>
    </el-form-item>
    <br>


    <el-form-item label="应用商店-实例数" prop="shopinstancenum">
      <el-input v-model.number="applyForm.shopinstancenum" style="width: 100%;" placeholder="应用商店-实例数"></el-input>
    </el-form-item>
    <el-form-item label="应用商店-托管应用数" prop="shopappnum">
      <el-input v-model.number="applyForm.shopappnum" style="width: 100%;" placeholder="应用商店-托管应用数"></el-input>
    </el-form-item>
    <el-form-item label="授权起始时间" required>
      <el-col :span="11">
        <el-form-item prop="grantbegindate">
          <el-date-picker type="date" format="yyyy 年 MM 月 dd 日" @change="getTime" value-format="yyyy-MM-dd"
            placeholder="选择授权起始时间" v-model="applyForm.grantbegindate" style="width: 200%;">
          </el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <br>

    <el-form-item label="桌面-服务端实例数" prop="desktopinstancenum">
      <el-input v-model.number="applyForm.desktopinstancenum" style="width: 100%;" placeholder="桌面-服务端实例数"></el-input>
    </el-form-item>
    <el-form-item label="桌面-客户端连接数" prop="desktopcon">
      <el-input v-model.number="applyForm.desktopcon" style="width: 100%;" placeholder="桌面-客户端连接数"></el-input>
    </el-form-item>


    <el-form-item label="授权到期时间" required>
      <el-col :span="11">
        <el-form-item prop="grantenddate">
          <!-- @change="getTime" -->
          <el-date-picker type="date" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" placeholder="选择授权到期时间"
            v-model="applyForm.grantenddate" style="width: 200%;">
          </el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <br>


    <el-form-item label="授权申请说明" prop="applynote">
      <el-input type="textarea" v-model="applyForm.applynote" style="" cols="140%" rows=' 5%' placeholder="请输入授权申请说明">
      </el-input>
    </el-form-item>
    <br>

    <div class="foot-button">
      <el-form-item>
        <el-button type="primary" @click="submitForm('applyForm')">立即创建</el-button>
        <el-button @click="resetForm('applyForm')">重置</el-button>
      </el-form-item>
    </div>
  </el-form>

</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        username: '',
        id: '',
        applyForm: {
          project: '',
          applyername: '',
          softwarename: '',
          applydate: new Date(),
          applynote: '',
          applyertel: '',
          grantuser: '',
          grantuserperson: '',
          grantuserpersontel: '',
          grantbegindate: '',
          grantenddate: '',
          servertype: '',
          serveros: '',
          serverip: '',
          deploymenttype: '',
          granttype: '',
          productversion: '',
          grantfiletype: '',
          machinenum: '',
          usernum: '',
          controlnum: '',
          computenum: '',
          shopinstancenum: '',
          shopappnum: '',
          desktopinstancenum: '',
          desktopcon: '',

        },
        rules: {
          project: [{
              required: true,
              message: '请输入项目名称/标识',
              trigger: 'blur'
            },
            {
              min: 2,
              max: 20,
              message: '长度在 2 到 20 个字符',
              trigger: 'blur'
            }
          ],
          applyername: [{
              required: true,
              message: '请输入授权申请人姓名',
              trigger: 'blur'
            },
            {
              min: 2,
              max: 10,
              message: '长度在 2 到 10 个字符',
              trigger: 'blur'
            }
          ],
          softwwarename: [{
              required: false,
              message: '请输入授权软件名称',
              trigger: 'blur'
            },
            // {min: 3,max: 5,message: '长度在 3 到 5 个字符',trigger: 'blur'}
          ],
          // applydate: [{
          //   type: 'date',
          //   required: true,
          //   message: '请选择日期',
          //   trigger: 'change'
          // }],


          applyertel: [{
            required: true,
            message: '授权申请人联系方式不能为空'
          }, ],
          grantuser: [{
            required: true,
            message: '请输入授权用户',
            trigger: 'blur'
          }, ],
          grantuserperson: [{
            required: true,
            message: '授权用户联系人',
            trigger: 'blur'
          }, ],
          grantuserpersontel: [{
            required: true,
            message: '请输入授权用户联系方式',
            trigger: 'blur'
          }, ],


          deploymenttype: [{
            required: true,
            message: '请输入部署类型',
            trigger: 'blur'
          }, ],
          granttype: [{
            required: true,
            message: '请输入授权类型',
            trigger: 'blur'
          }, ],
          machinenum: [{
            required: true,
            message: '请输入机器设备码',
            trigger: 'blur'
          }],
          servertype: [{
            required: true,
            message: '请输入授权服务器型号',
            trigger: 'blur'
          }, ],
          serveros: [{
              required: true,
              message: '请输入授权服务器OS',
              trigger: 'blur'
            },

          ],
          serverip: [{
              required: true,
              message: '请输入授权服务器IP',
              trigger: 'blur'
            },

          ],


          productversion: [{
            required: true,
            message: '请输入平台产品版本',
            trigger: 'blur'
          }, ],
          grantfiletype: [{
            required: false,
            message: '请输入授权文件版本',
            trigger: 'blur'
          }, ],


          usernum: [{
            required: false,
            message: '请输入微服务-服务用户量',
            trigger: 'blur'
          }, ],
          controlnum: [{
            required: false,
            message: '请输入容器云-控制节点数量',
            trigger: 'blur'
          }, ],
          computenum: [{
            required: false,
            message: '请输入容器云-计算节点数量',
            trigger: 'blur'
          }, ],


          shopinstancenum: [{
            required: false,
            message: '应用商店-实例数',
            trigger: 'blur'
          }, ],
          shopappnum: [{
            required: false,
            message: '应用商店-托管应用数',
            trigger: 'blur'
          }, ],
          grantbegindate: [{
            type: 'string',
            required: true,
            message: '选择授权起始时间',
            trigger: 'change'
          }],


          desktopinstancenum: [{
            required: false,
            message: '桌面-服务端实例数',
            trigger: 'blur'
          }, ],
          desktopcon: [{
            required: true,
            message: '桌面-客户端连接数',
            trigger: 'blur'
          }, ],
          grantenddate: [{
            type: 'string',
            required: true,
            message: '选择授权起始时间',
            trigger: 'change'
          }],


          applynote: [{
              required: true,
              message: '请输入授权申请说明',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 100,
              message: '长度在 15 到 100 个字符',
              trigger: 'blur'
            }
          ],
        }
      };
    },
    methods: {
      lookpage() {
        this.$router.push({
          path: '/user'
        });
      },
      getTime(val) {
        const d = new Date(val);
        this.applyForm.applydate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        this.applyForm.grantbegindate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        this.applyForm.grantenddate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$confirm('校验成功,正在火速为您加速提交!', '提示', {})
            let params = this.applyForm;
            axios.get('http://192.168.17.73:8088/addNewApply/' + this.id, {
              params
            }).then(() => {
              location.reload()
            });
          } else {
            window.console.log('错误提交');
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
  .MsoNormal {
    text-align: center;
    margin-left: -18%
  }

  .foot-button {
    /* margin-left: 35% */
    text-align: center
  }
</style>