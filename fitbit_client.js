Meteor.loginWithFitbit = function(options, callback) {
  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  Fitbit.requestCredential(options, credentialRequestCompleteCallback);
};