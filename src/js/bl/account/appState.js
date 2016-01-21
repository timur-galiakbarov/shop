/**
 * Сервис хранения состояния пользователя
 */
import {bus} from 'core';
import events from '../events.js';
import topics from '../events.js';

var userInfo = null;
var currentShop = null;

bus.subscribe(events.ACCOUNT.STATED, saveUserProfile);
bus.subscribe(events.ACCOUNT.VK.AUTH, saveVkAuthInfo);

function saveUserProfile(user) {
    userInfo = user.user ? user.user : null;
    currentShop = user.shopIds ? user.shopIds[0] : null;
}

function saveVkAuthInfo(vkInfo) {
    userInfo.vkInfo =  vkInfo || {};
    bus.publish(events.ACCOUNT.VK.INFO_READY);
}

var appState = {
    getUserId() {
        return userInfo ? userInfo.id : null;
    },
    getUserShopList() {
        return userInfo ? userInfo.shopIds : null;
    },
    getCurrentShopId() {
        return currentShop.id ? currentShop.id : null;
    },
    getCurrentShopName() {
        return currentShop.name ? currentShop.name : null;
    },
    getEmail() {
        return userInfo ? userInfo.email : null;
    },
    getUserName() {
        return userInfo ? userInfo.userName : null;
    },
    getLastName() {
        return userInfo ? userInfo.userLastName : null;
    },
    getUserFullName() {
        return userInfo ? userInfo.userFullName : null;
    },
    socAuthInfo: {
        getVk: function(){
            return userInfo.vkInfo || {};
        }
    }
};

export default appState;


