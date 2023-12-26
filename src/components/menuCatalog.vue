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
    </div>
</template>
<script>
export default {
    name: 'menuCatalog',
    data () {

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
</style>