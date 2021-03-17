<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="use clipboard  directly" name="directly">
        <el-input
          v-model="inputData"
          placeholder="Please input"
          style="width: 400px;max-width: 100%;"
        />
        <el-button
          type="primary"
          icon="el-icon-document"
          @click="handleCopy(inputData,$event)"
        >
          copy
        </el-button>
      </el-tab-pane>
      <el-tab-pane label="use clipboard by v-directive" name="v-directive">
        <el-input
          v-model="inputData"
          placeholder="Please input"
          style="width: 400px;max-width: 100%;"
        />
        <el-button
          type="primary"
          icon="el-icon-document"
          v-clipboard:copy="inputData"
          v-clipboard:success="clipboardSuccess"
        >
          copy
        </el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import clip from "@/utils/clipboard"; // use clipboard directly
import clipboard from "@/directive/clipboard/index.js"; // use clipboard by v-directive
export default {
  name: "Clipboard",
  directives: {
    clipboard
  },
  data() {
    return {
      activeName: "directly",
      inputData: "帅比🐏，你真的好帅啊(☆▽☆)"
    }
  },
  methods: {
    handleCopy(text, event) {
      clip(text, event);
    },
    clipboardSuccess() {
      this.$message({
        message: "Copy successfully",
        type: "success",
        duration: 1500
      });
    }
  }
}
</script>

<style scoped>

</style>
