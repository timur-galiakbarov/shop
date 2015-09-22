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
                            console.log(res);
                        });
                        //Закрываем попап
                        $modalInstance.close();
                    };
                    $scope.close = function(){
                        $modalInstance.close();
                    };
                },
            });
        };


        return {
            openAddItemPopup: openAddItemPopup
        }

    }

})(angular.module("rad.shop"), angular);