import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
    url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',
    cards: '',
    status: false,
    fetchCard() {
        axios
            .get(this.url)
            .then(response => {
                this.status = true
                this.cards = response.data.data
            })
            .catch(error => {
                console.log(error);
            })
    }
})