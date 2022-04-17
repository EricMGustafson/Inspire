import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { iconApi, sandboxApi } from "./AxiosServices.js"

class WeathersService {
 
  async getWeather() {
    const res = await sandboxApi.get('weather')
    ProxyState.currentWeather = new Weather(res.data)
  }
  
  tempSwitch() {
    ProxyState.weatherDisplay += 1
    if (ProxyState.weatherDisplay > 3){
      ProxyState.weatherDisplay = 1
    }
  }
}

export const weathersService = new WeathersService()