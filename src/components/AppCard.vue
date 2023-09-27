<script>
import { state } from "../state.js";
export default {
    name: 'AppCard',
    props: {
        card: Object
    },
    data() {
        return {
            state
        };
    },
    created() {
        state.fetchCard();
    }
}
</script>

<template></template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>