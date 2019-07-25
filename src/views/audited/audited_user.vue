<template>
  <el-container>
    <el-header style="height:0px">
    </el-header>
    <el-main>
      <el-alert title="您的申请已经通过审核，下载授权码后注意妥善保管。" type="success" show-icon close-text="知道了"></el-alert>
      <el-table ref="multipleTable"
        :data="tableData.filter(data => !search || data.applyDetail.project.toLowerCase().includes(search.toLowerCase()))"
        tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="applyDetail.applydate" label="申请日期" width="95">
        </el-table-column>
        <el-table-column prop="applyDetail.applyername" label="申请人员" width="80">
        </el-table-column>
        <el-table-column prop="applyDetail.project" label="项目名称" width="110">
        </el-table-column>
        <el-table-column prop="applyDetail.grantbegindate" label="开始时间" width="95">
        </el-table-column>
        <el-table-column prop="applyDetail.grantenddate" label="结束时间" width="95">
        </el-table-column>
        <el-table-column prop="userRatifyDetail.realname" label="审核人" width="80">
        </el-table-column>
        <el-table-column prop="userRatifyDetail.company" label="所属单位" width="">
        </el-table-column>
        <el-table-column prop="look">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="max" placeholder="项目名称以检索" />
          </template>
          <template slot-scope="scope">
            <el-button type="primary" round @click="changeDialog(scope.row)">查看申请</el-button>
            <el-button class="button-pass" size="max" type="success"  round @click="download(scope.row)">下载授权码</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="fenye" background layout="prev, pager, next" :total="10">
      </el-pagination>
    </el-main>

    <!-- dialog开始，授权申请单弹窗 -->
    <el-dialog title="#" :visible.sync="dialogTableVisible">

      <body lang=ZH-CN style='text-justify-trim:punctuation'>
        <div class=WordSection1 style='layout-grid:15.6pt'>
          <div align=center>
            <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=612
              style='width:459.3pt;border-collapse:collapse'>
              <tr style='height:31.2pt'>
                <td width=612 colspan=5 rowspan=2 style='width:459.3pt;border:none;
  border-bottom:solid #305496 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:31.2pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:20.0pt;font-family:黑体;color:black'>授权审批单</span></p>
                </td>
                <td style='height:31.2pt;border:none' width=0 height=42></td>
              </tr>
              <tr style='height:15.6pt'>
                <td style='height:15.6pt;border:none' width=0 height=21></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=142 nowrap colspan=2 style='width:106.35pt;border:solid #305496 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:11.0pt;font-family:宋体;color:black'>项目名称<span lang=EN-US>/</span>标识</span></p>
                </td>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:11.0pt;font-family:宋体;color:black'>{{dialogData.project}}</span></p>
                </td>
                <td width=123 nowrap style='width:92.15pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:11.0pt;font-family:宋体;color:black'>申请人</span></p>
                </td>
                <td width=178 nowrap style='width:133.25pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:11.0pt;font-family:宋体;color:black'>{{dialogData.applyername}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=142 nowrap colspan=2 style='width:106.35pt;border:solid #305496 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:11.0pt;font-family:宋体;color:black'>授权软件名称</span></p>
                </td>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:11.0pt;font-family:宋体;color:black'>{{dialogData.softwarename}}</span></p>
                </td>
                <td width=123 nowrap style='width:92.15pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:11.0pt;font-family:宋体;color:black'>申请时间</span></p>
                </td>
                <td width=178 nowrap style='width:133.25pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:11.0pt;font-family:宋体;color:black'>{{dialogData.applydate}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=612 nowrap colspan=5 rowspan=4 valign=top style='width:459.3pt;
  border:solid #305496 1.0pt;border-top:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  11.0pt;font-family:宋体;color:black'>授权申请说明：{{dialogData.applynote}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:15.6pt'>
                <td style='height:15.6pt;border:none' width=0 height=21></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=56 nowrap style='width:42.3pt;border:solid #305496 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span
                      style='font-size:11.0pt;font-family:宋体;color:black'></span></p>
                </td>
                <td width=85 nowrap style='width:64.05pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>分类</span></p>
                </td>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>项目</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>授权信息</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=56 nowrap rowspan=22 style='width:42.3pt;border:solid #305496 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;layout-flow:vertical-ideographic;
  height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>授权信息</span></p>
                </td>
                <td width=85 nowrap rowspan=2 style='width:64.05pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>申请信息</span></p>
                </td>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>授权申请人</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.applyername}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>授权申请人联系方式</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.applyertel}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=85 nowrap rowspan=3 style='width:64.05pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>用户信息</span></p>
                </td>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>授权用户</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.grantuser}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>授权用户联系人</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.grantuserperson}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>授权用户联系方式</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.grantuserpersontel}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=85 nowrap rowspan=2 style='width:64.05pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>时间信息</span></p>
                </td>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>授权起始时间</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.grantbegindate}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>授权到期时间</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.grantenddate}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=85 nowrap rowspan=6 style='width:64.05pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>设备信息</span></p>
                </td>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>授权服务器型号</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.servertype}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>授权服务器<span lang=EN-US>OS</span></span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.serveros}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>授权服务器<span lang=EN-US>IP</span></span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.serverip}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>部署类型</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.deploymenttype}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>授权类型</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.granttype}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>机器设备码</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:left'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.machinenum}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=85 nowrap rowspan=2 style='width:64.05pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>版本信息</span></p>
                </td>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>平台产品版本</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.productversion}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>授权文件版本</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.grantfiletype}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=85 nowrap rowspan=7 style='width:64.05pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>授权信息</span></p>
                </td>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>微服务<span lang=EN-US>-</span>服务用户量</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.usernum}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>容器云<span lang=EN-US>-</span>控制节点数量</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.controlnum}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>容器云<span lang=EN-US>-</span>计算节点数量</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.computenum}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>应用商店<span lang=EN-US>-</span>实例数</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.shopinstancenum}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>应用商店<span lang=EN-US>-</span>托管应用数</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.shopappnum}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>桌面<span lang=EN-US>-</span>服务端实例数</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.desktopinstancenum}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
              <tr style='height:20.1pt'>
                <td width=170 nowrap style='width:127.55pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>桌面<span lang=EN-US>-</span>客户端连接数</span></p>
                </td>
                <td width=301 nowrap colspan=2 style='width:225.4pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>
                  <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体;color:black'>{{dialogData.desktopcon}}</span></p>
                </td>
                <td style='height:20.1pt;border:none' width=0 height=27></td>
              </tr>
            </table>
          </div>
          <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
        </div>
      </body>
    </el-dialog>
  </el-container>
</template>


<script>
  import axios from 'axios';
  export default {
    components: {},
    data() {
      return {
        search: '',
        username: '',
        id: '',
        license: '',
        project: '',
        company: '',
        grantbegindate: '',
        grantenddate: '',
        productversion: '',
        dialogTableVisible: false,
        tableData: [],
        dialogData: {
          project: '',
          applyername: '',
          softwarename: '',
          applydate: '',
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
          machinenum: '',
          productversion: '',
          grantfiletype: '',
          usernum: '',
          controlnum: '',
          computenum: '',
          shopinstancenum: '',
          shopappnum: '',
          desktopinstancenum: '',
          desktopcon: '',
        }
      }
    },
    methods: {
      download(data) {
        // this.$confirm(data.license, '提示', {
        this.$confirm("请妥善保管授权码文件", '提示', {
          confirmButtonText: '下载',
          cancelButtonText: '关闭',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '开始下载!'
          });
          this.loadFile(
            data.userApplyDetail.company + '_' +
            data.applyDetail.project + '_' +
            data.applyDetail.grantbegindate + '_' +
            data.applyDetail.grantenddate + '_' +
            data.applyDetail.productversion + '_' +
            "license.txt", data.license);
        }).catch(() => {
          this.$message({
            type: 'close',
            message: '已关闭'
          });
        });
      },
      loadFile(fileName, content) {
        var aLink = document.createElement('a');
        var blob = new Blob([content], {
          type: 'text/plain'
        });
        var evt = new Event('click');
        aLink.download = fileName;
        aLink.href = URL.createObjectURL(blob);
        aLink.click();
        URL.revokeObjectURL(blob);
      },
      loadAll() {
        axios.get('http://192.168.40.205:13998/getAuditedState?id=' + this.id).then((data) => {
          this.tableData = data.data.data;
        })
      },
      changeDialog(params) {
        // window.console.log(params);
        this.dialogData.project = params.applyDetail.project;
        this.dialogData.applyername = params.applyDetail.applyername;
        this.dialogData.softwarename = params.applyDetail.softwarename;
        this.dialogData.applydate = params.applyDetail.applydate;
        this.dialogData.applynote = params.applyDetail.applynote;
        this.dialogData.applyertel = params.applyDetail.applyertel;
        this.dialogData.grantuser = params.applyDetail.grantuser;
        this.dialogData.grantuserperson = params.applyDetail.grantuserperson;
        this.dialogData.grantuserpersontel = params.applyDetail.grantuserpersontel;
        this.dialogData.grantbegindate = params.applyDetail.grantbegindate;
        this.dialogData.grantenddate = params.applyDetail.grantenddate;
        this.dialogData.servertype = params.applyDetail.servertype;
        this.dialogData.serveros = params.applyDetail.serveros;
        this.dialogData.serverip = params.applyDetail.serverip;
        this.dialogData.deploymenttype = params.applyDetail.deploymenttype;
        this.dialogData.granttype = params.applyDetail.granttype;
        this.dialogData.machinenum = params.applyDetail.machinenum
        this.dialogData.productversion = params.applyDetail.productversion;
        this.dialogData.grantfiletype = params.applyDetail.grantfiletype;
        this.dialogData.usernum = params.applyDetail.usernum;
        this.dialogData.controlnum = params.applyDetail.controlnum;
        this.dialogData.computenum = params.applyDetail.computenum;
        this.dialogData.shopinstancenum = params.applyDetail.shopinstancenum;
        this.dialogData.shopappnum = params.applyDetail.shopappnum;
        this.dialogData.desktopinstancenum = params.applyDetail.desktopinstancenum;
        this.dialogData.desktopcon = params.applyDetail.desktopcon;
        this.dialogTableVisible = true;
      }
    },
    mounted() {
      var user = sessionStorage.getItem('user');
      var id = sessionStorage.getItem('id');
      if (user) {
        this.username = user;
        this.id = id;
      }
      this.loadAll();
    },
  };
</script>
<style scoped>
  @font-face {
    font-family: 宋体;
    panose-1: 2 1 6 0 3 1 1 1 1 1;
  }

  @font-face {
    font-family: 黑体;
    panose-1: 2 1 6 0 3 1 1 1 1 1;
  }

  @font-face {
    font-family: "Cambria Math";
    panose-1: 0 0 0 0 0 0 0 0 0 0;
  }

  @font-face {
    font-family: 等线;
    panose-1: 2 1 6 0 3 1 1 1 1 1;
  }

  @font-face {
    font-family: "\@宋体";
    panose-1: 2 1 6 0 3 1 1 1 1 1;
  }

  @font-face {
    font-family: "\@黑体";
    panose-1: 2 1 6 0 3 1 1 1 1 1;
  }

  @font-face {
    font-family: "\@等线";
    panose-1: 2 1 6 0 3 1 1 1 1 1;
  }

  /* Style Definitions */
  p.MsoNormal,
  li.MsoNormal,
  div.MsoNormal {
    margin: 0cm;
    margin-bottom: .0001pt;
    text-align: justify;
    text-justify: inter-ideograph;
    font-size: 10.5pt;
    font-family: 等线;
  }

  h1 {
    mso-style-link: "标题 1 字符";
    margin-top: 17.0pt;
    margin-right: 0cm;
    margin-bottom: 16.5pt;
    margin-left: 0cm;
    text-align: justify;
    text-justify: inter-ideograph;
    line-height: 240%;
    page-break-after: avoid;
    font-size: 22.0pt;
    font-family: 等线;
  }

  p.MsoHeader,
  li.MsoHeader,
  div.MsoHeader {
    mso-style-link: "页眉 字符";
    margin: 0cm;
    margin-bottom: .0001pt;
    text-align: center;
    layout-grid-mode: char;
    border: none;
    padding: 0cm;
    font-size: 9.0pt;
    font-family: 等线;
  }

  p.MsoFooter,
  li.MsoFooter,
  div.MsoFooter {
    mso-style-link: "页脚 字符";
    margin: 0cm;
    margin-bottom: .0001pt;
    layout-grid-mode: char;
    font-size: 9.0pt;
    font-family: 等线;
  }

  p.MsoTitle,
  li.MsoTitle,
  /* div.MsoTitle {
      mso-style-link: "标题 字符";
      margin-top: 12.0pt;
      margin-right: 0cm;
      margin-bottom: 3.0pt;
      margin-left: 0cm;
      text-align: center;
      font-size: 16.0pt;
      font-family: "等线 Light";
      font-weight: bold;
    } */

  /* span.1 {
      mso-style-name: "标题 1 字符";
      mso-style-link: "标题 1";
      font-weight: bold;
    } */

  /* span.a {
      mso-style-name: "标题 字符";
      mso-style-link: 标题;
      font-family: "等线 Light";
      font-weight: bold;
    } */

  span.a0 {
    mso-style-name: "页眉 字符";
    mso-style-link: 页眉;
  }

  span.a1 {
    mso-style-name: "页脚 字符";
    mso-style-link: 页脚;
  }

  .MsoChpDefault {
    font-family: 等线;
  }

  /* Page Definitions */
  @page WordSection1 {
    size: 595.3pt 841.9pt;
    margin: 72.0pt 90.0pt 72.0pt 90.0pt;
    layout-grid: 15.6pt;
  }

  div.WordSection1 {
    page: WordSection1;
  }

  div.WordSection1 {
    page: WordSection1;
  }

  .fenye {
    text-align: center;
    margin-top: 2%
  }
  .button-pass{
    float: right;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>