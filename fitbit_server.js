Accounts.oauth.registerService('fitbit');

var autopublishedFields = _.map(
   Fitbit.whitelistedFields.concat(['id', 'displayName']),
  function (subfield) { return 'services.fitbit.' + subfield; });

Accounts.addAutopublishFields({
  forLoggedInUser: autopublishedFields,
  forOtherUsers: autopublishedFields
});