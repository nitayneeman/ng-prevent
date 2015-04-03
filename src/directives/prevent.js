module
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
                Prevent.keys(element, scope.localPreventOptions.keys);

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
