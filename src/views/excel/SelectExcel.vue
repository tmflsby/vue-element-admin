<template>
  <div class="app-container">
    <el-input
      style="width:350px;"
      prefix-icon="el-icon-document"
      v-model="filename"
      :placeholder="$t('excel.placeholder')"
    />
    <el-button
      style="margin-bottom:20px"
      type="primary"
      icon="el-icon-document"
      :loading="downloadLoading"
      @click="handleDownload"
    >
      {{ $t('excel.selectedExport') }}
    </el-button>
    <a href="https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html" target="_blank" style="margin-left:15px;">
      <el-tag type="info">Documentation</el-tag>
    </a>
    <el-table
      ref="multipleTable"
      v-loading="listLoading"
      :data="list"
      element-loading-text="拼命加载中"
      border
      fit
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" align="center"/>

      <el-table-column align="center" width="95" label="Id">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>

      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>

      <el-table-column align="center" width="110" label="Author">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.author }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" width="115" label="Readings">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>

      <el-table-column align="center" width="220" label="PDate">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from "@/api/article";
export default {
  name: "SelectExcel",
  data() {
    return {
      list: [],
      listLoading: true,
      multipleSelection: [],
      downloadLoading: false,
      filename: ""
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      fetchList().then(response => {
        this.list = response.data.items;
        this.listLoading = false;
      }).catch(error => {
        console.log(error);
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleDownload() {
      if (this.multipleSelection.length) {
        this.downloadLoading = true;
        import('@/vendor/ExportExcel').then(excel => {
          const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date'];
          const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time'];
          const list = this.multipleSelection;
          const data = this.formatJson(filterVal, list);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: this.filename
          });
          this.$refs.multipleTable.clearSelection();
          this.downloadLoading = false;
        }).catch(error => {
          console.log(error);
        });
      } else {
        this.$message({
          message: "Please select at least one item",
          type: "warning"
        });
      }
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>

<style scoped>

</style>
