angular.module('mothership-wireless-coffee')
    .factory('Locations', ['$firebaseArray', function ($firebaseArray) {
        var ref = firebase.database().ref().child('locations');
       return $firebaseArray(ref);
    }]);