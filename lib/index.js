
module.exports.related_posts = function(options)){
  var this = hexo;
  var module = require('./related_posts/');
  return module.exec(hexo, options);
};
