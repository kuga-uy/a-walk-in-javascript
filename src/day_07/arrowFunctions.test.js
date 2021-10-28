
describe('DAY 7: arrow functions', () => {

    it(`complete the function code to pass the test`, () => {

        let myArrowFunction = (a, b) => {
            const obj = {
                first: a,
                second: b,  
            } 
            return obj;
        };

        expect(myArrowFunction(1, 2)).toEqual({ first: 1, second: 2 });

    });

});
