<template>
  <ArticleDetail :is-edit="false"/>
</template>

<script>
import ArticleDetail from "./components/ArticleDetail";
export default {
  name: "Create",
  components: { ArticleDetail }
}
</script>

<style scoped>

</style>
