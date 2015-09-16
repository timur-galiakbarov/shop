import modules from './ui/module.js';

import dashboardController from './ui/dashboard/controllers/dashboardController.js';

/*shopController------------------------------------------------------------------------------------------------------*/
import shopController from './ui/shop/controllers/shopController.js';
/*shopDirectives*/
import radCatalogItems from './ui/shop/directives/radCatalogItems/radCatalogItems.js';
//import radShopPopups from './ui/shop/directives/radShopPopups/radShopPopups.js';
//import radShopPopupsViewsAdd from './ui/shop/directives/radShopPopups/views/radShopPopupsViewsAdd/radShopPopupsViewsAdd.js';
/*shopServices*/
import shopPopupsFactory from './ui/shop/services/shopPopupsFactory/shopPopupsFactory.js';
/*--------------------------------------------------------------------------------------------------------------------*/

import ordersController from './ui/orders/controllers/ordersController.js';

import settingsController from './ui/settings/controllers/settingsController.js';

import radMenu from './ui/menu/module.js';

import app from './app.js';
import route from './route.js';
import bus from './bl/core/bus.js';