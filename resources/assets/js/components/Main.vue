<template>
    <div class="main">
        <router-view name="main"></router-view>
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

    export default {
        name: 'Main'
    }
</script>