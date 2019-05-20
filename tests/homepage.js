import { Selector } from "testcafe";

fixture `React App - Homepage render`
    .page `http:localhost:3000`;

test('the testing environment works', async t => {});

test('The react logo is visible', async t => {
    await t
        .expect(Selector('.App-logo'))
        .ok('The React logo is visible');
});

test('There is a link to "Learn React"', async t => {
    await t
        .expect(Selector('.App-link').withText('Learn React'))
        .ok('The Learn React link is visible');
});

test('There is a link with the text "Learn React"', async t => {
    await t
        .expect(Selector('.App-link').textContent)
        .contains('Learn React', 'The "Learn React" link is visible');
});
