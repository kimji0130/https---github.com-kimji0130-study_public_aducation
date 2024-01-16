//<보일러플레이트 만들기>

//1. canvas태그를 canvas에 저장하는것 
const canvas = document.querySelector('canvas')
//2. canvas 도구들에 접근할 수 있는 ctx 가져오기
const ctx = canvas.getContext('2d')
//3. 사이즈 관련 로직에 사용할 dpr(DvicePixelRatio) 미리 윈도우 객체로부터 가지고온다.
const dpr = window.devicePixelRatio

//4. canvas width,height를 지정해준다. 지금은 전체를 가지고 만들것이므로 innerWidth, innerHeight로 저장할것
const canvasWidth = innerWidth
const canvasHeight = innerHeight

//7. interval 정의 1000/ 우리가 원하는 fps=> delta가 interval보다 커지는 시점에 한 장면을 '7-1'에서 로직으로 실현시킴
const interval = 1000 / 60
//9. interval 크기를 1000/ 1로 바꾸면 fps가 1초단위로 지나간다

//10. init과 render함수를 넣어 더 구조화시킨다.

//========================================
//FINAL=====> index_2.js로 다시 정리!!!!!!
//========================================


/*4-1. 특정기기에 따라 dpr이 1~2,4 등등 다양한데 canvas의 고유 width와 height를 우리가 원하는 값의 dpr을 곱하고 scale로 내부 컨텐츠 
사이즈를 scaleUp 시켜주고, CSS로 canvas전체의 사이즈를 맞추어 선명하게 만드는 방법을 배워봤음 */
canvas.style.width = canvasWidth + 'px'
canvas.style.height = canvasHeight + 'px'

//4-2. 캔버스의 고유 width,height=canvasWidth/Height *dpr
canvas.width = canvasWidth * dpr
canvas.height = canvasHeight * dpr

//4-3. ctx.scale로 dpr, dpr을 곱하여 같은 컨텐츠를 특정 디바이스에서는 더욱 선명하게 만들어준다.
ctx.scale(dpr, dpr)

//6. fps 적용-1
let now, delta
let then = Date.now()

//5. frame 함수 만들기 
const frame = () =>{
  requestAnimationFrame(frame)
//프레임을 인자로 넣어 스스로 반복시키는 재귀함수로 만들어 현재의 디스플레이 사양에 따라 매 프레임마다 실행이 될수 있는 윈도의의 requestAnimationFrame을 만들어 준다.
  
//6. fps 적용-2  
now = Date.now() //데이터를 실시간으로 받아오고
delta = now - then

if (delta < interval) return //만약  delta가 interval보다 작으면 return, delta가 interval보다 크면 아래 로직을 실행시킴

//9.test-프레임이 1000/60초로 interval 되는지 확인해본다. 
console.log('frame')

//7-1. then 값을 다시 지정하여 새 then값을 받아오면 내가 설정해놓은  fps에 따라 frame 함수가 실행 됨.
then = now - (delta % interval)

}
//8. 프레임 함수가 실행될수 있도록 requestAnimationFrame으로 frame을 실행시키면 매 함수가 반복실행된다.
requestAnimationFrame(frame)