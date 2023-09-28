import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
    url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0',
    urlArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cards: '',
    archetypeList: '',
    archetypeName: '',
    status: false,
    fetchCard(url) {
        axios
            .get(url)
            .then(response => {
                this.status = true
                this.cards = response.data.data
            })
            .catch(error => {

                this.error = error
            })
    },
    fetchArchetypes() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then(response => {
                this.archtypeList = response.data;
            })
            .catch(error => {

                this.error = error
            })
    }
})