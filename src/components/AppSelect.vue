<script>
export default {
    name: 'AppSelect',
}
</script>

<template>
    <div class="py-4">
        <select name="archetype" id="archetype" class="form-select">
            <option value="1" selected>Alien</option>
            <option value="2">Noble Knight</option>
            <option value="3">Taintet Treasure</option>
            <option value="4">Melodious</option>
            <option value="5">Archfiend</option>
        </select>
    </div>
</template>

<style scoped>
#archetype {
    width: 160px;
}
</style>