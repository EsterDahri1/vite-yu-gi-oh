<script>
import { state } from '../state.js';
export default {
    name: 'AppCardList',

    data() {
        return {
            state
        };
    },
}
</script>

<template>
    <div class="cardsFound">
        Found {{ state.cards.length }} cards
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>