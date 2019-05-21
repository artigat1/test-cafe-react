import {RequestLogger} from 'testcafe';

import StarWarsSearchPage from '../page-object/star-wars-search.page';

const logger = RequestLogger(
    {url: 'https://swapi.co/api/people/', method: 'get'},
    {
        logRequestHeaders: true,
        logResponseHeaders: true
    });

const page = new StarWarsSearchPage();

fixture `Test the Star Wars character search`
    .page('http://localhost:3000')
    .requestHooks(logger);

test
('Expect 1 results when typing "luke', async t => {
    await page.typeQuery('luke');
    await page.results.with({visibilityCheck: true});

    await t.expect(page.results.count).eql(1);
});

test('Expect 3 results when typing "skywalker', async t => {
    await page.typeQuery('skywalker');
    await page.results.with({visibilityCheck: true});

    await t.expect(page.results.count).eql(31);
});
