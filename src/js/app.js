import topics from './bl/topics.js';
import events from './bl/events.js';

/*Инициализация приложения*/
var app = angular.module('app', [
    'ngRoute',
    'ngSanitize',
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

    }]);

app.controller('appController', ['$rootScope', '$scope', '$state', 'bus',
    function ($rootScope, $scope, $state, bus) {
        bus.subscribe(events.APP.READY, function () {
            $rootScope.$apply(function () {
                $rootScope.isAuth = true;
            });
            //Открываем раздел по умолчанию
            if ($state.current.name == 'index')
                $state.go('index.dashboard');
        });
        bus.request(topics.ACCOUNT.IS_AUTH, {notLogError: true}).then((res)=> {
            if (res.success) {
                $.when(
                    bus.request(topics.ACCOUNT.GET_USER_INFO).then((res)=> {
                        bus.publish(events.ACCOUNT.STATED, res);
                    })
                ).then(function(res){
                        bus.publish(events.APP.READY);
                    }
                );

                bus.request(topics.ACCOUNT.GET_VK_INFO).then((res)=> {
                    bus.publish(events.ACCOUNT.VK.AUTH, res);
                })
            } else {
                $scope.isAuth = false;
                location.href = '/login/';
            }
        });

        bus.subscribe(events.ACCOUNT.LOGOUT, function () {
            bus.request(topics.ACCOUNT.LOGOUT).then((res)=> {
                location.href = '/login/';
            });
        });

        $rootScope.page = {
            sectionTitle: '',
            breadcrumb: []
        };

        $scope.toggleMenu = function (e) {
            var ul = $(".cl-vnavigation");
            ul.slideToggle(300, 'swing', function () {
            });
            e.preventDefault();
        };

        /*$('.nano').nanoScroller({
            preventPageScrolling: true,
            alwaysVisible: true
        });*/

    }]);
