<template>
  <div class="components-container">
    <DragSelect
      style="width:500px;"
      placeholder="请选择"
      v-model="value"
      multiple
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </DragSelect>

    <div style="margin-top:30px;">
      <el-tag
        style="margin-right:15px;"
        v-for="item of value"
        :key="item"
      >
        {{ item }}
      </el-tag>
    </div>
  </div>
</template>

<script>
import DragSelect from "@/components/DragSelect";
export default {
  name: "DragSelectDemo",
  components: { DragSelect },
  data() {
    return {
      value: ['Apple', 'Banana', 'Orange'],
      options: [{
        value: 'Apple',
        label: 'Apple'
      }, {
        value: 'Banana',
        label: 'Banana'
      }, {
        value: 'Orange',
        label: 'Orange'
      }, {
        value: 'Pear',
        label: 'Pear'
      }, {
        value: 'Strawberry',
        label: 'Strawberry'
      }]
    }
  }
}
</script>

<style scoped>

</style>
