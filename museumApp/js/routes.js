angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('signup2', {
    url: '/page16',
    templateUrl: 'templates/signup2.html',
    controller: 'signup2Ctrl'
  })

  .state('welcomeToTheMuseumApp', {
    url: '/page7',
    templateUrl: 'templates/welcomeToTheMuseumApp.html',
    controller: 'welcomeToTheMuseumAppCtrl'
  })

  .state('chooseActivity', {
    url: '/page8',
    templateUrl: 'templates/chooseActivity.html',
    controller: 'chooseActivityCtrl'
  })

  .state('inWhatMuseumYouAre', {
    url: '/page9',
    templateUrl: 'templates/inWhatMuseumYouAre.html',
    controller: 'inWhatMuseumYouAreCtrl'
  })

  .state('searchMuseum', {
    url: '/page11',
    templateUrl: 'templates/searchMuseum.html',
    controller: 'searchMuseumCtrl'
  })

  .state('searchMuseum2', {
    url: '/page12',
    templateUrl: 'templates/searchMuseum2.html',
    controller: 'searchMuseum2Ctrl'
  })

  .state('searchMuseum3', {
    url: '/page13',
    templateUrl: 'templates/searchMuseum3.html',
    controller: 'searchMuseum3Ctrl'
  })

  .state('selectMuseum', {
    url: '/page10',
    templateUrl: 'templates/selectMuseum.html',
    controller: 'selectMuseumCtrl'
  })

  .state('bingoGame', {
    url: '/page14',
    templateUrl: 'templates/bingoGame.html',
    controller: 'bingoGameCtrl'
  })

  .state('bingoGame2', {
    url: '/page15',
    templateUrl: 'templates/bingoGame2.html',
    controller: 'bingoGame2Ctrl'
  })

  .state('page', {
    url: '/page20',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('login2', {
    url: '/page17',
    templateUrl: 'templates/login2.html',
    controller: 'login2Ctrl'
  })

$urlRouterProvider.otherwise('/page7')

  

});