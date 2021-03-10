<template>
  <gmap-map
    id="map"
    :center="center"
    :zoom="13"
    :options="options"
    map-type-id="terrain"
  >
    <GmapInfoWindow
      v-for="medivue in mediVues"
      :key="'infoWindow-' + medivue.id"
      :clickable="true"
      :position="{lat: medivue.lat, lng: medivue.lng }"
      :options="getContents(medivue)"      
    />
    <gmap-marker
      v-for="medivue in mediVues"
      :key="'marker-' + medivue.id"
      :position="{lat: medivue.lat, lng: medivue.lng }"
    >
    </gmap-marker>
  </gmap-map>
</template>
<script>
  import {API_KEY} from './Maps/API_KEY'
  import Vue from 'vue'
  import * as VueGoogleMaps from 'vue2-google-maps';
  import config from '../../config';

  import { mapState } from 'vuex';

  Vue.use(VueGoogleMaps, {
    load: {
      key: config.GOOGLE_API
    }
  })
  export default {
    computed: {
      ...mapState('hospitalInfo', [
        'mediVues'
      ])
    },
    mounted() {
      this.$getLocation()
      .then(coordinates => {
        this.center = {
          lat: coordinates.lat,
          lng: coordinates.lng
        }
      });
    },
    data () {
      return {
        center: {
          lat: 39.7766427,
          lng: -86.176593
        },
        options: {
          styles: [{
            'featureType': 'water',
            'stylers': [{'saturation': 43}, {'lightness': -11}, {'hue': '#0088ff'}]
          }, {
            'featureType': 'road',
            'elementType': 'geometry.fill',
            'stylers': [{'hue': '#ff0000'}, {'saturation': -100}, {'lightness': 99}]
          }, {
            'featureType': 'road',
            'elementType': 'geometry.stroke',
            'stylers': [{'color': '#808080'}, {'lightness': 54}]
          }, {
            'featureType': 'landscape.man_made',
            'elementType': 'geometry.fill',
            'stylers': [{'color': '#ece2d9'}]
          }, {
            'featureType': 'poi.park',
            'elementType': 'geometry.fill',
            'stylers': [{'color': '#ccdca1'}]
          }, {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [{'color': '#767676'}]
          }, {
            'featureType': 'road',
            'elementType': 'labels.text.stroke',
            'stylers': [{'color': '#ffffff'}]
          }, {'featureType': 'poi', 'stylers': [{'visibility': 'off'}]}, {
            'featureType': 'landscape.natural',
            'elementType': 'geometry.fill',
            'stylers': [{'visibility': 'on'}, {'color': '#b8cb93'}]
          }, {'featureType': 'poi.park', 'stylers': [{'visibility': 'on'}]}, {
            'featureType': 'poi.sports_complex',
            'stylers': [{'visibility': 'on'}]
          }, {'featureType': 'poi.medical', 'stylers': [{'visibility': 'on'}]}, {
            'featureType': 'poi.business',
            'stylers': [{'visibility': 'simplified'}]
          }]
        }
      }
    },
    methods: {
      getContents(medivue) {
        return {
          content: `<p style="margin-bottom: 0;">${medivue.name}</h4>`,
          pixelOffset: {
            width: 0,
            height: -35
          }
        }
      }
    }
  }
</script>
<style>
  #map {
    min-height: calc(100vh - 123px);
  }
</style>
