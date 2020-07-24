<template>
  <div class="app-container">
    <aside style="margin-top:15px;">
      {{ $t('pdf.tips') }}
    </aside>
    <router-link target="_blank" to="/pdf/download">
      <el-button type="primary">
        {{ $t('pdf.clickDownload') }}
      </el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PDF"
}
</script>

<style scoped>

</style>
