import 'jquery';

import { MyRouter } from 'myRouter';
import { homeController } from 'homeController';
import { myCookieController } from 'myCookieController';

const router = new MyRouter();

router
  .on('', () => (location.hash = '#/home'))
  .on('/', () => (location.hash = '#/home'))
  .on('/home', homeController)
  .on('/home/:category', homeController)
  .on('/my-cookie', myCookieController);

$(window).on('load', () => router.navigate());
$(window).on('hashchange', () => router.navigate());
