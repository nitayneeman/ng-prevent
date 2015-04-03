"use strict";
var module = angular.module('ngPrevent', []);
module.constant('keyCodes', new Map([['BACKSPACE', 8], ['TAB', 9], ['ENTER', 13], ['WIN_KEY', 91], ['F11', 122], ['F12', 123]]));
module.directive('prevent', (function($log, $parse, Prevent) {
  return {
    restrict: 'A',
    scope: true,
    controller: (function($scope, $element, $attrs) {
      if ($attrs.prevent !== '') {
        $scope.localPreventOptions = $parse($attrs.prevent)($scope);
      } else {
        if (angular.isDefined($scope.preventOptions)) {
          $scope.localPreventOptions = $scope.preventOptions;
        } else {
          $log.error('Please define preventOptions on config, or supply an options locally on scope.');
          throw 'ng-prevent error: preventOptions was not defined!';
        }
      }
    }),
    link: (function(scope, element) {
      if (angular.isDefined(scope.localPreventOptions)) {
        if (scope.localPreventOptions.userSelect) {
          Prevent.userSelect(element);
        }
        if (scope.localPreventOptions.contextMenu) {
          Prevent.contextMenu(element);
        }
        if (angular.isDefined(scope.localPreventOptions.keys)) {
          if (scope.localPreventOptions.keys.length >= 1) {
            Prevent.keys(element, scope.localPreventOptions.keys);
          }
        }
        if (angular.isDefined(scope.localPreventOptions.console)) {
          if (scope.localPreventOptions.console.length >= 1) {
            Prevent.console(scope.localPreventOptions.console);
          }
        }
      }
    })
  };
}));
module.service('Prevent', function(keyCodes) {
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
  this.keys = (function(element, keys) {
    if (angular.isArray(keys)) {
      angular.forEach(keys, (function(value) {
        if (keyCodes.has(value)) {
          element.bind('keydown keypress', function(event) {
            if (event.which === keyCodes.get(value)) {
              event.preventDefault();
            }
          });
        }
      }));
    }
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
