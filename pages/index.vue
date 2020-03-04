<template>
  <div>
   
    <div v-for="user in items" :key="user.id" style="box-sizing: border-box">
        <li class="contrib-person float-left col-6 pr-2 my-2 Box"  style="display: block;">
            <span class="d-block "><h3 class="border-bottom p-2 lh-condensed">
                <a data-hovercard-type="user" data-hovercard-url="/users/azoom-suzuki/hovercard" class="d-inline-block mr-2 float-left">
                    <img :src="user.avatar_url" class="avatar" alt="azoom-suzuki" width="38" height="38">
                </a>
                 <nuxt-link :to="user.id+''" class="text-normal">{{ user.login }}</nuxt-link>
             <span class="f6 d-block text-gray-light"><span class="cmeta">Type: {{ user.type }}&nbsp;&nbsp;
             <span class="text-green text-normal"></span>&nbsp;&nbsp;
             <span class="text-red text-normal"></span></span></span>
          </h3>
            </span>
        </li> 

      
    </div>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
import axios from "~/plugins/ky.js";
import { mapGetters } from 'vuex'

export default {
  layout: 'home',
  async asyncData({ store }) {
            if (store.getters['items'].length) {
                return
            }
            await store.dispatch('fetchItems')
            return {}
        },
        computed: {
            ...mapGetters(['items'])
        }
};
</script>
 
<style>
.pr-2 {
    padding-right: 8px!important;
}
.pl-2, .px-2 {
    padding-left: 8px!important;
}
.my-2 {
    margin-top: 8px!important;
    margin-bottom: 8px!important;
}

.mr-2 {
    margin-right: 8px!important;
}
.float-left {
    float: left!important;
}
.avatar {
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    border-radius: 3px;
}
.lh-condensed {
    line-height: 1.25!important;
}
.col-6 {
    width: 50%;
}
.d-block {
    display: block!important;
}
.Box {
    background-color: #fff;
    border: 1px solid #d1d5da;
    border-radius: 3px;
}
.f6 {
    font-size: 12px!important;
}
.text-gray-light {
    color: #6a737d!important;
}
.text-normal {
    font-weight: 400!important;
}
a {
    color: #0366d6;
    text-decoration: none;
}
</style>
