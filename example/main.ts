import { createApp } from 'vue'
import App from './App.vue'
import RocIcon from '../src/main'

const app = createApp(App)

app.use(RocIcon)

app.mount('#app')
