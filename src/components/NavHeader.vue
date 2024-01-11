  <template>
    <div class="header">
      <div class="navBlock">
        <div class="logo"><img src="../assets/logo.svg" class="logo__img"></div>
        <nav class="navigation-buttons">
          <ul class="nav-list">
            <li class="nav-list__li dotless">Меню</li>
            <li class="nav-list__li">Доставка</li>
            <li class="nav-list__li">Акции</li>
            <li class="nav-list__li">Отзывы</li>
            <li class="nav-list__li">Контакты</li>
          </ul>
        </nav>
        <div class="number">
          <img src="../assets/phone.svg" alt="" class="number_svg">
          <p class="number__tel">+7 979 700 97 91</p>
        </div>
        <div class="cartBlock">
          <div @click="OpenCart" class="cartDiv">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.491 18.168L18.6462 7.47652C18.5938 6.78767 18.0135 6.24828 17.3257 6.24828H15.6569V8.73152C15.6569 9.03904 15.409 9.28797 15.1028 9.28797C14.797 9.28797 14.5488 9.03904 14.5488 8.73152V6.24828H9.45147V8.73152C9.45147 9.03904 9.20324 9.28797 8.89741 9.28797C8.5912 9.28797 8.34334 9.03904 8.34334 8.73152V6.24828H6.67453C5.98677 6.24828 5.40647 6.78767 5.35404 7.47504L4.50892 18.1695C4.44355 19.026 4.73941 19.8785 5.32042 20.5084C5.90146 21.1383 6.72515 21.5 7.58025 21.5H16.42C17.2751 21.5 18.0988 21.1383 18.6799 20.5084C19.2609 19.8785 19.5567 19.026 19.491 18.168ZM11.2036 15.7332L11.2212 15.7488C11.2212 15.7413 11.2212 15.7488 11.2389 15.7645C11.2212 15.7488 11.2212 15.7488 11.2036 15.7332L11.2389 15.7645C11.2389 15.7645 11.2212 15.7488 11.2036 15.7332Z" fill="#212121"/>
          <path d="M12.0024 2.5C9.986 2.5 8.34564 4.14779 8.34564 6.17288V6.24817H9.45378V6.17288C9.45378 4.76136 10.597 3.61287 12.0024 3.61287C13.4079 3.61287 14.5511 4.76136 14.5511 6.17288V6.24817H15.6592V6.17288C15.6592 4.14779 14.0188 2.5 12.0024 2.5Z" fill="#212121"/>
          </svg>
          </div>
          <button class="cartBlock__btnJoinAcc">Войти</button>
        </div>
      </div>
    </div>
    <div @click="OpenCart" class="background" :class="{'backgroundCart': isShow}"></div>
    <myDialog  class="myDialogHide" :class="{ 'cartShow': isShow }" @openCart = "OpenCart"></myDialog>
  </template>
  
  <script>
  import myDialog from './myDialog.vue';
  export default {
    name: 'NavHeader',
    components: { myDialog },
    data() {
      return {
        isShow: false,
      }
    },
    methods: {
      OpenCart () {
        return this.isShow = !this.isShow;
      }
    }
  }
  </script>
  
  <style scoped>
  .background {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 99998;
    background-color: #3C4B61;
    top: 0;
    visibility: hidden;
    transition: 0.1s step-end;
}
.backgroundCart {
  visibility: visible;
  opacity: 0.6;
  transition: 0.5s step-start;
}
.myDialogHide {
  width: 613px;
  position: fixed;
  height: 100%;
  background-color: #EBE1D7;
  z-index: 99999;
  top: 0;
  right: -613px;
  transition: 0.5s;
}
.cartShow {
    position: fixed;
    right: 0;
    transition: 0.5s;
}
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 82px;
    background-color: #062D4E;
  }
  .navBlock {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 60px;
  }
  .nav-list{
    display: flex;
    flex-direction: row;
    color: white;
    font-size: 16px;
    line-height: 20px;
    gap: 40px;
    padding-top: 31px;
  }
  .number {
    display: flex;
    flex-direction: row;
    gap: 6px;
    padding-top: 31px;
    font-family: Neucha;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.01em;
    text-align: left;
    color: white;
  }
  .number_svg {
    widows: 24px;
    height: 24px;
  }
  .dotless {
    list-style-type: none;
  }
  .nav-list__li {
    cursor: pointer;
  }
  .nav-list__li:hover {
    color: #EBE1D7;
    transition: 0.5s;
  }
  .nav-list__li:not(hover) {
    transition: 0.5s;
  }
  .cartBlock {
    display: flex;
    flex-direction: row;
    gap: 24px;
    padding-top: 20px;
  }
  .cartBlock__btnJoinAcc {
    width: 101px;
    height: 42px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    cursor: pointer;
  }
  .cartBlock__btnJoinAcc:hover {
    background-color: #312525;
    color: white;
    transition: 0.5s;
  }
  .cartDiv:hover svg path {
      stroke: white;
      fill: #312525;
      transition: .5s;
    }
  .cartDiv:not(hover) svg path {
    transition: .5s;
  }
  .cartBlock__btnJoinAcc:not(hover) {
    transition: 0.5s;
  }
  .cartDiv {
    width: 42px;
    height: 42px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .cartDiv:hover {
    background-color: #312525;
    transition: 0.5s;
  }
  .cartDiv:hover img {
    fill: white;
    stroke: white;
    transition: 0.5s;
  }
  .cartDiv:not(hover) {
    transition: 0.5s;
  }
  .cartLogo {
    width: 24px;
    height: 24px;
  }
  </style>