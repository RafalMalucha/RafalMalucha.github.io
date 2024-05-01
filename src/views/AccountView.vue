<script setup>
import ReturnArrow from '../components/ReturnArrow.vue';
import SmallTitle from '../components/text/SmallTitle.vue'
import ProfileCard from '../components/ProfileCard.vue'
import NavigationBar from '../components/NavigationBar.vue';
</script>
<template>
    <main>
        <div class="container">
            <div class="row">
                <ReturnArrow></ReturnArrow>
            </div>
            <div class="row">
                <SmallTitle>
                    <template #title>Twoje konto</template>
                </SmallTitle>
            </div>
            <div class="row">
                <!-- <ProfileCard></ProfileCard> -->
            </div>
        </div>
    </main>
    <nav>
        <NavigationBar></NavigationBar>
    </nav>
</template>

<style scoped>
main {
    margin: 0;
    padding: 40px 0px 0px 0px;
}

@media screen and (max-width: 900px) {
    main {
        background-image: url("../assets/images/triangular-background.png");
        background-repeat: no-repeat, repeat;
        background-position: top;
    }
}
</style>