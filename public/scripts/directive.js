(function() {
    'use strict';

    angular
        .module('app.directive', [])
        .directive('ccSpinner', function() {
            return {
                'restrict': 'AE',
                'templateUrl': 'templates/spinner.html',
                'scope': {
                    'isLoading': '=',
                    'message': '@'
                }
            }
        });


})();
