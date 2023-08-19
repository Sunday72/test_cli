<script setup>
import { onMounted, ref, watchEffect, computed } from 'vue'
import api from './common/api'
import Home from './pages/index.vue'
import About from './pages/about.vue'
import Login from './pages/auth/login.vue'

const routes = {
  '/': Home,
  '/about': About,
  '/login': Login,
}
 
const currentPath = ref(window.location.hash)

window.addEventListener('hashChange', () => {
  currentPath.value = window.location.hash
  console.log(currentPath.value)
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || Home
})

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
  <a href="/">Home</a> |
  <a href="/about">About</a> |
  <a href="/login">Login</a>
  <component :is="currentView" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
