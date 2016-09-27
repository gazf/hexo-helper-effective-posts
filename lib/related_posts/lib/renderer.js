var fs = require('fs');
var path = require('path');
var ejs = require('ejs');

const imgRegex = /\<img(.*)src=\"?([\-_\.\!\~\*\'\(\)a-z0-9\;\/\?\:@&=\+\$\,\%\#]+(jpg|jpeg|gif|png|bmp))/i;
var template = fs.readFileSync(path.resolve(path.join(__dirname, '../template.ejs')), 'utf8');

function render(posts, hexo, options){
  var count = Math.min(options.maxCount, posts.length);
  
  for (var i = 0; i < count; i++){
    if(posts[i].thumbnails){
      posts[i].image = posts[i].thumbnails[0];
    } else {
      var image = imgRegex.exec(posts[i].content);
      if(image){
        posts[i].image = image[2];
      } else {
        posts[i].image = null;
      }      
    }
  }

  return ejs.render(template, {
    root: hexo.config.root,
    options: options,
    posts: posts
  });
}

module.exports.run = render;
