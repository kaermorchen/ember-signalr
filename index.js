/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-signalr',

  included: function (app) {
    this._super.included(app);

    app.import({
      development: path.join('node_modules', 'signalr', 'jquery.signalR.js'),
      production:  path.join('node_modules', 'signalr', 'jquery.signalR.min.js'),
    });
  },
};
