var Util = {
  capitalize: function(string) {
    return string.replace(/^./, (c) => c.toUpperCase());
  },

  filterKeys: function(object, filterFn) {
    var newObject = {};
    Object.keys(object).filter(filterFn).forEach(function(k) {
      newObject[k] = object[k];
    });
    return newObject;
  },

  selectKeys: (object, keyList) => Util.filterKeys(object, (k) => keyList.includes(k)),
  rejectKeys: (object, keyList) => Util.filterKeys(object, (k) => !keyList.includes(k)),
};

module.exports = Util;