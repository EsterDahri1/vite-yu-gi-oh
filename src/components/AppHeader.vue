<script>
import AppLogo from "./AppLogo.vue";
export default {
    data() {
        return {
            title: 'Yu-gi-oh Api'
        }
    },
    components: {
        AppLogo
    }
}
</script>

<template>
    <header>
        <div class="p-2 d-flex align-items-center justify-content-start">
            <AppLogo />
            <h1 class="ps-2">{{ title }}</h1>
        </div>
    </header>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables.scss';

header {
    background-color: white;
    height: 70px;

    h1 {
        color: black;
    }
}
</style>