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
    }
}