angular
    .module('rad.settings')
    .directive('radVkAuth', radVkAuth);

function radVkAuth() {
    return {
        restrict: 'EA',
        templateUrl: './templates/js/ui/settings/directives/radVkAuth/radVkAuth.html',
        controller: ['$scope', '$state', 'bus', '$timeout', function ($scope, $state, bus, $timeout) {

        }],
        link: link
    };
}

function link($scope) {

}