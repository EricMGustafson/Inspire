import { imagesService } from "../Services/ImagesService.js"
import { quotesServices } from "../Services/QuotesServices.js"
import { weathersService } from "../Services/WeathersService.js"
import { Pop } from "../Utils/Pop.js"


export class MainsController {
  constructor() {
    this.getWeather()
    this.getQuote()
    this.getImage()
  }

  async getQuote() {
    try {
      await quotesServices.getQuote()
    } catch (error) {
      console.error(error)
      Pop.toast(error, 'error')
    }
  }
  async getWeather() {
    try {
      await weathersService.getWeather()
    } catch (error) {
      console.error(error)
      Pop.toast(error, 'error')
    }
  }
  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      console.error(error)
      Pop.toast(error, 'error') 
    }
  }

}