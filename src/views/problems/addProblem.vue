<template>
  <div>
    <div class="add-problem-container">
      <el-form
        :model="form"
        :rules="rules"
        ref="formRef"
        label-width="100px"
        class="problem-form"
      >
        <!-- 标题栏 -->
        <div class="form-title">添加问题</div>
        <!-- 基本信息 -->
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="题目ID" prop="displayId" required>
              <el-input v-model="form.displayId" placeholder="描述" />
            </el-form-item>
          </el-col>
          <el-col :span="18">
            <el-form-item label="题目" prop="title" required>
              <el-input v-model="form.title" placeholder="请输入题目标题" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />
        <el-form-item label="题目描述" prop="description" required>
          <el-input
            v-model="form.description"
            type="textarea"
            :autosize="{ minRows: 8, maxRows: 16 }"
            placeholder="请输入题目描述"
          />
        </el-form-item>
        <el-form-item label="输入描述" prop="inputDesc" required>
          <el-input
            v-model="form.inputDesc"
            type="textarea"
            :autosize="{ minRows: 8, maxRows: 16 }"
            placeholder="请输入题目输入描述"
          />
        </el-form-item>
        <el-form-item label="输出描述" prop="outputDesc" required>
          <el-input
            v-model="form.outputDesc"
            type="textarea"
            :autosize="{ minRows: 8, maxRows: 16 }"
            placeholder="请输入题目输出描述"
          />
        </el-form-item>
        <el-divider />
        <!-- 限制与标签 -->
        <el-row :gutter="20" class="row-limit">
          <el-col :span="6">
            <el-form-item label="时间限制(ms)" prop="timeLimit" required>
              <el-input v-model="form.timeLimit" placeholder="题目时间限制" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="内存限制(MB)" prop="memoryLimit" required>
              <el-input v-model="form.memoryLimit" placeholder="题目内存限制" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="难度" prop="difficulty" required>
              <el-select
                v-model="form.difficulty"
                placeholder="选择难度"
                style="width: 100%"
              >
                <el-option label="低" value="low" />
                <el-option label="中" value="medium" />
                <el-option label="高" value="high" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="row-tags">
          <el-col :span="4">
            <el-form-item label="是否可见">
              <el-switch v-model="form.visible" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="分享提交">
              <el-switch v-model="form.share" />
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="标签" prop="tags" required>
              <el-select
                v-model="form.tags"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="选择或输入标签"
                style="width: 100%"
              >
                <el-option
                  v-for="tag in tagOptions"
                  :key="tag"
                  :label="tag"
                  :value="tag"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="可选编程语言" prop="languages" required>
          <el-checkbox-group v-model="form.languages">
            <el-checkbox label="C" />
            <el-checkbox label="C++" />
            <el-checkbox label="Java" />
            <el-checkbox label="Python2" />
            <el-checkbox label="Python3" />
            <el-checkbox label="Golang" />
          </el-checkbox-group>
        </el-form-item>
        <el-divider />
        <!-- 样例 -->
        <div class="sample-section">
          <div
            v-for="(sample, idx) in form.samples"
            :key="idx"
            class="sample-card-wrap"
          >
            <el-card class="sample-card">
              <template #header>
                <span class="sample-title">Sample{{ idx + 1 }}</span>
                <el-button
                  v-if="form.samples.length > 1"
                  type="danger"
                  size="small"
                  @click="removeSample(idx)"
                  class="sample-delete-btn"
                  >删除</el-button
                >
              </template>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item
                    :label="'输入样例'"
                    :prop="'samples.' + idx + '.input'"
                    required
                  >
                    <el-input
                      v-model="sample.input"
                      type="textarea"
                      :autosize="{ minRows: 8, maxRows: 16 }"
                      placeholder="描述"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    :label="'输出样例'"
                    :prop="'samples.' + idx + '.output'"
                    required
                  >
                    <el-input
                      v-model="sample.output"
                      type="textarea"
                      :autosize="{ minRows: 8, maxRows: 16 }"
                      placeholder="描述"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-card>
          </div>
          <el-button type="primary" @click="addSample" class="add-sample-btn"
            >添加样例</el-button
          >
        </div>
        <el-divider />
        <!-- 提示 -->
        <el-form-item label="提示">
          <el-input
            v-model="form.hint"
            type="textarea"
            :autosize="{ minRows: 8, maxRows: 16 }"
            placeholder="描述"
          />
        </el-form-item>
        <el-divider />
        <!-- 代码模板 -->
        <div class="template-section">
          <div class="template-title">代码模板</div>
          <el-checkbox-group v-model="form.templates">
            <el-checkbox label="C" />
            <el-checkbox label="C++" />
            <el-checkbox label="Java" />
            <el-checkbox label="Python2" />
            <el-checkbox label="Python3" />
            <el-checkbox label="Golang" />
          </el-checkbox-group>
        </div>
        <el-divider />
        <!-- Special Judge -->
        <div class="special-judge-section">
          <el-checkbox v-model="form.specialJudge"
            >使用 Special Judge</el-checkbox
          >
          <el-upload
            v-if="form.specialJudge"
            action="#"
            :show-file-list="false"
            :before-upload="beforeUpload"
            class="special-judge-upload"
          >
            <el-button>选择文件</el-button>
          </el-upload>
        </div>
        <el-divider />
        <!-- 测试用例 -->
        <div class="testcase-section">
          <el-row :gutter="20">
            <el-col :span="4">
              <el-form-item label="测试类型">
                <el-radio-group v-model="form.testType">
                  <el-radio label="ACM">ACM</el-radio>
                  <el-radio label="OI">OI</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="IO类型">
                <el-radio-group v-model="form.ioType">
                  <el-radio label="Standard IO">Standard IO</el-radio>
                  <el-radio label="File IO">File IO</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="测试用例">
                <el-upload
                  action="#"
                  :show-file-list="false"
                  :before-upload="beforeUpload"
                  class="testcase-upload"
                >
                  <el-button>选择文件</el-button>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
          <div class="testcase-table-wrap">
            <el-table :data="[]" border style="width: 100%">
              <el-table-column prop="input" label="输入" />
              <el-table-column prop="output" label="输出" />
              <el-table-column prop="score" label="分数" />
              <el-table-column label="暂无数据">
                <template #default>暂无数据</template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <el-divider />
        <!-- 来源 -->
        <el-form-item label="来源">
          <el-input v-model="form.source" />
        </el-form-item>
        <!-- 保存按钮 -->
        <el-form-item>
          <el-button type="primary" @click="submit" class="save-btn"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";

const formRef = ref();
const form = reactive({
  displayId: "",
  title: "",
  description: "",
  inputDesc: "",
  outputDesc: "",
  timeLimit: 1000,
  memoryLimit: 256,
  difficulty: "low",
  visible: true,
  share: false,
  tags: [],
  languages: ["C", "C++", "Java", "Python2", "Python3", "Golang"],
  samples: [{ input: "", output: "" }],
  hint: "",
  templates: [],
  specialJudge: false,
  testType: "ACM",
  ioType: "Standard IO",
  source: ""
});

const tagOptions = ref(["动态规划", "贪心", "图论", "数据结构"]);

function validateSamples(
  rule: any,
  value: any,
  callback: (error?: string) => void
) {
  if (!value || value.length === 0) {
    callback("请至少添加一个样例");
  } else {
    for (const s of value) {
      if (!s.input || !s.output) {
        callback("样例输入输出不能为空");
        return;
      }
    }
    callback();
  }
}
function validateNumberRequired(
  rule: any,
  value: any,
  callback: (error?: string) => void
) {
  if (value === undefined || value === null || value === "") {
    callback("该项为必填项");
  } else if (isNaN(Number(value)) || Number(value) < 1) {
    callback("必须为大于0的数字");
  } else {
    callback();
  }
}

const rules: Record<string, any> = {
  displayId: [{ required: true, message: "请输入显示ID", trigger: "blur" }],
  title: [{ required: true, message: "请输入题目", trigger: "blur" }],
  description: [{ required: true, message: "请输入描述", trigger: "blur" }],
  inputDesc: [{ required: true, message: "请输入输入描述", trigger: "blur" }],
  outputDesc: [{ required: true, message: "请输入输出描述", trigger: "blur" }],
  timeLimit: [{ validator: validateNumberRequired, trigger: "blur" }],
  memoryLimit: [{ validator: validateNumberRequired, trigger: "blur" }],
  difficulty: [{ required: true, message: "请选择难度", trigger: "change" }],
  tags: [{ required: true, message: "请选择标签", trigger: "change" }],
  languages: [
    { required: true, message: "请选择可选编程语言", trigger: "change" }
  ],
  samples: [{ validator: validateSamples, trigger: "blur" }]
};

function addSample() {
  form.samples.push({ input: "", output: "" });
}
function removeSample(idx: number) {
  if (form.samples.length > 1) {
    form.samples.splice(idx, 1);
  }
}
function beforeUpload(file: File) {
  // 这里可以做文件类型/大小校验
  return true;
}
function submit() {
  formRef.value.validate((valid: boolean) => {
    if (!valid) {
      ElMessage.error("请完善表单信息");
      return;
    }
    // 提交逻辑
    ElMessage.success("保存成功（模拟）");
  });
}
</script>

<style scoped>
:deep(.el-form-item__label) {
  width: 120px !important;
}
.add-problem-container {
  background: #fff;
  padding: 32px 24px 40px 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  margin: 0 auto;
}
.problem-form {
  background: transparent;
  box-shadow: none;
  padding: 0;
}
.form-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 18px;
  color: #222;
}
.el-form-item {
  margin-bottom: 22px;
}
.el-divider {
  margin: 18px 0;
}
.row-limit {
  margin-bottom: 0;
}
.row-tags {
  margin-bottom: 0;
}
.sample-section {
  margin-bottom: 18px;
}
.sample-card-wrap {
  margin-bottom: 16px;
}
.sample-card {
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  border: 1px solid #f0f0f0;
}
.sample-title {
  font-weight: bold;
  font-size: 16px;
}
.sample-delete-btn {
  float: right;
  margin-left: 8px;
}
.add-sample-btn {
  margin-top: 8px;
  margin-bottom: 0;
}
.template-section {
  margin-bottom: 18px;
}
.template-title {
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 15px;
}
.special-judge-section {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 18px;
}
.special-judge-upload {
  margin-left: 12px;
}
.testcase-section {
  margin-bottom: 18px;
}
.testcase-upload {
  margin-left: 8px;
}
.testcase-table-wrap {
  margin-top: 10px;
  background: #fafbfc;
  border-radius: 4px;
  padding: 8px 0 0 0;
}
.save-btn {
  margin-top: 10px;
  min-width: 90px;
  font-size: 16px;
}
</style>
