import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js"
import { quotesServices } from "../Services/QuotesServices.js"
import { weathersService } from "../Services/WeathersService.js"
import { Pop } from "../Utils/Pop.js"

function _drawWeather() {
  let w = ProxyState.currentWeather
    document.getElementById('weather').innerHTML = `
      <div>${w}^F</div>
  `
}

function _drawQuote() {
  let q = ProxyState.currentQuote
  document.getElementById('quote').innerHTML = `<div><div><h4>${q.content}</h4></div><div><p>${q.author}</p></div></div>
  `
}

function _drawImage() {
  let img = ProxyState.currentImage
  document.body.style.backgroundImage = "url(" + img.largeImgUrl + ")"
  document.getElementById('img-info').innerHTML = 'By: ' + img.author + ', Theme: ' + img.query
}

function _drawClock() { 
  let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
  let editTime = time.slice(0, 5)
  document.getElementById('clock').innerHTML = editTime
}




export class MainsController {
  constructor() {
    ProxyState.on('currentWeather', _drawWeather)
    ProxyState.on('currentQuote', _drawQuote)
    ProxyState.on('currentImage', _drawImage)
    _drawClock()
    setInterval(_drawClock,1000)
    this.getQuote()
    this.getImage()
    this.getFarenheight()
  }

  async getQuote() {
    try {
      await quotesServices.getQuote()
    } catch (error) {
      console.error(error)
      Pop.toast(error, 'error')
    }
  }
  async getKelvin() {
    try {
      await weathersService.getKelvin()
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
  async getFarenheight(){
    await weathersService.getFarenheight()
  }
}