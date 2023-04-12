import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './router';
import './index.css'

const app = createApp(App);
// Carregue as variáveis de ambiente antes de criar a instância do Vue
import.meta.env.VITE_API_URL && (app.config.globalProperties.$env = import.meta.env)

const pinia = createPinia();
app.use(pinia);
app.use(router);

app.mount('#app');

export { app }