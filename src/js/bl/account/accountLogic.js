import bus from './../core/busModule.js';
import topics from './../topics.js';
import dataContext from './accountDataContext.js';

bus.subscribe(topics.ACCOUNT.IS_AUTH, dataContext.isAuth);//Возвращает статус авторизации пользователя
bus.subscribe(topics.ACCOUNT.GET_USER_INFO, dataContext.getUserInfo);//Получение данных о пользователе