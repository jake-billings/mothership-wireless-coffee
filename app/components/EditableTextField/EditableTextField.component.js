/*global angular*/
angular.module('mothership-wireless-coffee')
    .directive('wirelessCoffeeEditableTextField', function () {
        return {
            scope: {
                data: '=wirelessCoffeeData',
                editing: '=wirelessCoffeeEditing',
                onChange: '&wirelessCoffeeOnChange'
            },
            templateUrl: 'components/EditableTextField/EditableTextField.html'
        };
    });