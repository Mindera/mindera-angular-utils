'use strict';
angular.module('mindera.directives', [])
    .directive('fullHeight', ['$window', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var properties = JSON.parse(attrs.fullHeight);
            scope.initializeWindowSize = function () {
                angular.element(element).css('min-height', ($window.innerHeight - properties.offset) + 'px');
                angular.element(element).css('height', ($window.innerHeight - properties.offset) + 'px');
            };
            scope.initializeWindowSize();
            angular.element($window).bind('resize', function () {
                scope.initializeWindowSize();
            });
        }
    };
}]);
