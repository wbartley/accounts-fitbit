Fitbit OAuth for Meteor
===============

accounts-fitbit allows oAuth via the Fitbit API

Latest Version: **0.1.4**

Previous Version: 0.1.3

Works on Meteor 0.6.5*

*Note:
Fitbit made a recent change to their OAuth1 verification. The packages/oauth1/oauth1_binding.js file (thanks to paulswartz) has been patched, but not released. For now you will need to use meteor --release 0.7.1-rc0 or greater.

## Install

To install in a new project:
```bash
> mrt add accounts-ui
> mrt add accounts-fitbit
```

Then include in your Handlebars template:

```html
{{loginButtons align="right"}}
```

### Credits

Code is based upon the [Meteor's Twitter Auth](https://github.com/meteor/meteor/tree/master/packages/accounts-twitter) package.
