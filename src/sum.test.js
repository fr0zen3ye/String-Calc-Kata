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

    it('should add 50 and 60 and return 112', () => {
        
        expect(stringCalc("50,62")).toBe(112);
    })

})