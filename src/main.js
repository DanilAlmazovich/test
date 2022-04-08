import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/app.css'
import axios from 'axios'
import router from "./router"
import moment from "moment"
import store from "./store"
import Layout from './layouts/Layout.vue'

const app = createApp(App)

app.component('layout', Layout)

app.config.globalProperties.$axios = axios
app.config.globalProperties.moment = moment

app.use(store).use(router).mount('#app')
