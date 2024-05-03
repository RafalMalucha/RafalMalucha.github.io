<script setup>
import { defineProps } from 'vue';

// Define the props the component accepts
const { imageUrl, cena } = defineProps({
  imageUrl: String,
  cena: String
});
</script>

<template>
  <div class="col-md-4">
    <div id="item" class="shadow">
      <div>
        <!-- Use the imageUrl directly without 'props' -->
        <img class="img" :src="imageUrl" alt="Menu item photo" />
      </div>
      <div>
        <h4>
          <slot name="title"></slot>
        </h4>
        <p>
          <slot name="description"></slot>
        </p>
      </div>
      <!-- Displaying the price directly from the cena variable -->
      <div class="price-tag">
        {{ cena }} zł
      </div>
    </div>
  </div>
</template>

<style scoped>
#item {
  display: flex;
  flex-direction: column;
  position: relative; /* Needed for absolute positioning of the price */
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  background-color: var(--color-white);
  color: var(--color-black);
}

.price-tag {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  color: var(--color-primary); /* Ensure this color stands out */
}

img {
  width: 40%;  /* Restoring previous size, adjust as necessary */
}

@media screen and (max-width: 900px) {
  #item {
    flex-direction: row;
    padding: 0px;
  }

  #item > div {
    padding: 20px;
  }

  #item > div:nth-of-type(1) {
    width: 40%;
    margin-bottom: 0px;
  }

  #item > div:nth-of-type(2) {
    width: 60%;
  }

  img {
    width: 100%;  /* Ensuring full width in smaller screens */
  }
}
</style>




