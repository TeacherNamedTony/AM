<!--  -->
<template>
    <div class=''>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)">
        </el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
        <el-progress type="circle" :percentage="0"></el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
        <el-progress type="circle" :percentage="100" status="text">Done</el-progress>
    </div>
</template>