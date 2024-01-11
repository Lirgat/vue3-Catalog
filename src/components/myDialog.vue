<template>
    <div class="cartDialog">
        <h1 class="cartHeader">&bull; КОРЗИНА &bull;</h1>
        <div class="cartButtons">
            <button @click="closeCart" class="cart__backToBuyBtn">Вернуться к покупкам</button>
            <button class="cart__orderBtn">Оформить заказ</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myDialog',
    data () {
        return {
            
        }
    },
    methods: {
        closeCart() {
            return this.$emit('openCart');
        }
    }
}
</script>
<style scoped>
.cartDialog {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 45px;
}
.cartHeader {
    font-size: 48px;
}
.cartButtons {
    display: flex;
    flex-direction: row;
    align-self: self-start;
    gap: 30px;
}
.cart__backToBuyBtn {
    padding: 19px 22px 19px 22px;
    color: #000000;
    border: 1px solid #AFAFAF;
    background-color: #FFFFFF;
    font-size: 18px;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.1);
}
.cart__orderBtn {
    padding: 19px 26px 19px 26px;
    font-size: 18px;
    color: #FFFFFF;
    background-color: #312525;
    border-radius: 10px;
    cursor: pointer;
}
</style>