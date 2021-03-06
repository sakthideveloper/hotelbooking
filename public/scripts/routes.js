(function() {
    'use strict';

    angular
        .module('app.routes', [])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/index.html',
                    controller: 'DashboardController',
                    views: {
                        'header': {
                            templateUrl: 'templates/header.html'
                        },
                        'wrapper': {
                            templateUrl: 'templates/home.html'
                        },
                        'footer': {
                            templateUrl: 'templates/footer.html'
                        }

                    }
                })

            .state('search', {
                url: '/search',
                templateUrl: '/search.html',
                controller: 'SearchController',
                views: {
                    'header': {
                        templateUrl: 'templates/header.html'
                    },
                    'wrapper': {
                        templateUrl: 'templates/search.html'
                    },
                    'footer': {
                        templateUrl: 'templates/footer.html'
                    }

                }
            })

            $urlRouterProvider.otherwise('/home');
        });


})();
