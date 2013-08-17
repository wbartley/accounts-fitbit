Accounts.oauth.registerService('fitbit');

if (Meteor.isClient) {
  Meteor.loginWithFitbit = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Fitbit.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {

var autopublishedFields = _.map(
   Fitbit.whitelistedFields.concat(['id', 'displayName']),
  function (subfield) { return 'services.fitbit.' + subfield; });

Accounts.addAutopublishFields({
  forLoggedInUser: autopublishedFields,
  forOtherUsers: autopublishedFields
});
}