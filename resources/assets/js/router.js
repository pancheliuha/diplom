import DefaultSidebar from './Components/Application/DefaultSidebar.vue';
import DefaultContent from './Components/Application/DefaultContent.vue';



// Routes
const routes = [
    {
        name: 'main',
        path: '/',
        components: {
            sidebar: DefaultSidebar,
            content: DefaultContent
        }

    }
]

export default routes
