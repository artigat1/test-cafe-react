import { RequestLogger } from 'testcafe';

import StarWarsSearchPage from '../page-object/star-wars-search.page';

// const swapiLogger = RequestLogger('https://swapi.co/api/people/', {
//     logRequestHeaders: true,
// });

const page = new StarWarsSearchPage();

fixture`Test the Star Wars character search`
    .page('http://localhost:3000');

// test.requestHooks(swapiLogger)
// ('Test outgoing swapi requests', async t => {
//     await t
//         .typeText(queryInput, 'l')
//         .expect(swapiLogger.count(() => true)).eql(1);
// });

test('Expect 1 results when typing "luke', async t => {
    await page.typeQuery('luke');
    await page.results.with({visibilityCheck: true});
    
    await t.expect(page.results.count).eql(1);
});