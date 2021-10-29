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
        const url = 'https://api.weather.gov/gridpoints/TOP/31,80/forecast';
        const data = await fetchData(url).then(res => res.json());
        fetchData(data);
        expect(data).toBe({});
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






