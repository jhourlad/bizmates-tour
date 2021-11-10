/* global $ */

/**
 * OpenWeatherMap API Service Class
 *
 * @class OpenWeatherMap
 */

export class OpenWeatherMap {
  /**
     * OpenWeatherMap Class
     */
  constructor () {
    this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
    this.key = process.env.MIX_OPENWEATHERMAP_KEY
    this.unit = 'metric'
  }

  /**
     * Get current weather
     *
     * @param location
     * @returns {Promise<*>}
     */
  async show (location) {
    const params = this.buildParams({ q: location })
    console.log('params', params)
    return await $.get(this.apiUrl, params)
  }

  /**
     * Add common parameters to url
     *
     * @param params
     * @returns {{appid: string | undefined, units: string}}
     */
  buildParams (params = {}) {
    return { ...params, ...{ units: this.unit, appid: this.key } }
  }
}
