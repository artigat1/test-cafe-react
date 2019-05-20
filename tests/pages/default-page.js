import HomePage from '../page-object/default.page.js';

const page = new HomePage();

fixture `React App - Homepage render`
    .page `http:localhost:3000`;

test('the testing environment works', async t => {});

test('The page is displayed', async t => {
    await page.isPageDisplayed();
});

test('The react logo is visible', async t => {
    await t
        .expect(page.reactLogo)
        .ok('The React logo is visible');
});

test('There is a link to "Learn React"', async t => {
    await t
        .expect(page.learnReactLink)
        .ok('The Learn React link is visible');
});

test('There is a link with the text "Learn React"', async t => {
    await t
        .expect(page.learnReactLink.textContent)
        .contains('Learn React', 'The "Learn React" link is visible');
});
