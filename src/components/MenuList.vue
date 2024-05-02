<script>
import MenuListItem from '../components/MenuListItem.vue'
import { defineComponent } from 'vue';
import app from '../firebase';
import { getFirestore, getDocs, collection } from "firebase/firestore";

export default defineComponent({
  name: 'MenuList',
  setup() {
    const db = getFirestore(app);
    const loadData = async () => {
      const querySnapshot = await getDocs(collection(db, "ZUPY"));
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    };

    loadData();

    return {};
  }
});
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
    <h2>test</h2>
</template>

<style scoped>
@media screen and (max-width: 900px) {
    div{
        width: 97%;
        margin: 0 auto;
    }
}
</style>
