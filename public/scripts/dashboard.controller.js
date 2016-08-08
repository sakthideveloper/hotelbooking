(function() {
    'use strict';


    /**
     * Home state module supplies views to its parent state's wrapper template
     */
    angular
        .module('hotel.dashboard.com', [])
        .controller('DashboardController', DashboardController)
        ;
    /**
     * Home Features View Controller
     *
     * @constructor
     */
    function DashboardController($scope, $timeout, $q, $log, Hotels, $location, $mdToast) {


        var self = this;
        self.hotels = Hotels.all();
        self.term = "all";

        self.search = function(term) {
            if (self.searchText == "") {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Enter location to search!')
                    .position('top right')
                    .hideDelay(1000)
                );
                return false
            }

            $location.path('/search').search('country', term);
            console.log(term);
        };

        console.log(self.hotels);



        self.noOfNight = '';
        self.nights = ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 ' +
            '20').split(' ').map(function(night) {
            return { abbrev: night };
        });

        self.noOfTraveller = '';
        self.travellers = ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 ' +
            '20').split(' ').map(function(traveller) {
            return { abbrev: traveller };
        });

        self.states = loadAll();
        self.querySearch = querySearch;
        // ******************************
        // Template methods
        // ******************************
        self.cancel = function($event) {
            $mdDialog.cancel();
        };
        self.finish = function($event) {
            $mdDialog.hide();
        };
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch(query) {
            return query ? self.states.filter(createFilterFor(query)) : self.states;
        }
        /**
         * Build `states` list of key/value pairs
         */
        function loadAll() {
            var allStates = 'India, Cannada, England';
            return allStates.split(/, +/g).map(function(state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }
        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }

    }


})();
