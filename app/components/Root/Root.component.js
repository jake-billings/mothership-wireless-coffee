/*global angular*/
angular.module('mothership-wireless-coffee')
    .directive('mothershipWirelessCoffee', function () {
        return {
            templateUrl: 'components/Root/Root.html',
            controller: ['$scope', '$location', function ($scope, $location) {
                $scope.admin = $location.search().admin;
            }]
        };
    });