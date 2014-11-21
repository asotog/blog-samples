'use strict';


angular.module('angularApp.settings', [])
  .constant ('settings', {

    /* pagination config */
    pagination: {
        SIZE: 4
    },
    /* api paths */
    paths: {
        PAGINATED: '/api/categories/start/:start/end/:end/'
    },
    /*  views */
    views: {
        CATEGORY_LIST: '/views/category-list.html'
    }
});
