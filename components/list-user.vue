<template>
  <div>
   
    <div v-for="{id, avatar_url, login, type} in users" :key="id" style="box-sizing: border-box">
        <li class="contrib-person float-left col-6 pr-2 my-2 Box"  style="display: block;">
            <span class="d-block "><h3 class="border-bottom p-2 lh-condensed">
                <a data-hovercard-type="user" data-hovercard-url="/users/azoom-suzuki/hovercard" class="d-inline-block mr-2 float-left">
                    <img :src="avatar_url" class="avatar" alt="azoom-suzuki" width="38" height="38">
                </a>
                 <nuxt-link @click.native="click(id)" :to="login+''" class="text-normal">{{ login }}</nuxt-link>
             <span class="f6 d-block text-gray-light"><span class="cmeta">Type: {{ type }}&nbsp;&nbsp;
             <span class="text-green text-normal"></span>&nbsp;&nbsp;
             <span class="text-red text-normal"></span></span></span>
          </h3>
            </span>
        </li> 

      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    props: ['users'],
    methods: {
      click(id) {
       this.selectUserId(id)
      },
       ...mapActions({selectUserId: "selectUserId"})
    }
}
</script>