
/*Инициализация приложения*/
var app = angular.module('app', [
    'ngRoute',
    'ui.router',
    'rad.menu',
    'rad.shop',
    'rad.dashboard',
    'rad.orders',
    'rad.settings',
    'ui.bootstrap'
]);

app.controller('appController', ['$rootScope', '$scope', '$state', 'bus',
    function ($rootScope, $scope, $state, bus) {

        bus.subscribe('testEvent', function (e) {
            console.log(e.name);
        });

        bus.publish('testEvent', {name: 'Dr.Who'});


        $rootScope.page = {
            sectionTitle: '',
            breadcrumb: []
        };
        //Открываем раздел по умолчанию
        $state.go('index.dashboard');
    }]);
