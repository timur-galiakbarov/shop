import bus from './../core/busModule.js';
import topics from './../topics.js';
import dataContext from './accountDataContext.js';

bus.subscribe(topics.ACCOUNT.IS_AUTH, dataContext.isAuth);