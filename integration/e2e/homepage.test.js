Feature('homepage');

Scenario('test main title', I => {
  I.amOnPage(`/`);
  I.see('Hey Hey');
});
