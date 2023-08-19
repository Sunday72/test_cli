import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'

const Home = { template: "<div>Home</div>" }
const About = { template: "<div>About</div>" }

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

const app = Vue.createApp({})

app.use(router)
app.mount('#app')
