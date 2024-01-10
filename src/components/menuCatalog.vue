<template>
    <div>
        <div class="catalogBtnsList">
            <button class="rolls menuBtn">РОЛЛЫ</button>
            <button class="sushiGunkanmenuBtn menuBtn">СУШИ И ГУНКАНЫ</button>
            <button class="setsmenuBtn menuBtn">СЕТЫ</button>
            <button class="riceLapshamenuBtn menuBtn">ЛАПША И РИС</button>
            <button class="saladsmenuBtn menuBtn">САЛАТЫ</button>
            <button class="hotmenuBtn menuBtn">ГОРЯЧИЕ БЛЮДА</button>
        </div>
        <div class="menuCatalogSection">
            <div class="rollCatalog">
                <div class="roll" v-for="roll in rolls" :key="roll.id">
                    <div @click="toggleFavourite(roll.id)" class="heart" :class="{ 'heartActive': isFavourite(roll.id) }">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_405)">
                        <path d="M18.4134 2.83508C17.3781 1.71219 15.9575 1.09375 14.413 1.09375C13.2585 1.09375 12.2012 1.45874 11.2704 2.1785C10.8008 2.54181 10.3752 2.9863 10 3.5051C9.62494 2.98645 9.19922 2.54181 8.7294 2.1785C7.79877 1.45874 6.74149 1.09375 5.58701 1.09375C4.04251 1.09375 2.62177 1.71219 1.58646 2.83508C0.563507 3.94485 0 5.46097 0 7.10434C0 8.79578 0.630341 10.3441 1.98364 11.9771C3.19427 13.4378 4.93423 14.9207 6.94916 16.6377C7.63718 17.2241 8.41705 17.8888 9.22684 18.5968C9.44077 18.7842 9.71527 18.8873 10 18.8873C10.2846 18.8873 10.5592 18.7842 10.7729 18.5971C11.5826 17.8889 12.363 17.224 13.0513 16.6373C15.0659 14.9205 16.8059 13.4378 18.0165 11.9769C19.3698 10.3441 20 8.79578 20 7.10419C20 5.46097 19.4365 3.94485 18.4134 2.83508Z" fill="transparent"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_405">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                    <div class='rollImage'>
                        <img v-bind:src="roll.src"/>
                    </div>
                    <div class="rollName">
                        <div class="rollTittle">{{ roll.tittle }}</div>
                        <div class="rollGram">{{ roll.gram }}</div>
                    </div>
                    <div class="rollStructure">{{ roll.structure }}</div>
                    <div class="buyRoll">
                        <div class="rollPrice">{{ roll.price }}</div>
                        <div class="rollButton">{{ roll.button }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'menuCatalog',
    data () {
        return {
            favouriteRollIds: [],
            rolls: [
                {id:1, src: require("../assets/rollYasay.png"), tittle: 'РОЛЛ ЯСАЙ', gram: '185 г', structure: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', price: "200 ₽", button: 'В корзину'},
                {id:2, src: require("../assets/meatRoll.png"), tittle: 'МЯСНЫЕ РОЛЛЫ', gram: '260 г', structure: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', price: "240 ₽", button: 'В корзину'},
                {id:3, src: require("../assets/rollLight.png"), tittle: 'РОЛЛ ЛАЙТ', gram: '190 г', structure: 'Листья салата, огурец, перец, помидор, сырный соус, чипсы', price: "165 ₽", button: 'В корзину'},
                {id:4, src: require("../assets/rollVegan.png"), tittle: 'РОЛЛ ВЕГАН', gram: '230 г', structure: 'Листья салата, авокадо, огурец, спаржа, сивид чука, кунжут', price: "200 ₽", button: 'В корзину'},
                {id:5, src: require("../assets/rollChiro.png"), tittle: 'РОЛЛ ЧИРО', gram: '210 г', structure: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', price: "200 ₽", button: 'В корзину'},
                {ID:6, src: require("../assets/rollTaol.png"), tittle: 'РОЛЛ ТАЙОЛ', gram: '215 г', structure: 'Огурец, помидор, сыр творожный, бекон, сыр маасдам', price: '215 ₽', button: 'В корзину' },
                {id:7, src: require("../assets/rollBatakon.png"), tittle: 'РОЛЛ БАТАКОН', gram: '220 г', structure: 'Огурец, сыр творожный, бекон', price: "230 ₽", button: 'В корзину'},
                {id:8, src: require("../assets/rollKalipso.png"), tittle: 'РОЛЛ КАЛИПСО', gram: '195 г', structure: 'Сыр творожный, огурец, мидии, стружка тунца', price: "185 ₽", button: 'В корзину'},
                {id:9, src: require("../assets/rollCaviar.png"), tittle: 'РОЛЛ КАВЬЯР', gram: '240 г', structure: 'Сыр творожный, помидор, огурец, мидии, майонез', price: "200 ₽", button: 'В корзину'},
                {id:10, src: require("../assets/rollChipu.png"), tittle: 'РОЛЛ ЧИПУ', gram: '190 г', structure: 'Сыр творожный, лосось, томаго, стружка тунца', price: "180 ₽", button: 'В корзину'},
                {id:11, src: require("../assets/rollCatana.png"), tittle: 'РОЛЛ КАТАНА', gram: '240 г', structure: 'Сыр творожный, краб, огурец, черный кунжут, лососевый тар-тар, спайси соус', price: "250 ₽", button: 'В корзину'},
                {ID:12, src: require("../assets/rollMishiku.png"), tittle: 'РОЛЛ МИШИКУ', gram: '210 г', structure: 'Угорь, краб, огурец, масаго, сыр творожный,  сырный соус, картофельные чипсы', price: '260 ₽', button: 'В корзину' }
            ]
        }
    },
    methods: {
        toggleFavourite(rollid) {
        const index = this.favouriteRollIds.indexOf(rollid); 
        if (index !== -1) {
            this.favouriteRollIds.splice(index, 1); 
        } else {
            this.favouriteRollIds.push(rollid); 
        }
        },
        isFavourite(rollid) {
        return this.favouriteRollIds.includes(rollid); 
        }
    }
};
</script>
<style scoped>
    .heart svg path {
        stroke: black;
        transition: 0.5s;
    }
    .heartActive svg path {
        stroke: #F34942;
        fill: #F34942;
        transition: ease-out 0.5s;
    }
    .catalogBtnsList {
        display: flex;
        flex-direction: row;
        gap: 8px;
    }
    .menuBtn {
        padding: 16px 32px 16px 32px;
        border-radius: 100px;
        border: none;
        font-size: 28px;
        cursor: pointer;
        color: #B3A296;
        background-color: transparent;
        transition: 0.5s;
    }
    .menuBtn:hover {
        background-color: #312525;
        color: #FFFFFF;
    }
    .active {
        background-color: #312525;
        color: #FFFFFF;
    }
    .menuCatalogSection {
        max-width: 1170px;
        margin-top: 60px;
    }
    .rollCatalog {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
    }
    .roll {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 270px;
        min-height: 390px;
        padding: 0 30px 0 30px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 14px 4px rgba(0,0,0,0.1);
        justify-content: space-between;
    }
    .heart {
        position: absolute;
        right: 30px;
        top: 30px;
        cursor: pointer;
    }
    .rollName {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 25px;
    }
    .rollTittle {
        font-size: 19px;
    }
    .rollGram {
        font-size: 13px;
        font-family: Arial, Helvetica, sans-serif;
        color: #808080;
    }
    .rollStructure {
        margin-top: 20px;
        color: #808080;
        max-width: 210px;
    }
    .buyRoll {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 44px;
        margin-bottom: 37px;
    }
    .rollPrice {
        margin-top: 5px;
        font-size: 19px;
    }
    .rollButton {
        font-size: 15px;
        color: #FFFFFF;
        padding: 8px 21px 8px 21px;
        background-color: #312525;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0px 0px 22px 16px rgba(0,0,0,0.1);
    }
    .rollButton:hover {
        margin-top: -5px;
        transition: 0.5s;
    }
    .rollButton:not(hover) {
        transition: 0.5s;
    }
    .rollImage {
        padding: 30px 40px 0px 40px;
    }
</style>