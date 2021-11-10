<template>
    <div v-if="weather" class="jumbotron-fluid bg-primary rounded mb-3 p-3 text-light">
        <div class="row" v-for="(i, index) in weather.weather.slice(0,1)" :key="index">
            <div class="col-3">
                <img :src="`https://openweathermap.org/img/w/${i.icon}.png`" class="w-100" alt="i.description"/>
            </div>
            <div class="col-9 p-3">
                <h1 class="text-warning text-capitalize b">{{ city }}</h1>
                <h3 class="b"><i class="fa fa-temperature-low"></i>C {{ weather.main['temp'] }}</h3>
                <h4 class="text-capitalize text-info">{{ i.description }}</h4>
            </div>

            <div class="col-3 text-center">
                <div class="text-info h1"><i class="fa fa-grin-beam-sweat"></i></div>
                <h5>Humidity</h5>
                <h4 class="b">{{ weather.main['humidity'] }}%</h4>
            </div>

            <div class="col-3 text-center">
                <div class="text-info h1"><i class="fa fa-wind"></i></div>
                <h5>Wind</h5>
                <h4 class="b">{{ weather.wind.speed }} km/h</h4>
            </div>

            <div class="col-3 text-center">
                <div class="text-info h1"><i class="fa fa-sun"></i></div>
                <h5>Sunrise</h5>
                <h4 class="b">{{ new Date(weather.sys.sunrise).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }}</h4>
            </div>

            <div class="col-3 text-center">
                <div class="text-info h1"><i class="fa fa-moon"></i></div>
                <h5>Sunset</h5>
                <h4 class="b">{{ new Date(weather.sys.sunset).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}) }} PM</h4>
            </div>
        </div>
    </div>
</template>

<script>
import { OpenWeatherMap } from '~/services/openweathermap'
const owm = new OpenWeatherMap()

export default {
  props: ['city', 'location'],

  data: function () {
    return {
      weather: null
    }
  },

  async mounted () {
    this.weather = await owm.show(this.location)
    console.log('weather', this.weather)
  }
}</script>

<style lang="scss" scoped>

</style>
