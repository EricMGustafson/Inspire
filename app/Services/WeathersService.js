import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosServices.js"

class WeathersService {

  async getKelvin() {
    const res = await sandboxApi.get('weather')

  }
  async getCelcius(){
    const res = await sandboxApi.get('weather')
    let kelvin = res.data.main.temp
    let celcius = Math.floor(kelvin - 273.15)
    return celcius 
  }
  async getFarenheight(){
    const res = await sandboxApi.get('weather')
    let kelvin = res.data.main.temp
    let farenheight = Math.floor((kelvin - 273.15)*1.8 + 32)
    ProxyState.currentWeather = farenheight
  }
}

export const weathersService = new WeathersService()