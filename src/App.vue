<script setup>
import { onMounted, ref, watchEffect, computed } from 'vue'
import api from './common/api'

let products = ref([])

watchEffect((products, async() => {
  console.log(products.value)
}))

onMounted(async() => {
  try{
    const {data} = await api('/products', 'get')
    products.value = data?.data.data
    console.log(data?.data.data)
  }catch(error){
    console.error("Error", error)
  }
})
</script>



<script>
import Home from './pages/index.vue'

export default {
  name: 'App',
  components: { Home }
}
</script>

<template>
  <Home/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
