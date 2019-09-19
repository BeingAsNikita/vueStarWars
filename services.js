import Vue from 'vue'
import _ from 'lodash';
import axios from 'axios'

export default  new Vue({
    data() {
      return{
        cards: [],
        selectedCard: {},
        show: false 
      }  
    },

    methods: {
        viewPopup(name) {
            let cardToPopup = _.find(this.cards, {name: name});
            this.selectedCard = cardToPopup;
            this.show = true;
        },
        closePopup(show) {
            this.show = false;
        }
    },

    created() {
        axios.get('https://swapi.co/api/people/?format=json')
        .then(response => {
            this.cards = response.data.results;
        })
        .catch(error => {
            console.log(error);
        })

    }
})