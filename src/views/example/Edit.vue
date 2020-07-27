<template>
  <ArticleDetail :is-edit="true"/>
</template>

<script>
import ArticleDetail from "./components/ArticleDetail";
export default {
  name: "Edit",
  components: { ArticleDetail }
}
</script>

<style scoped>

</style>
