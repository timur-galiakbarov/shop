import topics from './../../../../bl/topics.js';
import events from './../../../../bl/events.js';
import bus from './../../../../bl/core/busModule.js';

angular
    .module('rad.shop')
    .directive('radCatalogItems', radCatalogItems);

//radLeftMenu.inject = ['rad.orders'];
//import bus from 'core';

function radCatalogItems() {
    return {
        restrict: 'EA',
        templateUrl: './templates/js/ui/shop/directives/radCatalogItems/radCatalogItems.html',
        controller: ['$scope', '$state', 'bus', 'shopPopupsFactory', function ($scope, $state, bus, shopPopupsFactory) {
            $scope.shop = {
                items: []
            };
            bus.request(topics.SHOP.GET_ITEMS, {}).then((res)=>{
                if (res&&res.data) {
                    $scope.$apply(function () {
                        $scope.shop.items = res.data;
                    });
                }
            });

            bus.subscribe(events.SHOP.ITEM_CREATED, function(res){
                bus.request(topics.SHOP.GET_ITEM, {id: res.id}).then((res)=>{
                    //console.log(res);
                    $scope.$apply(function () {
                        $scope.shop.items.push(res.data);
                    });
                });
            });

            $scope.removeItem = function(id){
                //TODO ѕо id надо вытащить весь товар и передать в openRemoveItemPopup

                shopPopupsFactory.openRemoveItemPopup(id);
            }
        }],
        link: link
    };
}

function link($scope) {

}