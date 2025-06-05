<template>
  <div style="padding: 10px">
    <!-- 判题服务器接口 -->
    <el-card style="margin-bottom: 20px">
      <div style="font-size: 18px; font-weight: bold; margin-bottom: 10px">
        判题服务器接口
      </div>
      <el-input v-model="apiToken" readonly style="width: 300px" />
    </el-card>

    <!-- 判题服务器 -->
    <el-card>
      <div style="font-size: 18px; font-weight: bold; margin-bottom: 10px">
        判题服务器
      </div>
      <el-table
        :data="serverList"
        style="width: 100%"
        border
        row-key="hostname"
        :expand-row-keys="expandRowKeys"
      >
        <el-table-column type="expand">
          <template #default="{ row }">
            <div style="padding: 10px 30px">
              <div style="margin-bottom: 8px">
                <el-tag type="success" effect="light" style="margin-right: 10px"
                  >IP: {{ row.ip }}</el-tag
                >
                <el-tag type="success" effect="light"
                  >判题机版本: {{ row.version }}</el-tag
                >
              </div>
              <div style="margin-bottom: 4px">服务器 URL: {{ row.url }}</div>
              <div style="margin-bottom: 4px">
                上一次心跳: {{ row.lastHeartbeat }}
              </div>
              <div>创建时间: {{ row.createTime }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Status" width="110">
          <template #default="{ row }">
            <el-tag
              :type="row.status === 'Normal' ? 'success' : 'danger'"
              disable-transitions
            >
              {{ row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="hostname" label="Hostname" width="180" />
        <el-table-column prop="taskNum" label="Task Number" width="120" />
        <el-table-column prop="cpuCore" label="CPU Core" width="100" />
        <el-table-column prop="cpuUsage" label="CPU Usage" width="120" />
        <el-table-column prop="memUsage" label="Memory Usage" width="140" />
        <el-table-column label="Disabled" width="100">
          <template #default="{ row }">
            <el-switch v-model="row.disabled" />
          </template>
        </el-table-column>
        <el-table-column label="Options" width="90">
          <template #default="{ row }">
            <el-button type="danger" @click="handleDelete(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";

const apiToken = ref("DlmuRaft2024");
const expandRowKeys = ref([]);

const serverList = ref([
  {
    status: "Normal",
    hostname: "e3da339aab9d",
    taskNum: 0,
    cpuCore: 2,
    cpuUsage: "0%",
    memUsage: "75.7%",
    disabled: false,
    ip: "172.19.0.3",
    version: "2.1.1",
    url: "http://judge-server:8080",
    lastHeartbeat: "2025-6-5 19:25:02",
    createTime: "2024-5-15 18:11:05"
  },
  {
    status: "Abnormal",
    hostname: "e8d668318259",
    taskNum: 0,
    cpuCore: 2,
    cpuUsage: "0%",
    memUsage: "91.5%",
    disabled: true,
    ip: "152.136.155.83",
    version: "2.1.1",
    url: "http://judge-server:8080",
    lastHeartbeat: "2025-5-17 09:06:17",
    createTime: "2024-9-26 20:07:10"
  }
]);

function handleDelete(row) {
  ElMessageBox.confirm(`确定要删除服务器 ${row.hostname} 吗？`, "提示", {
    type: "warning"
  })
    .then(() => {
      serverList.value = serverList.value.filter(
        s => s.hostname !== row.hostname
      );
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
.el-tag {
  font-size: 14px;
}
</style>
