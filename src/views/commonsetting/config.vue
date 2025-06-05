<template>
  <div style="padding: 10px">
    <!-- SMTP设置 -->
    <el-card style="margin-bottom: 20px">
      <div style="font-size: 20px; font-weight: bold; margin-bottom: 10px">
        SMTP 设置
      </div>
      <el-form
        :model="smtpForm"
        :rules="smtpRules"
        ref="smtpFormRef"
        label-width="90px"
        label-position="left"
      >
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="服务器" prop="server" required>
              <el-input v-model="smtpForm.server" placeholder="smtp.163.com" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="端口" prop="port" required>
              <el-input v-model="smtpForm.port" placeholder="25" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="邮箱" prop="email" required>
              <el-input
                v-model="smtpForm.email"
                placeholder="18309847920@163.com"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="授权码" prop="password" required>
              <el-input
                v-model="smtpForm.password"
                placeholder="SMTP Server Password"
                show-password
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20" align="middle">
          <el-col :span="4">
            <el-form-item label="TLS">
              <el-switch v-model="smtpForm.tls" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button type="primary" @click="saveSmtp" style="margin-top: 10px"
              >Save</el-button
            >
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <!-- 网站设置 -->
    <el-card>
      <div style="font-size: 20px; font-weight: bold; margin-bottom: 10px">
        网站设置
      </div>
      <el-form
        :model="siteForm"
        :rules="siteRules"
        ref="siteFormRef"
        label-width="90px"
        label-position="left"
      >
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="基础 Url" prop="url" required>
              <el-input
                v-model="siteForm.url"
                placeholder="http://oj.foliageqbs.cn"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="名称" prop="name" required>
              <el-input v-model="siteForm.name" placeholder="XEON OJ" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="简称" prop="shortName" required>
              <el-input v-model="siteForm.shortName" placeholder="XEON OJ" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="页脚" prop="footer">
              <el-input
                v-model="siteForm.footer"
                type="textarea"
                placeholder="XEON OJ 2023"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20" align="middle">
          <el-col :span="8">
            <el-form-item label="是否允许注册" style="width: 200px">
              <el-switch
                v-model="siteForm.allowRegister"
                active-color="#F56C6C"
                inactive-color="#dcdfe6"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6" style="display: flex; align-items: center">
            <span style="margin-right: 8px">显示全部题目的提交</span>
            <el-switch
              v-model="siteForm.showAllSubmit"
              active-color="#13ce66"
              inactive-color="#dcdfe6"
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button type="primary" @click="saveSite" style="margin-top: 10px"
              >保存</el-button
            >
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";

const smtpFormRef = ref();
const smtpForm = ref({
  server: "",
  port: "",
  email: "",
  password: "",
  tls: true
});
const smtpRules = {
  server: [{ required: true, message: "请输入服务器", trigger: "blur" }],
  port: [{ required: true, message: "请输入端口", trigger: "blur" }],
  email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
  password: [{ required: true, message: "请输入授权码", trigger: "blur" }]
};

const siteFormRef = ref();
const siteForm = ref({
  url: "",
  name: "",
  shortName: "",
  footer: "",
  allowRegister: false,
  showAllSubmit: true
});
const siteRules = {
  url: [{ required: true, message: "请输入基础Url", trigger: "blur" }],
  name: [{ required: true, message: "请输入名称", trigger: "blur" }],
  shortName: [{ required: true, message: "请输入简称", trigger: "blur" }]
};

function saveSmtp() {
  smtpFormRef.value.validate((valid: boolean) => {
    if (valid) {
      ElMessage.success("SMTP设置已保存");
    }
  });
}
function saveSite() {
  siteFormRef.value.validate((valid: boolean) => {
    if (valid) {
      ElMessage.success("网站设置已保存");
    }
  });
}
</script>

<style scoped>
:deep(.el-form-item__label) {
  width: 120px !important;
}
.el-card {
  margin-bottom: 20px;
}
.el-form .el-form-item {
  margin-bottom: 18px;
}
</style>
