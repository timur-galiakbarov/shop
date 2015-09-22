import appState from './../../../bl/account/appState.js';
import events from './../../../bl/events.js';
import bus from './../../../bl/core/busModule.js';

angular
    .module('rad.menu')
    .directive('radProfileMenu', radProfileMenu);

//radLeftMenu.inject = ['rad.orders'];
//import bus from 'core';

function radProfileMenu() {
    return {
        restrict: 'EA',
        templateUrl: './templates/js/ui/menu/radProfileMenu/radProfileMenu.html',
        controller: ['$scope', 'bus', function ($scope, bus) {

        }],
        link: link
    };
}

function link($scope) {
    $scope.logout = function(){
        bus.publish(events.ACCOUNT.LOGOUT);
    };

    $scope.userFullName = appState.getUserFullName();


}