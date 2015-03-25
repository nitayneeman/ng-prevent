module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [],
        exclude: [],
        reporters: ['progress'],
        port: 9876,
        autoWatch: false,
        browsers: ['PhantomJS']
    });
};
