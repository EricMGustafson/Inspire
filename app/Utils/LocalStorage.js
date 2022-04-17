

export function saveState(){
  let data = {

  }
  window.localStorage.setItem('inspire', JSON.stringify(data))
}

export function loadState(){
  let data = window.localStorage.getItem('inspire')
  if (data) {
    let obj = JSON.parse(data)
    
  }
}