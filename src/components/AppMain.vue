<script>
import AppSelect from './AppSelect.vue';
export default {
    name: 'AppMain',

    components: {
        AppSelect
    }

}
</script>

<template>
    <main>
        <div class="container">
            <AppSelect />

            <div class="container bg-white">
                <div class="p-5 row ">
                    <div class="col-2">
                        <div class="card">
                            ciao come va
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="card">
                            ciao come va
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="card">
                            ciao come va
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="card">
                            ciao come va
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="card">
                            ciao come va
                        </div>
                    </div>
                </div>
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