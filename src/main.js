import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css';
import AxiosPlugin from './axios-plugin';

createApp(App).use(router, AxiosPlugin).mount('#app')
