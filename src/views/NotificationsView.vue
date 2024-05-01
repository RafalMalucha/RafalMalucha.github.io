<script setup>
import ReturnArrow from '../components/ReturnArrow.vue'
import SmallTitle from '../components/text/SmallTitle.vue'
import NotificationItem from '../components/NotificationItem.vue';
import NavigationBar from '../components/NavigationBar.vue';
</script>

<template>
    <main>
        <div class="container">
            <div>
                <ReturnArrow></ReturnArrow>
                <SmallTitle>
                    <template #title>Powiadomienia</template>
                </SmallTitle>
            </div>
            <div id="notifications-container">
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

<style scoped>
main {
    margin: 0;
    padding: 40px 0px 0px 0px;
}

#notifications-container {
    max-height: 600px;
    padding-bottom: 20px;
    margin-top: 40px;
    overflow-y: scroll;
}

@media screen and (max-width: 900px) {
    #notifications-container {
        max-height: 500px;
        padding-bottom: 20px
    }

    main {
        background-image: url("../assets/images/triangular-background.png");
        background-repeat: no-repeat, repeat;
        background-position: top;
    }
}
</style>