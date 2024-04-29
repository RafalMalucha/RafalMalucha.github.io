<script setup>
import ReturnArrow from '../components/ReturnArrow.vue'
import SmallTitle from '../components/text/SmallTitle.vue'
import NotificationItem from '../components/NotificationItem.vue'
</script>

<template>
    <main>
        <div>
            <ReturnArrow></ReturnArrow>
            <SmallTitle>
                <template #title>Powiadomienia</template>
            </SmallTitle>
        </div>
        <div>
            <NotificationItem>
                <template #title>Tytuł powiadomienia</template>
                <template #description>Treść powiadomienia</template>
            </NotificationItem>
            <NotificationItem>
                <template #title>Tytuł powiadomienia</template>
                <template #description>Treść powiadomienia</template>
            </NotificationItem>
            <NotificationItem>
                <template #title>Tytuł powiadomienia</template>
                <template #description>Treść powiadomienia</template>
            </NotificationItem>
        </div>
    </main>
</template>

<style scoped>
main {
    background-image: url("../assets/images/triangular-background.png");
    background-repeat: no-repeat, repeat;
    background-position: top;
    margin: 0;
    padding: 40px 0px 0px 0px;
}
</style>