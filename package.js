Package.describe({
  summary: "Login service for Fitbit accounts"
});

Package.on_use(function(api) {
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('fitbit', ['client', 'server']);

  api.use('http', ['client', 'server']);
  api.use('templating', 'client');

  api.add_files('fitbit_login_button.css', 'client');

  api.add_files('fitbit_common.js', ['client', 'server']);
  api.add_files('fitbit_server.js', 'server');
  api.add_files('fitbit_client.js', 'client');
});
