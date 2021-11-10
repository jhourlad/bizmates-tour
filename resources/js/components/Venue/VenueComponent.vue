<template>
    <div v-if="info" class="container pt-4 mt-5">
        <div class="row mt-3">
            <div class="col-md-8 col-lg-9">
                <weather-component :city="city" :location="`${city},JP`"/>
            </div>
            <div class="col-md-4 col-lg-3 venue-item" v-for="(venue, index) in info.response['venues']" :key="index">
                <div class="card mb-3">
                    <div class="card-body p-0">
                        <div class="embed-responsive embed-responsive-4by3">
                            <iframe
                                :src="`https://maps.google.com/maps?q=${venue.location.lat},${venue.location['lng']}&z=16&output=embed`"
                                class="embed-responsive-item"></iframe>
                        </div>
                        <div class="container p-3">
                            <h4 class="text-primary b mb-2">{{ venue.name }}</h4>
                            <address class="text-secondary"><i class="fa fa-map-marker-alt"></i>
                                {{ longAddress(venue.location['formattedAddress']) }}
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { FoursquareVenue } from '~/services/foursquare-venue'
import WeatherComponent from '~/components/Weather/WeatherComponent'

const fs = new FoursquareVenue()

export default {
  components: {
    WeatherComponent
  },

  /**
 * The city to display
 */
  props: ['city'],

  /**
     * Internal data
     *
     * @returns {{weather: null, info: null}}
     */
  data: function () {
    return {
      info: null,
      weather: null
    }
  },

  /**
     * mounted()
     * @returns {Promise<void>}
     */
  async mounted () {
    this.info = await fs.show(this.city)
  },

  methods: {
    /**
       * Concatenate address fields
       *
       * @param address
       * @returns string
       */
    longAddress: (address) => {
      return address.join(',')
    }
  }
}</script>

<style lang="scss" scoped>
.venue-item .card {
    height: 360px;
    overflow: hidden;
}
</style>
