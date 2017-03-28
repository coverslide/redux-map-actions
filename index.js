'use strict';

module.exports = function (keys, namespace, delimiter) {
  return keys.reduce(function (obj, key) {
    return Object.assign(obj, { [key]: `${namespace}/${key}` });
  }, {});
};

module.exports.mapActions = module.exports;