<script setup>
import ReturnArrow from '../components/ReturnArrow.vue'
import SmallTitle from '../components/text/SmallTitle.vue'
import { useRoute } from 'vue-router';
const route = useRoute();
const title = route.query.title;
const description = route.query.description;
const price = route.query.price;
</script>

<script>
export default {

}
</script>

<template>
    <main class="background-main">
        <div class="container">
            <div class="row">
                <router-link :to="{ name: 'Delivery' }">
                    <ReturnArrow></ReturnArrow>
                </router-link>
            </div>
            <div class="row">
                <SmallTitle>
                    <template #title>Podsumowanie zamówienia</template>
                </SmallTitle>
            </div>
            <div class="row">
                <div class="item">
                    <h5>Posiłek:</h5>
                    <p>{{ title }} - {{ description }}<br></p>
                </div>
                <div class="item">
                    <h5>Adres dostawy:</h5>
                    <p>Współrzędne: {{ $route.query.location }}</p>
                </div>
                <div class="item">
                    <h5>Metoda płatności:</h5>
                    <p>Płatność realizujemy podczas dostawy</p>
                </div>
            </div>
            <div class="row">
                <div id="price">
                    <h3> Do zapłaty: {{ price }} zł</h3>
                </div>
            </div>
            <div class="row">
                <router-link :to="{ name: 'Thanks' }">
                    <button class="btn next-button"> Złóź zamówienie </button>
                </router-link>
                <p>Uwaga! Potwiedzonego zamówienia nie można anulować!</p>
            </div>
        </div>
    </main>

</template>

<style scoped>
.item {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 12px;
    background-color: var(--color-white);
    border: 1px solid var(--color-light-grey);
}

.item>h5,
.item>p {
    width: 50%;
}

.item p {
    line-height: 250%;
    margin-bottom: 0;
    color: var(--color-orange);
    font-weight: bold;
}

.row>p {
    margin-top: 20px;
    text-align: center;
}

h2 {
    text-align: center
}

a {
    text-align: center;
}

#price{
    margin-top: 20px;
    margin-bottom: 20px;
}
#price > h3{
    text-align: center;
}

.next-button {
    margin-top: 10px !important;
}

@media screen and (max-width: 900px) {
    .item {
        width: 90%;
        flex-direction: column;
        justify-content: space-around;
    }

    .item>h5,
    .item>p {
        width: 100%;
    }
}
</style>
