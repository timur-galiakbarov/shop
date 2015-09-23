import topics from './../../../../bl/topics.js';
import events from './../../../../bl/events.js';
import appState from './../../../../bl/account/appState.js';

(function (module, angular) {

    module.factory('shopPopupsFactory', shopPopupsFactory);

    shopPopupsFactory.$inject = ['$modal', 'bus'];

    function shopPopupsFactory($modal, bus) {

        var openAddItemPopup = function () {
            //console.log($modal);
            $modal.open({
                animation: true,
                templateUrl: './templates/js/ui/shop/services/shopPopupsFactory/views/addItemPopup.html',
                controller: function($scope, $modalInstance){
                    $scope.item = {
                        name: '',
                        cost: '',
                        description: '',
                        userId: appState.getUserId(),
                        currentShopId: appState.getCurrentShopId()
                    };
                    $scope.add = function(){

                        bus.request(topics.SHOP.ADD_ITEM, $scope.item).then((res)=>{
                            bus.publish(events.SHOP.ITEM_CREATED, res);
                            //console.log(res);
                        });
                        //��������� �����
                        $modalInstance.close();
                    };
                    $scope.close = function(){
                        $modalInstance.close();
                    };
                },
            });
        };

        var openRemoveItemPopup = function (options) {
            $modal.open({
                animation: true,
                templateUrl: './templates/js/ui/shop/services/shopPopupsFactory/views/removeItemPopup.html',
                controller: function($scope, $modalInstance){
                    $scope.item = {
                        name: options.name,
                        userId: appState.getUserId(),
                        currentShopId: appState.getCurrentShopId(),
                        id: options.id
                    };

                    $scope.remove = function() {
                        if ($scope.item.id){
                            bus.request(topics.SHOP.REMOVE_ITEM, $scope.item).then((res)=> {
                                bus.publish(events.SHOP.ITEM_REMOVED, res);
                                //console.log(res);
                            });
                        }
                        //��������� �����
                        $modalInstance.close();
                    };
                    $scope.close = function(){
                        $modalInstance.close();
                    };
                },
            });
        };


        return {
            openAddItemPopup: openAddItemPopup,
            openRemoveItemPopup: openRemoveItemPopup
        }

    }

})(angular.module("rad.shop"), angular);