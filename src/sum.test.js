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

    it('should get 6 for 1\n2,3', () => {
        expect(stringCalc("1\n2,3")).toBe(6);
    })

    it('should get 6 for 1\n,2,3', () => {
        expect(stringCalc("1\n,2,3")).toBe(6);
    })

    it('should get 7 for 2\n2,_3', () => {
        expect(stringCalc("2\n2,_3")).toBe(7);
    })

    it('should get 3 for /\n3,2', () => {
        expect(stringCalc("/\n3;2")).toBe(5);
    })

    it('should get 4 for /;\n2+,2', () => {
        expect(stringCalc("/;\n2+,20")).toBe(22);
    })

    it('shoudl get 3 for //;\n1;2', () => {
        expect(stringCalc("//;\n1;2")).toBe(3);
    })

    it('should get error when negatives', () => {
        function callNegatives () {
            stringCalc("-1,-4");
        }
        expect(callNegatives).toThrowError(new Error("negatives not allowed"));
    })

    it('should get error when negatives', () => {
        function callNegatives () {
            stringCalc("-1,-4,-6,-3");
        }
        expect(callNegatives).toThrowError(new Error("negatives not allowed"));
    })

    it('should get error when negatives', () => {
        function callNegatives () {
            stringCalc("1,-4");
        }
        expect(callNegatives).toThrowError(new Error("negatives not allowed"));
    })

    it('should get "" when > 1000', () => {
        expect(stringCalc("1,1000")).toBe(1)
    })

    it('should get "" when > 1000', () => {
        expect(stringCalc("30,1020")).toBe(30)
    })

})