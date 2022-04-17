

export class Weather{
  constructor(data) {
    this.temp = data.main.temp
    this.city = data.name
    this.icon = data.weather[0].icon
    this.description = data.weather[0].description
  }

  get Celcius() {
    let celcius = Math.floor(this.temp - 273.15)
    return celcius
  }
  get Farenheight() {
    let farenheight = Math.floor((this.temp-273.15) * 1.8 + 32)
    return farenheight
  }

  get KelvinTemplate() {
    return `
    <div onclick="app.weathersController.tempSwitch()" class="fs-1 selectable">${this.temp}°K</div>
    `
  }
  get CelciusTemplate() {
    return `
    <div onclick="app.weathersController.tempSwitch()" class="fs-1 selectable">${this.Celcius}°C</div>
    `
  }
  get FarenheightTemplate() {
    return `
    <div onclick="app.weathersController.tempSwitch()" class="fs-1 selectable">${this.Farenheight}°F</div>
    `
  }
}
