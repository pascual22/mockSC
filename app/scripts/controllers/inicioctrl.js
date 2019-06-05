'use strict';

/**
 * @ngdoc function
 * @name mockupScApp.controller:InicioCtrl
 * @description
 * # InicioCtrl
 * Controller of the mockupScApp
 */
angular.module('mockupScApp').controller('InicioCtrl', function ($scope, InicioService) {

    var vm = $scope;
    // $scope.status = true;
    vm.informacion = {};

    vm.ordenar = [];
    vm.ordenar.push('cantidad');

    vm.onoff = {
        ventas: false,
        calendario: false,
        gustos: false
    };

    function iniciarVista() {
        var parametros = {};

        InicioService.consultaInicio(parametros).then(
            function (result) {
                vm.informacion = result.data;
            },
            function (err) {
                console.log(err);
            }
        );
    };

    vm.retornarFecha = function (fecha) {
        var nuevaFecha = new Date(fecha);
        return nuevaFecha;
    }

    $scope.$watch('onoff', function () {

        vm.ordenar = [];
        if (vm.onoff.ventas) {
            vm.ordenar.push('valor');
        }
        if (vm.onoff.calendario) {
            vm.ordenar.push('fecha');
        }
    }, true);

    iniciarVista();

});
