<template>
  <div class="app-container">
    <el-table
      style="width: 100%"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        align="center"
        width="80"
        :label="$t('table.id')"
      >
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        width="180"
        :label="$t('table.date')"
      >
        <template slot-scope="{row}">
          <span>
            {{ row.timestamp | parseTime("{y}-{m}-{d} {h}:{i}") }}
          </span>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        width="120"
        :label="$t('table.author')"
      >
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="100"
        :label="$t('table.importance')"
      >
        <template slot-scope="{row}">
          <SvgIcon
            class="meta-item__icon"
            icon-class="star"
            v-for="n in + row.importance"
            :key="n"
          />
        </template>
      </el-table-column>

      <el-table-column
        class-name="status-col"
        width="110"
        :label="$t('table.status')"
      >
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column
        min-width="300"
        :label="$t('table.title')"
      >
        <template slot-scope="{row}">
          <template v-if="row.edit">
            <el-input
              class="edit-input"
              size="small"
              v-model="row.title"
            />
            <el-button
              class="cancel-btn"
              size="small"
              icon="el-icon-refresh"
              type="warning"
              @click="cancelEdit(row)"
            >
              {{ $t('table.cancel') }}
            </el-button>
          </template>
          <span v-else>{{ row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        width="120"
        :label="$t('table.actions')"
      >
        <template slot-scope="{row}">
          <el-button
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            v-if="row.edit"
            @click="confirmEdit(row)"
          >
            Ok
          </el-button>
          <el-button
            type="primary"
            size="small"
            icon="el-icon-edit"
            v-else
            @click="row.edit=!row.edit"
          >
            {{ $t('table.edit') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from "@/api/article";
export default {
  name: "InlineEditTable",
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "info",
        deleted: "danger"
      };
      return statusMap[status]
    }
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.listLoading = true;
      const { data } = await fetchList(this.listQuery);
      const items = data.items;
      this.list = items.map(v => {
        this.$set(v, "edit", false); // https://vuejs.org/v2/guide/reactivity.html
        v.originalTitle = v.title; //  will be used when user click the cancel botton
        return v
      });
      this.listLoading = false;
    },
    cancelEdit(row) {
      row.title = row.originalTitle;
      row.edit = false;
      this.$message({
        message: "The title has been restored to the original value",
        type: "warning"
      })
    },
    confirmEdit(row) {
      row.edit = false;
      row.originalTitle = row.title;
      this.$message({
        message: "The title has been edited",
        type: "success"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
