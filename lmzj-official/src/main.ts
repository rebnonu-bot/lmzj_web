import 'tdesign-vue-next/es/style/index.css';
import '@/style/theme.css';
import '@/style/index.less';

import TDesign from 'tdesign-vue-next';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(TDesign);
app.use(router);

app.mount('#app');
