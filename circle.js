const shape = require("./shape")

class circle extends shape{
    constructor(calculateArea, mod){
        super(calculateArea);
        this.circle=mod;
    }
    show(){
        return this.present()+ ', it is a ' + this.circle;
    }
}