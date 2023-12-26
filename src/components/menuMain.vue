<template>
    <div enter-class="main">
        <main class='menuMain'>
            <div class="catalog">
                <h1 class="catalog-h1">&bull; МЕНЮ &bull;</h1>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    name: 'menuMain',
    data () {

    }
}
</script>
<style scoped>
    .menuMain {
        width: 100%;
        height: 1000px;
        background-image: url(../assets/BG-menu.png);
    }
    .catalog {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .catalog-h1 {
        font-size: 60px;
        margin-top: 100px;
    }
</style>