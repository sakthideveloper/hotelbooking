"use strict";!function(){function n(n,t,e,r,a,o,l){function i(n){return n?u.states.filter(c(n)):u.states}function s(){var n="India, Cannada, England";return n.split(/, +/g).map(function(n){return{value:n.toLowerCase(),display:n}})}function c(n){var t=angular.lowercase(n);return function(n){return 0===n.value.indexOf(t)}}var u=this;u.hotels=a.all(),u.term="all",u.search=function(n){return""==u.searchText?(l.show(l.simple().textContent("Enter location to search!").position("top right").hideDelay(1e3)),!1):(o.path("/search").search("country",n),void console.log(n))},console.log(u.hotels),u.noOfNight="",u.nights="1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20".split(" ").map(function(n){return{abbrev:n}}),u.noOfTraveller="",u.travellers="1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20".split(" ").map(function(n){return{abbrev:n}}),u.states=s(),u.querySearch=i,u.cancel=function(n){$mdDialog.cancel()},u.finish=function(n){$mdDialog.hide()}}angular.module("hotel.dashboard.com",[]).controller("DashboardController",n)}();