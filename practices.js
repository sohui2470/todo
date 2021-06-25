// Practices: Elements & Events

const select = document.querySelector(".hello h1:first-child");
console.log(select);

function handleTitleClick(){
    console.log("title was clicked!");
    select.style.color = 'green';
    alert("thanks a lot *'-'*");
}
function handleMouseEnter(){
    console.log("mouse has entered!");
    select.style.color = 'yellow';
    select.innerText = "hello!"
}
function handleMouseLeave(){
    console.log("mouse has left!");
    select.style.color = 'black';
    select.innerText = "T-T"
}
function handleResizeEvent(){
    document.body.style.backgroundColor = 'lightgreen';
}
function handleCopyEvent(){
    alert('well copied');
}
function handleOffEvent(){
    alert('HEY!!!!!! you\'re offline now!!!');
}
function handleOnEvent(){
    alert('YEY! you\'re online now!');
}

select.addEventListener("click", handleTitleClick);
select.addEventListener("mouseenter", handleMouseEnter);
// select.onmouseenter = handleMouseEnter;
select.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleResizeEvent);
window.addEventListener("copy", handleCopyEvent);
window.addEventListener("offline", handleOffEvent);
window.addEventListener("online", handleOnEvent);

// Practices: About Color; understanding CSS

const select = document.querySelector(".hello");
document.body.style.backgroundColor = 'DarkSlateBlue';
select.style.color = 'deepskyblue';

function theNewStyle(){
  const currentColor = select.style.color;
  if(currentColor === 'deepskyblue'){
    newColor = 'ghostwhite';
  }else{
    newColor = 'deepskyblue';
  }
  select.style.color = newColor;
}

select.addEventListener('click',theNewStyle);