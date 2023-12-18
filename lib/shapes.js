class svgItem {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class shape extends svgItem {
    constructor (text, textColor, shape, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = shape;
    }
}