class ComputerArcher {

    constructor(x, y, width , height, angle){

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;

    this.image = loadImage("./assets/comuterArcher.png");

    }

    display(){

        

        push();
        translate(this.x, this.y);
        rotate(this.angle);
        rect(-10, -20, this.width, this.height);
        Image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}