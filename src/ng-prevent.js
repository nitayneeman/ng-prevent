angular
    .module('ngPrevent', []);

angular
    .module('ngPrevent')
    .directive('prevent', function ($log, $parse) {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, element, attrs) {
                var localPreventOptions;

                var disableUserSelect = function () {
                    element.css('user-select', 'none');
                    element.css('-ms-user-select', 'none');
                    element.css('-moz-user-select', 'none');
                    element.css('-khtml-user-select', 'none');
                    element.css('-webkit-user-select', 'none');
                    element.css('-webkit-touch-callout', 'none');
                };

                var disableLeftClick = function () {
                    element.bind('click', function (event) {
                        event.preventDefault();
                    });

                };

                var disableContextMenu = function () {
                    element.bind('contextmenu', function (event) {
                        event.preventDefault();
                    });
                };

                if (attrs.prevent !== "") {
                    localPreventOptions = $parse(attrs.prevent)(scope);
                }
                else {
                    localPreventOptions = scope.preventOptions;
                }

                if (angular.isDefined(localPreventOptions)) {
                    if (localPreventOptions.disableSelection) {
                        disableUserSelect();
                    }

                    if (localPreventOptions.disableContextMenu) {
                        disableContextMenu();
                    }
                }

                else {
                    disableUserSelect();
                    disableLeftClick();
                    disableContextMenu();
                }
            }
        };
    });
