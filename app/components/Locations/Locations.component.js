/*global angular*/
angular.module('mothership-wireless-coffee')
    .directive('wirelessCoffeeLocations', function () {
        return {
            scope: {
                editable: '=wirelessCoffeeEditable'
            },
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
                    $scope.newLocation.approved = false;
                    Locations.$add($scope.newLocation);
                    $scope.resetNewLocation();
                };
            }],
            templateUrl: 'components/Locations/Locations.html'
        };
    });