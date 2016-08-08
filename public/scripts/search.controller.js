(function() {
    'use strict';

    var dependencies = [];

    /**
     * Home state module supplies views to its parent state's wrapper template
     */
    angular.module('hotel.search.com', dependencies)
        .controller('SearchController', SearchController);
    /**
     * Home Features View Controller
     *
     * @constructor
     */
    function SearchController($scope, Hotels, $location) {


        $scope.hotel = [];

        $scope.search = function(term) {

            $location.path('/search').search('country', term);
            console.log(term);
        };
        $scope.hotel = Hotels.all();

        $scope.data = $scope.hotel.slice(0, 5);
        $scope.getMoreData = function() {
            $scope.data = $scope.hotel.slice(0, $scope.data.length + 5);
            console.log("hello", $scope.data);
        }

        $scope.searchTerm = $location.search()['country'];


    }


})();
