/* global $ */

/**
 * Foursquare Venue API Service Class
 *
 * Note: Somehow FourSquare is not accepting
 * preflight requests. Some sections use
 * jQuery instead for its auto JSON-P
 * feature.
 *
 * @class FoursquareVenue
 */

import axios from 'axios'

export class FoursquareVenue {
  /**
     * FoursquareVenue Class
     */
  constructor () {
    this.apiUrl = process.env.MIX_API_URL
    this.fsApiUrl = 'https://api.foursquare.com/v2/venues/search'
    this.fsId = process.env.MIX_FOURSQUARE_ID
    this.fsSecret = process.env.MIX_FOURSQUARE_SECRET
  }

  /**
     * Get all available venues
     *
     * @returns {Promise<AxiosResponse<any>>}
     */
  async all () {
    return await axios.get(`${this.apiUrl}/venue`)
  }

  /**
     * Get venue by id
     *
     * @param city
     * @returns {Promise<AxiosResponse<any>>}
     */
  async show (city) {
    const params = this.buildParams({ near: city })
    return await $.get(this.fsApiUrl, params)
  }

  /**
     * Add common parameters to url
     *
     * @param params
     * @returns {{v: string, client_secret: string | undefined, client_id: string | undefined}}
     */
  buildParams (params = {}) {
    return { ...params, ...{ client_id: this.fsId, client_secret: this.fsSecret, v: '20211231' } }
  }
}
