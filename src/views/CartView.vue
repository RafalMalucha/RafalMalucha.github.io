<script setup>
import ReturnArrow from '../components/ReturnArrow.vue';
import SmallTitle from '../components/text/SmallTitle.vue'
import NavigationBar from '../components/NavigationBar.vue';
</script>
<template>
    <main class="background-main">
        <div class="container">
            <div class="row">
                <ReturnArrow></ReturnArrow>
            </div>
            <div class="row">
                <SmallTitle>
                    <template #title>Koszyk</template>
                </SmallTitle>
            </div>
            <div class="row scroll">
              
            </div>
        </div>
    </main>
    <nav>
        <NavigationBar></NavigationBar>
    </nav>
</template>

<style scoped>

</style>