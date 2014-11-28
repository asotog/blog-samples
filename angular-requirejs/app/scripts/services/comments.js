'use strict';

/**
 * Comments service
 *
 *
 */

define([], function() {

    angular.module('angularRequirejsApp.services.Comments', [])
        .service('Comments', function comments() {
            return {
                addContactMessage: function() {

                },
                fetchAll: function() {
                    return [{
                        user: 'User 1',
                        body: 'Porttitor nascetur arcu et. Nunc nunc vut nec sit ut porta in!'
                    }, {
                        user: 'User 2',
                        body: 'Empor habitasse, hac rhoncus amet elit p'
                    }];
                }
            };
    });

});
