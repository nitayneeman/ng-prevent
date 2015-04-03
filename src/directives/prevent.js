module
    .directive('prevent', ($log, $parse, Prevent) => {
        return {
            restrict: 'A',
            scope: true,
            controller: ($scope, $element, $attrs) => {
                if ($attrs.prevent !== '') {
                    $scope.localPreventOptions = $parse($attrs.prevent)($scope);
                }
                else {
                    if(angular.isDefined($scope.preventOptions)) {
                        $scope.localPreventOptions = $scope.preventOptions;
                    }
                    else {
                        $log.error('Please define preventOptions on config, or supply a options locally on scope.');

                        throw 'ng-prevent error: preventOptions was not defined!';
                    }
                }
            },
            link: (scope, element) => {
                Prevent.console(scope.localPreventOptions.console);
                Prevent.keys(element, scope.localPreventOptions.keys);

                if (angular.isDefined(scope.localPreventOptions)) {
                    if (scope.localPreventOptions.userSelect) {
                        Prevent.userSelect(element);
                    }

                    if (scope.localPreventOptions.contextMenu) {
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