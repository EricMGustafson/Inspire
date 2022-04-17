
// @ts-ignore
export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
  timeout: 9000
})

// @ts-ignore
export const iconApi = axios.create({
  baseURL: 'http://openweathermap.org/img/wn/',
  timeout: 9000
})