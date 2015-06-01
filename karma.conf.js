module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        files: [
            'test/**/*-spec.js'
        ],
        singleRun: true
    });
};
