const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please provide a valid input!'
    result.style.color = 'red'
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please provide a valid input!'
    result.style.color = 'red'
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    result.innerHTML = `${bmi}<br>`
    if (bmi < 18.6) {
      result.appendChild(document.createTextNode(`You are under weight! `))
      result.appendChild(document.createTextNode(String.fromCodePoint(0x1f61f)))
      result.style.color = 'red'
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.appendChild(document.createTextNode(`You are normal `))
      result.appendChild(document.createTextNode(String.fromCodePoint(0x1f60a)))
      result.style.color = 'green'
    } else {
      result.appendChild(document.createTextNode(`You are over weight!`))
      result.appendChild(document.createTextNode(String.fromCodePoint(0x1f61f)))
      result.style.color = 'red'
    }
  }
})
