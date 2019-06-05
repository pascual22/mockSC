'use strict';

/**
 * @ngdoc service
 * @name mockupScApp.InicioService
 * @description
 * @param {$http} name description
 * # InicioService
 * Service in the mockupScApp.
 */

angular.module('mockupScApp').service('InicioService', function ($http, BaseService) {


    var urlConsulta = BaseService.isLocal() ? 'json/mocks/inicioRespuesta.json' : 'urlRemota';
    var method = BaseService.isLocal() ? 'GET' : 'POST';

    this.consultaInicio = function (parametros) {
        return $http({
            method: method,
            url: urlConsulta,
            data: parametros,
            headers: { 'Content-Type': 'application/json' }
        });
    };

});
