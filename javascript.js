const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalid = null;

const trafficlight = (Event) =>{
    stopAutomatic();
    turnOn[Event.target.id]();

}
const nextIndex = ()=>
    colorIndex = colorIndex <2 ? ++colorIndex :0;
   
const changeColor = ()=>{
    const colors =['yellow','red','green']
    const color = colors[colorIndex];   
    turnOn[color]();
    nextIndex();
} 
const stopAutomatic = () =>{
    clearInterval(intervalid);
}
const turnOn = {
    'red':()=> img.src = './img/vermelho.png',
    'yellow':()=> img.src ='./img/amarelo.png',
    'green':()=> img.src='./img/verde.png',
    'automatic':()=> intervalid= setInterval(changeColor,1000)
}
buttons.addEventListener('click',trafficlight);
