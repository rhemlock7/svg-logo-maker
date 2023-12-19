class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class circle extends Shape {
    constructor (text, textColor, shape, shapeColor) {
        super(text, textColor, shapeColor);
        this.circle = circle;
        this.createSvg = () => {
            // * Code here to create the svg shape??
        }
    }
}

class square extends Shape {
    constructor (text, textColor, shape, shapeColor) {
        super(text, textColor, shapeColor);
        this.square = square;
        this.createSvg = () => {
            // * Code here to create the svg shape??
        }
    }
}

class triangle extends Shape {
    constructor (text, textColor, shape, shapeColor) {
        super(text, textColor, shapeColor);
        this.triangle = triangle;
        this.createSvg = () => {
            // * Code here to create the svg shape??
        }
    }
}

module.exports = Shape;