'use strict';

/**
 * @ngdoc function
 * @name mockupScApp.controller:MensajesCtrl
 * @description
 * # MensajesCtrl
 * Controller of the mockupScApp
 */
angular.module('mockupScApp')
    .controller('MensajesCtrl', function ($scope) {

        var vm = $scope;

        vm.mensaje = 'Here you can see your messages';

    });
