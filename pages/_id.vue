<template>
<div>  
  <h1 class="red">Hello {{ data.login }}!</h1>
  <div>type: {{ data.type}}</div>
  <div>contributions: {{ data.contributions }}</div>
</div>
</template>

<script>
export default {
  layout: "home",
  asyncData(context) {
    // called every time before loading the component
    // as the name said, it can be async
    // Also, the returned object will be merged with your data object
    return { name: "World" };
  },
  computed: {
    items() { return this.$store.state.items },
    data() {
      const data = this.items.find(
        user => user.id == this.$route.params.id
      );
      return data || {}
    }
  },
  fetch() {
    // The `fetch` method is used to fill the store before rendering the page
  },
  head() {
    // Set Meta Tags for this Page
  }
  // and more functionality to discover
};
</script>

<style>
.red {
  color: red;
}
</style>
