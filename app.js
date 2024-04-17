const container = document.querySelector('.container')
const col = document.querySelector('.buttonsCol')

const clickBtn = document.createElement('button')
clickBtn.classList.add('clickBtn')
clickBtn.textContent = 'Show Notifications'
container.append(clickBtn)

const notify= () => {
  let a = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let c = Math.floor(Math.random() * 256)

  const randomNumber = Math.floor(Math.random() * 5)

  const notifBtn = document.createElement('button')
  notifBtn.classList.add('notifBtn')
  notifBtn.style.color = `rgb(${a}, ${b},${c})`
  notifBtn.textContent = `Message ${randomNumber}`
  col.append(notifBtn)

  setTimeout(() => {
    notifBtn.remove()
  }, 3000)
}

clickBtn.addEventListener("click", notify)
