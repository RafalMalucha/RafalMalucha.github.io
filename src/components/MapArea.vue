<script setup>
</script>

<template>
    <div id="map-area">
        <div id="details">
            <p>Wybrana lokalizacja: {{ markerPosition }} </p>
        </div>
        <div id="confirm">
            <button class="btn" @click="confirmLocation">Potwierdź lokalizacje</button>
        </div>
        <div id="map-container">
            <div ref="map"></div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, defineEmits } from 'vue';
import '../assets/leaflet.css';
import L from '../assets/leaflet.js';

const emits = defineEmits(['update-data']);

export default {
    methods: {
        confirmLocation(){
             this.$emit("providedLocation", this.markerPosition);
        }
    },
    setup() {
        var map = ref(null);
        var markerPosition = ref('');

        var LeafIcon = L.Icon.extend({
            options: {
                iconSize: [38, 95],
                shadowSize: [50, 64],
                iconAnchor: [22, 94],
                shadowAnchor: [4, 62],
                popupAnchor: [-3, -76]
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

                markerPosition.value = `${crd.latitude}, ${crd.longitude}`

                map.value = L.map('map-container').setView([crd.latitude, crd.longitude], 13);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors'
                }).addTo(map.value);

                var marker = L.marker(
                    [crd.latitude, crd.longitude], {
                    icon: greenIcon,
                    draggable: true
                }
                ).addTo(map.value);

                marker.on('dragend', function (event) {
                    var marker = event.target;
                    var position = marker.getLatLng();
                    console.log('Marker dragged to:', position);
                    markerPosition.value = `${position.lat}, ${position.lng}`;
                });
            }

            navigator.geolocation.getCurrentPosition(success,
                position => {
                    //console.log(position.coords.latitude);
                    //console.log(position.coords.longitude);
                },
                error => {
                    console.log(error.message);
                })
        });

        return { map, markerPosition };
    }
};
</script>

<style scoped>
#map-area {
    padding-bottom: 40px
}

#confirm {
    padding: 10px
}

#map-container {
    height: 100%;
    border: 1px solid var(--color-light-grey);
    border-radius: 12px;
}

#map-container>div {
    height: 500px;
}

p {
    font-size: 1.1rem;
    text-align: center;
}

@media screen and (max-width: 900px) {
    #map-container>div {
        height: 350px;
    }
}
</style>
