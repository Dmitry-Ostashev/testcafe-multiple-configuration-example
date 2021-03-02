const config = {
    pageUrl:    'fr.wikipedia.org',
    hostname:   'localhost',
    port1:      3005,
    port2:      3006,
    browsers:   ['firefox'],
    runOptions: {
        skipJsErrors: true,
        selectorTimeout:  5000,
        assertionTimeout: 2000
    }
};

module.exports = config;