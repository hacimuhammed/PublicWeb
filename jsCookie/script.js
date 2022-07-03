var div = document.querySelector('html');

window.onload = function(){
    if(document.cookie.length > 0){
        var part = document.cookie.split("=");
        var color = part[1];
        div.style.backgroundColor=color;
    }
}

function colorChange(){
    var colorSelect = document.querySelector('#color').value;

    console.log(colorSelect);
    div.style.backgroundColor=colorSelect;
    
    document.cookie="name="+colorSelect;
}