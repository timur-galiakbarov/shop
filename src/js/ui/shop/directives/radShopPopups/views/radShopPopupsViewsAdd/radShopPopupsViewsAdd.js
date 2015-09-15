import {enums} from './../../../../../../bl/module.js';
angular
    .module('rad.shop')
    .directive('radShopPopupsViewsAdd', radShopPopupsViewsAdd);

radShopPopupsViewsAdd.$inject = ['$templateCache'];

function radShopPopupsViewsAdd($templateCache) {
    return {
        restrict: 'EA',
        templateUrl: './templates/js/ui/shop/directives/radShopPopups/views/radShopPopupsViewsAdd/radShopPopupsViewsAdd.html',
        controller: controller,
        link: link,
        scope: {
            openPopup: '='
        }
    };
}

controller.$inject = ['$scope'];
function controller ($scope){
    function open(type){
        if (type == enums.POPUPS.ADD) {
            $("#modalAddItem").modal();//Jquery открытие модального окна
            /*$('#modalAddItem').on('hide.bs.modal', function (e) {//Событие, вызываемое при закрытии окна
                $scope.$parent.closePopup();
            });*/
        }
    }
    $scope.openPopup(open);
}

function link($scope) {

}