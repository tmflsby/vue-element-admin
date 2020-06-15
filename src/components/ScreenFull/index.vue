<template>
  <div>
    <SvgIcon :icon-class="isFullScreen ? 'exit-fullscreen' : 'fullscreen'" @click="click"/>
  </div>
</template>

<script>
import screenfull from "screenfull";
export default {
  name: "ScreenFull",
  data() {
    return {
      isFullScreen: false
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    click() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: "you browser can not work",
          type: "warning"
        });
        return false
      }
      screenfull.toggle();
    },
    change() {
      this.isFullScreen = screenfull.isFullscreen;
    },
    init() {
      if (screenfull.isEnabled) {
        screenfull.on("change", this.change);
      }
    },
    destroy() {
      if (screenfull.isEnabled) {
        screenfull.off("change", this.change)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.screenfull-svg {
  display: inline-block;
  cursor: pointer;
  fill: #5a5e66;;
  width: 20px;
  height: 20px;
  vertical-align: 10px;
}
</style>
