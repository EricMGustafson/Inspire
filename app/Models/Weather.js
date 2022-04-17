

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
    <div class="d-flex text-center">
      <div class="me-2" id="weatherIcon">
        <img class="object-fit" src="https://openweathermap.org/img/wn/${this.icon}@2x.png" alt="${this.description}" title="${this.description}">
      </div>
      <div>
        <div onclick="app.weathersController.tempSwitch()" class="selectable vh-5">
          ${Math.floor(this.temp)}°K
        </div>
        <div class="fs-5">
          ${this.city}
        </div>
      </div>
    </div>`
  }
  get CelciusTemplate() {
    return `
    <div class="d-flex text-center">
        <div class="me-2" id="weatherIcon">
          <img class="object-fit" src="https://openweathermap.org/img/wn/${this.icon}@2x.png" alt="${this.description}" title="${this.description}">
        </div>
      <div>
        <div onclick="app.weathersController.tempSwitch()" class="selectable vh-5">
          ${this.Celcius}°C
        </div>
        <div class="fs-5">
          ${this.city}
        </div>
      </div>
    </div>`
  }
  get FarenheightTemplate() {
    return `
    <div class="d-flex text-center">
        <div class="me-2" id="weatherIcon">
          <img class="object-fit" src="https://openweathermap.org/img/wn/${this.icon}@2x.png" alt="${this.description}" title="${this.description}">
        </div>
      <div>
        <div onclick="app.weathersController.tempSwitch()" class="selectable vh-5">
          ${this.Farenheight}°F
        </div>
        <div class="fs-5">
          ${this.city}
        </div>
      </div>
    </div>`
  }
}
