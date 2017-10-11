import Main from './components/Main.vue'
import Information from './components/Information.vue'
import Search from './components/Search.vue'

export const routes = [
  {
    path: '/',
    name: 'Main',
    components: {
      default: Main
    }
  },
  {
    name: 'Information',
    path: '/information',
    components: {
      default: Information
    }
  },
  {
    name: 'Search',
    path: '/Search',
    components: {
      default: Search
    }
  },
]