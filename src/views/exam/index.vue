<template>
  <div style="padding: 24px; background: #fff">
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      "
    >
      <div style="font-size: 20px; font-weight: bold">Contest List</div>
      <el-input
        v-model="searchKey"
        placeholder="Keywords"
        clearable
        style="width: 260px"
        @input="onSearch"
      />
    </div>
    <el-table
      :data="pagedList"
      border
      style="width: 100%"
      row-class-name="custom-row"
    >
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="title" label="Title" min-width="180" />
      <el-table-column prop="ruleType" label="Rule Type" width="100">
        <template #default="{ row }">
          <el-tag type="info" effect="light">{{ row.ruleType }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="contestType" label="Contest Type" width="180">
        <template #default="{ row }">
          <el-tag
            :type="row.contestType === 'Public' ? 'success' : 'primary'"
            effect="light"
            >{{ row.contestType }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="status" label="Status" width="120">
        <template #default="{ row }">
          <el-tag :type="statusType(row.status)" effect="light">{{
            row.status
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="visible" label="Visible" width="100">
        <template #default="{ row }">
          <el-switch v-model="row.visible" />
        </template>
      </el-table-column>
      <el-table-column label="Operation" width="220" fixed="right">
        <template #default="{ row }">
          <el-button link type="primary" size="small" @click="editContest(row)"
            >编辑</el-button
          >
          <el-button link type="info" size="small" @click="viewProblems(row)"
            >题目列表</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 16px; text-align: right">
      <el-pagination
        v-model:current-page="currentPage"
        :page-size="pageSize"
        :total="searchedList.length"
        layout="prev, pager, next"
        background
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const searchKey = ref("");
const currentPage = ref(1);
const pageSize = ref(10);

// mock数据
const examList = ref([
  {
    id: 139,
    title: "123",
    ruleType: "OI",
    contestType: "Password Protected",
    status: "Underway",
    visible: true
  },
  {
    id: 138,
    title: "中钦国际-C语言编程大赛",
    ruleType: "OI",
    contestType: "Password Protected",
    status: "Not Started",
    visible: false
  },
  {
    id: 137,
    title: "2025天梯赛选拔第五场",
    ruleType: "OI",
    contestType: "Password Protected",
    status: "Underway",
    visible: false
  },
  {
    id: 136,
    title: "2025天梯赛选拔第四场",
    ruleType: "OI",
    contestType: "Password Protected",
    status: "Underway",
    visible: false
  },
  {
    id: 135,
    title: "2025天梯赛第三场周赛考核",
    ruleType: "OI",
    contestType: "Password Protected",
    status: "Underway",
    visible: false
  },
  {
    id: 134,
    title: "2025天梯赛第二场周赛考核",
    ruleType: "OI",
    contestType: "Public",
    status: "Underway",
    visible: false
  },
  {
    id: 133,
    title: "2025天梯赛第一场周赛考核",
    ruleType: "OI",
    contestType: "Public",
    status: "Underway",
    visible: false
  },
  {
    id: 132,
    title: "测试2",
    ruleType: "OI",
    contestType: "Public",
    status: "Underway",
    visible: false
  },
  {
    id: 131,
    title: "24阶性检测一",
    ruleType: "OI",
    contestType: "Public",
    status: "Underway",
    visible: false
  },
  {
    id: 130,
    title: "探究式学习训练3第二次机考",
    ruleType: "OI",
    contestType: "Password Protected",
    status: "Ended",
    visible: false
  },
  {
    id: 133,
    title: "2025天梯赛第一场周赛考核",
    ruleType: "OI",
    contestType: "Public",
    status: "Underway",
    visible: false
  },
  {
    id: 132,
    title: "测试2",
    ruleType: "OI",
    contestType: "Public",
    status: "Underway",
    visible: false
  },
  {
    id: 131,
    title: "24阶性检测一",
    ruleType: "OI",
    contestType: "Public",
    status: "Underway",
    visible: false
  },
  {
    id: 130,
    title: "探究式学习训练3第二次机考",
    ruleType: "OI",
    contestType: "Password Protected",
    status: "Ended",
    visible: false
  }
]);

const searchedList = computed(() => {
  let list = examList.value;
  if (searchKey.value) {
    list = list.filter(
      item =>
        item.title.includes(searchKey.value) ||
        String(item.id).includes(searchKey.value)
    );
  }
  return list;
});

const pagedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  return searchedList.value.slice(start, start + pageSize.value);
});

function statusType(status: string) {
  if (status === "Underway") return "success";
  if (status === "Not Started") return "info";
  if (status === "Ended") return "danger";
  return "info";
}

function editContest(row: any) {
  router.push({ path: "/exam/examDetail", query: { id: row.id } });
}

function viewProblems(row: any) {
  router.push({ path: "/exam/problemsList", query: { contestId: row.id } });
}

function onSearch() {
  currentPage.value = 1;
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
