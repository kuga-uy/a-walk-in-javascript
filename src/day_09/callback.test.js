
describe('DAY 9: Callback', () => {

    it(`(Synchronous callback)
        create a function named caller
            deduce the rest of the implementation reading the 2 expects`, () => {
        let callback = jest.fn();
        let callbackArgument = Symbol('callback');
        
        
        /**
         * 
         * @param {function} callback 
         * @returns {undefined}
         */
        let caller = (callback) => {
            return callback;
        };

        callback(callbackArgument);

        let result = caller(callback);
        
        expect(result).toBe(callback);
        expect(callback).toBeCalledWith(callbackArgument);
        
    });

    it(`(Asynchronous callback)
        change the function "caller"
            deduce the implementation reading the 2 expects`, done => {

        let callback = jest.fn();
        let callbackArgument = Symbol(callback);

        // @see https://jestjs.io/docs/en/asynchronous
        let caller = (callback) => {
            return callback;
        };

        setTimeout(() => expect(callback).toBeCalledWith(callbackArgument), 1000);

        setTimeout(() => caller(callback), 2000);

    }, 2000);
});
