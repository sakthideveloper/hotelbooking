(function() {
    'use strict';


    /**
     * Heart of the app
     *
     * All dependencies goes here
     */

    angular
        .module('app', [
            'ngMaterial',
            'ngAria',
            'ngAnimate',
            'ngMessages',
            'ui.router',
            'angularSpinner',
            'app.routes',
            'app.service',
            'infinite-scroll',
            'app.directive',
            'hotel.search.com',
            'hotel.dashboard.com',

        ])

})();
