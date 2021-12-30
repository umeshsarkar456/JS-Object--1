class shape{
    constructor(drawShape,calculateArea,color){
        this.drawShape=drawShape;
        this.calculateArea=calculateArea;
        this.color=color;
    }

    drawingList = [];

    present(){
        return {drawShape:this.drawShape,calculateArea:this.calculateArea,color:this.calculateArea};
    }
    enrollDrawing(color){
        this.color.push(color)
    }
    getDrawingList(){
        return this.drawingList;
    }
}


module.exports = shape;