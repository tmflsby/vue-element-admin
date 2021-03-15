<template>
  <div class="dashboard-editor-container">
    <div class="clearfix">
      <PanThumb :image="avatar" style="float: left;">
        Your roles:
        <span
          class="pan-info-roles"
          v-for="item in roles"
          :key="item"
        >
          {{ item }}
        </span>
      </PanThumb>
      <GithubCorner class="github-corner"/>
      <div class="info-container">
        <span class="display_name">{{ name }}</span>
        <span style="font-size:20px;padding-top:20px;display:inline-block;">
          Editor's Dashboard
        </span>
      </div>
    </div>
    <div>
      <img class="emptyGif" :src="emptyGif" alt="">
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PanThumb from "@/components/PanThumb";
import GithubCorner from "@/components/GithubCorner";
export default {
  name: "Editor",
  components: { PanThumb, GithubCorner },
  data() {
    return {
      emptyGif: "https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3"
    }
  },
  computed: {
    ...mapGetters(["name", "avatar", "roles"])
  }
}
</script>

<style lang="scss" scoped>
.emptyGif {
  display: block;
  width: 45%;
  margin: 0 auto;
}

.dashboard-editor-container {
  background-color: #e3e3e3;
  min-height: calc(100vh - 85px);
  padding: 50px 60px 0;
  .github-corner {
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
  }
  .pan-info-roles {
    font-size: 12px;
    font-weight: 700;
    color: #333;
    display: block;
  }
  .info-container {
    position: relative;
    margin-left: 190px;
    height: 150px;
    line-height: 200px;
    .display_name {
      font-size: 48px;
      line-height: 48px;
      color: #212121;
      position: absolute;
      top: 25px;
    }
  }
}
</style>
