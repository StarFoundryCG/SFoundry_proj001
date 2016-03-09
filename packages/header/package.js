Package.describe({
  name: 'charue808:header',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'a simple header styled with bootstrap',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('templating', 'client');
  api.use('twbs:bootstrap', 'client', {weak: false, unordered: false});
  api.addFiles('lib/client/header.html');
  api.addFiles('lib/client/stylesheets/header-style.css');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('charue808:header');
  api.addFiles('header-tests.js');
});
