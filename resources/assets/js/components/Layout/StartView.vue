<template>
    <div class="start">
        <video class="start__video" autoplay muted loop>
            <source src="../../../images/charts.mp4" type='video/mp4;'>
        </video>
        <span class="start__logo">山东</span>
        <h1 class="start__text">Система аналізу інноваційної діяльності провінції Шаньдун</h1>
        <router-link :to="{name: 'analyses'}" class="start__link">перейти к анализу</router-link>
        <div class="start__overlay"></div>
    </div>
</template>


<script>

    export default{
        name: 'StartView'
    }
</script>