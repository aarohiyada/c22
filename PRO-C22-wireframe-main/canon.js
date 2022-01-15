class Canon{
    constructor(x,y,w,h,angle){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.angle=angle
        this.canon_image=loadImage("./assets/canon.png")
        this.canon_base=loadImage("./assets/cannonBase.png")
    }
    display(){
        push()
        translate(this.x,this.y)
        rotate(this.angle)
        imageMode(CENTER)
        image(this.canon_image,0,0,this.w,this.h)
        pop()
        image(this.canon_base,70,20,200,200)
        
    }
}
