const {stringCalc} = require('./sum');

console.log("##############", stringCalc)

describe('stringCalc', () => {
    it('should return NaN for an empty string', () => {
        
        expect(stringCalc("")).toBe(NaN);
    })

    it('should return 1 for 1', () => {
        
        expect(stringCalc("1")).toBe(1);
    })
    
    it('should add 1 and 2 and return it to 3', () => {
        
        expect(stringCalc("1,2")).toBe(3);
    })

    it('should add 21 and 21 and return 42', () => {
        
        expect(stringCalc("21,21")).toBe(42);
    })

    it('should add 1, 2 and 3', () => {
        expect(stringCalc("1,2,3")).toBe(6);
    })

    it('should add 1, 4, 6, 7', () => {
        expect(stringCalc("1,4,6,7")).toBe(18);
    })

    it('should add 4, 5, 6, 7', () => {
        expect(stringCalc("4,5,6,7")).toBe(22);
    })

})