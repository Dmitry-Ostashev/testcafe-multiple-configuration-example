const config = {
    pageUrl:    'en.wikipedia.org',
    hostname:   'localhost',
    port1:      3001,
    port2:      3002,
    runOptions: {
        skipJsErrors: true,
        selectorTimeout:  15000,
        assertionTimeout: 8000
    }
};

module.exports = config;