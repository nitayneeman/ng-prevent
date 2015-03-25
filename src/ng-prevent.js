angular.module('ngPrevent', []);

angular.module('ngPrevent')
    .directive('prevent', function () {
        return {
            restrict: 'A',
            controller: function ($scope) {
                console.log('Hello World!');
            }
        };
    });
