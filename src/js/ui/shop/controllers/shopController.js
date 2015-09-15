import {enums} from './../../../bl/module.js';
angular
    .module('rad.shop')
    .controller('shopController', ['$rootScope', '$scope', '$state', 'bus',
    function($rootScope, $scope, $state, bus) {
        $scope.currentTab = 'catalog';
        $rootScope.page.sectionTitle = 'Магазин';
        $scope.catalogPages = {
            publish: 'publish',
            catalog: 'catalog'
        };
        $scope.viewTab = function(tabName){
            $scope.currentTab = tabName;
        };

        /*Диалоговые окна*/
        $scope.popup = {
            type: false,
            isOpen: false
        };
        //Открытие попапа добавленния нового товара
        $scope.popupAddItem = function(){
            $scope.popup.type = enums.POPUPS.ADD;
            $scope.popup.isOpen = true;
        };

    }]);