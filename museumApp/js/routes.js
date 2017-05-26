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

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
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

  .state('bingoGameSlider', {
    url: '/page15',
    templateUrl: 'templates/bingoGameSlider.html',
    controller: 'bingoGameSliderCtrl'
  })

  .state('bingoGameSliderChecked', {
    url: '/page23',
    templateUrl: 'templates/bingoGameSliderChecked.html',
    controller: 'bingoGameSliderCheckedCtrl'
  })

  .state('login', {
    url: '/page17',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('barcodeScanner', {
    url: '/page18',
    templateUrl: 'templates/barcodeScanner.html',
    controller: 'barcodeScannerCtrl'
  })

  .state('positiveFeedback', {
    url: '/page21',
    templateUrl: 'templates/positiveFeedback.html',
    controller: 'positiveFeedbackCtrl'
  })

  .state('negativeFeedback', {
    url: '/page19',
    templateUrl: 'templates/negativeFeedback.html',
    controller: 'negativeFeedbackCtrl'
  })

  .state('end', {
    url: '/page22',
    templateUrl: 'templates/end.html',
    controller: 'endCtrl'
  })

$urlRouterProvider.otherwise('/page7')


});