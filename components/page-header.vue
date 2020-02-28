<template>
  <div class="page-header">
    <div class="main-headline">
      <div class="inner">
        <h1 class="headline-main">{{title}}<br><span class="sub">{{titleJp}}</span></h1>
      </div><!--/inner-->
    </div><!--/main-headline-->
  </div>
</template>

<script>
import Rellax from 'rellax' //背景のロゴのパララックス

export default {
  props: ['title', 'title-jp'],
  mounted () {
    const rellax = new Rellax('.rellax')
  }
}
</script>
