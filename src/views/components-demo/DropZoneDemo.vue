<template>
  <div class="components-container">
    <aside>
      Based on<a class="link-type" href="https://github.com/rowanwins/vue-dropzone"> dropzone </a>.
      {{ $t('components.dropzoneTips') }}
    </aside>
    <div class="editor-container">
      <DropZone id="myVueDropzone" url="https://httpbin.org/post" @dropzone-removedFile="dropzoneR" @dropzone-success="dropzoneS"/>
    </div>
  </div>
</template>

<script>
import DropZone from "../../components/DropZone";
export default {
  name: "DropZoneDemo",
  components: { DropZone },
  methods: {
    dropzoneS(file) {
      console.log(file);
      this.$message({ message: 'Upload success', type: 'success' });
    },
    dropzoneR(file) {
      console.log(file);
      this.$message({ message: 'Delete success', type: 'success' });
    }
  }
}
</script>

<style scoped>

</style>
