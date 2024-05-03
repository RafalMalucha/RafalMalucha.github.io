<script setup>
import ReturnArrow from '../components/ReturnArrow.vue'
import SmallTitle from '../components/text/SmallTitle.vue'
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
                Wybrana lokalizacja do dostawy {{ $route.query.location }}
            </div>
            <div class="row">
                <router-link :to="{ name: 'Thanks' }">
                    <button class="btn next-button">&lt; Złóź zamówienie &lt; </button>
                </router-link>
            </div>
        </div>
    </main>

</template>

<style scoped>
h2{
    text-align: center
}
a {
    text-align: center;
}
</style>
