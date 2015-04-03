angular
    .module('ngPrevent', []);

angular
    .module('ngPrevent')
    .constant('keyCodes', new Map([
        ['BACKSPACE', 8],
        ['TAB', 9],
        ['ENTER', 13],
        ['F11', 122],
        ['F12', 123]
    ]));