import axios from 'axios';

const AxiosPlugin = {
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'http://localhost:3000',
    });
  },
};

export default AxiosPlugin;