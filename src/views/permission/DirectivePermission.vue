<template>
  <div class="app-container">
    <SwitchRoles @change="handleRolesChange"/>

    <div :key="key" style="margin-top:30px;">
      <div>
        <span class="permission-alert" v-permission="['admin']">
          Only
          <el-tag class="permission-tag" size="small">admin</el-tag> can see this
        </span>
        <el-tag class="permission-sourceCode" type="info" v-permission="['admin']">
          v-permission="['admin']"
        </el-tag>
      </div>

      <div>
        <span class="permission-alert" v-permission="['editor']">
          Only
          <el-tag class="permission-tag" size="small">editor</el-tag> can see this
        </span>
        <el-tag class="permission-sourceCode" type="info" v-permission="['editor']">
          v-permission="['editor']"
        </el-tag>
      </div>

      <div>
        <span class="permission-alert" v-permission="['admin','editor']">
          Both
          <el-tag class="permission-tag" size="small">admin</el-tag> and
          <el-tag class="permission-tag" size="small">editor</el-tag> can see this
        </span>
        <el-tag class="permission-sourceCode" type="info" v-permission="['admin','editor']">
          v-permission="['admin','editor']"
        </el-tag>
      </div>
    </div>

    <div :key="'checkPermission'+key" style="margin-top:60px;">
      <aside>
        {{ $t('permission.tips') }}
        <br> e.g.
      </aside>

      <el-tabs type="border-card" style="width:550px;">
        <el-tab-pane v-if="checkPermission(['admin'])" label="Admin">
          Admin can see this
          <el-tag class="permission-sourceCode" type="info">
            v-if="checkPermission(['admin'])"
          </el-tag>
        </el-tab-pane>

        <el-tab-pane v-if="checkPermission(['editor'])" label="Editor">
          Editor can see this
          <el-tag class="permission-sourceCode" type="info">
            v-if="checkPermission(['editor'])"
          </el-tag>
        </el-tab-pane>

        <el-tab-pane v-if="checkPermission(['admin','editor'])" label="Admin-OR-Editor">
          Both admin or editor can see this
          <el-tag class="permission-sourceCode" type="info">
            v-if="checkPermission(['admin','editor'])"
          </el-tag>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import permission from "@/directive/permission";
import SwitchRoles from "./components/SwitchRoles";
import checkPermission from "@/utils/permission";
export default {
  name: "DirectivePermission",
  components: { SwitchRoles },
  directives: { permission },
  data() {
    return {
      key: 1 // 为了能每次切换权限的时候重新初始化指令
    }
  },
  methods: {
    checkPermission,
    handleRolesChange() {
      this.key++;
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  ::v-deep .permission-alert {
    width: 320px;
    margin-top: 15px;
    background-color: #f0f9eb;
    color: #67c23a;
    padding: 8px 16px;
    border-radius: 4px;
    display: inline-block;
  }
  ::v-deep .permission-sourceCode {
    margin-left: 15px;
  }
  ::v-deep .permission-tag {
    background-color: #ecf5ff;
  }
}
</style>
