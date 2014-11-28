'use strict';

require(['angular-ui-tinymce', 'controllers/contact'], function () {
    
    angular.module('contactApp', ['angularRequirejsApp.controllers.ContactCtrl', 'ui.tinymce']);
    
    angular.element(document).ready(function () {
        
        angular.bootstrap(document.querySelector('.app-container'), ['contactApp']);
        
    });
    
});
