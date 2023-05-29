<template>
    <aside class="menu" v-show="isMenuVisible">
        <span class="text-white d-flex justify-content-center mt-3 text-uppercase" style="font-size: 1.150rem;">Menu Toggle</span>
        <hr style="border: 1px solid rgba(255,255,255, .06); width: 100%;">
    </aside>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'Menu',
        computed: mapState(['isMenuVisible'])
    }
</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);
        
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>