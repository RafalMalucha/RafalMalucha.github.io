<script setup>
import ReturnArrow from '../components/ReturnArrow.vue'
import SmallTitle from '../components/text/SmallTitle.vue'
import NotificationItem from '../components/NotificationItem.vue';
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
                    <template #title>Powiadomienia</template>
                </SmallTitle>
            </div>
            <div class="row scroll">
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
                <NotificationItem>
                    <template #title>Tytuł powiadomienia</template>
                    <template #description>Treść powiadomienia</template>
                </NotificationItem>

            </div>
        </div>
    </main>
    <nav>
        <NavigationBar></NavigationBar>
    </nav>
</template>

<style scoped></style>