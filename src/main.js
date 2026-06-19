import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import Home     from './views/Home.vue'
import Skills   from './views/Skills.vue'
import Projects from './views/Projects.vue'
import Chat     from './views/Chat.vue'
import Contact  from './views/Contact.vue'

const routes = [
  { path: '/',         component: Home     },
  { path: '/skills',   component: Skills   },
  { path: '/projects', component: Projects },
  { path: '/chat',     component: Chat     },
  { path: '/contact',  component: Contact  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

createApp(App).use(router).mount('#app')
