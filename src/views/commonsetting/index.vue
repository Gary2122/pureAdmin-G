<script setup lang="ts">
import { ref, computed } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";

// 表头
const columns = [
  { type: "selection", width: 55 },
  { label: "ID", prop: "id", width: 60 },
  { label: "Username", prop: "username", width: 180 },
  { label: "Create Time", prop: "createTime", width: 180 },
  { label: "Last Login", prop: "lastLogin", width: 180 },
  { label: "Real Name", prop: "realName", width: 140 },
  { label: "Email", prop: "email", width: 200 },
  { label: "User Type", prop: "userType", width: 120 },
  { label: "Option", width: 120, fixed: "right", slot: "operation" }
];

// 模拟数据
const userList = ref([
  {
    id: 642,
    username: "兰馨语",
    createTime: "2025-3-15 18:20:07",
    lastLogin: "2025-4-8 21:18:47",
    realName: "123456",
    email: "12311111@qq.com",
    userType: "Regular User"
  },
  {
    id: 640,
    username: "计算机242谢锦绮",
    createTime: "2025-3-4 21:06:57",
    lastLogin: "2025-4-15 18:24:52",
    realName: "计算机242谢锦绮",
    email: "abc15176351229@qq.com",
    userType: "Regular User"
  },
  {
    id: 637,
    username: "计算机234赵志枫",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "2024-12-2 18:23:23",
    realName: "计算机234赵志枫",
    email: "test@test",
    userType: "Regular User"
  },
  {
    id: 636,
    username: "计算机234章俊杰",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "2024-12-2 19:21:31",
    realName: "计算机234章俊杰",
    email: "test@test",
    userType: "Regular User"
  },
  {
    id: 635,
    username: "计算机234王雨祺",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "2024-12-2 18:23:35",
    realName: "计算机234王雨祺",
    email: "test@test",
    userType: "Regular User"
  },
  {
    id: 634,
    username: "计算机234王美琦",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "2024-12-2 18:09:28",
    realName: "计算机234王美琦",
    email: "test@test",
    userType: "Regular User"
  },
  {
    id: 633,
    username: "计算机234菅红江",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "Invalid date",
    realName: "计算机234菅红江",
    email: "test@test",
    userType: "Regular User"
  },
  {
    id: 632,
    username: "计算机234曹崇凌",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "2024-12-2 18:23:50",
    realName: "计算机234曹崇凌",
    email: "test@test",
    userType: "Regular User"
  },
  {
    id: 631,
    username: "计算机234毕佳诺",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "2024-12-2 13:15:53",
    realName: "计算机234毕佳诺",
    email: "test@test",
    userType: "Regular User"
  },
  {
    id: 630,
    username: "计算机234罗凯夫",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "2024-12-2 18:20:12",
    realName: "计算机234罗凯夫",
    email: "test@test",
    userType: "Regular User"
  },
  {
    id: 642,
    username: "兰馨语",
    createTime: "2025-3-15 18:20:07",
    lastLogin: "2025-4-8 21:18:47",
    realName: "123456",
    email: "12311111@qq.com",
    userType: "Regular User"
  },
  {
    id: 640,
    username: "计算机242谢锦绮",
    createTime: "2025-3-4 21:06:57",
    lastLogin: "2025-4-15 18:24:52",
    realName: "计算机242谢锦绮",
    email: "abc15176351229@qq.com",
    userType: "Regular User"
  },
  {
    id: 637,
    username: "计算机234赵志枫",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "2024-12-2 18:23:23",
    realName: "计算机234赵志枫",
    email: "test@test",
    userType: "Regular User"
  },
  {
    id: 636,
    username: "计算机234章俊杰",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "2024-12-2 19:21:31",
    realName: "计算机234章俊杰",
    email: "test@test",
    userType: "Regular User"
  },
  {
    id: 635,
    username: "计算机234王雨祺",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "2024-12-2 18:23:35",
    realName: "计算机234王雨祺",
    email: "test@test",
    userType: "Regular User"
  },
  {
    id: 634,
    username: "计算机234王美琦",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "2024-12-2 18:09:28",
    realName: "计算机234王美琦",
    email: "test@test",
    userType: "Regular User"
  },
  {
    id: 633,
    username: "计算机234菅红江",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "Invalid date",
    realName: "计算机234菅红江",
    email: "test@test",
    userType: "Regular User"
  },
  {
    id: 632,
    username: "计算机234曹崇凌",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "2024-12-2 18:23:50",
    realName: "计算机234曹崇凌",
    email: "test@test",
    userType: "Regular User"
  },
  {
    id: 631,
    username: "计算机234毕佳诺",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "2024-12-2 13:15:53",
    realName: "计算机234毕佳诺",
    email: "test@test",
    userType: "Regular User"
  },
  {
    id: 630,
    username: "计算机234罗凯夫",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "2024-12-2 18:20:12",
    realName: "计算机234罗凯夫",
    email: "test@test",
    userType: "Regular User"
  },
  {
    id: 630,
    username: "计算机234罗凯夫",
    createTime: "2024-12-2 13:48:14",
    lastLogin: "2024-12-2 18:20:12",
    realName: "计算机234罗凯夫",
    email: "test@test",
    userType: "Regular User"
  }
]);

// 搜索
const searchKey = ref("");
const filteredList = computed(() => {
  if (!searchKey.value) return userList.value;
  return userList.value.filter(
    u =>
      u.username.includes(searchKey.value) ||
      u.realName.includes(searchKey.value) ||
      u.email.includes(searchKey.value)
  );
});

// 分页
const currentPage = ref(1);
const pageSize = ref(10);
const total = computed(() => filteredList.value.length);
const pagedList = computed(() =>
  filteredList.value.slice(
    (currentPage.value - 1) * pageSize.value,
    currentPage.value * pageSize.value
  )
);

// 多选
const multipleSelection = ref([]);
const handleSelectionChange = val => {
  multipleSelection.value = val;
};

// 编辑、删除
const dialogVisible = ref(false);
const editForm = ref({});
const editFormRef = ref();
const isEdit = ref(false);

const userTypeOptions = [
  { label: "Regular User", value: "Regular User" },
  { label: "Admin", value: "Admin" }
];
const questionLimitOptions = [
  { label: "None", value: "None" },
  { label: "Level 1", value: "Level 1" },
  { label: "Level 2", value: "Level 2" }
];

const defaultEditForm = {
  username: "",
  realName: "",
  email: "",
  password: "",
  userType: "Regular User",
  questionLimit: "None",
  twoFactor: false,
  openApi: false,
  disabled: false
};

function handleEdit(row) {
  isEdit.value = true;
  editForm.value = {
    ...defaultEditForm,
    ...row
  };
  dialogVisible.value = true;
}
function handleDialogClose() {
  dialogVisible.value = false;
}
function handleDialogSave() {
  editFormRef.value.validate(valid => {
    if (valid) {
      // 更新userList
      const idx = userList.value.findIndex(u => u.id === editForm.value.id);
      if (idx !== -1) {
        userList.value[idx] = { ...userList.value[idx], ...editForm.value };
      }
      ElMessage.success("保存成功");
      dialogVisible.value = false;
    }
  });
}

const editFormRules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  realName: [{ required: true, message: "请输入真实姓名", trigger: "blur" }],
  email: [
    { required: true, message: "请输入邮箱", trigger: "blur" },
    { type: "email", message: "邮箱格式不正确", trigger: "blur" }
  ]
};

function handleDelete(row) {
  ElMessageBox.confirm(`确定要删除用户 ${row.username} 吗？`, "提示", {
    type: "warning"
  })
    .then(() => {
      userList.value = userList.value.filter(u => u.id !== row.id);
      ElMessage.success("删除成功");
    })
    .catch(() => {});
}
</script>

<template>
  <div style="padding: 16px; background: #fff">
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      "
    >
      <div style="font-size: 20px; font-weight: bold">用户</div>
      <el-input
        v-model="searchKey"
        placeholder="Keywords"
        clearable
        style="width: 260px"
      />
    </div>
    <el-table
      :data="pagedList"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      row-class-name="custom-row"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="id" label="ID" width="100" />
      <el-table-column prop="username" label="Username" />
      <el-table-column prop="createTime" label="Create Time" width="180" />
      <el-table-column prop="lastLogin" label="Last Login" width="180" />
      <el-table-column prop="realName" label="Real Name" width="140" />
      <el-table-column prop="email" label="Email" />
      <el-table-column prop="userType" label="User Type" width="120" />
      <el-table-column label="Option" width="160" fixed="right">
        <template #default="{ row }">
          <el-button link type="primary" size="small" @click="handleEdit(row)"
            >编辑</el-button
          >
          <el-button link type="danger" size="small" @click="handleDelete(row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 16px; text-align: right">
      <el-pagination
        v-model:current-page="currentPage"
        :page-size="pageSize"
        :total="total"
        layout="prev, pager, next"
        background
      />
    </div>
    <!-- 编辑用户信息Dialog -->
    <el-dialog
      v-model="dialogVisible"
      title="用户信息"
      width="700px"
      @close="handleDialogClose"
    >
      <el-form
        :model="editForm"
        :rules="editFormRules"
        ref="editFormRef"
        label-width="110px"
        label-position="left"
        style="margin-top: 16px"
      >
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="用户名" prop="username" required>
              <el-input v-model="editForm.username" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="真实姓名" prop="realName" required>
              <el-input v-model="editForm.realName" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="用户邮箱" prop="email" required>
              <el-input v-model="editForm.email" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户密码" prop="password">
              <el-input
                v-model="editForm.password"
                type="password"
                show-password
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="用户类型" prop="userType">
              <el-select v-model="editForm.userType" style="width: 100%">
                <el-option
                  v-for="item in userTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="问题权限" prop="questionLimit">
              <el-select
                v-model="editForm.questionLimit"
                style="width: 100%"
                disabled
              >
                <el-option
                  v-for="item in questionLimitOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="双因素认证">
              <el-switch v-model="editForm.twoFactor" />
            </el-form-item>
          </el-col>
          <el-col :span="6" style="display: flex; align-items: center">
            <span style="margin-right: 8px">Open Api</span>
            <el-switch
              v-model="editForm.openApi"
              active-color="#F56C6C"
              inactive-color="#dcdfe6"
            />
          </el-col>
          <el-col :span="6">
            <el-form-item label="是否禁用">
              <el-switch v-model="editForm.disabled" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleDialogSave">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

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
<style scoped></style>
