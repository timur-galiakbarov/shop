import {enums} from './../../../bl/module.js';
angular
    .module('rad.shop')
    .controller('shopController', ['$rootScope', '$scope', '$state', 'bus', 'shopPopupsFactory',
    function($rootScope, $scope, $state, bus, shopPopupsFactory) {
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
        $scope.popupAddItem = function(){//Открытие попапа добавленния нового товара
            shopPopupsFactory.openAddItemPopup();
        };

    }]);