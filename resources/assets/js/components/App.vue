<template>
    <div class="main">
        <div class="header-wrapper">
            <app-header></app-header>
        </div>
        <div class="menu-wrapper">
            <app-menu></app-menu>
        </div>
        <div class="main-block-wrapper">
            <div class="sidebar-wrapper">
                <app-sidebar></app-sidebar>
            </div>
            <div class="content-wrapper">
                <app-content></app-content>
            </div>
        </div>
        <div class="footer-wrapper">
            <app-footer></app-footer>
        </div>
    </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>

<script>

    import AppHeader from './Layout/Header.vue';
    import AppContent from './Layout/Content.vue';
    import AppFooter from './Layout/Footer.vue';
    import AppMenu from './Layout/Menu.vue';
    import AppSidebar from './Layout/Sidebar.vue';


    export default{
        name: 'Main',
        components: {
            AppHeader,
            AppContent,
            AppFooter,
            AppMenu,
            AppSidebar
        }
    }
</script>