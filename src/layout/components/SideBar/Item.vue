<script>
export default {
  name: "Item",
  functional: true,
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  render(createElement, context) {
    const { icon, title } = context.props;
    const vnodes = [];

    if (icon) {
      if (icon.includes("el-icon")) {
        vnodes.push(`<i class=${[icon, "sub-el-icon"]}></i>`);
      } else {
        vnodes.push(`<SvgIcon icon-class=${icon}></SvgIcon>`);
      }
    }

    if (title) {
      vnodes.push(`<span slot="title">{{ ${title} }}</span>`);
    }

    return vnodes
  }
}
</script>

<style lang="scss" scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
