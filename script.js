const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    
    container.appendChild(cell).className = "grid-item";
    
  };
};
makeRows(16, 16);

let opacityIncrement = 0;
function color(){
    if(tmp ==0){
        this.style.backgroundColor = 'black';
        this.style.opacity = 1;
    }else if(tmp == 1){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
    }else{
        const opacity = 0.01;
        if(opacityIncrement > 1){
            opacityIncrement = 0;
        }
        opacityIncrement = opacityIncrement  + opacity;
        this.style.backgroundColor = 'black';
        this.style.opacity = opacityIncrement ;
    }
}
let grids = document.querySelectorAll('.grid-item');
grids.forEach(grid => grid.addEventListener('mouseover',color))

let tmp=0;
function whichOption(){
    if(this.className.includes('rainbow')){
        tmp = 1;
    }else if(this.className.includes('darkT')){
        tmp = 2
    }else{
        tmp = 0;
    }
}
let options = document.querySelectorAll('button');
options.forEach(option => option.addEventListener('click',whichOption))

let gridSize = document.querySelector('.prompt');
gridSize.addEventListener('click', () => {
    let a = prompt("choose gride size max is 100");
    makeRows(a,a);
    grids = document.querySelectorAll('.grid-item');
    grids.forEach(grid => grid.addEventListener('mouseover',color));
})

