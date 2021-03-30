<template>
  <div class="app-container">
    <UploadExcelComponent
      :before-upload="beforeUpload"
      :on-success="handleSuccess"
    />
    <el-table
      style="width: 100%;margin-top:20px;"
      :data="tableData"
      border
      highlight-current-row
    >
      <el-table-column
        v-for="item of tableHeader"
        :key="item"
        :prop="item"
        :label="item"
      />
    </el-table>
  </div>
</template>

<script>
import UploadExcelComponent from "@/components/UploadExcelComponent";
export default {
  name: "UploadExcel",
  components: { UploadExcelComponent },
  data() {
    return {
      tableData: [],
      tableHeader: []
    }
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1

      if (isLt1M) {
        return true
      }

      this.$message({
        message: 'Please do not upload files larger than 1m in size.',
        type: 'warning'
      });
      return false
    },
    handleSuccess({ results, header }) {
      this.tableData = results;
      this.tableHeader = header;
    }
  }
}
</script>

<style scoped>

</style>
