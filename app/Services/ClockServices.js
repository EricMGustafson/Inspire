import { ProxyState } from "../AppState.js"


class ClocksServices{
  clockFlip() {
    ProxyState.clockFormat = !ProxyState.clockFormat
    console.log('bang');
  }
}




export const clocksServices = new ClocksServices()