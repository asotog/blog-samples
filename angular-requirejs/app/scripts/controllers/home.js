'use strict';

/**
 * Home controller
 *
 *
 */
define(['services/comments'], function() {

    angular.module('angularRequirejsApp.controllers.HomeCtrl', ['angularRequirejsApp.services.Comments']).controller('HomeCtrl', ['Comments', '$scope',
        function(Comments, $scope) {
            $scope.comments = Comments.fetchAll();
    }]);

});
