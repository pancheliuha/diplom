<template>
    <transition name="fade">
        <router-view name="sidebar"></router-view>
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

    export default{
        name: 'Sidebar'
    }
</script>