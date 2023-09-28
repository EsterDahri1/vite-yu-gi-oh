<!-- 
All Card Archetypes
The Card Archetypes endpoint can be found at https://db.ygoprodeck.com/api/v7/archetypes.php.
This follows the same rate limiting procedures as the card lookup endpoint.
This simply returns all of the current Yu-Gi-Oh! Card Archetype Names we have stored in the database.
Use this to get a quick snapshot of all the Yu-Gi-Oh! Card Archtypes sorted by A-Z.
If any GET parameters are found in the call, then it will return an error. 
-->

<script>
import { state } from '../state.js';
export default {
    name: 'AppSelect',

    data() {
        return {
            state
        };
    }
}
</script>

<template>
    <div class="py-4">
        <select name="archetype" id="archetype" class="form-select" placeholder="Select an archetype"
            @change="$emit('archetypeSearch')" v-model="this.state.archetypeName">
            <option value="" disabled>Select an archetype</option>
            <option :value="archetype.archetypeName" v-for="archetype in state.archetypeList">{{ archetype.archetypeName
            }}</option>
        </select>
    </div>
</template>

<style scoped>
#archetype {
    width: 200px;
}
</style>