import {enums} from './../../../../bl/module.js';

angular
    .module('rad.shop')
    .directive('radShopPopups', radShopPopups);

function radShopPopups() {
    return {
        restrict: 'EA',
        templateUrl: './templates/js/ui/shop/directives/radShopPopups/radShopPopups.html',
        controller: ['$scope', '$state', function ($scope, $state) {

        }],
        scope: {
            type: '='
        },
        link: link
    };
}

function link($scope, $attrs) {
    $scope.viewType = '';

    $scope.closePopup = function(){
        $scope.viewType = '';
        $scope.type = '';
    };

    $scope.$watch('type', function(data){
        if (data == enums.POPUPS.ADD){
            $scope.viewType = 'Add';
        }
        if (data == ''){
            $scope.viewType = '';
        }
    });
}