  <template>
    <el-container>
      <el-header style="text-align:left; font-size: 12px">
        <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入项目名称或者申请人"
          @select="handleSelect">
        </el-autocomplete>
      </el-header>
      <el-main>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="35">
          </el-table-column>
          <el-table-column prop="applyDetail.applydate" label="申请日期" width="120">
          </el-table-column>
          <el-table-column prop="applyDetail.applyername" label="申请人员" width="120">
          </el-table-column>
          <el-table-column prop="applyDetail.project" label="项目名称" width="120">
          </el-table-column>
          <el-table-column prop="applyDetail.grantbegindate" label="开始时间" width="120">
          </el-table-column>
          <el-table-column prop="applyDetail.grantenddate" label="结束时间" width="120">
          </el-table-column>
          <el-table-column prop="userApplyDetail.company" label="所属单位" width="">
          </el-table-column>
          <el-table-column prop="look" label=" " width="180">
            <template slot-scope="scope">
              <el-button type="primary" round @click="changeDialog(scope.row)">查看申请</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="address" label=" " width="180">
            <el-button slot-scope="scope" type="success" round @click="passnow(scope.row.sid)">一键通过</el-button>
          </el-table-column>
        </el-table>
      </el-main>
      <el-pagination class="fenye" background layout="prev, pager, next" :total="20">
      </el-pagination>
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
        loadAll() {
          axios.get('http://192.168.17.73:8088/getAllStateNotPass', {
            "pagenum": "123"
          }).then((data) => {
            this.tableData = data.data.data;
          })
        },
        changeDialog(params) {
          window.console.log(params);
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
        },


        // toggleSelection() {
        //   this.$refs.multipleTable.clearSelection();
        // },
        // handleSelectionChange(val) {
        //   this.multipleSelection = val;
        // },
        passnow(sid) {
          this.$confirm('正在授权中', '提示', {})
          axios.get('http://192.168.17.73:8088/ratify?sid=' + sid).then(() => {
            // alert(sid)
            location.reload()
          })

        },

      },
      mounted() {
        this.loadAll();
      },
    };
  </script>



  <style scoped>
    /* Font Definitions */
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

    span.a {
      mso-style-name: "页眉 字符";
      mso-style-link: 页眉;
    }

    span.a0 {
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

    .fenye {
      text-align: center
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