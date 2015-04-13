'use strict';
angular.module('mindera.factories', [])
    .factory('httpInterceptor',
    function ($q, $cookies) {
        return {
            request: function (config) {
                for (var cookie in $cookies) {
                    config.headers[cookie] = $cookies[cookie];
                }
                return config || $q.when(config);
            }
        };
    }
);
