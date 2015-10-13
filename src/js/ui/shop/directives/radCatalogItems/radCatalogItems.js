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
        controller: ['$scope', '$state', 'bus', 'shopPopupsFactory', '$timeout', function ($scope, $state, bus, shopPopupsFactory, $timeout) {
            $scope.shop = {
                items: []
            };
            $scope.isLoading = true;

            bus.request(topics.SHOP.GET_ITEMS, {}).then((res)=> {
                if (res && res.data) {
                    $scope.$apply(function () {
                        //console.log(res.data);
                        $scope.shop.items = res.data;
                        $scope.isLoading = false;

                    });
                }
            });

            bus.subscribe(events.SHOP.ITEM_CREATED, function (res) {
                bus.request(topics.SHOP.GET_ITEM, {id: res.id}).then((res)=> {
                    //console.log(res);
                    $scope.$apply(function () {
                        $scope.shop.items.push(res.data);
                    });
                });
            });

            bus.subscribe(events.SHOP.ITEM_REMOVED, function (res) {
                var index = _.findIndex($scope.shop.items, function (val) {
                    return val.id == res.removeId;
                });
                $scope.$apply(function () {
                    $scope.shop.items.splice(index, 1);
                });
            });

            $scope.toggleItem = function(key){
                if (angular.element('#desc'+key).hasClass('showAll')) {
                    angular.element('#desc' + key).removeClass('showAll');
                    angular.element('#showDesc' + key + ' span').html('Раскрыть');
                } else {
                    angular.element('#desc' + key).addClass('showAll');
                    angular.element('#showDesc' + key + ' span').html('Cкрыть');
                }
            };

            $scope.removeItem = function (id) {
                var item = $scope.shop.items.filter((val)=> {
                    return val.id == id
                });
                shopPopupsFactory.openRemoveItemPopup(item[0]);
            };

            $scope.editItem = function (id) {
                var item = $scope.shop.items.filter((val)=> {
                    return val.id == id
                });
                shopPopupsFactory.openEditItemPopup(item[0]);
            };

            $scope.showPicture = function (url, key, imageKey) {
                angular.element('img.itemPicture'+key).attr('src', url);
                angular.element('#smallPictures'+key+' .smallImage').each(function(){
                    $(this).removeClass('active');
                });
                angular.element('#smallPictures'+key+' .smallImageItem'+imageKey).addClass('active');

            };
        }],
        link: link
    };
}

function link($scope) {

}