<template>
  <div style="padding: 24px; background: #fff">
    <div style="font-size: 20px; font-weight: bold; margin-bottom: 20px">
      比赛问题列表
    </div>
    <div style="display: flex; justify-content: flex-end; margin-bottom: 16px">
      <el-input
        v-model="searchKey"
        placeholder="Keywords"
        clearable
        style="width: 260px"
      />
    </div>
    <el-table
      :data="filteredList"
      border
      style="width: 100%"
      row-class-name="custom-row"
    >
      <el-table-column prop="id" label="ID" width="90" />
      <el-table-column prop="displayId" label="Display ID" width="120" />
      <el-table-column prop="title" label="Title" min-width="200" />
      <el-table-column prop="author" label="Author" width="140" />
      <el-table-column prop="createTime" label="Create Time" width="180" />
      <el-table-column prop="visible" label="Visible" width="100">
        <template #default="{ row }">
          <el-switch v-model="row.visible" />
        </template>
      </el-table-column>
      <el-table-column label="Operation" width="220" fixed="right">
        <template #default="{ row }">
          <el-button size="small" @click="editProblem(row)">编辑</el-button>
          <el-button size="small" @click="downloadProblem(row)">下载</el-button>
          <el-button size="small" type="danger" @click="deleteProblem(row)"
            >删除</el-button
          >
          <!-- <el-button
            icon="el-icon-delete"
            size="small"
            @click="deleteProblem(row)"
          /> -->
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 16px; text-align: right">
      <el-pagination
        v-model:current-page="currentPage"
        :page-size="pageSize"
        :total="filteredAll.length"
        layout="prev, pager, next"
        background
      />
    </div>
    <div style="margin-top: 24px; display: flex; gap: 16px">
      <el-button type="primary" icon="el-icon-plus" @click="createProblem"
        >+ Create</el-button
      >
      <el-button type="primary" plain icon="el-icon-plus" @click="addFromPublic"
        >+ Add From Public Problem</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const searchKey = ref("");
const currentPage = ref(1);
const pageSize = ref(10);

const problemList = ref([
  {
    id: 1974,
    displayId: "L2_0004",
    title: "Kim的括号表达式",
    author: "admin",
    createTime: "2025-3-15 16:11:42",
    visible: true
  },
  {
    id: 1973,
    displayId: "L2_0003",
    title: "侧视图",
    author: "admin",
    createTime: "2025-3-15 16:08:45",
    visible: true
  },
  {
    id: 1972,
    displayId: "L1_0001",
    title: "最小循环节",
    author: "admin",
    createTime: "2025-3-15 16:06:18",
    visible: true
  },
  {
    id: 1971,
    displayId: "L2_0002",
    title: "简单Dijkstra",
    author: "admin",
    createTime: "2025-3-14 22:52:22",
    visible: true
  },
  {
    id: 1970,
    displayId: "L2_0001",
    title: "大臣的旅费",
    author: "计科186邵玉愚",
    createTime: "2025-3-14 22:48:52",
    visible: true
  },
  {
    id: 1969,
    displayId: "L1_0004",
    title: "一帮二互助学习小组 (15 分)",
    author: "admin",
    createTime: "2025-3-14 22:47:47",
    visible: true
  },
  {
    id: 1968,
    displayId: "L1_0006",
    title: "图的深度优先遍历",
    author: "计科193刘浩",
    createTime: "2025-3-14 22:45:06",
    visible: true
  },
  {
    id: 1967,
    displayId: "L1_0005",
    title: "不读消息的游戏狂魔",
    author: "admin",
    createTime: "2025-3-14 22:42:40",
    visible: true
  },
  {
    id: 1966,
    displayId: "L1_0002",
    title: "不平均的身高体重",
    author: "admin",
    createTime: "2025-3-14 22:41:51",
    visible: true
  },
  {
    id: 1965,
    displayId: "L1_0003",
    title: "字符串展开",
    author: "admin",
    createTime: "2025-3-14 22:40:53",
    visible: true
  },
  {
    id: 1967,
    displayId: "L1_0005",
    title: "不读消息的游戏狂魔",
    author: "admin",
    createTime: "2025-3-14 22:42:40",
    visible: true
  },
  {
    id: 1966,
    displayId: "L1_0002",
    title: "不平均的身高体重",
    author: "admin",
    createTime: "2025-3-14 22:41:51",
    visible: true
  },
  {
    id: 1965,
    displayId: "L1_0003",
    title: "字符串展开",
    author: "admin",
    createTime: "2025-3-14 22:40:53",
    visible: true
  }
]);

const filteredAll = computed(() => {
  let list = problemList.value;
  if (searchKey.value) {
    list = list.filter(
      item =>
        item.title.includes(searchKey.value) ||
        String(item.id).includes(searchKey.value) ||
        item.displayId.includes(searchKey.value) ||
        item.author.includes(searchKey.value)
    );
  }
  return list;
});

const filteredList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  return filteredAll.value.slice(start, start + pageSize.value);
});

function editProblem(row) {
  // 跳转到编辑题目页面
}
function copyProblem(row) {
  // 复制题目
}
function downloadProblem(row) {
  // 下载题目
}
function deleteProblem(row) {
  // 删除题目
}
function createProblem() {
  // 创建题目
}
function addFromPublic() {
  // 从公共题库添加
}
</script>

<style>
:deep(.el-table > tr) {
  height: 56px;
}
.el-table .custom-row {
  height: 56px;
}
:deep(.el-table__row) {
  height: 56px;
}
</style>
