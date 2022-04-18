import { ProxyState } from "../AppState.js"
import { clocksServices } from "../Services/ClockServices.js"
import { imagesService } from "../Services/ImagesService.js"
import { quotesServices } from "../Services/QuotesServices.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"
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
  document.getElementById('clock').innerHTML = ProxyState.clockFormat ? editTime : editMilTime
}

function _drawGreeting() {
  let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) 
  console.log(time);
  if (time)
}

export class MainsController {
  constructor() {
    ProxyState.on('currentQuote', _drawQuote)
    ProxyState.on('currentImage', _drawImage)
    ProxyState.on('clockFormat', _drawClock)
    ProxyState.on('')
    ProxyState.on('currentUser', saveState)
    loadState()
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
  setTheme(theme){
    if (theme == 'dark') {
      document.getElementById('offcanvasRight').style.backgroundColor = 'var(--bs-light)'
      document.getElementById('offcanvasLeft').style.backgroundColor = 'var(--bs-light)'
    }
    if (theme == 'light') {
      document.getElementById('offcanvasRight').style.backgroundColor = 'var(--bs-grey)'
      document.getElementById('offcanvasLeft').style.backgroundColor = 'var(--bs-grey)'
    }
    if (theme == 'warning') {
      document.getElementById('offcanvasRight').style.backgroundColor = 'var(--bs-grey)'
      document.getElementById('offcanvasLeft').style.backgroundColor = 'var(--bs-grey)'
    }
    document.getElementById('body').style.color = 'var(--bs-'+ theme + ')'
    document.getElementById('offcanvasRight').style.color = 'var(--bs-'+ theme + ')'
    document.getElementById('offcanvasLeft').style.color = 'var(--bs-'+ theme + ')'
    document.getElementById('btn').style.color = 'var(--bs-'+ theme + ')'
    document.getElementById('description').style.color = 'var(--bs-'+ theme + ')'
  }
  newUser(){
    document.getElementById('newUser').toggleAttribute('hidden')
    document.getElementById('user').toggleAttribute('hidden')
  }
  addUser(){
    try {
      window.event.preventDefault()
      /**@type {HTMLFormElement*/
      // @ts-ignore
      const formElem = window.event.target
      const formData = {
        user: formElem.user.value
      }
      document.getElementById('userDisplay').innerText = formData.user
      console.log(formData);
      formElem.reset()
    } catch (error) {
      console.error(error)
      Pop.toast(error, 'error') 
    }
    document.getElementById('newUser').toggleAttribute('hidden')
    document.getElementById('user').toggleAttribute('hidden')
  }
}