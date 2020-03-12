<template>
  <div>
    <list v-bind:users="users"></list>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
import { mapGetters, mapActions } from "vuex";
import list from "~/components/list-user.vue";
import { commit } from 'vuex-pathify'
export default {
  components: {
    list
  },
  layout: "home",
  async mounted() {
    const userCache = localStorage.getItem("users");
    if (userCache && userCache !== "[]") {
      const users = JSON.parse(userCache);
      this.setUsers(users);
    } else {
      const users = await this.getUsers();
      localStorage.setItem("users", JSON.stringify(users));
    }
  },
  computed: {
    ...mapGetters(["users", "firstUser"])
  },
  methods: {
    ...mapActions({ getUsers: "getListUsers", setUsers: "setListUsers" })
  }
};
</script>

<style>
.pr-2 {
  padding-right: 8px !important;
}
.pl-2,
.px-2 {
  padding-left: 8px !important;
}
.my-2 {
  margin-top: 8px !important;
  margin-bottom: 8px !important;
}

.mr-2 {
  margin-right: 8px !important;
}
.float-left {
  float: left !important;
}
.avatar {
  display: inline-block;
  overflow: hidden;
  line-height: 1;
  vertical-align: middle;
  border-radius: 3px;
}
.lh-condensed {
  line-height: 1.25 !important;
}
.col-6 {
  width: 50%;
}
.d-block {
  display: block !important;
}
.Box {
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 3px;
}
.f6 {
  font-size: 12px !important;
}
.text-gray-light {
  color: #6a737d !important;
}
.text-normal {
  font-weight: 400 !important;
}
a {
  color: #0366d6;
  text-decoration: none;
}
</style>
