import {server} from 'core';

var serverApi = server;
export default {
    getItems(options){
        return serverApi.request({
            url: '/controllers/shop/getList.php',
            type: 'GET',
            data: options.data
        }).then((res)=> {
            return res;
        });
    },
    addItem(options){
        console.log(options);
        return serverApi.request({
            url: '/controllers/shop/addItem.php',
            type: 'POST',
            data: options
        }).then((res)=> {
            return res;
        });
    }
}