'use strict';

angular.module('mockupScApp').directive('btnOnOff', function () {
    return {
        templateUrl: 'views/directives/btnonoff.html',
        restrict: 'E',
        scope: {
            modelo: '='
        },
        link: function postLink(scope) {

        }
    };
});
