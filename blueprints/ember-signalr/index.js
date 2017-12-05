/* eslint-env node */
'use strict';

module.exports = {
  normalizeEntityName: function () { },

  afterInstall: function () {
    return this.addPackagesToProject([
      { name: 'signalr', target: '^2.2.2' }
    ]);
  }
};
