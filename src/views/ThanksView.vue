<script setup>
import BigTitle from '../components/text/BigTitle.vue'
</script>

<template>
    <main class="background-main-2">
        <div class="container">
            <div class="row">
                <img src="../assets/images/success-ilustration.png" alt="Success icon" />
            </div>
            <div class="row">
                <BigTitle>
                    <template #title>Zamówienie złożone!</template>
                </BigTitle>
                <p>
                    Przewidywany czas dostawy: 2h
                </p>
            </div>
            <div class="row">
                <router-link :to="{ name: 'Home' }">
                    <button class="btn next-button">Wróć do ekranu głównego</button>
                </router-link>
            </div>
        </div>
    </main>

</template>

<style scoped>
main{
    padding-top: 150px;
    text-align: center;
}
img {
    width: 200px;
    margin: 0 auto;
}
h3{
    text-align: center !important;
}
</style>
