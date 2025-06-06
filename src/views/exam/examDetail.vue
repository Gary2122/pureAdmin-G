<!--
 * @Descripttion: 
 * @version: 
 * @Author: Garrison
 * @Date: 2025-06-06 11:37:52
 * @LastEditors: sueRimn
 * @LastEditTime: 2025-06-06 12:00:21
-->
<!-- 比赛详情 -->

<template>
  <div style="padding: 24px; background: #fff">
    <div style="font-size: 18px; font-weight: bold; margin-bottom: 20px">
      Edit Contest
    </div>
    <el-form
      :model="form"
      :rules="rules"
      ref="formRef"
      label-width="80px"
      label-position="top"
    >
      <el-form-item label="标题" prop="title" required>
        <el-input v-model="form.title" placeholder="标题" />
      </el-form-item>
      <el-form-item label="描述" prop="description" required>
        <el-input
          v-model="form.description"
          type="textarea"
          :autosize="{ minRows: 8, maxRows: 16 }"
          placeholder="描述"
        />
        <!-- 富文本可替换为el-input，或集成第三方富文本组件 -->
      </el-form-item>
      <el-row :gutter="24">
        <el-col :span="8">
          <el-form-item label="开始时间" prop="startTime" required>
            <el-date-picker
              v-model="form.startTime"
              type="datetime"
              placeholder="开始时间"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="结束时间" prop="endTime" required>
            <el-date-picker
              v-model="form.endTime"
              type="datetime"
              placeholder="结束时间"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" placeholder="密码" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="8">
          <el-form-item label="规则" prop="ruleType">
            <el-radio-group v-model="form.ruleType">
              <el-radio label="ACM">ACM</el-radio>
              <el-radio label="OI">OI</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="实时排名" prop="realtimeRank">
            <el-switch v-model="form.realtimeRank" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="visible">
            <el-switch v-model="form.visible" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="允许的IP范围">
        <div
          style="
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: center;
          "
        >
          <el-input
            v-for="(ip, idx) in form.ipRanges"
            :key="idx"
            v-model="form.ipRanges[idx]"
            placeholder="CIDR 网络"
            style="width: 220px"
          />
          <el-button type="primary" @click="addIpRange">增加</el-button>
          <el-button type="danger" @click="removeIpRange" danger
            >删除</el-button
          >
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { ElMessage } from "element-plus";

const formRef = ref();
const form = reactive({
  title: "",
  description: "",
  startTime: "",
  endTime: "",
  password: "",
  ruleType: "ACM",
  realtimeRank: true,
  visible: true,
  ipRanges: [""]
});

const rules = {
  title: [{ required: true, message: "请输入标题", trigger: "blur" }],
  description: [{ required: true, message: "请输入描述", trigger: "blur" }],
  startTime: [{ required: true, message: "请选择开始时间", trigger: "change" }],
  endTime: [{ required: true, message: "请选择结束时间", trigger: "change" }]
};

// 模拟回显数据
onMounted(() => {
  // 这里可以通过路由参数获取比赛ID，然后请求后端获取详情
  // 这里直接写死模拟数据
  form.title = "123";
  form.description = "123";
  form.startTime = "2025-06-05 21:59:27";
  form.endTime = "2025-06-07 00:00:00";
  form.password = "www.Xe0n.com";
  form.ruleType = "OI";
  form.realtimeRank = true;
  form.visible = true;
  form.ipRanges = [""];
});

function addIpRange() {
  form.ipRanges.push("");
}
function removeIpRange() {
  if (form.ipRanges.length > 1) form.ipRanges.pop();
}

function onSubmit() {
  formRef.value.validate(valid => {
    if (valid) {
      ElMessage.success("保存成功");
      // 提交逻辑
    }
  });
}
</script>
