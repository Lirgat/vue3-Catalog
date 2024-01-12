<template>
    <div>
        <div class="catalogBtnsList">
            <button @click="openCatalog('rollCatalog')" class="rolls menuBtn" :class="{ 'activeBtn': activeCatalog === 'rollCatalog' }">РОЛЛЫ</button>
            <button @click="openCatalog('SushiGunkanCatalog')" class="sushiGunkanmenuBtn menuBtn" :class="{ 'activeBtn': activeCatalog === 'SushiGunkanCatalog' }">СУШИ И ГУНКАНЫ</button>
            <button @click="openCatalog('setsCatalog')" class="setsMenuBtn menuBtn" :class="{ 'activeBtn': activeCatalog === 'setsCatalog' }">СЕТЫ</button>
            <button @click="openCatalog('riceLapshaCatalog')" class="riceLapshamenuBtn menuBtn" :class="{ 'activeBtn': activeCatalog === 'riceLapshaCatalog' }">ЛАПША И РИС</button>
            <button @click="openCatalog('saladsCatalog')" class="saladsMenuBtn menuBtn" :class="{ 'activeBtn': activeCatalog === 'saladsCatalog' }">САЛАТЫ</button>
            <button @click="openCatalog('hotCatalog')" class="hotMenuBtn menuBtn" :class="{ 'activeBtn': activeCatalog === 'hotCatalog' }">ГОРЯЧИЕ БЛЮДА</button>
        </div>
        <div class="menuCatalogSection">
            <div class="rollCatalog catalogDeactive" :class="{ 'active': activeCatalog === 'rollCatalog' }">
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
            <div class="SushiGunkanCatalog catalogDeactive" :class="{ 'active': activeCatalog === 'SushiGunkanCatalog' }">
                <div class="SushiGunkan" v-for="sushiGunkan in sushiGunkans" :key="sushiGunkan.id">
                    <div @click="toggleFavouriteSushi(sushiGunkan.id)" class="heart" :class="{ 'heartActive': isFavouriteSushi(sushiGunkan.id) }">
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
                        <img class="rollImageImg" v-bind:src="sushiGunkan.src"/>
                    </div>
                    <div class="rollName">
                        <div class="rollTittle">{{ sushiGunkan.tittle }}</div>
                        <div class="rollGram">{{ sushiGunkan.gram }}</div>
                    </div>
                    <div class="rollStructure">{{ sushiGunkan.structure }}</div>
                    <div class="buyRoll">
                        <div class="rollPrice">{{ sushiGunkan.price }}</div>
                        <div class="rollButton">{{ sushiGunkan.button }}</div>
                    </div>
                </div>
            </div>
            <div class="setsCatalog catalogDeactive" :class="{ 'active': activeCatalog === 'setsCatalog' }">
                <div class="sets" v-for="set in sets" :key="set.id">
                    <div @click="toggleFavouriteSet(set.id)" class="heart" :class="{ 'heartActive': isFavouriteSet(set.id) }">
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
                        <img class="SetImageImg" v-bind:src="set.src"/>
                    </div>
                    <div class="rollName">
                        <div class="rollTittle">{{ set.tittle }}</div>
                        <div class="rollGram">{{ set.gram }}</div>
                    </div>
                    <div class="rollStructure">{{ set.structure }}</div>
                    <div class="buyRoll">
                        <div class="rollPrice">{{ set.price }}</div>
                        <div class="rollButton">{{ set.button }}</div>
                    </div>
                </div>
            </div>
            <div class="riceLapshaCatalog catalogDeactive" :class="{ 'active': activeCatalog === 'riceLapshaCatalog' }">
                <div class="riceLapsha" v-for="riceLapsha in riceLapshas" :key="riceLapsha.id">
                    <div @click="toggleFavouriteRiceLapsha(riceLapsha.id)" class="heart" :class="{ 'heartActive': isFavouriteRiceLapsha(riceLapsha.id) }">
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
                        <img class="SetImageImg" v-bind:src="riceLapsha.src"/>
                    </div>
                    <div class="rollName">
                        <div class="rollTittle">{{ riceLapsha.tittle }}</div>
                        <div class="rollGram">{{ riceLapsha.gram }}</div>
                    </div>
                    <div class="rollStructure">{{ riceLapsha.structure }}</div>
                    <div class="buyRoll">
                        <div class="rollPrice">{{ riceLapsha.price }}</div>
                        <div class="rollButton">{{ riceLapsha.button }}</div>
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
            activeCatalog: 'rollCatalog',
            favouriteRollIds: [],
            favouriteSushiGunkanIds: [],
            favouriteSetsIds: [],
            favouriteRiceLapshaIds: [],
            rolls: [
                {id:1, 
                    src: require("../assets/rollYasay.png"), 
                    tittle: 'РОЛЛ ЯСАЙ', 
                    gram: '185 г', 
                    structure: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', 
                    price: "200 ₽", 
                    button: 'В корзину'},
                {id:2, 
                    src: require("../assets/meatRoll.png"), 
                    tittle: 'МЯСНЫЕ РОЛЛЫ', 
                    gram: '260 г', 
                    structure: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', 
                    price: "240 ₽", 
                    button: 'В корзину'},
                {id:3, 
                    src: require("../assets/rollLight.png"), 
                    tittle: 'РОЛЛ ЛАЙТ', 
                    gram: '190 г', 
                    structure: 'Листья салата, огурец, перец, помидор, сырный соус, чипсы', 
                    price: "165 ₽", 
                    button: 'В корзину'},
                {id:4, 
                    src: require("../assets/rollVegan.png"), 
                    tittle: 'РОЛЛ ВЕГАН', 
                    gram: '230 г', 
                    structure: 'Листья салата, авокадо, огурец, спаржа, сивид чука, кунжут', 
                    price: "200 ₽", 
                    button: 'В корзину'},
                {id:5, 
                    src: require("../assets/rollChiro.png"), 
                    tittle: 'РОЛЛ ЧИРО', 
                    gram: '210 г', 
                    structure: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', 
                    price: "200 ₽", 
                    button: 'В корзину'},
                {ID:6, 
                    src: require("../assets/rollTaol.png"), 
                    tittle: 'РОЛЛ ТАЙОЛ', 
                    gram: '215 г', 
                    structure: 'Огурец, помидор, сыр творожный, бекон, сыр маасдам', 
                    price: '215 ₽', 
                    button: 'В корзину' },
                {id:7, 
                    src: require("../assets/rollBatakon.png"), 
                    tittle: 'РОЛЛ БАТАКОН', 
                    gram: '220 г', 
                    structure: 'Огурец, сыр творожный, бекон', 
                    price: "230 ₽", 
                    button: 'В корзину'},
                {id:8, 
                    src: require("../assets/rollKalipso.png"), 
                    tittle: 'РОЛЛ КАЛИПСО', 
                    gram: '195 г', 
                    structure: 'Сыр творожный, огурец, мидии, стружка тунца', 
                    price: "185 ₽", 
                    button: 'В корзину'},
                {id:9, 
                    src: require("../assets/rollCaviar.png"), 
                    tittle: 'РОЛЛ КАВЬЯР', 
                    gram: '240 г', 
                    structure: 'Сыр творожный, помидор, огурец, мидии, майонез', 
                    price: "200 ₽", 
                    button: 'В корзину'},
                {id:10, 
                    src: require("../assets/rollChipu.png"), 
                    tittle: 'РОЛЛ ЧИПУ', 
                    gram: '190 г', 
                    structure: 'Сыр творожный, лосось, томаго, стружка тунца', 
                    price: "180 ₽", 
                    button: 'В корзину'},
                {id:11, 
                    src: require("../assets/rollCatana.png"), 
                    tittle: 'РОЛЛ КАТАНА', 
                    gram: '240 г', 
                    structure: 'Сыр творожный, краб, огурец, черный кунжут, лососевый тар-тар, спайси соус', 
                    price: "250 ₽", 
                    button: 'В корзину'},
                {ID:12, 
                    src: require("../assets/rollMishiku.png"), 
                    tittle: 'РОЛЛ МИШИКУ', 
                    gram: '210 г', 
                    structure: 'Угорь, краб, огурец, масаго, сыр творожный,  сырный соус, картофельные чипсы', 
                    price: '260 ₽', 
                    button: 'В корзину' }
            ], 
            sushiGunkans: [
                {id:1, 
                    src: require("../assets/gunkan4uka.png"), 
                    tittle: 'ГУНКАН С ЧУКОЙ', 
                    gram: '40 г', 
                    structure: 'Водоросли вакаме с ореховым соусом', 
                    price: "55 ₽", 
                    button: 'В корзину'},
                {id:2, 
                    src: require("../assets/sushiKrevetka.png"), 
                    tittle: 'СУШИ С КРЕВЕТКОЙ', 
                    gram: '30 г', 
                    structure: 'Королевская креветка, рис', 
                    price: "95 ₽", 
                    button: 'В корзину'},
                {id:3, 
                    src: require("../assets/sushiUgor.png"), 
                    tittle: 'СУШИ С УГРЁМ', 
                    gram: '30 г', 
                    structure: 'Копчёный угорь, рис, кунжут, водоросли', 
                    price: "99 ₽", 
                    button: 'В корзину'},
                {id:4, 
                    src: require("../assets/gunkanIkra.png"), 
                    tittle: 'ГУНКАН С ИКРОЙ', 
                    gram: '30 г', 
                    structure: 'Икра летучей рыбы, листья салата', 
                    price: "99 ₽", 
                    button: 'В корзину'},
                {id:5, 
                    src: require("../assets/sushiLosos.png"), 
                    tittle: 'СУШИ С ЛОСОСЕМ', 
                    gram: '30 г', 
                    structure: 'Рис, лосось', 
                    price: "99 ₽", 
                    button: 'В корзину'},
                {ID:6, 
                    src: require("../assets/gunkanCrab.png"), 
                    tittle: 'ГУНКАН С КРАБОМ', 
                    gram: '30 г', 
                    structure: 'Снежный краб, крем соус, рис, листья морской капусты', 
                    price: '65 ₽', 
                    button: 'В корзину' },
                {id:7, 
                    src: require("../assets/gunkanLosos.png"), 
                    tittle: 'ГУНКАН С ЛОСОСЕМ', 
                    gram: '40 г', 
                    structure: 'Лосось, спайс соус, листья морской капусты, рис', 
                    price: "99 ₽", 
                    button: 'В корзину'},
                {id:8, 
                    src: require("../assets/gunkanUgor.png"), 
                    tittle: 'ГУНКАН С УГРЁМ', 
                    gram: '40 г', 
                    structure: 'Угорь, спайс соус, унаги соус, рис, листья морской капусты', 
                    price: "135 ₽", 
                    button: 'В корзину'},
                {id:9, 
                    src: require("../assets/gunkanKrevetka.png"), 
                    tittle: 'ГУНКАН С КРЕВЕТКОЙ', 
                    gram: '40 г', 
                    structure: 'Королевская креветка, спайс соус, рис, листья морской капусты', 
                    price: "99 ₽", 
                    button: 'В корзину'},
                {id:10, 
                    src: require("../assets/sushiEbi.png"), 
                    tittle: 'ЭБИ', 
                    gram: '35 г', 
                    structure: 'Рис, мицукан, сахар, комбу, соль, креветка, сыр сливочный', 
                    price: "119 ₽", 
                    button: 'В корзину'},
                {id:11, 
                    src: require("../assets/sushiSake.png"), 
                    tittle: 'СЯКЕ', 
                    gram: '35 г', 
                    structure: 'Рис, мицукан, сахар, комбу, соль, лосось', 
                    price: "129 ₽", 
                    button: 'В корзину'},
                {ID:12, 
                    src: require("../assets/sushiUnagi.png"), 
                    tittle: 'УНАГИ', 
                    gram: '38 г', 
                    structure: 'Рис, мицукан, сахар, комбу, соль, угорь, соус унаги, кунжут белый', 
                    price: '249 ₽', 
                    button: 'В корзину' }
            ],
            sets: [
                {id:1, 
                        src: require("../assets/wormSet.png"), 
                        tittle: 'ТЁПЛЫЙ СЕТ', 
                        gram: '680 г', 
                        structure: 'Горячая филадельфия с лососем, горячая филадельфия с угрём, горячая королевская креветка, горячий фьюжн с лососем', 
                        price: "1 135 ₽", 
                        button: 'В корзину'},
                    {id:2, 
                        src: require("../assets/setLosos.png"), 
                        tittle: 'СЕТ С ЛОСОСЕМ', 
                        gram: '630 г', 
                        structure: 'Филадельвия с лососем, опалённая филадельфия, калифорния с лососем, сливочная калифорния, хосомаки с лососем', 
                        price: "1 225 ₽", 
                        button: 'В корзину'},
                    {id:3, 
                        src: require("../assets/setGarmony.png"), 
                        tittle: 'ГАРМОНИЯ СЕТ', 
                        gram: '710 г', 
                        structure: 'Свежий лосось, королевская креветка, сливочный сыр, сочный огурец, спайс соус, манго соус, кляр, кунжут', 
                        price: "1 365 ₽", 
                        button: 'В корзину'},
                    {id:4, 
                        src: require("../assets/setUgor.png"), 
                        tittle: 'СЕТ С УГРЁМ', 
                        gram: '620 г', 
                        structure: 'Копчёный угорь, свежий лосось, сливочный сыр, икра летучей рыбы, копчёная курица, сочный огурец, жареный лук, унаги соус, кужнут', 
                        price: "1 465 ₽", 
                        button: 'В корзину'},
                    {id:5, 
                        src: require("../assets/sushiAssortiFil.png"), 
                        tittle: 'ФИЛАДЕЛЬФИИ 24', 
                        gram: '750 г', 
                        structure: 'Свежий лосось, опалённый лосось, королевская креветка, копчёный угорь, сливочный сыр, сочный огурец, икра летучей рыбы, крабовый микс, спайс соус, манго соус, унаги соус, кунжут', 
                        price: "1 265 ₽", 
                        button: 'В корзину'},
                    {ID:6, 
                        src: require("../assets/CaliforniaXL.png"), 
                        tittle: 'КАЛИФОРНИЯ XL', 
                        gram: '960 г', 
                        structure: 'Свежий лосось, королевские креветки темпура, крабовый микс, салат, сочный огурец, икра летучей рыбы, спайс соус, лосось соус', 
                        price: '1 535 ₽', 
                        button: 'В корзину' },
                    {id:7, 
                        src: require("../assets/setMega.png"), 
                        tittle: 'МЕГА СЕТ', 
                        gram: '960 г', 
                        structure: 'Свежий лосось, копченый угорь, крабовый микс, сливочный сыр, сочный огурец, икра летучей рыбы, спайс соус, унаги соус, кунжут', 
                        price: "1 715 ₽", 
                        button: 'В корзину'},
                    {id:8, 
                        src: require("../assets/setRainbow.png"), 
                        tittle: 'РАДУГА СЕТ', 
                        gram: '1020 г', 
                        structure: 'Свежий лосось, опаленный лосось, королевская креветка, сливочный сыр, сочный огурец, икра летучей рыбы, крабовый микс, кляр, спайс соус, унаги соус, манго соус, наги соус, кунжут, васаби', 
                        price: "1 800 ₽", 
                        button: 'В корзину'},
                    {id:9, 
                        src: require("../assets/SlivkiKop.png"), 
                        tittle: 'СЛИВОЧНО-КОПЧЁНЫЙ', 
                        gram: '1290 г', 
                        structure: 'Свежий лосось, копченый угорь, крабовый микс, сливочный сыр, сочный огурец, икра летучей рыбы, спайс соус, унаги соус, кунжут', 
                        price: "2 165 ₽", 
                        button: 'В корзину'},
                    {id:10, 
                        src: require("../assets/filadelfiaXL.png"), 
                        tittle: 'ФИЛАДЕЛЬФИИ XL', 
                        gram: '1290 г', 
                        structure: 'Свежий лосось, кочёный угорь, королевская креветка, сливочный сыр, сочный огурец, икра летучей рыбы, унаги соус, спайс соус, манго соус, унаги соус, кунжут, васаби', 
                        price: "2 430 ₽", 
                        button: 'В корзину'},
                    {id:11, 
                        src: require("../assets/hotParty.png"), 
                        tittle: 'ТЁПЛАЯ ВЕЧЕРИНКА', 
                        gram: '1490 г', 
                        structure: 'Свежий лосось, копчёный угорь, сливочный сыр, сочный огурец, крабовый микс, икра летучей рыбы, спайс соус, унаги соус, кунжут', 
                        price: "2 575 ₽", 
                        button: 'В корзину'},
                    {ID:12, 
                        src: require("../assets/thempura.png"), 
                        tittle: 'ТЕМПУРА', 
                        gram: '685 г', 
                        structure: 'Филадельфия темпура, Лава темпура, Калифорния темпура', 
                        price: '859 ₽', 
                        button: 'В корзину' }
            ],
            riceLapshas: [
                    {id:1, 
                        src: require("../assets/lapshaPadTai.png"), 
                        tittle: 'ПАД ТАЙ', 
                        gram: '330 г', 
                        structure: 'Утиная грудка, лапша яичная, лук репчатый, морковь, фасоль стручковая, капуста пекинская, перец болгарский, имбирь, чеснок, соус Пад Тай, зелёный лук', 
                        price: "470 ₽", 
                        button: 'В корзину'},
                    {id:2, 
                        src: require("../assets/chcknMuer.png"), 
                        tittle: 'ЧИКЕН МУЭР', 
                        gram: '380 г', 
                        structure: 'Курица, лапша яичная, лук репчатый, морковь, фасоль стручковая, капуста пекинская, перец болгарский, чеснок, имбирь, грибы Муэр, грибы Шиитаке, кунжут белый, соус Терияки', 
                        price: "295 ₽", 
                        button: 'В корзину'},
                    {id:3, 
                        src: require("../assets/pigInSauce.png"), 
                        tittle: 'СВИНИНА В СОУСЕ', 
                        gram: '340 г', 
                        structure: 'Свинина, соус Терияки, морковь, перец болгарский, фасоль стручковая, капуста пекинская, кунжут белый, чеснок, имбирь, лук, мука гречневая, мука пшеничная, вода, соль', 
                        price: "395 ₽", 
                        button: 'В корзину'},
                    {id:4, 
                        src: require("../assets/pekinWok.png"), 
                        tittle: 'ПЕКИН-ВОК', 
                        gram: '330 г', 
                        structure: 'Утиная грудка, лапша яичная, лук репчатый, морковь, фасоль стручковая, капуста пекинская, перец болгарский, чеснок, имбирь, кунжут белый, соус Перечно-устричный', 
                        price: "375 ₽", 
                        button: 'В корзину'},
                    {id:5, 
                        src: require("../assets/wokChckn.png"), 
                        tittle: 'ВОК КУРИЦА', 
                        gram: '340 г', 
                        structure: 'Курица, морковь, перец болгарский, фасоль стручковая, соус Терияки, кунжут белый, чеснок, имбирь, капуста пекинская, лук, мука пшеничная, яичный порошок, вода, соль', 
                        price: "330 ₽", 
                        button: 'В корзину'},
                    {ID:6, 
                        src: require("../assets/slivkiChckn.png"), 
                        tittle: 'СЛИВОЧНАЯ КУРИЦА', 
                        gram: '340 г', 
                        structure: 'Курица, соус сливочный Мисо, морковь, перец болгарский, фасоль стручковая, капуста пекинская, кунжут белый, чеснок, имбирь, лук, мука пшеничная, яичный порошок, вода, соль', 
                        price: '340 ₽', 
                        button: 'В корзину' },
                    {id:7, 
                        src: require("../assets/setMega.png"), 
                        tittle: 'МЕГА СЕТ', 
                        gram: '960 г', 
                        structure: 'Свежий лосось, копченый угорь, крабовый микс, сливочный сыр, сочный огурец, икра летучей рыбы, спайс соус, унаги соус, кунжут', 
                        price: "1 715 ₽", 
                        button: 'В корзину'},
                    {id:8, 
                        src: require("../assets/setRainbow.png"), 
                        tittle: 'РАДУГА СЕТ', 
                        gram: '1020 г', 
                        structure: 'Свежий лосось, опаленный лосось, королевская креветка, сливочный сыр, сочный огурец, икра летучей рыбы, крабовый микс, кляр, спайс соус, унаги соус, манго соус, наги соус, кунжут, васаби', 
                        price: "1 800 ₽", 
                        button: 'В корзину'},
                    {id:9, 
                        src: require("../assets/SlivkiKop.png"), 
                        tittle: 'СЛИВОЧНО-КОПЧЁНЫЙ', 
                        gram: '1290 г', 
                        structure: 'Свежий лосось, копченый угорь, крабовый микс, сливочный сыр, сочный огурец, икра летучей рыбы, спайс соус, унаги соус, кунжут', 
                        price: "2 165 ₽", 
                        button: 'В корзину'},
                    {id:10, 
                        src: require("../assets/filadelfiaXL.png"), 
                        tittle: 'ФИЛАДЕЛЬФИИ XL', 
                        gram: '1290 г', 
                        structure: 'Свежий лосось, кочёный угорь, королевская креветка, сливочный сыр, сочный огурец, икра летучей рыбы, унаги соус, спайс соус, манго соус, унаги соус, кунжут, васаби', 
                        price: "2 430 ₽", 
                        button: 'В корзину'},
                    {id:11, 
                        src: require("../assets/hotParty.png"), 
                        tittle: 'ТЁПЛАЯ ВЕЧЕРИНКА', 
                        gram: '1490 г', 
                        structure: 'Свежий лосось, копчёный угорь, сливочный сыр, сочный огурец, крабовый микс, икра летучей рыбы, спайс соус, унаги соус, кунжут', 
                        price: "2 575 ₽", 
                        button: 'В корзину'},
                    {ID:12, 
                        src: require("../assets/thempura.png"), 
                        tittle: 'ТЕМПУРА', 
                        gram: '685 г', 
                        structure: 'Филадельфия темпура, Лава темпура, Калифорния темпура', 
                        price: '859 ₽', 
                        button: 'В корзину' }
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
        },

        toggleFavouriteSushi(sushiGunkanid) {
            const index = this.favouriteSushiGunkanIds.indexOf(sushiGunkanid); 
            if (index !== -1) {
                this.favouriteSushiGunkanIds.splice(index, 1); 
            } else {
                this.favouriteSushiGunkanIds.push(sushiGunkanid); 
            }
        },
        isFavouriteSushi(sushiGunkanid) {
            return this.favouriteSushiGunkanIds.includes(sushiGunkanid); 
        },

        toggleFavouriteSet(setid) {
            const index = this.favouriteSetsIds.indexOf(setid); 
            if (index !== -1) {
                this.favouriteSetsIds.splice(index, 1); 
            } else {
                this.favouriteSetsIds.push(setid); 
            }
        },
        isFavouriteSet(setid) {
            return this.favouriteSetsIds.includes(setid); 
        },

        toggleFavouriteRiceLapsha(riceLapshaid) {
            const index = this.favouriteRiceLapshaIds.indexOf(riceLapshaid); 
            if (index !== -1) {
                this.favouriteRiceLapshaIds.splice(index, 1); 
            } else {
                this.favouriteRiceLapshaIds.push(riceLapshaid); 
            }
        },
        isFavouriteRiceLapsha(riceLapshaid) {
            return this.favouriteRiceLapshaIds.includes(riceLapshaid); 
        },
        
        openCatalog(catalogName) {
            this.activeCatalog = catalogName;
        },
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
    .activeBtn {
        background-color: #312525;
        color: #FFFFFF;
    }
    .menuCatalogSection {
        max-width: 1170px;
        margin-top: 60px;
    }
    .rollCatalog, .SushiGunkanCatalog, .setsCatalog, .riceLapshaCatalog {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
    }
    .roll, .SushiGunkan, .sets, .riceLapsha {
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
    .rollImageImg {
        max-width: 130px;
        max-height: 130px;
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
    .SetImageImg {
        width: 130px;
        height: 130px;
    }
    .catalogDeactive {
        display: none;
    }
    .active {
        display: flex;
    }
</style>