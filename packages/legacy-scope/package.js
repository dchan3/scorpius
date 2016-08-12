Package.describe({
  name: 'scorpiusjs:legacy-scope',
  version: '0.1.0',
  summary: 'Handles Legacy Scoping for Scorpius Projects migrating to Scorpius',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');
  api.use('ecmascript');
  api.use('scorpiusjs:core');
  api.mainModule('main.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('scorpiusjs:legacy-scope');
  api.mainModule('main-tests.js');
});