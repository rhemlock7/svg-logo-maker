class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class circle extends Shape {
    constructor(text, textColor, circle, shapeColor) {
        super(text, textColor, shapeColor);
        this.circle = circle;
    }

    createSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <script xmlns="" />
        <script xmlns="">window["GUARDIO_SENSOR_CONF"] = { "click": true }</script>
        <script xmlns="" />
    
        <!-- Line that changes -->
        <${this.circle} cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
</svg>`
    };
}

// render() a string to create the svg with the proper shape
class square extends Shape {
    constructor(text, textColor, square, shapeColor) {
        super(text, textColor, shapeColor);
        this.square = square;
    }

    createSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <!-- Line that changes -->
        <rect x="70" y="40" width="160" height="160" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    };
}

class triangle extends Shape {
    constructor(text, textColor, triangle, shapeColor) {
        super(text, textColor, shapeColor);
        this.triangle = triangle;
    }

    createSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <!-- Line that changes -->
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    };
}

module.exports = {
    circle,
    square,
    triangle
};