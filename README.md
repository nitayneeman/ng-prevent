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

#### Usage
1. Add one of dist files (original / min) to main file sources of project.
2. Inject 'ngPrevent' as a dependency of your angular module.
3. Start to prevent on any element you want!

#### Options
When you define prevent options on scope - you can use the following options:
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
The values of array are messages to console. <br />
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

Alternatively, definiton of preventOptions can be on rootScope:
```js
demoModule.run(function ($rootScope) {
    $rootScope.preventOptions = {
        userSelect: true,
        contextMenu: true,
        console: [
            {
                text: 'Stop!',
                style: 'color: red; font-size: 35pt'
            },
            {
                text: 'Not allowed here!',
                style: 'color: white; font-size: 30pt'
            }
        ],
        keys: [
            'F12',
            'F11',
            'WIN_KEY'
        ]
    };
});
```
**Important note:** *Defintion of preventOptions on rootScope is overrides any other definition on children scopes. Use rootScope only if you want to prevent on the HTML tag. Any other mode, define on the appropriate scope.*
