<script setup>
import ReturnArrow from '../components/ReturnArrow.vue'
import SmallTitle from '../components/text/SmallTitle.vue';
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
                TUTAJ BĘDZIE PODSUMOWANIE ZAMÓWIENIA I ADRES DOSTAWY
            </div>
            <div class="row">
                <router-link :to="{ name: 'Thanks' }">
                    <button class="btn next-button">> Złóź zamówienie <</button>
                </router-link>
            </div>
        </div>
    </main>

</template>

<style scoped>
a {
    text-align: center;
}
</style>