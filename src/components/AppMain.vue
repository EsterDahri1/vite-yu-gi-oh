<script>
import AppSelect from './AppSelect.vue';
import AppCardList from './AppCardList.vue';
import { state } from "../state.js";
export default {
    name: 'AppMain',
    emit: ['archetypeSearch'],
    data() {
        return {
            state
        }
    },

    components: {
        AppSelect,
        AppCardList
    },

    methods: {
        searchArchetype() {
            const urlArchetype = this.state.url + `&archetype= ${this.state.archetypeName}`;
            this.state.fetchCard(urlArchetype);
        }
    },
    created() {
        state.fetchCard(this.state.url);
        state.fetchArchetypes(this.state.urlArchetype)
    }

}
</script>

<template>
    <main>
        <div class="container">
            <AppSelect @archetypeSearch="searchArchetype" />

            <div class="container bg-white">
                <AppCardList />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

main {
    background-color: $ygoWarning;

}
</style>