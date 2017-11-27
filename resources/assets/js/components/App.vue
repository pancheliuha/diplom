<template>
   <transition
           appear
           name="fade"
   >
      <main-view></main-view>
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

    import MainView from './Main.vue';



    export default{
        name: 'Main',
        components: {
            MainView
        }
    }
</script>