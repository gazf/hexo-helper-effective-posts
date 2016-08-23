
var helper = hexo.extend.helper;
if (helper.register.length === 1){
  helper.register(require('./lib/main'))
} else {
  helper.register('effective_posts', require('./lib/main'));
  helper.register('effe', require('./lib/main'));
}
