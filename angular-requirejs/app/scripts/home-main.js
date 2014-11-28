'use strict';

require(['controllers/home'], function () {

    angular.module('homeApp', ['angularRequirejsApp.controllers.HomeCtrl']);

    angular.element(document).ready(function () {

        angular.bootstrap(document.querySelector('.app-container'), ['homeApp']);

    });

});
