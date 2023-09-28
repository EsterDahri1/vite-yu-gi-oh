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
    }
}
</script>

<template>
    <div class="col">
        <div class="card border-0 rounded-0">
            <img :src="card.card_images[0].image_url" alt="yuGiOh card" class="card-img-top">
            <div class="card-body d-flex flex-column align-items-center text-center">
                <div class="name text-white text-uppercase pb-2">
                    <strong> {{ card.name }} </strong>
                </div>
                <div class="archetype text-black text-capitalize">
                    {{ card.archetype }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.col {
    width: calc(100% / 10 * 2);

    .card {
        background-color: $ygoWarning;
        width: 190px;
        height: 100%;

        img {
            width: 100%;
        }
    }
}
</style>