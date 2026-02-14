var posts=["posts/b250e9bb/","posts/d1874913/","posts/e6432aea/","posts/e3c62c27/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };