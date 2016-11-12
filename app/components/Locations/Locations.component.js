angular.module('mothership-wireless-coffee')
    .directive('wirelessCoffeeLocations', function () {
        return {
            controller: ['$scope', 'Locations', function ($scope, Locations) {
                $scope.locations = Locations;

                $scope.toggleShowNewLocation = function () {
                    $scope.showNewLocation = !$scope.showNewLocation;
                };

                $scope.resetNewLocation = function () {
                    $scope.showNewLocation = false;
                    $scope.newLocation = {};
                };
                $scope.resetNewLocation();

                $scope.createLocation = function () {
                    Locations.$add($scope.newLocation);
                    $scope.resetNewLocation();
                };
            }],
            templateUrl: 'components/Locations/Locations.html'
        }
    });