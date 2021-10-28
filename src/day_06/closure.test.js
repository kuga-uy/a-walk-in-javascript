describe('DAY 6: Test closure', () => {

    it(`function a to change variable b through a closure (side effect)`, () => {

        /**
         * 
         * @returns {undefined}
         */

         let b = 5;
         function c (a){
            b += a;
        }
        function a (a) {
            // add the code to operate with the free variable

            c(a);
        }
        
        a(1);

        // add the code to execute the operation on the free variable inside function a

        expect(b).toBe(6);
    });

    it(`function c to change variable a and b through a closure (side effect)`, () => {

        let a = 9;
        let b = function () {};
        /**
         * 
         * @returns {undefined}
         */
        function c () {
            b = new Function();
        
        }

        expect(typeof a).toBe('number');
        expect(b).toBeInstanceOf(Function);
        function z () {
            a = function(){
            }

            b = new Array();
        }
        c();
        z();
        // add the missing part of the code to complete the test

        expect(typeof a).toBe('function');
        expect(b).toBeInstanceOf(Array);
    });

});
