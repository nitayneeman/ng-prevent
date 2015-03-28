module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: [
            'jasmine'
        ],
        files: [
            'bower_components/angular/angular.js',
            'src/**/*.js'
        ],
        preprocessors: {
            'src/**/*.js': ['coverage']
        },
        exclude: [

        ],
        reporters: [
            'progress', 'coverage'
        ],
        port: 9876,
        autoWatch: false,
        browsers: [
            'PhantomJS'
        ]
    });
};
