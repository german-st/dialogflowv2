var _ = require('underscore');

var validators = {

    string: function(value) {
    return _.isString(value) && !_.isEmpty(value);
  },

  boolean: function(value) {
    return _.isBoolean(value);
  }

};
module.exports = validators;
