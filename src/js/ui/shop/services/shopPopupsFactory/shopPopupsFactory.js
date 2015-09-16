(function (module, angular) {

    module.factory('shopPopupsFactory', shopPopupsFactory);

    shopPopupsFactory.$inject = ['$modal'];

    function shopPopupsFactory($modal) {

        var openAddItemPopup = function () {
            console.log($modal);
            $modal.open({
                animation: true,
                template: 'ddddddddddddddddddddddddddddddmyModalContent.html',
                //controller: 'ModalInstanceCtrl',
            });
        };

        return {
            openAddItemPopup: openAddItemPopup
        }

    }

})(angular.module("rad.shop"), angular);