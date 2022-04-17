import { ProxyState } from "../AppState.js"
import { weathersService } from "../Services/WeathersService.js"
import { Pop } from "../Utils/Pop.js"


function _drawWeather(){
  document.getElementById('weather').innerHTML = ProxyState.farenheight ? ProxyState.currentWeather.FarenheightTemplate : ProxyState.currentWeather.CelciusTemplate
}
export class WeathersController {
  constructor() {
    ProxyState.on('currentWeather', _drawWeather)
    ProxyState.on('farenheight', _drawWeather)
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