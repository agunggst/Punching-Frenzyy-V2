class Fruit {
    constructor(p5, boundary, gravity, vyRandomFactor, fImgActive, fImgExplode) {
        this.diameter = 100
        this.x = Math.random() * ( (p5.width - 50) - (boundary + 50) ) + (boundary + 50)
        this.y = p5.height + this.diameter
        this.vy = Math.random() * (vyRandomFactor+3 - vyRandomFactor-3) + vyRandomFactor-3
        this.vx = Math.random() * (2 - (-2)) + (-2)
        this.gravity = gravity
        this.isShown = true
        this.isDestroyed = false
        this.p5 = p5
        this.boundary = boundary
        this.fImgActive = fImgActive
        this.fImgExplode = fImgExplode
        this.angle = 0
        this.angular_velocity = Math.random() * ( 5 - (-5)) + (-5)
    }

    move() {
        if(!this.isDestroyed){
            this.y -= this.vy
            this.vy -= this.gravity
            this.angle += this.angular_velocity
        }
        //Memantulkan
        // if( Math.abs( (this.p5.width - this.boundary) - this.x) <= this.diameter/2){
        //     this.vx *= -1
        // }
        // if( Math.abs(this.p5.width - this.x) <= this.diameter/2 ){
        //     this.vx *= -1
        // }
    }

    destroy(){
        this.isDestroyed = true
        setTimeout(() => {
            this.isShown = false
        }, 2000)
    }

    unShow(){
        this.isShown = false
    }

    show() {
        if(!this.isDestroyed && this.isShown){
            this.p5.push()
                this.p5.imageMode(this.p5.CENTER)
                this.p5.translate(this.x, this.y)
                this.p5.rotate(this.angle)
                this.p5.image(this.fImgActive, 0, 0, this.diameter, this.diameter)
            this.p5.pop()
        }
        else if(this.isDestroyed && this.isShown){
            this.p5.push()
                this.p5.imageMode(this.p5.CENTER)
                this.p5.image(this.fImgExplode, this.x, this.y, this.diameter, this.diameter)
            this.p5.pop()
        }
    }
}

export default Fruit