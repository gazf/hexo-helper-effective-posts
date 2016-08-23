
var helper = hexo.extend.helper;
if (helper.register.length === 1){
  helper.register(require('./lib/'))
} else {
  helper.register('effe_related_posts', require('./lib/related_posts/'));
}
