# ng-prevent [![Build Status](https://travis-ci.org/nitayneeman/ng-prevent.svg?branch=master)](https://travis-ci.org/nitayneeman/ng-prevent)
##### An AngularJS directive which provides the ability to disable common behaviors of elements.

## Features
* Disabling of user-select.
* Disabling of context menu.
* Disabling of specific key action.
* Disabling of console actions.
* Showing alerts on console.


## Getting started
#### Dependencies
AngularJS v1.0.3, or a newer version.
#### Install via Bower
```sh
bower install ng-prevent
```
#### Usage
1. Add one of dist files (original / min) to main file sources of project.
2. Inject 'ngPrevent' as a dependency of your angular module.
3. Start to prevent on any element you want!

#### Options
When you define prevent options on scope - you can use the following option:
* userSelect <br />
`true`: Preventing a user selection on the element. <br />
`false`: Allowing a user selection on the element.
* contextMenu <br />
`true`: Preventing a context menu on the element. <br />
`false`: Allowing a context menu on the element.
* keys <br />
`[]`: Preventing a key press on the element. <br />
Acceptable values are: `BACKSPACE`, `TAB`, `ENTER`, `WIN_KEY`, `F11` and `F12`.
* console <br />
`[]`: Preventing an actions on console. <br />
The values of array are messages to console.
A message object pattern: `{ text: 'Message', style: 'CSS properties'}`

## Samples
Add a prevent attribute on your element:
```html
<div prevent="myPreventOptions">
  <p>Text</p>
</div>
```
myPreventOptions should be on scope:
```js
demoModule.controller('MainController', function ($scope) {
    $scope.myPreventOptions = {
        userSelect: true,
        contextMenu: false
    };
});
```
