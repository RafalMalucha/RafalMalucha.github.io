<script>
import MenuListItem from '../components/MenuListItem.vue'
import { defineComponent, ref } from 'vue';
import app from '../firebase';
import { getFirestore, getDocs, collection } from "firebase/firestore";

export default defineComponent({
  name: 'MenuList',
  components: {
    MenuListItem
  },
  setup() {
    const db = getFirestore(app);
    const menuItems = ref([]);

    const loadData = async () => {
      const querySnapshot = await getDocs(collection(db, "ZUPY"));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        menuItems.value.push({
          title: data.nazwa,
          description: data.opis,
          imageUrl: data.image_link,
          cena: data.cena
        });
      });
    };

    loadData();

    return {
      menuItems
    };
  }
});
</script>


<template>
  <!-- Zupy -->
  <div class="row">
    <h3>Zupy</h3>
  </div>

  <div class="row">
    <MenuListItem v-for="(item, index) in menuItems" :key="index" :imageUrl="item.imageUrl">
      <template #title>{{ item.title }}</template>
      <template #description>{{ item.description }}</template>
      <template #price>{{ item.cena }}</template>
    </MenuListItem>
  </div>

  <!-- Dania główne -->
  <div class="row">
    <h3>Dania główne</h3>
  </div>
  <div class="row">
    <MenuListItem v-for="(item, index) in menuItems" :key="index" :imageUrl="item.imageUrl">
      <template #title>{{ item.title }}</template>
      <template #description>{{ item.description }}</template>
      <template #price>{{ item.cena }}</template>
    </MenuListItem>
  </div>

  <!-- Desery -->
  <div class="row">
    <h3>Desery</h3>
  </div>
  <div class="row">
    <!-- TODO Tutaj lista deserów -->
  </div>

  <!-- Napoje -->
  <div class="row">
    <h3>Napoje</h3>
  </div>
  <div class="row">
    <!-- TODO Tutaj lista napojów -->
  </div>
</template>


<style scoped>
h3 {
  width: 100%;
  color: #000000;
  text-align: center;
  padding: 20px 20px;
  font-weight: bold;
  border-top: 1px solid var(--color-light-grey);
  margin-top: 20px;
}

.row:nth-of-type(1)>h3 {
  margin-top: 0px;
}

@media screen and (max-width: 900px) {
  div {
    width: 100%;
    margin: 0 auto;
  }
}
</style>