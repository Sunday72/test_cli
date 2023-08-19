<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import api from '../common/api'

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

<template>
  <router-link to="/">Index</router-link>
  <router-link to="/about">About</router-link>
  <router-view></router-view>
  
  
  
  <!-- <div v-for="product in products" :key="product.id">
    <h5>{{ product.product_name }}</h5>
  </div> -->
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
