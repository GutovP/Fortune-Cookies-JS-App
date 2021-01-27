import * as data from 'data';

const $appContainer = $('#app-container');
function homeController() {
  console.log('here');

  data.getCookies().then((cookies) => {
    $appContainer.html('asdf');
    console.log(cookies);
  });
}

export { homeController };
