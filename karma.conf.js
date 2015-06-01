module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine', 'commonjs'],
        files: [
            'test/**/*-spec.js'
        ],
        singleRun: true,
        preprocessors: {
            '**/*.js': ['commonjs']
        }
    });
};
