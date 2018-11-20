var _ = require('underscore');
var validators = require('./validators');

module.exports = {

  /**
   * @method when
   * If an object is thenable, then return the object itself, otherwise wrap it into a promise
   * @param {any}
   * @deferred
   */
  when: function (param) {
    if (param != null && _.isFunction(param.then)) {
      return param;
      // eslint-disable-next-line no-undefined
    } else if (param !== undefined) {
      return new Promise(function(resolve) {
        resolve(param);
      });
    }
    return new Promise(function(resolve, reject) {
      reject();
    });
  },

  /**
   * @method extractValue
   * Get values from node config or inbound message, node config always comes first
   * @param {String} type Type of value to search for
   * @param {String} name Name of variable (name in config and inbound payload must be the same)
   * @param {Object} node
   * @param {Object} message
   * @param {Boolean} usePayload
   * @return {Any}
   */
  // eslint-disable-next-line max-params
  extractValue: function(type, name, node, message, usePayload) {
    usePayload = _.isBoolean(usePayload) ? usePayload : true;
    var validator = null;
    switch(type) {

      case 'boolean':
        validator = validators.boolean;
        break;
      case 'string':
        validator = validators.string;
        break;
      default:
        // eslint-disable-next-line no-console
        console.log('Unable to find a validator for type \'' + type +'\' in extractValue');
    }

    if (validator(node[name])) {
      return node[name];
    } else if (usePayload && message.payload != null && validator(message.payload)) {
      return message.payload;
    } else if (_.isObject(message.payload) && validator(message.payload[name])) {
      return message.payload[name];
    }
    return null;
  },

  chainExtractors: function() {
  },
};
