angular
    .module('rad.settings')
    .controller('settingsController', ['$rootScope', '$scope', '$state',
        function($rootScope, $scope, $state) {

            $rootScope.page.sectionTitle = 'Настройки';

            $(".nano").nanoScroller();
        }]);