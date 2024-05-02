<script setup>
import ReturnArrow from '../components/ReturnArrow.vue'
import SmallTitle from '../components/text/SmallTitle.vue'
import CartItem from '../components/CartItem.vue'
import OrderCard from '../components/OrderCard.vue'
import NavigationBar from '../components/NavigationBar.vue'
</script>
<template>
    <main class="background-main">
        <div class="container">
            <div class="row">
                <router-link :to="{ name: 'Home' }">
                    <ReturnArrow></ReturnArrow>
                </router-link>
            </div>
            <div class="row">
                <SmallTitle>
                    <template #title>Koszyk</template>
                </SmallTitle>
            </div>
            <div class="row scroll">
                <CartItem>
                    <template #title>Pomidorówka z makaronem</template>
                    <template #description> Bardzo dobra zupa</template>
                </CartItem>
            </div>
        </div>
        <div class="row">
            <OrderCard></OrderCard>
        </div>
    </main>
    <nav>
        <NavigationBar></NavigationBar>
    </nav>
</template>

<style scoped></style>
