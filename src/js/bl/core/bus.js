(function (module, angular) {

    module.factory('bus', busFactory);

    //busFactory.inject = ['$http'];

    function busFactory($http) {
        var channel = postal.channel('app.channel');

        var bus = {

            publish: function(event, data){
                channel.publish(event, data);
            },

            document: function(event, data){
                channel.document(event, data);
            },

            subscribe: function(event, func) {
                channel.subscribe(event, func);
            },
            unsubscribe: function(subscription) {
                if (subscription.unsubscribe)
                    subscription.unsubscribe();
            }
            /*
             request() {
             return channel.request({topic: arguments[0], data: Array.prototype.slice.call(arguments, 1)});
             }*/
        };

        return bus;
    }


})(angular.module("app"), angular);