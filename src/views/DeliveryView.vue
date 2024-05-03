<script setup>
import ReturnArrow from '../components/ReturnArrow.vue'
import SmallTitle from '../components/text/SmallTitle.vue'
import MapArea from '../components/MapArea.vue'
</script>

<template>
    <main class="background-main">
        <div class="container">
            <div class="row">
                <router-link :to="{ name: 'Menu' }">
                    <ReturnArrow></ReturnArrow>
                </router-link>
            </div>
            <div class="row">
                <SmallTitle>
                    <template #title>Wybierz adres dostawy</template>
                </SmallTitle>
            </div>
            <div class="row">
                <MapArea></MapArea>
            </div>
            <div class="row">
                <router-link :to="{ name: 'Summary' }">
                    <button class="btn next-button">Przejdź dalej</button>
                </router-link>
            </div>
        </div>
    </main>
</template>

<style scoped>
a {
    text-align: center;
}
.row:nth-of-type(4){
    margin-top: 40px;
}
</style>
