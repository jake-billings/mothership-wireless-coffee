/*global angular*/
angular.module('mothership-wireless-coffee')
    .directive('wirelessCoffeeMadeBy', function () {
        return {
            templateUrl: 'components/MadeByMothership/MadeByMothership.html'
        };
    });