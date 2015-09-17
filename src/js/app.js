import topics from './bl/topics.js';

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
        $rootScope.isAuth = false;
        bus.request(topics.ACCOUNT.IS_AUTH).then((res)=>{
            console.log(res);
            if (res.success)
                $rootScope.isAuth = true;
            else $state.go('login');
        });


        $rootScope.page = {
            sectionTitle: '',
            breadcrumb: []
        };
        //Открываем раздел по умолчанию
        $state.go('index.dashboard');
    }]);
