/**
 * —ервис хранени€ состо€ни€ пользовател€
 */
import {bus} from 'core';
import events from '../events.js';
import topics from '../events.js';

var userInfo = null;
var currentShop = null;

bus.subscribe(events.ACCOUNT.STATED, saveUserProfile);

function saveUserProfile(user) {
    userInfo = user.user ? user.user : null;
    currentShop = user.shopIds ? user.shopIds[0] : null;
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
    getUserName() {
        return userInfo ? userInfo.userName : null;
    },
    getLastName() {
        return userInfo ? userInfo.userLastName : null;
    },
    getUserFullName() {
        return userInfo ? userInfo.userFullName : null;
    }
};

export default appState;


