<template>
    <div class="menu">
        <ul class="menu__list">
            <li class="menu__item" v-for="menuItem in menu">
                <router-link :to="{name: menuItem.routerLink}">{{ menuItem.name }}</router-link>
            </li>
        </ul>
    </div>
</template>


<script>

    const menu = [
        {
            name: 'На главную',
            routerLink: 'main'
        },
        {
            name: 'Таблицы показателей',
            routerLink: 'main'
        },
        {
            name: 'Сравнительные диаграммы',
            routerLink: 'main'
        },
        {
            name: 'Диаграммы',
            routerLink: 'main'
        },
        {
            name: 'Выберите регион',
            routerLink: 'main'
        }
    ];

    export default{
        name: 'Menu',
        data() {
            return {
                menu: menu
            }
        }
    }
</script>