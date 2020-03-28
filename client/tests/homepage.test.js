Feature('homepage');

const HOST = process.env.HOST || 'localhost:3000';

Scenario('test main title', (I) => {
    I.amOnPage(`http://${HOST}/`);
    I.see('Hey Hey');
});
