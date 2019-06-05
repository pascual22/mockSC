'use strict';

var app = angular.module('mockupScApp');

app.service('BaseService', function () {

    var service = {};

    service.isLocal = function () {
        return true;
    };

    return service;

});
