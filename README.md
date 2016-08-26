# hexo-helper-effective-posts

## Install
```
npm install hexo-helper-effective-posts --save
```


## Usage
### Related Posts
Add `<%- effe_related_posts([options]) %>` in template file for article.

#### Options
|option|default|detail|
|---|---|---|
|maxCount|5||
|ulClass|'related-posts'||
|liClass|'related-posts-item'||
|thumClass|'related-posts-thum'||
|contentClass|'related-posts-content'||
|orderBy|'date'||
|isAscending|false||
|noResultMeessage|"No result."||
