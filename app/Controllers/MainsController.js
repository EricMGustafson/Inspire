import { ProxyState } from "../AppState.js"
import { clocksServices } from "../Services/ClockServices.js"
import { imagesService } from "../Services/ImagesService.js"
import { quotesServices } from "../Services/QuotesServices.js"
import { Pop } from "../Utils/Pop.js"

function _drawQuote() {
  let q = ProxyState.currentQuote
  document.getElementById('quote').innerHTML = `
  <div class="text-center p-2">
    <div>
      <h4>${q.content}</h4>
    </div>
    <div class="on-hover">
      <p class="mb-0">${q.author}</p>
    </div>
  </div>`
}

function _drawImage() {
  let img = ProxyState.currentImage
  document.body.style.backgroundImage = "url(" + img.largeImgUrl + ")"
  document.getElementById('img-info').innerHTML = `
  <div>By: ${img.author}</div>
  <div>Theme: ${img.query}</div>`
}

function _drawClock() { 
  let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) 
  let editTime = time.slice(0, 5)
  let milTime = new Date().toLocaleTimeString([], {hourCycle: 'h24'}) + 'mil'
  let editMilTime = milTime.slice(0, 5)
  document.getElementById('clock').innerHTML = ProxyState.clockFormat ? editTime : editMilTime + 'm'
}

export class MainsController {
  constructor() {
    ProxyState.on('currentQuote', _drawQuote)
    ProxyState.on('currentImage', _drawImage)
    ProxyState.on('clockFormat', _drawClock)
    _drawClock()
    setInterval(_drawClock,1000)
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

  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      console.error(error)
      Pop.toast(error, 'error') 
    }
  }

  clockFlip(){
    clocksServices.clockFlip()
  }
}