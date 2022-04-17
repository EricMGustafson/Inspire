

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
    <div class="d-flex text-center">
    <div class="me-3">
      <object id='weatherIcon'>
      </object>
      <div class="fs-5">
        ${this.description}
      </div>
    </div>
    <div>
      <div onclick="app.weathersController.tempSwitch()" class="selectable">
        ${this.Celcius}°C
      </div>
      <div class="fs-5">
        ${this.city}
      </div>
    </div>
  </div>
    `
  }
  get FarenheightTemplate() {
    return `
    <div class="d-flex text-center">
      <div class="me-3">
        <div>
          ${this.icon}
        </div>
        <div class="fs-5">
          ${this.description}
        </div>
      </div>
      <div>
        <div onclick="app.weathersController.tempSwitch()" class="selectable">
          ${this.Farenheight}°F
        </div>
        <div class="fs-5">
          ${this.city}
        </div>
      </div>
    </div>
    `
  }
}
