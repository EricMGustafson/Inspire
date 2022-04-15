import { sandboxApi } from "./AxiosServices.js"

class WeathersService {

  async getWeather() {
    const res = await sandboxApi.get('weather')
    console.log('get weather', res);
  }
}

export const weathersService = new WeathersService()