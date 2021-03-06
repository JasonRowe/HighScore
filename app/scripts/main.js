/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var body = document.body;
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var main = querySelector('main');

  function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
    navdrawerContainer.classList.remove('open');
  }

  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
    navdrawerContainer.classList.add('opened');
  }

  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });

  function MainCtrl($scope) {
    $scope.greeting = 'Hello';
  }

  function notFoundCtrl($scope) {
  }

  angular.module('main', ['ngRoute', 'core', 'admin', 'display', 'highScoreServices'])
    .controller('mainCtrl', MainCtrl)
    .config(function ($routeProvider) {
      $routeProvider.when('/create', {
        templateUrl: '/views/create.html',
        controller: 'createCtrl'
      });
      $routeProvider.when('/modify', {
        templateUrl: '/views/modify.html',
        controller: 'modifyCtrl'
      });
      $routeProvider.when('/display/:listId', {
        templateUrl: '/views/display.html',
        controller: 'displayCtrl'
      });
      $routeProvider.when('/404', {
        templateUrl: '/views/404.html',
        controller: 'notFoundCtrl'
      });
      $routeProvider.otherwise({
        templateUrl: '/views/main.html',
        controller: 'mainCtrl'
      });
    });

})();
