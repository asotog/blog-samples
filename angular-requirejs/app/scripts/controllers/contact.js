'use strict';

/**
* Home controller
*
*
*/
define(['services/comments'], function() {
    
    angular.module('angularRequirejsApp.controllers.ContactCtrl', ['angularRequirejsApp.services.Comments']).controller('ContactCtrl', ['Comments', '$scope',
    function(Comments, $scope) {
        $scope.fullname = '';
        $scope.email = '';
        $scope.message = '';
        
        /* textarea configuration */
        $scope.tinymceOptions = {
            menubar: false
        };
        
        $scope.send = function() {
            Comments.addContactMessage({email: this.email, fullname: this.fullname, message: this.message});
        };
    }]);
    
});
