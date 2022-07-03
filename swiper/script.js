const swiper = new Swiper(".swiper", {
    speed: 800,
    spaceBetween: 100,
});
console.log("test");
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');


    var qtext = document.getElementById("loading-text");
    var qmsg = document.getElementById("msg");
    var qbody = document.getElementById("body");
    setTimeout(function(){
        qmsg.style.display = "none";
        qbody.style.display = "block";    
    }, 5600);
    setTimeout(function(){
        qtext.style.transition = "500ms";
        qtext.style.color = "transparent";
        qmsg.style.transition = "500ms"; 
        qmsg.style.opacity = "0"; 
        console.log("deneme");
    }, 4800);
});

