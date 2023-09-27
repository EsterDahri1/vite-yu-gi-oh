<script>
import { state } from '../state.js';
import AppCard from './AppCard.vue';
import AppLoader from './AppLoader.vue'
export default {
    name: 'AppCardList',

    data() {
        return {
            state
        };
    },
    created() {
        state.fetchCard();
    },
    components: {
        AppCard,
        AppLoader
    }
}
</script>

<template>
    <div class="p-5 row">
        <div class="cardsFound">
            Found {{ state.cards.length }} cards
        </div>

        <AppLoader v-if="!state.status" />

        <div class="row row-cols-2 g-3" v-else>
            <AppCard :card="card" v-for="card in state.cards" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.cardsFound {
    color: white;
    background-color: $ygoDark;
    padding: 1rem;
}
</style>