import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import AxiosPlugin from '../src/axios-plugin';
import './main.css';

const app = createApp(App);

app.provide('http', app.config.globalProperties.$http);
app.use(AxiosPlugin);
app.use(router);

app.mount('#app');
