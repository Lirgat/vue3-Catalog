import { createApp } from 'vue'
import myDialog from '@/components/myDialog'
import NavHeader from '@/components/NavHeader'
import menuMain from './components/menuMain.vue'
import menuCatalog from './components/menuCatalog.vue'
import App from './App.vue'

export default {
    myDialog,
    NavHeader,
    menuMain,
    menuCatalog
}

createApp(App).mount('#app') 