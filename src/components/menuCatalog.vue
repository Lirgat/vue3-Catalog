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
            rolls: [
                {id:1, tittle: 'РОЛЛ ЯСАЙ', gram: '185 г', structure: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', price: "200 ₽", button: 'Добавить в корзину'},
                {id:2, tittle: 'МЯСНЫЕ РОЛЛЫ', gram: '260 г', structure: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', price: "240 ₽", button: 'Добавить в корзину'},
                {id:3, tittle: 'РОЛЛ ЛАЙТ', gram: '190 г', structure: 'Листья салата, огурец, перец, помидор, сырный соус, чипсы', price: "165 ₽", button: 'Добавить в корзину'},
                {id:4, tittle: 'РОЛЛ ВЕГАН', gram: '185 г', structure: 'Листья салата, авокадо, огурец, спаржа, сивид чука, кунжут', price: "200 ₽", button: 'Добавить в корзину'},
                {id:5, tittle: 'РОЛЛ ЧИРО', gram: '210 г', structure: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', price: "200 ₽", button: 'Добавить в корзину'}
            ]
        }
    }
}
</script>
<style scoped>
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
    }
    .rollCatalog {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .roll {
        min-width: 270px;
        min-height: 390px;
        padding: 0 30px 0 30px;
        background-color: white;
        border: 1px solid black;
    }
    .rollName {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
    }
</style>