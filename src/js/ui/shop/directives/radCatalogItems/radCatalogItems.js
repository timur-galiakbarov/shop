import topics from './../../../../bl/topics.js';

angular
    .module('rad.shop')
    .directive('radCatalogItems', radCatalogItems);

//radLeftMenu.inject = ['rad.orders'];
//import bus from 'core';

function radCatalogItems() {
    return {
        restrict: 'EA',
        templateUrl: './templates/js/ui/shop/directives/radCatalogItems/radCatalogItems.html',
        controller: ['$scope', '$state', 'bus', function ($scope, $state, bus) {
            bus.request(topics.SHOP.GET_ITEMS).then((res)=>{
                console.log(res);
            });
        }],
        link: link
    };
}

function link($scope) {

}