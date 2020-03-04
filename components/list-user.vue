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
export default {
    props: ['items']
}
</script>