System.register({
  transpiler: 'plugin-babel',
  map: {
    // System.js files
    'plugin-babel': '/node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build':
      '/node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

    // App files
    app: '/public/js/app.js',
    myRouter: '/public/js/myRouter.js',
    requester: '/public/js/requester.js',
    data: '/public/js/data.js',
    homeController: '/public/js/controllers/home.js',

    // templates

    // Library files
    jquery: '/node_modules/jquery/dist/jquery.min.js',
  },
});

System.import('/app.js');
