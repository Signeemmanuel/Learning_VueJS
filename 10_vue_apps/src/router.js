import { createRouter, createWebHistory } from 'vue-router';

import Home from './Pages/Home.vue'
import CalendarApp from './Pages/CalendarApp';
import DcHeros from './Pages/DcHeros';
import Markdown from './Pages/Markdown'
import Slider from './Pages/Slider';

const routes = [
    { path: '/', component: Home},
    { path: '/dc-heros', component: DcHeros }, 
    { path: '/calendar', component: CalendarApp },
    { path: '/markdown', component: Markdown},
    { path: '/slider', component: Slider },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router