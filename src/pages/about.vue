<script setup>

</script>

<template>
  <h1>{{title}}</h1>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: "HAI :)",
      count: 0
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
