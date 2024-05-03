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
    const soupItems = ref([]);
    const mainDishItems = ref([]);
    const dessertItems = ref([]);

    const loadData = async () => {
      // Load soups
      const soupSnapshot = await getDocs(collection(db, "ZUPY"));
      soupSnapshot.forEach((doc) => {
        const data = doc.data();
        soupItems.value.push({
          title: data.nazwa,
          description: data.opis,
          imageUrl: data.image_link,
          price: data.price
        });
      });

      // Load main dishes
      const mainDishSnapshot = await getDocs(collection(db, "DANIA GŁÓWNE"));
      mainDishSnapshot.forEach((doc) => {
        const data = doc.data();
        mainDishItems.value.push({
          title: data.nazwa,
          description: data.opis,
          imageUrl: data.image_link,
          price: data.price
        });
      });

      // Load desserts
      const dessertSnapshot = await getDocs(collection(db, "DESERY"));
      dessertSnapshot.forEach((doc) => {
        const data = doc.data();
        dessertItems.value.push({
          title: data.nazwa,
          description: data.opis,
          imageUrl: data.image_link,
          price: data.price
        });
      });
    };

    loadData();

    return {
      soupItems,
      mainDishItems,
      dessertItems
    };
  }
});
</script>

<template>
  <div id="menu">
    <div class="row">
      <h3>Zupy</h3>
      <MenuListItem v-for="(item, index) in soupItems" :key="'soup-' + index" :imageUrl="item.imageUrl">
        <template #title>{{ item.title }}</template>
        <template #description>{{ item.description }}</template>
        <template #price>{{ item.price }}</template>
      </MenuListItem>
    </div>


    <div class="row">
      <h3>Dania główne</h3>
      <MenuListItem v-for="(item, index) in mainDishItems" :key="'main-' + index" :imageUrl="item.imageUrl">
        <template #title>{{ item.title }}</template>
        <template #description>{{ item.description }}</template>
        <template #price>{{ item.price }}</template>
      </MenuListItem>
    </div>


    <div class="row">
      <h3>Desery</h3>
      <MenuListItem v-for="(item, index) in dessertItems" :key="'dessert-' + index" :imageUrl="item.imageUrl">
        <template #title>{{ item.title }}</template>
        <template #description>{{ item.description }}</template>
        <template #price>{{ item.price }}</template>
      </MenuListItem>
    </div>

  </div>
</template>


<style scoped>
#menu{
  margin-bottom: 40px;
}

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
