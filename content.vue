<template>
    <div class="content">
        <input type="text" class="search" placeholder="Search by name">

        <ul class="content__list">
            <card v-for="card in cards" :key="card.name" :card="card"
            :viewPopup="viewPopup" ></card>
        </ul>
        <popup  :card="selectedCard"  v-if="show" @hidePopup="closePopup"></popup>
    </div>
</template>

<script>

import card from './card.vue'
import popup from './popup.vue'
import _ from 'lodash';

export default {
    data() {
        return {
            cards: [],
            selectedCard: {},
            show: false
        }
    },
    
    components: {
        card,
        popup
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
    
}

</script>

<style lang="scss">

.content {
    position: relative;
    min-height: 66.66vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

    background-color: #333333;

    padding-top: 105px;
    padding-bottom: 160px;

    padding-left: 10%;
    padding-right: 10%;
}

.search {
    font-size: 18px;
    line-height: 21px;

    color: #808080;
    border: none;
    border-bottom: 2px solid #808080;
    background-color: inherit;
    margin: 0 auto;
    padding-bottom: 7px;
    width: 800px;
    outline: none;
}

.content__list {
    margin: 0 auto;
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1216px;
}

</style>
