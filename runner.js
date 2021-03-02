const createTestCafe = require('testcafe');

const testcafe = await createTestCafe('localhost', 1337, 1338);

try {
    const runner = testcafe.createRunner();

    const failedCount = await runner
        .src(['tests/fixture1.js', 'tests/func/fixture3.js'])
        .browsers(['chrome', 'safari'])
        .run();

    console.log('Tests failed: ' + failedCount);
}
finally {
    await testcafe.close();
}