<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <UserCard :user="user"/>
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="Activity" name="activity">
                <Activity/>
              </el-tab-pane>
              <el-tab-pane label="Timeline" name="timeline">
                <Timeline/>
              </el-tab-pane>
              <el-tab-pane label="Account" name="account">
                <Account :user="user"/>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Account from "./components/Account";
import Activity from "./components/Activity";
import Timeline from "./components/Timeline";
import UserCard from "./components/UserCard";
export default {
  name: "Profile",
  components: { Account, Activity, Timeline, UserCard },
  computed: {
    ...mapGetters(["name", "avatar", "roles"])
  },
  data() {
    return {
      user: {},
      activeTab: 'activity'
    }
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        role: this.roles.join(" | "),
        email: "admin@test.com",
        avatar: this.avatar
      }
    }
  }
}
</script>

<style scoped>

</style>
