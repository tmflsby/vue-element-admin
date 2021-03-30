<template>
  <div style="display:inline-block;">
    <label
      class="radio-label"
      style="padding-left:0;"
    >
      Filename:
    </label>
    <el-input
      style="width:345px;"
      placeholder="Please enter the file name (default excel-list)"
      prefix-icon="el-icon-document"
      v-model="filename"
    />
  </div>
</template>

<script>
export default {
  name: "FilenameOption",
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    filename: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit("input", val)
      }
    }
  }
}
</script>

<style scoped>

</style>
