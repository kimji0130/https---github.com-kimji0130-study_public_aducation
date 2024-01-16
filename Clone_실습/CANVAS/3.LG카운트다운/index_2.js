import Particle from './particle.js'

//<보일러플레이트 만들기>
// 0. 변수 선언
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const dpr = window.devicePixelRatio

//2. const로 되어있는 부분을 let으로 변경하고, init 안으로 넣어준다.
let canvasWidth = innerWidth
let canvasHeight = innerHeight
const interval = 1000 / 60

const particles = []

//1. init에 사이즈 관련된 정보를 전부 옮겨준다.
function init(){
  //3.canvaswidth,height에 const를 지우고 let으로 선언을 변경한 후 innerWidth,Height를 넣어주도록한다.
  canvasWidth = innerWidth
  canvasHeight = innerHeight
  canvas.style.width = canvasWidth + 'px'
  canvas.style.height = canvasHeight + 'px'
  canvas.width = canvasWidth * dpr
  canvas.height = canvasHeight * dpr
  ctx.scale(dpr, dpr)
}
function createRing() {
  for(let i = 0; i < PARTICLE_NUM; i++){
    particles.push(new particle())//1개만큼 particles이 particles배열에 담겨 frame 함수 내에 메서드를 실행
  }
}
//4. function render함수를 만들고, let now부터~ 맨아래까지 복사해서 render함수에 넣어준다.
function render(){
  let now, delta
  let then = Date.now()
  
  const frame = () =>{
    requestAnimationFrame(frame)
  now = Date.now() //4-1. 데이터를 실시간으로 받아오고
  delta = now - then
  
  if (delta < interval) return //4-2. 만약  delta가 interval보다 작으면 return, delta가 interval보다 크면 아래 로직을 실행시킴
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  //4.6
  // console.log('frame')
  particles.forEach((particle, index) =>{
    particles.update().particle.draw(ctx)
    
  })
  
  //7-1. then 값을 다시 지정하여 새 then값을 받아오면 내가 설정해놓은  fps에 따라 frame 함수가 실행 됨.
  then = now - (delta % interval)
  
  }
  //4-5.
  requestAnimationFrame(frame)
}
//5. window.addEventListener로 load로 모든 브라우저 내의 요소가 준비가되면
window.addEventListener('lode', () => {
  //6.init함수와 render함수가 순차적으로 실행되게 한다.
  init()
  render()
})
/*7. window.addEventListener가 resize될 때마다 init함수가 실행되도록 해주면 기본적인
보일러 플레이트 방식이 완성됨*/
window.addEventListener('resize', init)

window.addEventListener('click', () =>{
  createRing()
})