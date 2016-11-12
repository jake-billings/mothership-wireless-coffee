angular.module('mothership-wireless-coffee')
    .directive('wirelessCoffeeLocation', function () {
        return {
            scope: {
                data: '=wirelessCoffeeData',
                editing: '=?wirelessCoffeeEditing',
                hideToggle: '=?wirelessCoffeeHideToggle'
            },
            controller: ['$scope', 'Locations', function ($scope, Locations) {
                //If the location doesn't have an $id, we assume it is an $id and load that location from the data service.
                if ($scope.data===undefined) {
                    console.error('Location component requires data', $scope.data);
                } else {
                    //If we're creating a new one, or it's an existing one, just link the data.
                    if ($scope.data.$id||$scope.editing) {
                        $scope.location = $scope.data;
                    } else {
                        Locations.$loaded(function (Locations) {
                            $scope.location = Locations.$getRecord($scope.data);
                        });
                    }
                }

                if ($scope.editing===undefined) $scope.editing=false;
                $scope.toggleEditing = function () {
                    Locations.$save($scope.location);
                    $scope.editing = !$scope.editing;
                }
            }],
            templateUrl: 'components/Location/Location.html'
        }
    });