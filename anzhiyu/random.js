var posts=["posts/e3c62c27/","posts/b250e9bb/","posts/d1874913/","posts/e6432aea/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };