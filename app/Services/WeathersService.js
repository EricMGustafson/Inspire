import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { sandboxApi } from "./AxiosServices.js"

class WeathersService {
 
  async getWeather() {
    const res = await sandboxApi.get('weather')
    ProxyState.currentWeather = new Weather(res.data)
    console.log(ProxyState.currentWeather);
  }

  tempSwitch() {
    ProxyState.farenheight = !ProxyState.farenheight
    console.log(ProxyState.farenheight);
  }
}

export const weathersService = new WeathersService()