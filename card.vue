<template>
    <li class="card" @click="cardClicked">
        <div class="card__avatar">{{getAvatar(card)}}</div>
        <span class="card__name">{{card.name}}</span>
        <span class="card__species">{{species}}</span>
    </li>
</template>

<script>

export default {
    props: {
        card: {
            type: Object,
            required: true,
            species: String
        },
        viewPopup: Function
        
    },

    data() {
        return {
            avatar: '',
            name: '',
            species: ''
        }
    },
    
    methods: {
        getAvatar: function(card) {
         return this.card.name[0];
        },

        cardClicked(){
            //this.$emit("viewPopup", this.card.name);
            this.viewPopup(this.card.name)
        }
    },

    created() {
        axios.get(this.card.species)
        .then(response => {
            this.species = response.data.name;
        })
        .catch(error => {
            console.log(error);
        })

    }
}


</script>

<style lang="scss">

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 49%;
    background-color: #1A1A1A;
    padding-top: 92px;
    padding-bottom: 92px;
    border-radius: 8px;
    box-shadow: 0px 5px 13px 5px rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 5px 13px 5px rgba(37, 136, 167, 0.38);
    }
}

.card__avatar {
    background-color: aqua;
    text-transform: uppercase;
    font-weight: bold;
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    line-height: 56px; 
    border-radius: 50%;
    margin-bottom: 10px;

    &--popup {
        margin-right: 16px;
    }
}

.card__name {
    color: #ffffff;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 9px;
}

.card__species {
    font-size: 13px;
    line-height: 15px;
    color: #808080;
}

</style>
