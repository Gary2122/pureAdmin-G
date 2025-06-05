<!--
 * @Descripttion: 
 * @version: 
 * @Author: Garrison
 * @Date: 2025-06-05 15:45:17
 * @LastEditors: sueRimn
 * @LastEditTime: 2025-06-05 15:46:41
-->
<template>
  <div style="padding: 10px">
    <div
      style="
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
      "
    >
      精简测试用例
      <el-tooltip content="测试用例用于判题系统的自动化测试" placement="top">
        <el-icon style="margin-left: 6px; color: #909399"
          ><QuestionFilled
        /></el-icon>
      </el-tooltip>
    </div>
    <el-table :data="testCases" border style="width: 100%">
      <el-table-column
        prop="lastModified"
        label="Last Modified"
        min-width="180"
      />
      <el-table-column prop="id" label="Test Case ID" min-width="350" />
      <el-table-column label="Option" width="100">
        <template #default="{ row }">
          <!-- icon="el-icon-delete" -->
          <el-button type="danger" @click="handleDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { QuestionFilled } from "@element-plus/icons-vue";

const testCases = ref([
  {
    lastModified: "2023-11-1 21:28:28",
    id: "1177381084daa31789a2a2ebd504eada"
  },
  {
    lastModified: "2023-1-14 17:34:53",
    id: "6ec7fd5b3934a360d551ef19ff94a0ae"
  },
  {
    lastModified: "2023-1-14 17:35:26",
    id: "d04d8fa1af1904665a550a66e80ac5fa"
  },
  {
    lastModified: "2023-1-14 17:34:34",
    id: "35daa2a4b371b7041b8446d2c8c9f900"
  },
  {
    lastModified: "2023-1-14 17:35:32",
    id: "df09a441ea392bac64844838e926670d"
  },
  {
    lastModified: "2023-1-14 17:34:51",
    id: "64c927013ce2c91f2ff4886d3f3c2e3c"
  },
  {
    lastModified: "2023-1-14 17:35:02",
    id: "87e641194875b0882264a950a9cad4af"
  },
  {
    lastModified: "2023-1-14 17:34:55",
    id: "72b3848ba3b092033cc5ed14fc2abf31"
  },
  {
    lastModified: "2023-1-14 17:35:30",
    id: "dbae64592a3aad4f87259a436a6e0ea3"
  },
  { lastModified: "2023-1-14 17:34:28", id: "220763cc7fbe873a82816cf124bf39fa" }
]);

function handleDelete(row) {
  ElMessageBox.confirm(`确定要删除测试用例 ${row.id} 吗？`, "提示", {
    type: "warning"
  })
    .then(() => {
      testCases.value = testCases.value.filter(tc => tc.id !== row.id);
      ElMessage.success("删除成功");
    })
    .catch(() => {});
}
</script>

<style scoped>
.el-table th,
.el-table td {
  text-align: center;
}
</style>
