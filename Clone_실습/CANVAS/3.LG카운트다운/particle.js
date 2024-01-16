import { randomNumBetween } from "./utils"
// 1. export default class particle에 constructor, update, draw를 만들어줌
export default class particle{
  constructor(){
    //2. 우선 화면중앙에 파티클 점을 찍어줄거라서 this.x, this.y를 만들어준다.
    //3. 화면 중앙에 점을 찍어주기위해서 x,y를 innerWidth,Height/2로 나눈다.
    // this.x = innerWidth / 2
    // this.y = innerHeight / 2

    this.rAlpha = randomNumBetween (0, 5)
    this.r - innerHeight / 4
    this.angleAlpha = randomNumBetween (1, 2)
    this.angle = randomNumBetween (0, 360)
    
  }
  update(){
    this.r += this.rAlpha
    this.r += this.angleAlpha

    this.x = innerWidth / 2 + this.r * Math.cos(Math.PI / 180 * this.angle)
    this.y = innerHeight / 2 + this.r * Math.sin(Math.PI / 180 * this.angle)


  }
  //4. 원을 그리는 작업을 하기위해 draw안에 밖의 ctx를 받아와서 
  draw(ctx){
    ctx.beginPath()
    ctx.arc(this.x, this.y, 4, 0, Math.PI * 2)//5. x좌표, y좌표, 반지름, 0부터 360까지 arc를 그린다.
    ctx.fillStyle = '#fff' //6. ctx.fillStype 은 배경이 검정색이니까 색깔로 한다.
    ctx.fill()// 7. fill, closePath를 하면 기본적인 원이 만들어진다.
    ctx.closePath()
  }


}