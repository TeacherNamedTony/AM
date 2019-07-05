  <template>
    <el-container>
      <el-header style="height:0px">
      </el-header>
      <el-main>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
          @selection-change="handleSelectionChange">
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
          <el-table-column prop="" label="审核人" width="">
            <el-tag type="info">尚未通过审核，请您耐心等待</el-tag>
          </el-table-column>
          <el-table-column prop="look" label=" " width="180">
            <template slot-scope="scope">

              <el-button type="primary" round @click="changeDialog(scope.row)">查看申请</el-button>

            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-pagination class="fenye" background layout="prev, pager, next" :total="1">
      </el-pagination>

      <!-- dialog开始，授权申请单弹窗 -->
      <el-dialog title="#" :visible.sync="dialogTableVisible">
<body lang=ZH-CN style='text-justify-trim:punctuation'>

<div class=WordSection1 style='layout-grid:15.6pt' align="center">

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=529
 style='width:14.0cm;margin-left:28.1pt;border-collapse:collapse'>
 <tr style='height:6.6pt'>
  <td width=135 nowrap colspan=2 style='width:101.3pt;border:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:6.6pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>项目名称<span lang=EN-US>/</span>标识</span></p>
  </td>
  <td width=148 nowrap style='width:111.35pt;border:solid #305496 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:6.6pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td width=69 nowrap style='width:51.65pt;border:solid #305496 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:6.6pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>申请人</span></p>
  </td>
  <td width=177 nowrap style='width:132.6pt;border:solid #305496 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:6.6pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:6.6pt;border:none' width=0 height=9></td>
 </tr>
 <tr style='height:11.85pt'>
  <td width=135 nowrap colspan=2 style='width:101.3pt;border:solid #305496 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:11.85pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>授权软件名称</span></p>
  </td>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:11.85pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td width=69 nowrap style='width:51.65pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:11.85pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>申请时间</span></p>
  </td>
  <td width=177 nowrap style='width:132.6pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:11.85pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:11.85pt;border:none' width=0 height=16></td>
 </tr>
 <tr style='height:15.6pt'>
  <td width=529 nowrap colspan=5 rowspan=4 valign=top style='width:14.0cm;
  border:solid #305496 1.0pt;border-top:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:15.6pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>授权申请说明：开发所需测试环境</span></p>
  </td>
  <td style='height:15.6pt;border:none' width=0 height=21></td>
 </tr>
 <tr style='height:15.6pt'>
  <td style='height:15.6pt;border:none' width=0 height=21></td>
 </tr>
 <tr style='height:15.6pt'>
  <td style='height:15.6pt;border:none' width=0 height=21></td>
 </tr>
 <tr style='height:15.6pt'>
  <td style='height:15.6pt;border:none' width=0 height=21></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=67 nowrap style='width:50.0pt;border:solid #305496 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'></td>
  <td width=68 nowrap style='width:51.3pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>分类</span></p>
  </td>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>项目</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>授权信息</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=67 nowrap rowspan=22 style='width:50.0pt;border:solid #305496 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;layout-flow:vertical-ideographic;
  height:15.0pt'>
  <p class=MsoNormal align=center style='text-align:center'><span
  style='font-size:9.0pt;font-family:宋体;color:black'>授权信息</span></p>
  </td>
  <td width=68 nowrap rowspan=2 style='width:51.3pt;border-top:none;border-left:
  none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>申请信息</span></p>
  </td>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>授权申请人</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>授权申请人联系方式</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=68 nowrap rowspan=3 style='width:51.3pt;border-top:none;border-left:
  none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>用户信息</span></p>
  </td>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>授权用户</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>授权用户联系人</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>授权用户联系方式</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=68 nowrap rowspan=2 style='width:51.3pt;border-top:none;border-left:
  none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>时间信息</span></p>
  </td>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>授权起始时间</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>授权到期时间</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=68 nowrap rowspan=6 style='width:51.3pt;border-top:none;border-left:
  none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>设备信息</span></p>
  </td>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>授权服务器型号</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>授权服务器<span lang=EN-US>OS</span></span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>授权服务器<span lang=EN-US>IP</span></span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>部署类型</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>授权类型</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>机器设备码</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=68 nowrap rowspan=2 style='width:51.3pt;border-top:none;border-left:
  none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>版本信息</span></p>
  </td>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>平台产品版本</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>授权文件版本</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=68 nowrap rowspan=7 style='width:51.3pt;border-top:none;border-left:
  none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>授权信息</span></p>
  </td>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>微服务<span lang=EN-US>-</span>服务用户量</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>容器云<span lang=EN-US>-</span>控制节点数量</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>容器云<span lang=EN-US>-</span>计算节点数量</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>应用商店<span lang=EN-US>-</span>实例数</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>应用商店<span lang=EN-US>-</span>托管应用数</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>桌面<span lang=EN-US>-</span>服务端实例数</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
 <tr style='height:15.0pt'>
  <td width=148 nowrap style='width:111.35pt;border-top:none;border-left:none;
  border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>桌面<span lang=EN-US>-</span>客户端连接数</span></p>
  </td>
  <td width=246 nowrap colspan=2 style='width:184.25pt;border-top:none;
  border-left:none;border-bottom:solid #305496 1.0pt;border-right:solid #305496 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
  <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  9.0pt;font-family:宋体;color:black'>测试数据</span></p>
  </td>
  <td style='height:15.0pt;border:none' width=0 height=20></td>
 </tr>
</table>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>

</body>
      </el-dialog>

    </el-container>
  </template>


  <script>
    import axios from 'axios';

    export default {
      // components: {},
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
          axios.get('http://192.168.17.73:8088/getUntreatedState?id=3', {
            "pagenum": "ddfdf"
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
        }
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

    div.WordSection1 {
      page: WordSection1;
    }

    .fenye {
      text-align: center
    }
  </style>