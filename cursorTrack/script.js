var p = document.getElementById('p');

function mousemove(event){
    console.log(
        "clientX: ", event.clientX, 
        "clientY:", event.clientY
    )
    p.style.backgroundColor="yellow";
    p.style.left = event.clientX+"px";
    p.style.top = (event.clientY-35)+"px";
}

window.addEventListener('mousemove', mousemove);