import DefaultSidebar from './Components/Application/DefaultSidebar.vue';
import DefaultContent from './Components/Application/DefaultContent.vue';
import StartView from './Components/Layout/StartView.vue';
import ContentWrapper from './Components/Layout/ContentWrapper.vue'




// Routes
const routes = [
    {
        name: 'main',
        path: '/',
        components: {
            main: StartView
        }

    },
    {
        name: 'analyses',
        path: 'analyses',
        components: {
            main: ContentWrapper
        },
        children: [

        ]

    }
];

export default routes
