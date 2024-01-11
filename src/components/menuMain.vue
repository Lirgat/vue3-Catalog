<template>
    <div enter-class="main">
        <main class='menuMain'>
            <div class="catalog-header">
                <h1 class="catalog-h1">&bull; МЕНЮ &bull;</h1>
            </div>
            <div class="catalog">
                <menuCatalog></menuCatalog>
                <div class="blueLine"></div>
            </div>
        </main>
    </div>
</template>
<script>
import menuCatalog from './menuCatalog.vue'
export default {
    name: 'menuMain',
    components: { menuCatalog },
}
</script>
<style scoped>
    .menuMain {
        width: 100%;
        height: 1000px;
        background-image: url(../assets/BG-menu.png);
    }
    .catalog-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .catalog {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }
    .catalog-h1 {
        font-size: 60px;
        margin-top: 100px;
    }
</style>