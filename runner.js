(async () => {
    const createTestCafe = require('testcafe');
    const {
        hostname,
        port1,
        port2,
        runOptions,
        browsers
    } = require('./tests-config');

    const testcafe = await createTestCafe(hostname, port1, port2);

    try {
        const runner = testcafe.createRunner();

        const failedCount = await runner
            .src(['tests/fixture1.js'])
            .browsers(browsers)
            .run(runOptions);

        console.log('Tests failed: ' + failedCount);
    }
    finally {
        await testcafe.close();
    }
}) ();