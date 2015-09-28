var chartsApp = angular.module('chartsApp',['ui.router','chartsApp.services','chartsApp.filters']);

chartsApp.config(function($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise("/data-explorer");

  $stateProvider.state('stackedState', {
    url: '/stacked',
    templateUrl: 'partials/stacked.html',
    controller: 'StackedCtrl'
  });

  $stateProvider.state('donutState', {
    url: '/donut',
    templateUrl: 'partials/donut.html',
    controller: 'DonutCtrl'
  });

  $stateProvider.state('activityState', {
    url: '/activity',
    templateUrl: 'partials/activity.html',
    controller: 'ActivityCtrl'
  });

  $stateProvider.state('weeklyActivityState', {
    url: '/weekly-activity',
    templateUrl: 'partials/weekly_activity.html',
    controller: 'WeeklyActivityCtrl'
  });

  $stateProvider.state('annualCalendarState', {
    url: '/annual-calendar',
    templateUrl: 'partials/annual_calendar.html',
    controller: 'AnnualCalendarCtrl'
  });

  $stateProvider.state('dataExplorerState', {
    url: '/data-explorer',
    templateUrl: 'partials/data_explorer.html',
    controller: 'DataExplorerCtrl'
  });

  $stateProvider.state('dataExplorerState.table', {
    url: '/table',
    templateUrl: 'partials/data_explorer/table.html',
    controller: 'DataExplorerCtrl'
  });

  $stateProvider.state('dataExplorerState.calendar', {
    url: '/calendar',
    templateUrl: 'partials/data_explorer/calendar.html',
    controller: 'DataExplorerCtrl'
  });

  $stateProvider.state('dataExplorerState.line', {
    url: '/line',
    templateUrl: 'partials/data_explorer/line.html',
    controller: 'DataExplorerCtrl'
  });
});
