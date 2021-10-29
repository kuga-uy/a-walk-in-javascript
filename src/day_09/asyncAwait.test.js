describe('DAY 9: Async/await', () => {
    /**
     * @param {string} outcome resolve|reject
     * @returns {Promise}
     */
    function fetchData (outcome) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                switch (outcome) {
                    case 'resolve':
                        resolve('data retrieved');
                        break;
                    default:
                        reject('no data');
                        break;
                }
            }, 50);
        });
    }

    // @see https://jestjs.io/docs/en/asynchronous for a hint
    it(`make an async test for fetchData to verify resolution`, async () => { 

        try {
            const url = 'https://api.weather.gov/gridpoints/TOP/31,80/forecast';
            await fetchData(url);
            expect(fetchData()).toMatch('data retrived');
          } catch (e) {
            console.log(e);
          }
    });

    // @see https://jestjs.io/docs/en/asynchronous for a hint
    it(`make an async test for fetchData to verify rejection`, async () => {
        try {
          await fetchData();
        } catch (e) {
          expect(e).toMatch('no data');
        }
    });
});






