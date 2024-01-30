import axios from 'axios';

const AxiosPlugin = {
  install(app) {
    app.config.globalProperties.$http = axios.create({
      baseURL: 'http://localhost:3000',
    });
  },
};

export default AxiosPlugin;
