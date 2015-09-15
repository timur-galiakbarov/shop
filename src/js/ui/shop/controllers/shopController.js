import {enums} from './../../../bl/module.js';
angular
    .module('rad.shop')
    .controller('shopController', ['$rootScope', '$scope', '$state',
    function($rootScope, $scope, $state) {
        $scope.currentTab = 'catalog';
        $scope.catalogPages = {
            publish: 'publish',
            catalog: 'catalog'
        };
        $scope.viewTab = function(tabName){
            $scope.currentTab = tabName;
        };

        $scope.popup = {
            type: ''
        };

        /*Диалоговые окна*/
        $scope.addItem = function(){
            //Открытие попапа добавленния нового товара
            $scope.popup.type = enums.POPUPS.ADD;
        };

        $rootScope.page.sectionTitle = 'Магазин';
    }]);