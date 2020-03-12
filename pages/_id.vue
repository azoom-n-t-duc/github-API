<template>
  <div>
    <h1 class="red">Hello {{ user.login }}!</h1>
    <div>type: {{ user.type }}</div>
    <div v-if="user.contributions">contributions: {{ user.contributions }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  layout: "home",
  data() {
    return {
      user: {}
    };
  },
  async mounted() {
  
  if (this.id !== null) {
    const userDetail = await this.getUserDetail();
    this.user = userDetail
  } else {
    const userCache = localStorage.getItem("users");
    const users = JSON.parse(userCache);
    this.setUser(users);
    
    users.forEach(element => {
    const userName = this.$route.params.id;
      if (userName === element.login) {
        this.user = element
      }
    });
  }
    

  },
  methods: {
    ...mapActions({ getUserDetail: "getUserDetail" , setUser:"setListUsers"})
  },
  computed: {
    ...mapGetters(["users", "id"])
  }
};
</script>

<style>
.red {
  color: red;
}
</style>
