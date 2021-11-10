<template>
    <form class="home d-flex justify-content-center align-items-center vh-100 w-100 px-3 mt-5">
        <div class="jumbotron">
            <h1 class="text-primary text-primary mb-5 b">Bizmates Tours</h1>
            <div class="dropdown">
                <button class="btn btn-light btn-lg btn-block dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" form>
                    Where do you want to go today?
                </button>
                <div class="dropdown-menu">
                    <router-link :to="`/city/${destination.name.toLowerCase()}`" class="dropdown-item text-capitalize" v-for="(destination, index) in destinations" :key="index">{{ destination.name }}</router-link>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { FoursquareVenue } from '~/services/foursquare-venue'
const fs = new FoursquareVenue()

export default {
  data: function () {
    return {
      destinations: null
    }
  },
  async mounted () {
    const response = await fs.all()
    this.destinations = response.data
  }
}</script>

<style lang="scss" scoped>
.home {
    background-image: url('//www.desktopbackground.org/p/2010/09/16/81055_hd-quality-japanese-wallpapers-siwallpapers-tag-1_1920x1080_h.jpg');
    background-position: center;
    background-size: cover;
    text-align: center;

    .jumbotron {
        background-color: #00000061 !important;
    }

    h1 {
        text-shadow: 1px 1px 2px #ffffffd6;
        font-size: 3rem;
    }

    input {
        opacity: 0.75;
        text-align: center;
    }
}
</style>
