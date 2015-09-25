import accountLogic from './bl/account/accountLogic.js';
import shopLogic from './bl/shop/shopLogic.js';

import modules from './ui/module.js';

import dashboardController from './ui/dashboard/controllers/dashboardController.js';

/*UI------------------------------------------------------------------------------------------------------------------*/
import radAmountFilter from './ui/base/radAmountFilter.js';

/*shopController------------------------------------------------------------------------------------------------------*/
import shopController from './ui/shop/controllers/shopController.js';
/*shopDirectives*/
import radCatalogItems from './ui/shop/directives/radCatalogItems/radCatalogItems.js';
import ngThumb from './ui/shop/uploader/radThumb.js';
/*shopServices*/
import shopPopupsFactory from './ui/shop/services/shopPopupsFactory/shopPopupsFactory.js';
/*--------------------------------------------------------------------------------------------------------------------*/

import ordersController from './ui/orders/controllers/ordersController.js';

import settingsController from './ui/settings/controllers/settingsController.js';

import radMenu from './ui/menu/module.js';

import app from './app.js';

import route from './route.js';
import bus from './bl/core/bus.js';