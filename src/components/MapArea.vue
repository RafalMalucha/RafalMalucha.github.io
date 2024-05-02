<script setup>
</script>

<template>
    <div id="map-container">
        <div ref="map" style="height: 400px;"></div>
    </div>
</template>

<script>
// import { ref, onMounted } from 'vue';
// import '../assets/leaflet.css';
// import L from '../assets/leaflet.css';

// export default {
//     setup() {
//         var map = ref(null);

//         onMounted(() => {
//             function success(pos) {
//                 const crd = pos.coords;

//                 console.log("Your current position is:");
//                 console.log(`Latitude : ${crd.latitude}`);
//                 console.log(`Longitude: ${crd.longitude}`);
//                 console.log(`More or less ${crd.accuracy} meters.`);

//                 map.value = L.map('map-container').setView([crd.latitude, crd.longitude], 13);

//                 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//                     attribution: '© OpenStreetMap contributors'
//                 }).addTo(map.value);

//                 var ico = L.icon({
//                     iconUrl: '../assets/icons/marker-icon-2x.png',
//                 })

//                 L.marker([crd.latitude, crd.longitude], { icon: ico }).addTo(map.value);
//             }

//             navigator.geolocation.getCurrentPosition(success,
//                 position => {
//                     console.log(position.coords.latitude);
//                     // const lat = position.coords.latitude;
//                     // const long = position.coords.longitude;
//                 },
//                 error => {
//                     console.log(error.message);
//                 },)
//         });

//         return { map };
//     }
// };
</script>

<style>
#map-container {
    height: 100%;
}
</style>
<style scoped>
div {
    height: 600px;
    background-color: green;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
}

@media screen and (max-width: 900px) {
    div {
        height: 500px;
    }
}
</style>
