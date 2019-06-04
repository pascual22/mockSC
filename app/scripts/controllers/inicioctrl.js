'use strict';

/**
 * @ngdoc function
 * @name mockupScApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mockupScApp
 */
angular.module('mockupScApp')
    .controller('InicioCtrl', function ($scope) {

        var vm = $scope;

        vm.mensaje = 'desde el inicio trabajando';

    });
