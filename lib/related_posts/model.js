
function objectArrayIndexOf(array, propertyName, searchValue) {
  for(var i = 0; i < array.length; i++){
    if (array[i][propertyName] === searchValue) return i;
  }
  return -1;
}

function addCountProperty(array) {
  return array.reduce(function(newArray, item) {
    var i = objectArrayIndexOf(newArray, '_id', item['_id']);
    if(i === -1){
      item.count = 1;
      newArray.push(item);
    }else{
      newArray[i].count = newArray[i].count + 1;
    }
    return newArray;
  }, []);
}

function dynamicSort(property, isAscending) {
  var sortOrder = -1;
  if(isAscending) sortOrder = 1;
  return function (a, b) {
    var result = (a[property] < b[property]) ? -1 :
                 (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  };
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function getSameTaggedPosts(hexo){
  var posts = [];
  hexo.post.tags.each(function(tag){
    tag.posts.each(function(post){
      posts.push(post);
    });
  });
  return posts;
}

function removeCurrentPost(posts, hexo){
  var thisPostPosition = objectArrayIndexOf(posts, '_id', hexo.post._id);
  posts.splice(thisPostPosition, 1);
  return posts;
}

function getPosts(hexo, options){
  var posts;
  posts = getSameTaggedPosts(hexo);
  posts = addCountProperty(posts);
  posts = removeCurrentPost(posts, hexo);
  
  if(options.orderBy === 'random'){
    shuffle(posts);
  }else{
    posts.sort(dynamicSort(options.orderBy, options.isAscending));
  }
  posts.sort(dynamicSort('count', false));
  
  return posts;
}

module.exports.getPosts = getPosts;
