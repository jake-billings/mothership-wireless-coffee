angular.module('mothership-wireless-coffee')
    .directive('wirelessCoffeeLocations', function () {
        return {
            controller: ['$scope', 'Locations', function ($scope, Locations) {
                $scope.locations = Locations;
                console.log($scope);
            }],
            templateUrl: 'components/Locations/Locations.html'
        }
    });