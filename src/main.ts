import { App, Plugin } from 'vue'
import RocIcon from './components/RocIcon/RocIcon.vue'

const RocIconPlugin: Plugin = {
  install(app: App) {
    app.component(RocIcon.name || '', RocIcon)
  },
}

export default RocIconPlugin
