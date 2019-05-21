const { Given, Then } = require('cucumber');
const {Selector} = require('testcafe');

Given('I navigate to the homepage', async (t) => {
    await t.navigateTo('http:localhost:3000');
});

Then('I see the React logo', async (t) => {
    const logo = Selector('.App-logo').with({boundTestRun: t});
    await t
        .expect(logo)
        .ok('The React logo is visible');
});

Then('I see a link', async (t) => {
    const link = Selector('.App-link').with({boundTestRun: t});
    await t
        .expect(link)
        .ok('The link is visible');
});

Then('The link text says "Learn React"', async (t) => {
    const link = Selector('.App-link').with({boundTestRun: t});
    await t
        .expect(link.textContent)
        .contains('Learn React', 'The "Learn React" link is visible');
});
