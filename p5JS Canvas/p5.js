function setup() {
    createCanvas(600, 400, WEBGL);
    frameRate(60);
}
let angle = 0;
function draw() {
    background(175);

    for(let i=0; i < 20; i++){
        torus(100,1);
        rectMode(CENTER);
        noStroke();
        fill(0+i*10,0+i*10,255*i/10);
        translate(mouseX-width/2 , mouseY-height/2);
        rotateX(angle);
        rotateY(angle * 0.03);
        rotateZ(angle * 0.03);
        //rect(0, 0, 150, 150);
        //box(10,100,50);
        torus(100, i/2);
        }
}