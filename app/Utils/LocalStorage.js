import { ProxyState } from "../AppState.js"


export function saveState(){
  let data = {
    user: ProxyState.currentUser
  }
  window.localStorage.setItem('inspire', JSON.stringify(data))
}

export function loadState(){
  let data = window.localStorage.getItem('inspire')
  if (data) {
    let obj = JSON.parse(data)
    ProxyState.currentUser = obj.currentUser.map()
  }
}