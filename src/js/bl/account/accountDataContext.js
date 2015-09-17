import server from 'core';
var serverApi = server.server;
export default {
    isAuth(){
        return serverApi.request({
            url: '/controllers/account/isAuth.php',
            type: 'GET'
        }).then((res)=>{ return res },(err)=>{ return err });
    }
}