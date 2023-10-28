const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let gridSize = 20;
let snakeColor = "green";
let foodColor = "red";
let headColor = "blue";
let point = document.querySelector(".point");
let snake = [{x:0,y:0}];
let food = { x:6, y:3 };
let dx = 1;
let dy = 0;
var i=0;



function drawSnake(){
    snake.forEach(segment=>{
        ctx.fillStyle = headColor;
        ctx.fillRect(segment.x*gridSize,segment.y*gridSize, gridSize , gridSize)
    })
}




function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(food.x*gridSize,food.y*gridSize, gridSize, gridSize)
}




function update(){
    const head = {x:snake[0].x+dx, y:snake[0].y+dy};
    // .unshift;, pop(); -->massive
    snake.unshift(head);
    if(head.x==food.x && head.y==food.y){
        i++;
        point.innerHTML = i;
        food.x=Math.floor(Math.random()*(canvas.width/gridSize));
        food.y=Math.floor(Math.random()*(canvas.height/gridSize));
    }else{
        
        snake.pop();
    }
        ctx.clearRect(0,0,canvas.clientWidth,canvas.height);
        drawSnake();
        drawFood();
    function check(){
            const head = snake[0];
            if(head.x < 0  || head.x >= canvas.width / gridSize || head.y >= canvas.height / gridSize || head.y<0){
                    alert("YOU ARE DEAD");
                    return true;
                }
            }
            check(); 
}

const gameLoop = setInterval(update,200);
document.addEventListener("keydown",(event)=>{
    switch(event.key){
            case "ArrowUp":
            if(dy!==-1){
                dx=0;
                dy=-1;
            }
            break;
            case "ArrowLeft":
            if(dx!==1){
                dx=-1;
                dy=0;
            }
            break;
            case "ArrowRight":
            if(dx!==-1){
                dx=1;
                dy=0;
            }
            break;
            case "ArrowDown":
            if(dy!==1){
                dx=0;
                dy=1;
            }
            break;
    }
})