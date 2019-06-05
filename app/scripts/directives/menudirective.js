'use strict';

angular.module('mockupScApp').directive('menu', function () {
    return {
        templateUrl: 'views/directives/menu.html',
        restrict: 'E',
        scope: {},
        link: function postLink(scope) {

            scope.menuItems = [
                {
                    nombre: 'Home',
                    ref: 'inicio',
                    icon: 'home'
                },
                {
                    nombre: 'Messages',
                    ref: 'mensajes',
                    icon: 'envelope'
                },
                {
                    nombre: 'WishList',
                    ref: 'listadeseos',
                    icon: 'star'
                },
                {
                    nombre: 'Settings',
                    ref: 'configuraciones',
                    icon: 'cog'
                },
                {
                    nombre: 'My Account',
                    ref: 'micuenta',
                    icon: 'user'
                }
            ];
        }
    };
});
