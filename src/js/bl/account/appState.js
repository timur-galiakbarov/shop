/**
 * —ервис хранени€ состо€ни€ пользовател€
 */
import {bus} from 'core';
import events from '../events.js';
import topics from '../events.js';

var userInfo = null;
var currentShopId = null;

bus.subscribe(events.ACCOUNT.STATED, saveUserProfile);

function saveUserProfile(user) {
    userInfo = user;
    currentShopId = user.shopIds[0];
}

var appState = {
    getUserId() {
        return userInfo ? userInfo.id : null;
    },
    getUserShopList() {
        return userInfo ? userInfo.shopIds : null;
    },
    getCurrentShop() {
        return currentShopId ? currentShopId : null;
    }
};

export default appState;


