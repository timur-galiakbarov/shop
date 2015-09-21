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

angular.module('app').run(['$rootScope', 'bus',
    function ($rootScope, bus) {
        //$rootScope.isAuth = false;


    }]);

app.controller('appController', ['$rootScope', '$scope', '$state', 'bus',
    function ($rootScope, $scope, $state, bus) {
        bus.subscribe(events.ACCOUNT.STATED, function(res){
            console.log(res);
            $scope.isAuth = true;
        });
        bus.request(topics.ACCOUNT.IS_AUTH, {notLogError: true}).then((res)=>{
            if (res.success) {
                bus.request(topics.ACCOUNT.GET_USER_INFO).then((res)=>{
                    bus.publish(events.ACCOUNT.STATED, res);
                });
            } else {
                $scope.isAuth = false;
                location.href = '/login/';
            }
        });

        bus.subscribe(events.ACCOUNT.LOGOUT, function(){
            bus.request(topics.ACCOUNT.LOGOUT).then((res)=>{
                location.href = '/login/';
            });
        });

        //$scope.isAuth = true;


        $rootScope.page = {
            sectionTitle: '',
            breadcrumb: []
        };
        //Открываем раздел по умолчанию
        $state.go('index.dashboard');
    }]);
