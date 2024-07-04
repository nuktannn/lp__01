//drawer
jQuery("#js-drawer-icon").on("click", function (e) {
    e.preventDefault();
    jQuery("#js-drawer-icon").toggleClass("is-checked");
    jQuery("#js-drawer-content").toggleClass("is-checked");
  });

  //スムーススクロール
jQuery('a[href^="#"]').on("click", function () {
  var header = jQuery("header").innerHeight();
  var id = jQuery(this).attr("href");
  var position = 0;
  if (id != "#") {
    position = jQuery(id).offset().top; // ここで80pxを追加
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    300
  );
  return false;
});

//ビューポイント
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  if (width < 375) {
    document.body.style.width = "375px";
  } else {
    document.body.style.width = "100%";
  }
});