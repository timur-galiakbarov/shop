import appState from './../../../../bl/account/appState.js';
import events from './../../../../bl/events.js';
import topics from './../../../../bl/topics.js';

angular
    .module('rad.settings')
    .directive('radUserSettings', radUserSettings);

function radUserSettings() {
    return {
        restrict: 'EA',
        templateUrl: './templates/js/ui/settings/directives/radUserSettings/radUserSettings.html',
        controller: ['$scope', '$state', 'bus', '$timeout', function ($scope, $state, bus, $timeout) {

        }],
        link: link
    };
}

function link($scope) {
    $scope.model = {
        firstName: appState.getUserName(),
        lastName: appState.getLastName(),
        email: appState.getEmail(),
        email2: appState.getEmail(),
    };
    console.log($scope.model);
}