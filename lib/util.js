function extend(base, overide){
  var tmp = {};
  for(var key in base) tmp[key] = base[key];
  for(var key in overide) tmp[key] = overide[key];
  return tmp;
}

module.exports.extend = extend;
