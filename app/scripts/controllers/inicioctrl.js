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
        $scope.status = true;

        vm.mensaje = 'desde el inicio trabajando';

        vm.onoff = {
            ventas: false,
            calendario: false,
            gustos: false
        };

        $scope.$watch('onoff', function () {
            //TODO: FILTROS 

        }, true);

    });
