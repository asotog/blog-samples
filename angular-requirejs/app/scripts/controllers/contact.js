'use strict';

/**
* Home controller
*
*
*/
define(['services/comments'], function() {
    
    angular.module('angularRequirejsApp.controllers.ContactCtrl', ['angularRequirejsApp.services.Comments']).controller('ContactCtrl', ['Comments', '$scope',
    function(Comments, $scope) {
        /* move this to constants file */
        tinyMCE.baseURL = '/libs/tinymce';
        /* textarea configuration */
        $scope.tinymceOptions = {
            menubar: false
        };
    }]);
    
});
