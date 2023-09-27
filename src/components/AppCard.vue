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
            <img src="../assets/img/Yu-Gi-Oh!.png" alt="yuGiOh card" class="card-img-top">
            <div class="card-body">
                <div class="name">
                    {{ card.name }}
                </div>
                <div class="archetype">
                    {{ card.archetype }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>