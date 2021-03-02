import { pageUrl } from '../tests-config';

fixture`Fixture`
    .page(pageUrl);

test('Test', async t => {
    await t.debug();
});