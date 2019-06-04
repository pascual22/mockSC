'use strict';

/**
 * @ngdoc function
 * @name mockupScApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mockupScApp
 */
angular.module('mockupScApp')
    .controller('MensajesCtrl', function ($scope) {

        var vm = $scope;

        vm.mensaje = 'estamos en los mensajes';

    });
