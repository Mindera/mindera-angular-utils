'use strict';
angular.module('mindera.factories', [])
    .factory('httpInterceptor',
    function ($q, $cookies) {
        return {
            request: function (config) {
                config.headers['M-SSO'] = $cookies['M-SSO'];
                config.headers['M-Product-Id'] = $cookies['M-Product-Id'];
                return config || $q.when(config);
            }
        };
    }
);
