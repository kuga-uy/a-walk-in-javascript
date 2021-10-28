
describe('DAY 5: Iterable/Iterator', () => {

    it(`get the iterator function of a String`, () => {
        let string = 'hello';
        let theIteratorFunction = new Function();

        expect(theIteratorFunction).toBeInstanceOf(Object);
        expect(theIteratorFunction).toBeInstanceOf(Function);

    });

    it(`get the iterator object returned by the iterator function of a String`, () => {
        let string = 'hello';
        let theIteratorObject = new Function(string);

        expect(theIteratorObject).toBeInstanceOf(Object);

    });

    it(`get the string representation
        of the iterator object returned by the iterator function of a String`, () => {
        let string = 'hello';
        let theIteratorObjectCoercedToString = string[Symbol.iterator]();
        theIteratorObjectCoercedToString += '';

        expect(theIteratorObjectCoercedToString).toBe('[object String Iterator]');

    });

    it(`get the next method returned by the iterator function of a String`, () => {
        let string = 'hello';
        let theIteratorNextMethod = new Function(string);

        expect(theIteratorNextMethod).toBeInstanceOf(Object);
        expect(theIteratorNextMethod).toBeInstanceOf(Function);

    });

    it(`get at least 1 value returned by the next method returned by the iterator function of a String`, () => {
        let string = 'hello';
        let theIteratorNextMethodValue = string[Symbol.iterator]();
        theIteratorNextMethodValue = theIteratorNextMethodValue.next().value;

        expect(theIteratorNextMethodValue).toBe('h');

    });

    it(`make your own test to get all values from a String using the iterable protocol`, () => {
        // I'm throwing and error to make it fail, remove it and add your code
        let string = 'hello';
        let theIteratorNextMethodValue = string[Symbol.iterator]();
       
           theIteratorNextMethodValue = theIteratorNextMethodValue.next().value + theIteratorNextMethodValue.next().value +
           theIteratorNextMethodValue.next().value + theIteratorNextMethodValue.next().value + theIteratorNextMethodValue.next().value;
        
        expect(theIteratorNextMethodValue).toBe('hello');
    });

});