<script>
import { state } from "../state.js";
export default {
    name: 'AppCard',
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

<template>
    <div class="col" v-for="card in cards">
        <div class="card">
            <img :src="card.card_images[0].image_url" alt="" class="card-img-top">
            <div class="card-body">
                <div class="h-100 d-flex flex-column justify-content-between">
                    <div class="name">{{ card.name }}</div>
                    <div class="archetype">{{ card.archetype }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>