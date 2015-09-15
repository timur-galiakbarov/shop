angular
    .module('rad.shop')
    .directive('radCatalogItems', radCatalogItems);

//radLeftMenu.inject = ['rad.orders'];
//import bus from 'core';

function radCatalogItems() {
    return {
        restrict: 'EA',
        templateUrl: './templates/js/ui/shop/directives/radCatalogItems/radCatalogItems.html',
        controller: ['$scope', '$state', function ($scope, $state) {

        }],
        link: link
    };
}

function link($scope) {

}