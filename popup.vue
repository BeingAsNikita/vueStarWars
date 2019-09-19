<template>
    <div class="popup">
        <button type="button" class="close-btn" @click="closeBtnClicked"></button>
        <div class="popup__content">
            <div class="popup__header">
                    <div class="card__avatar card__avatar--popup">F</div>
                    <span class="card__name">{{card.name}}</span>
            </div>
            <div class="popup__list">
                <li class="list__item">
                    <span class="item__title">Birth year </span>
                    <span class="item__value">{{card.birth_year}}</span>
                </li>

                <li class="list__item">
                    <span class="item__title">Species</span>
                    <span class="item__value">{{species}}</span>
                </li>

                <li class="list__item">
                    <span class="item__title">Gender</span>
                    <span class="item__value">{{card.gender}}</span>
                </li>

                <li class="list__item">
                    <span class="item__title">Homeworld</span>
                    <span class="item__value">{{card.homeworld}}</span>
                </li>

                <li class="list__item">
                    <span class="item__title">Films</span>
                    <span class="item__value">{{card.films}}</span>
                </li>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        card: {
            type: Object,
            required: true,
            show: Boolean,
            species: String
        }

    },
    methods: {
        closeBtnClicked() {
            this.$emit("hidePopup", this.show);
        }
    },

    data() {
        return {
            species: ''
        }  
    }

}


</script>

<style lang="scss">
.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -400px;
    width: 800px;
    padding: 80px;
    background-color: #1A1A1A;

    border-radius: 8px;
    box-shadow: 0px 5px 13px 5px rgba(0, 0, 0, 0.4);
}

.popup__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 2px solid #808080;

    padding-bottom: 80px;
}

.popup__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    padding-top: 72px;
    list-style: none;

    font-size: 18px;
    line-height: 21px;
}

.list__item {
    margin-right: 82px;
    margin-bottom: 20px;

    &:last-child {
        margin-right: 0;
        margin-bottom: 0;
    }
}

.item__title {
    color: #808080;
    padding-left: 29px;
    margin-right: 24px;

}

.item__value {
    color: #ffffff;
    font-weight: bold;
}

.close-btn {
    background-color: inherit;
    border: none;
    width: 20px;
    height: 20px;

    position: absolute;
    top: 22px;
    right: 22px;

    &:before,
    &:after {
        content: "";
        position: absolute;
        top: 40%;
        right: 0;
    
        width: 20px;
        height: 2px;
        background-color: #ffffff;
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }
}
</style>
