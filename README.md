# ng-prevent

## Features
* Disabling of user-select.
* Disabling of context menu.
* Disabling of specific key action.
* Disabling of console actions.
* Showing alerts on console.

## Dependencies
AngularJS v1.0.3, or a newer version.

## Install
#### Bower
```sh
bower install ng-prevent
```

## Usage
1. Add one of dist files (original / min) to main file sources of project.
2. Inject 'ngPrevent' as a dependency of your angular module.
3. Start to prevent on any element you want!

# Samples
Add a prevent attribute on your element:
```html
<div prevent="myPreventOptions">
  <p>Text</p>
</div>
```
myPreventOptions should be on scope, for instance:
```js
demoModule.controller('MainController', function ($scope) {
    $scope.myPreventOptions = {
        userSelect: true,
        contextMenu: false
    };
});
```
