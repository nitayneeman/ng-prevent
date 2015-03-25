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
                var disableUserSelect = function () {
                    element.css('user-select', 'none');
                    element.css('-ms-user-select', 'none');
                    element.css('-moz-user-select', 'none');
                    element.css('-khtml-user-select', 'none');
                    element.css('-webkit-user-select', 'none');
                    element.css('-webkit-touch-callout', 'none');

                };

                var disableContextMenu = function () {
                    element.bind('contextmenu', function (event) {
                        event.preventDefault();
                    });

                };

                if (angular.isDefined(scope.preventOptions)) {
                    if (scope.preventOptions.disableSelection) {
                        disableUserSelect();
                    }

                    if (scope.preventOptions.disableContextMenu) {
                        disableContextMenu();
                    }
                }
                else {
                    disableUserSelect();
                    disableContextMenu();
                    $log.error('preventOptions is not defined!')
                }
            }
        };
    });
