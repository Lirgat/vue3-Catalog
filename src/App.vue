<template>
  <meta charset="UTF-8">
  <meta lang="ru">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Neucha&display=swap" rel="stylesheet">
  <div class="app">
    <NavHeader></NavHeader>
    <menuMain></menuMain>
    
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue'
import menuMain from './components/menuMain.vue'
export default {
  name: 'App',
  components: {
    NavHeader,
    menuMain,
  }
}
</script>

<style>
* {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Neucha;
  font-weight: 400;
}
.app {
  z-index: -100;
}
.blueLine {
  position: relative;
  width: 100%;
  min-height: 39px;
  background-color: #243139;
  margin-top: 120px;
  bottom: 0;
}
</style>