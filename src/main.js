import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css';
import AxiosPlugin from '../src/axios-plugin';
import axios from 'axios';

const app = createApp(App);

app.provide('http', app.config.globalProperties.$http);
app.use(AxiosPlugin);

app.use(router);

// Mount the app
app.mount('#app');
