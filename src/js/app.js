import topics from './bl/topics.js';
import events from './bl/events.js';

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
        bus.request(topics.ACCOUNT.IS_AUTH, {notLogError: true}).then((res)=>{
            if (res.success) {
                $rootScope.isAuth = true;
                bus.request(topics.ACCOUNT.GET_USER_INFO).then((res)=>{
                    bus.publish(events.ACCOUNT.STATED, res);
                });

            } else {
                location.href = '/login/';
            }
        });


        $rootScope.page = {
            sectionTitle: '',
            breadcrumb: []
        };
        //Открываем раздел по умолчанию
        $state.go('index.dashboard');
    }]);
