<template>
  <div class="errPage-container">
    <ErrorA/>
    <ErrorB/>
    <h3>{{ $t('errorLog.tips') }}</h3>
    <aside>
      {{ $t('errorLog.description') }}
      <a target="_blank" class="link-type" href="https://panjiachen.github.io/vue-element-admin-site/guide/advanced/error.html">
        {{ $t('errorLog.documentation') }}
      </a>
    </aside>
    <a href="#">
      <img src="https://wpimg.wallstcn.com/360e4842-4db5-42d0-b078-f9a84a825546.gif" alt="">
    </a>
  </div>
</template>

<script>
import ErrorA from "./components/ErrorA";
import ErrorB from "./components/ErrorB";
export default {
  name: "ErrorLogPage",
  components: { ErrorA, ErrorB }
}
</script>

<style lang="scss" scoped>
.errPage-container {
  padding: 30px;
}
</style>
