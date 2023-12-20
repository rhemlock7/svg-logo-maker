class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    validateText() {
        if (this.text > 3) {
            throw new Error('Text must be 3 characters in length');
        }
    }
}

class circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    createSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <script xmlns="" />
        <script xmlns="">window["GUARDIO_SENSOR_CONF"] = { "click": true }</script>
        <script xmlns="" />

        <!-- Line that changes -->
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    };
}

// render() a string to create the svg with the proper shape
class square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
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
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
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