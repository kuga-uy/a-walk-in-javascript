describe('DAY 5: Test Exception Handling', () => {

    it('throw explicitly an error and on catch define a as true', () => {
        let a = false;

        try {
           throw 'error';
            
        } catch (error) {
            a = true;
        }
        expect(a).toBe(true);

    });

    it('throw explicitly an error and assign the error to a, make the verification of the message', () => {
        let a; 
        
        try {
            throw "Error: I'm an error";
        } catch (error) {
            a = error;
        }
        

        
        expect(a.toString()).toBe(`Error: I'm an error`);

    });

    it('throw explicitly an error and assign the error to a, make the verification of type', () => {
        let a;

        try {
            throw new Error("Error: I'm an error");
        } catch (error) {
            a = error;
        }
        expect(a).toBeInstanceOf(Error);

    });
});
