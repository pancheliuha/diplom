<template>
    <transition
            appear
            name="fade"
    >
        <div class="main-wrapper">
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
    </transition>


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

    import AppContent from './Content.vue';
    import AppFooter from './Footer.vue';
    import AppMenu from './Menu.vue';
    import AppSidebar from './Sidebar.vue';


    export default{
        name: 'ContentWrapper',
        components: {
            AppContent,
            AppFooter,
            AppMenu,
            AppSidebar
        }
    }
</script>