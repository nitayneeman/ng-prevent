angular
    .module('ngPrevent', []);

angular
    .module('ngPrevent')
    .directive('prevent', function ($log) {
        return {
            restrict: 'A',
            scope: true,
            controller: function ($scope) {
                console.log('Hello World!', $scope);
            },
            link: function (scope, element) {
                if (angular.isDefined(scope.preventOptions)) {
                    if (scope.preventOptions.disableSelection) {
                        element.css('user-select', 'none');
                        element.css('-ms-user-select', 'none');
                        element.css('-moz-user-select', 'none');
                        element.css('-khtml-user-select', 'none');
                        element.css('-webkit-user-select', 'none');
                        element.css('-webkit-touch-callout', 'none');
                    }
                }
                else {
                    $log.error('preventOptions is not defined!')
                }
            }
        };
    });
