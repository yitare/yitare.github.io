var posts=["posts/e3c62c27/","posts/b250e9bb/","posts/4a17b156/","posts/e6432aea/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };