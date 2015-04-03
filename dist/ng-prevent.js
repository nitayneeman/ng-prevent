"use strict";
angular.module('ngPrevent', []);
angular.module('ngPrevent').service('Prevent', function() {
  this.userSelect = (function(element) {
    element.css('user-select', 'none');
    element.css('-ms-user-select', 'none');
    element.css('-moz-user-select', 'none');
    element.css('-khtml-user-select', 'none');
    element.css('-webkit-user-select', 'none');
    element.css('-webkit-touch-callout', 'none');
  });
  this.contextMenu = (function(element) {
    element.bind('contextmenu', (function(event) {
      event.preventDefault();
    }));
  });
  this.key = (function(element, key) {
    element.bind('keydown keypress', function(event) {
      if (event.which === key) {
        event.preventDefault();
      }
    });
  });
  this.console = (function(messages) {
    if (angular.isArray(messages)) {
      angular.forEach(messages, (function(value) {
        console.log('%c' + value.text, value.style);
      }));
    }
    window.console.log = (function() {
      window.console.log = (function() {
        return undefined;
      });
    });
  });
});
angular.module('ngPrevent').directive('prevent', (function($parse, Prevent) {
  return {
    restrict: 'A',
    scope: true,
    controller: (function($scope, $element, $attrs) {
      if ($attrs.prevent !== '') {
        $scope.localPreventOptions = $parse($attrs.prevent)($scope);
      } else {
        $scope.localPreventOptions = $scope.preventOptions;
      }
    }),
    link: (function(scope, element) {
      Prevent.console(scope.localPreventOptions.console);
      if (angular.isDefined(scope.localPreventOptions)) {
        if (scope.localPreventOptions.disableUserSelect) {
          Prevent.userSelect(element);
        }
        if (scope.localPreventOptions.disableContextMenu) {
          Prevent.contextMenu(element);
        }
      } else {
        Prevent.userSelect(element);
        Prevent.contextMenu(element);
      }
    })
  };
}));
