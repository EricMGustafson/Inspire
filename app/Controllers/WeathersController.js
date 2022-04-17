import { ProxyState } from "../AppState.js"
import { weathersService } from "../Services/WeathersService.js"
import { Pop } from "../Utils/Pop.js"


async function _drawWeather(){
  let template = ProxyState.currentWeather
  let display = ProxyState.weatherDisplay
  document.getElementById('weather').innerHTML = display == 1 ? template.FarenheightTemplate : display == 2 ? template.CelciusTemplate : template.KelvinTemplate
}
export class WeathersController {
  constructor() {
    ProxyState.on('currentWeather', _drawWeather)
    ProxyState.on('weatherDisplay', _drawWeather)
    this.getWeather()
  }

  async getWeather(){
    try {
      await weathersService.getWeather()
    } catch (error) {
      console.error(error)
      Pop.toast(error, 'error')
    }
  }

  tempSwitch(){
    weathersService.tempSwitch()
  }
}