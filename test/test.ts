describe('Fake init test', () => {
    test('Fake test', () => {
        expect(1).toBe(1);
    });

    test('Fake API call', (done) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(console.log)
        .then(done);
    });
})