import Main from './components/Main.vue'
import Information from './components/Information.vue'

export const routes = [
  {
    path: '/',
    name: 'Main',
    components: {
      default: Main
    }
  },
  {
    path: '/information',
    components: {
      default: Information
    }
  },
]