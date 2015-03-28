var scope;
var compile;

beforeEach(function () {
    module('ngPrevent');

    inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        compile = $compile;
    });
});

describe('Service', function () {
    var PreventService;

    beforeEach(inject(function (Prevent) {
        PreventService = Prevent;
    }));

    it('Should attach user-select styles with none value to element', function () {
        // Arrange
        var element = angular.element('<div prevent></div>');

        // Act
        PreventService.userSelect(element);

        // Assert
        expect(element.css('user-select')).toBe('none');
        expect(element.css('-ms-user-select')).toBe('none');
        expect(element.css('-moz-user-select')).toBe('none');
        expect(element.css('-khtml-user-select')).toBe('none');
        expect(element.css('-webkit-user-select')).toBe('none');
        expect(element.css('-webkit-touch-callout')).toBe('none');
    });
});