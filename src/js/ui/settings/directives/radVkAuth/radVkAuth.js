import appState from './../../../../bl/account/appState.js';
import events from './../../../../bl/events.js';
import topics from './../../../../bl/topics.js';

angular
    .module('rad.settings')
    .directive('radVkAuth', radVkAuth);

function radVkAuth() {
    return {
        restrict: 'EA',
        templateUrl: './templates/js/ui/settings/directives/radVkAuth/radVkAuth.html',
        controller: ['$scope', '$state', 'bus', '$timeout', function ($scope, $state, bus, $timeout) {
            var vkInfo = appState.socAuthInfo.getVk();
            vkInfo.user = vkInfo.user ? vkInfo.user : {};

            $scope.model = {
                isAuth: vkInfo.isAuth,
                firstName: vkInfo.user.firstName || '',
                lastName: vkInfo.user.lastName || '',
                id: vkInfo.user.id || '',
            };

            $scope.logout = function () {
                bus.request(topics.ACCOUNT.LOGOUT_VK).then(function (res) {
                    if (res.success)
                        $scope.$apply(function(){
                            $scope.model.isAuth = false;
                        });
                });
            };

            bus.subscribe(events.ACCOUNT.VK.INFO_READY, function(){
                vkInfo = appState.socAuthInfo.getVk();
                $scope.$apply(function(){
                    $scope.model = {
                        isAuth: vkInfo.isAuth,
                        firstName: vkInfo.user.firstName || '',
                        lastName: vkInfo.user.lastName || '',
                        id: vkInfo.user.id || '',
                    };
                });
            });
        }],
        link: link
    };
}

function link($scope) {

}