import { createApp } from 'vue'
import myDialog from '@/components/myDialog'
import NavHeader from '@/components/NavHeader'
import menuMain from './components/menuMain.vue'
import App from './App.vue'

export default {
    myDialog,
    NavHeader,
    menuMain
}

createApp(App).mount('#app')