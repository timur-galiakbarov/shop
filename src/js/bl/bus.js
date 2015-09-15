var channel = postal.channel('app.channel');

export default {

    publish(event, data){
        channel.publish(event, data);
    },

    document(event, data){
        channel.document(event, data);
    },

    subscribe(event, func) {
        channel.subscribe(event, func);
    },
    unsubscribe(subscription) {
        if (subscription.unsubscribe)
            subscription.unsubscribe();
    }
    /*
    request() {
        return channel.request({topic: arguments[0], data: Array.prototype.slice.call(arguments, 1)});
    }*/
}