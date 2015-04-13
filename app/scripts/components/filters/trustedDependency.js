'use strict';
angular.module('mindera.filters', [])
    .filter('trustedDependency', ['$sce', function ($sce) {
        return function (url) {
            return $sce.trustAsResourceUrl(url);
        };
    }]);
