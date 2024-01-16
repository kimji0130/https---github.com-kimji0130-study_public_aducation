// const btnEls = document.querySelectorAll('.btn')

// btnEls.forEach(btnEl => {
//   btnEl.addEventListener('click', () => {
//     btnEl.classList.add('loading')
//     setTimeout(() => {
//       btnEl.classList.remove('loding')
//     }, 3000)  
//   })
// })
const btnEls = document.querySelectorAll('.btn')
btnEls.forEach(btnEl => {
  btnEl.addEventListener('click', () => {
    btnEl.classList.add('loading')  
    setTimeout(() => {
      btnEl.classList.remove('loading')  
    }, 3000)
  })
})