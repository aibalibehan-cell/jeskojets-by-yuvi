window.lazyMedia=Array.from(document.querySelectorAll("img[data-lazy-load],source[data-lazy-load],img[data-src],source[data-src]"));
function lazyScrollCheck(){
  var items = Array.from(document.querySelectorAll("img[data-lazy-load],source[data-lazy-load],img[data-src],source[data-src]"));
  items.forEach(function(media){
    if(media.dataset.src){
      if(!media.src || media.src === window.location.href){
        media.src = (media.dataset.src || "").trim();
      }
      media.removeAttribute("data-src");
      if(media.tagName === "SOURCE" && media.closest("video")){
        media.closest("video").load();
      }
    }
  });
}
function lazyScroll(){ lazyScrollCheck(); }
window.addEventListener("scroll", lazyScroll, { passive: true });
document.addEventListener("DOMContentLoaded", function(){
  lazyScrollCheck();
  setTimeout(lazyScrollCheck, 200);
  setTimeout(lazyScrollCheck, 1000);
});
lazyScrollCheck();
function reloadLazyLoad(){ lazyScrollCheck(); }
