<script>
export default {
    name: 'AppMain',

}
</script>

<template>
    <main>
        <div class="container">
            <div class="py-4">
                <select name="archetype" id="archetype" class="form-select">
                    <option value="1" selected>Alien</option>
                    <option value="2">Noble Knight</option>
                    <option value="3">Taintet Treasure</option>
                    <option value="4">Melodious</option>
                    <option value="5">Archfiend</option>
                </select>
            </div>

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

    #archetype {
        width: 160px;
    }
}
</style>