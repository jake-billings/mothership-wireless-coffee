/*global angular*/
angular.module('mothership-wireless-coffee')
    .directive('wirelessCoffeeEditableAddress', function () {
        return {
            scope: {
                data: '=wirelessCoffeeData',
                editing: '=wirelessCoffeeEditing',
                onChange: '&wirelessCoffeeOnChange'
            },
            templateUrl: 'components/EditableAddress/EditableAddress.html'
        };
    });