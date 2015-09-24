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
                controller: function($scope, $modalInstance, FileUploader){
                    var uploader = $scope.uploader = new FileUploader({
                        url: '/controllers/shop/uploadImages.php'
                    });

                    // FILTERS

                    uploader.filters.push({
                        name: 'imageFilter',
                        fn: function(item /*{File|FileLikeObject}*/, options) {
                            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                            return '|jpg|png|jpeg|'.indexOf(type) !== -1;
                        }
                    });

                    // CALLBACKS

                    uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
                        console.info('onWhenAddingFileFailed', item, filter, options);
                    };
                    uploader.onAfterAddingFile = function(fileItem) {
                        console.info('onAfterAddingFile', fileItem);
                    };
                    uploader.onAfterAddingAll = function(addedFileItems) {
                        console.info('onAfterAddingAll', addedFileItems);
                        $scope.$apply();
                    };
                    uploader.onBeforeUploadItem = function(item) {
                        console.info('onBeforeUploadItem', item);
                    };
                    uploader.onProgressItem = function(fileItem, progress) {
                        console.info('onProgressItem', fileItem, progress);
                    };
                    uploader.onProgressAll = function(progress) {
                        console.info('onProgressAll', progress);
                    };
                    uploader.onSuccessItem = function(fileItem, response, status, headers) {
                        console.info('onSuccessItem', fileItem, response, status, headers);
                    };
                    uploader.onErrorItem = function(fileItem, response, status, headers) {
                        console.info('onErrorItem', fileItem, response, status, headers);
                    };
                    uploader.onCancelItem = function(fileItem, response, status, headers) {
                        console.info('onCancelItem', fileItem, response, status, headers);
                    };
                    uploader.onCompleteItem = function(fileItem, response, status, headers) {
                        console.info('onCompleteItem', fileItem, response, status, headers);
                    };
                    uploader.onCompleteAll = function() {
                        sendData();
                    };

                    console.info('uploader', uploader);


                    $scope.item = {
                        name: '',
                        cost: '',
                        description: '',
                        images: '',
                        userId: appState.getUserId(),
                        currentShopId: appState.getCurrentShopId()
                    };
                    $scope.isLoadImages = false;

                    $scope.add = function(){
                        if (uploader.queue.length>0){
                            $scope.isLoadImages = true;
                            uploader.uploadAll();
                        } else {
                            sendData();
                        }
                    };
                    var sendData = function(){
                        bus.request(topics.SHOP.ADD_ITEM, $scope.item).then((res)=>{
                            bus.publish(events.SHOP.ITEM_CREATED, res);
                            $modalInstance.close();
                        })
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
            openAddItemPopup: openAddItemPopup,
            openRemoveItemPopup: openRemoveItemPopup
        }

    }

})(angular.module("rad.shop"), angular);