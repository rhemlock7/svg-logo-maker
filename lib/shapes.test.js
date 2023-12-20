const { triangle, circle, square } = require('./shapes')

describe('triangle svg render', () => {
    it('should render the triangle svg', () => {
        const shape = new triangle('rch', 'white', 'green');
        expect(shape.createSVG()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <!-- Line that changes -->
        <polygon points="150, 18 244, 182 56, 182" fill="${shape.shapeColor}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>
</svg>`);
    })

    it('should render a circle shaped svg', () => {
        const shape = new circle('arh', 'yellow', 'black');
        expect(shape.createSVG()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <script xmlns="" />
        <script xmlns="">window["GUARDIO_SENSOR_CONF"] = { "click": true }</script>
        <script xmlns="" />

        <!-- Line that changes -->
        <circle cx="150" cy="100" r="80" fill="${shape.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>
</svg>`);
    });

        it('should render a square shaped svg', () => {
            const shape = new square('arh', 'yellow', 'purple');
            expect(shape.createSVG()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <!-- Line that changes -->
        <rect x="70" y="40" width="160" height="160" fill="${shape.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>
</svg>`)
        })
    });