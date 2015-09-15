angular
    .module('rad.shop')
    .directive('radShopPopupsViewsAdd', radShopPopupsViewsAdd);

function radShopPopupsViewsAdd() {
    return {
        restrict: 'EA',
        templateUrl: './templates/js/ui/shop/directives/radShopPopups/views/radShopPopupsViewsAdd/radShopPopupsViewsAdd.html',
        controller: ['$scope', '$state', function ($scope, $state) {

        }],
        link: link,
        scope: {
            closePopup: '='
        }
    };
}

function link($scope) {
    $("#modalAddItem").modal('toggle');//Jquery открытие модального окна
    $('#modalAddItem').on('hide.bs.modal', function (e) {//Событие, вызываемое при закрытии окна
        $scope.closePopup();
    });
}