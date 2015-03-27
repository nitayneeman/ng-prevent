angular
    .module('ngPrevent', []);

angular
    .module('ngPrevent')
    .service('Prevent', function () {
        this.userSelect = function (element) {
            element.css('user-select', 'none');
            element.css('-ms-user-select', 'none');
            element.css('-moz-user-select', 'none');
            element.css('-khtml-user-select', 'none');
            element.css('-webkit-user-select', 'none');
            element.css('-webkit-touch-callout', 'none');
        };

        this.contextMenu = function (element) {
            element.bind('contextmenu', function (event) {
                event.preventDefault();
            });
        };
    });

angular
    .module('ngPrevent')
    .directive('prevent', function ($parse, Prevent) {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, element, attrs) {
                var localPreventOptions;

                if (attrs.prevent !== "") {
                    localPreventOptions = $parse(attrs.prevent)(scope);
                }
                else {
                    localPreventOptions = scope.preventOptions;
                }

                if (angular.isDefined(localPreventOptions)) {
                    if (localPreventOptions.disableUserSelect) {
                        Prevent.userSelect(element);
                    }

                    if (localPreventOptions.disableContextMenu) {
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
