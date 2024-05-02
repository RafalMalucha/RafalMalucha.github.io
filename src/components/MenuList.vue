<script setup>
import MenuListItem from '../components/MenuListItem.vue'
</script>

<template>
    <div>
        <MenuListItem>
            <template #title> Chłodnik z jajkiem</template>
            <template #description> Bardzo dobra zupa</template>
        </MenuListItem>

        <MenuListItem>
            <template #title>Pomidorówka z makaronem</template>
            <template #description> Bardzo dobra zupa</template>
        </MenuListItem>

        <MenuListItem>
            <template #title>Rosołek</template>
            <template #description> Bardzo dobra zupa</template>
        </MenuListItem>

    </div>
</template>

<style scoped>
@media screen and (max-width: 900px) {
    div {
        width: 97%;
        margin: 0 auto;
    }
}
</style>
