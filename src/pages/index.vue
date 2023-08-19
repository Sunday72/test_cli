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
  <div>
    <h5>{{ count }}</h5>
    <button @click="count--">-</button>
    <button @click="count = 0">reset</button>
    <button @click="count++">+</button>
  </div>
  <Card />
  
  <div v-for="product in products" :key="product.id">
    <h5>{{ product.product_name }}</h5>
  </div>
</template>

<script>
import Card from '../components/Card'

export default {
  name: 'App',
  components: { Card },
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
