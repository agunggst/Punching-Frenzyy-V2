class Bomb {
    constructor(p5, boundary, fImgActive, fImgExplode) {
        this.diameter = 65
        this.x = Math.random() * ( (p5.width - 50) - (p5.width - boundary + 50) ) + (p5.width - boundary + 50)
        this.y = p5.height + this.diameter
        this.vy = Math.random() * (18 - 12) + 12
        this.vx = Math.random() * (2.5 - (-2.5)) + (-2.5)
        this.gravity = 0.2
        this.isShown = true
        this.isDestroyed = false
        this.p5 = p5
        this.boundary = boundary
        this.fImgActive = fImgActive
        this.fImgExplode = fImgExplode
    }

    move() {
        if(!this.isDestroyed){
            this.y -= this.vy
            this.vy -= this.gravity
        }
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
            this.p5.image(this.fImgActive, this.x, this.y, this.diameter, this.diameter)
        }
        else if(this.isDestroyed && this.isShown){
            this.p5.image(this.fImgExplode, this.x, this.y, this.diameter + 50, this.diameter + 50)
        }
    }
}

export default Bomb