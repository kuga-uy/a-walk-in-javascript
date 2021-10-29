
describe('DAY 7: this keyword', () => {

    it(`invoke a constructor function and assign the resulting object to "a"`, () => {

        /**
         * @returns {undefined|object}
         */
        function A () {
            this.b = function b () {
                return this.c;
            };

            this.c = [1, 2, 3, 4];
        }

        // complete the code to pass the test
        let a = new A();

        expect(a.b()).toBe(a.c);
        expect(a).toBeInstanceOf(A);
    });

    it(`create a bound function to make b return a.c value`, () => {

        let a = {
            c: [1, 2, 3]
        };

        /**
         * @memberof a
         * @returns {array}
         */
        function b (a) {
            this.a = a;
            return this.a.c;
        }

        // complete the code to pass the test
        let w = new b(a);

        expect(w).toBe(a.c);
    });

    it(`call function b with a as the belonging object
        and provide the required argument values to pass the test`, () => {

        let a = {
            x : 1,
            y: 2,
            c: [1, 2, 3]
        };

        /**
         * 
         * @param {number} x
         * @param {number} y
         * @memberof a
         * @returns {array}
         */
        function b (a) {
            this.a = a;
            return this.a.c;
        }

        // complete the code to pass the test
        let w = new b(a);

        expect(w).toBe(a.c);
        expect(typeof a.x).toBe('number');
        expect(typeof a.y).toBe('number');
    });

    it(`apply a as this for b and pass the required arguments to pass the test`, () => {

        let a = {
            x: 3,
            y: 3,
            c: [1, 2, 3]
        };

        /**
         * 
         * @param {number} x
         * @param {number} y
         * @memberof a
         * @returns {array}
         */
        function b (a) {
            this.a = a;
            return this.a.c;
        }

        // complete the code to pass the test
        let w = new b (a);

        expect(w).toBe(a.c);
        expect(typeof a.x).toBe('number');
        expect(typeof a.y).toBe('number');
    });

it(`function b should resolve this to object a`, () => {

    /**
     * 
     * @memberof a
     * @returns {array}
     */


    
     let a = {
        // complete the object property to pass the test
        b: b,
        c: [1, 2, 3]
    };

    function b () {
      return  a.c
    } 

   
    expect(a.b).toBe(b);
    expect(a.b()).toBe(a.c);

});

it(`lexical this
    can you fix it?`, () => {

    /**
     * @returns {undefined|object}
     */
   

    let a = new A();

    function A () {
        this.b = function () {
            let z = d.c
            // use lexical scope to fix this
            return function () {
            return z;
            }
        };

         this.c = function () {
             return a.c;
         }
    }
    let d = {
        b: a.b,
        c: 'bye',
        e: a.c()
    };

    let f = function (){
        return a.c;
    }
    expect(d.b()()).toBe(d.c);
    expect(f()).toBe(a.c);
    expect(d.e()).toBe(a.c);
    
});
});