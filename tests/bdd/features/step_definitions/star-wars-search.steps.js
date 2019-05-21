const { Given, Then, When } = require('cucumber');
const {Selector} = require('testcafe');

Given('I navigate to the homepage', async (t) => {
    await t.navigateTo('http:localhost:3000');
});

When('I type "Luke" into the search box', async (t) => {
    const input = Selector('#query').with({boundTestRun: t});
    await t.typeText(input, 'luke');
});

Then('I see 1 option in the results', async (t, string) => {
    const results = Selector('ul li').with({boundTestRun: t});
    await t.expect(results.count).eql(1);
});
