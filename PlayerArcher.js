class PlayerArcher {

    constructor(x, y, width , height, angle){

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;

    this.image = loadImage("./assets/PlayerArcher.png");

    }

    display(){

       

        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imgeMode(CENTER);
        Image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}