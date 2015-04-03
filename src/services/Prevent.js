module
    .service('Prevent', function (keyCodes) {
        this.userSelect = (element) => {
            element.css('user-select', 'none');
            element.css('-ms-user-select', 'none');
            element.css('-moz-user-select', 'none');
            element.css('-khtml-user-select', 'none');
            element.css('-webkit-user-select', 'none');
            element.css('-webkit-touch-callout', 'none');
        };

        this.contextMenu = (element) => {
            element.bind('contextmenu', (event) => {
                event.preventDefault();
            });
        };

        this.keys = (element, keys) => {
            if (angular.isArray(keys)) {
                angular.forEach(keys, (value) => {
                    if (keyCodes.has(value)) {
                        element.bind('keydown keypress', function (event) {
                            if (event.which === keyCodes.get(value)) {
                                event.preventDefault();
                            }
                        });
                    }
                });
            }
        };

        this.console = (messages) => {
            if (angular.isArray(messages)) {
                angular.forEach(messages, (value) => {
                    console.log('%c' + value.text, value.style);
                });
            }

            window.console.log = () => {
                window.console.log = () => undefined;
            };
        };
    });