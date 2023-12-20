const Shapes = require('./shapes')

describe('shape', () => {
    it('should do this thing', () => {
        const shape = new Shapes.triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
});