import bus from './../core/busModule.js';
import topics from './../topics.js';
import dataContext from './shopDataContext.js';

bus.subscribe(topics.SHOP.GET_ITEMS, dataContext.getItems);//Возвращает статус авторизации пользователя