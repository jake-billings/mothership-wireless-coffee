angular.module('mothership-wireless-coffee')
    .directive('wirelessCoffeeLocations', function () {
        return {
            controller: ['$scope', 'Locations', function ($scope, Locations) {
                $scope.locations = Locations;
                $scope.location='zero';
            }],
            templateUrl: 'components/Locations/Locations.html'
        }
    });