<script setup>
import ReturnArrow from '../components/ReturnArrow.vue';
import SmallTitle from '../components/text/SmallTitle.vue'
import ProfileCard from '../components/ProfileCard.vue'
import NavigationBar from '../components/NavigationBar.vue';
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
                    <template #title>Twoje konto</template>
                </SmallTitle>
            </div>
            <div class="row scroll">
                <ProfileCard></ProfileCard>
            </div>
        </div>
    </main>
    <nav>
        <NavigationBar></NavigationBar>
    </nav>
</template>

<style scoped></style>