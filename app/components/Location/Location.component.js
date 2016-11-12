angular.module('mothership-wireless-coffee')
    .directive('wirelessCoffeeLocation', function () {
        return {
            scope: {
                data: '=wirelessCoffeeData'
            },
            controller: ['$scope', 'Locations', function ($scope, Locations) {
                //If the location doesn't have an $id, we assume it is an $id and load that location from the data service.
                if ($scope.data===undefined) {
                    console.error('Location component requires data', $scope.data);
                } else {
                    if ($scope.data.$id) {
                        $scope.location = $scope.data;
                    } else {
                        Locations.$loaded(function (Locations) {
                            $scope.location = Locations.$getRecord($scope.data);
                        });
                    }
                }

                $scope.onChange = function () {
                    Locations.$save($scope.location);
                }
            }],
            templateUrl: 'components/Location/Location.html'
        }
    });