<script setup>
</script>

<template>
    <div id="map-container">
        <div ref="map" style="height: 400px;"></div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import '../assets/leaflet.css';
import L from '../assets/leaflet.js';

export default {
    setup() {
        var map = ref(null);

        var LeafIcon = L.Icon.extend({
            options: {
            iconSize:     [38, 95],
            shadowSize:   [50, 64],
            iconAnchor:   [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor:  [-3, -76]
            }
        });

        var greenIcon = new LeafIcon({
            iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
            shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png'
        })

        onMounted(() => {
            function success(pos) {
                const crd = pos.coords;

                console.log(crd);

                console.log("Your current position is:");
                console.log(`Latitude : ${crd.latitude}`);
                console.log(`Longitude: ${crd.longitude}`);
                console.log(`More or less ${crd.accuracy} meters.`);

                map.value = L.map('map-container').setView([crd.latitude, crd.longitude], 13);
    
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
                }).addTo(map.value);

                L.marker(
                    [crd.latitude, crd.longitude], {
                        icon: greenIcon,
                        draggable: true
                    }
                ).addTo(map.value);
            }

            navigator.geolocation.getCurrentPosition(success,
                position => {
                    //console.log(position.coords.latitude);
                    //console.log(position.coords.longitude);
                },
                error => {
                    console.log(error.message);
                },)
        });

        return { map };
    }
};
</script>

<style>
#map-container {
    height: 100%;
}
</style>
<style scoped>
div {
    height: 600px;
    background-color: (green);
    border: 1px solid var(--color-light-grey);
    border-radius: 12px;
}

@media screen and (max-width: 900px) {
    div {
        height: 500px;
    }
}
</style>
