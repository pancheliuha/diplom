<template>
    <transition name="fade">
        <router-view name="content"></router-view>
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
        name: 'Content'
    }
</script>