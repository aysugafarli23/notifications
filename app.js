const container = document.querySelector('.container')
const col = document.querySelector('.buttonsCol')

const clickBtn = document.createElement('button')
clickBtn.classList.add('clickBtn')
clickBtn.textContent = 'Show Notifications'
container.append(clickBtn)
let a = Math.random() * 100
let b = Math.random() * 100
let c = Math.random() * 100
let numbers = [1, 2, 3]

clickBtn.addEventListener('click', () => {
  const number = numbers.map(number => {
    number
  })

  const notifBtn = document.createElement('button')
  notifBtn.classList.add('notifBtn')
  notifBtn.style.color = `rgb(${a}, ${b},${c}`
  notifBtn.textContent = `Message ${number}`
  col.append(notifBtn)
})
