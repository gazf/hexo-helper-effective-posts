
var helper = hexo.extend.helper;
if (helper.register.length === 1){
  helper.register(require('./lib/'))
} else {
  helper.register('effective_posts', require('./lib/'));
  helper.register('effe', require('./lib/'));
}
