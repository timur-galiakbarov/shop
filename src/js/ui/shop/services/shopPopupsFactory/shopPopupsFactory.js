(function (module, angular) {

    module.factory('shopPopupsFactory', shopPopupsFactory);

    shopPopupsFactory.$inject = ['$modal'];

    function shopPopupsFactory($modal) {

        var openAddItemPopup = function () {
            console.log($modal);
            $modal.open({
                animation: true,
                templateUrl: './templates/js/ui/shop/services/shopPopupsFactory/views/addItemPopup.html',
                controller: function($scope, $modalInstance){
                    $scope.item = {
                        name: '',
                        cost: '',
                        description: ''
                    };
                    $scope.add = function(){
                        console.log($scope.item);

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