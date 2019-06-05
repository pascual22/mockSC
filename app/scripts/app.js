'use strict';

/**
 * @ngdoc overview
 * @name mockupScApp
 * @description
 * # mockupScApp
 *
 * Main module of the application.
 */
angular
  .module('mockupScApp', [
    'ngAnimate',
    'ngCookies',
    'ui.router',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/inicio');

    $stateProvider
      .state('inicio', {
        url: '/inicio',
        templateUrl: 'views/inicio.html'
      })
      .state('mensajes', {
        url: '/mensajes',
        templateUrl: 'views/mensajes.html'
      })
      .state('listadeseos', {
        url: '/listadeseos',
        templateUrl: 'views/listadeseos.html'
      })
      .state('configuraciones', {
        url: '/configuraciones',
        templateUrl: 'views/configuraciones.html'
      })
      .state('micuenta', {
        url: '/micuenta',
        templateUrl: 'views/micuenta.html'
      });
  }]);
