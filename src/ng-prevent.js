angular
    .module('ngPrevent', []);

angular
    .module('ngPrevent')
    .service('Prevent', function () {
        this.userSelect = (element) => {
            element.css('user-select', 'none');
            element.css('-ms-user-select', 'none');
            element.css('-moz-user-select', 'none');
            element.css('-khtml-user-select', 'none');
            element.css('-webkit-user-select', 'none');
            element.css('-webkit-touch-callout', 'none');
        };

        this.contextMenu = (element) => {
            element.bind('contextmenu', (event) => {
                event.preventDefault();
            });
        };

        this.console = (messages) => {
            if (angular.isArray(messages)) {
                angular.forEach(messages, (value) => {
                    console.log('%c' + value.text, value.style);
                });
            }

            window.console.log = () => {
                window.console.log = () => undefined;
            };
        };
    });

angular
    .module('ngPrevent')
    .directive('prevent', ($parse, Prevent) => {
        return {
            restrict: 'A',
            scope: true,
            controller: ($scope, $element, $attrs) => {
                if ($attrs.prevent !== '') {
                    $scope.localPreventOptions = $parse($attrs.prevent)($scope);
                }
                else {
                    $scope.localPreventOptions = $scope.preventOptions;
                }
            },
            link: (scope, element) => {
                Prevent.console(scope.localPreventOptions.console);

                if (angular.isDefined(scope.localPreventOptions)) {
                    if (scope.localPreventOptions.disableUserSelect) {
                        Prevent.userSelect(element);
                    }

                    if (scope.localPreventOptions.disableContextMenu) {
                        Prevent.contextMenu(element);
                    }
                }

                else {
                    Prevent.userSelect(element);
                    Prevent.contextMenu(element);
                }
            }
        };
    });
