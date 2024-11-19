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
    position = jQuery(id).offset().top - 80; // ここで80pxを引く
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

//top-button(スムーススクロール)
jQuery(function () {
  var pagetop = $("#page__top");
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      pagetop.fadeIn(300);
    } else {
      pagetop.fadeOut(300);
    }
  });
  pagetop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});

//フワッと浮かび上がるアニメーション
$(document).ready(function () {
  var $animationElements = $(".fade-in");
  var $window = $(window);

  function checkIfInView() {
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = windowTopPosition + windowHeight;

    $.each($animationElements, function (index, element) {
      var $element = $(element);
      var elementHeight = $element.outerHeight();
      var elementTopPosition = $element.offset().top;
      var elementBottomPosition = elementTopPosition + elementHeight;

      // Check if the element is in view
      if (
        elementBottomPosition >= windowTopPosition &&
        elementTopPosition <= windowBottomPosition
      ) {
        // Add a delay based on the index of the element
        setTimeout(function () {
          $element.addClass("is-visible");
        }, index * 25); // Adjust the delay as needed
      }
    });
  }

  $window.on("scroll resize", checkIfInView);
  $window.trigger("scroll");
});

// form
$(document).ready(function () {
  let $form = $("#js-form");

  $form.submit(function (event) {
    event.preventDefault(); // デフォルトのフォーム送信を無効にする
    var formData = $form.serialize();

    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf_sQ4fYrcQrgVwDOs7VqxGTPWVqUkEeviMfAmJg_iXpvruAw/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          // 送信に成功したときの処理
          $form.slideUp();
          $("#js-success").slideDown();
        },
        200: function () {
          // 送信に失敗したときの処理
          $form.slideUp();
          $("#js-error").slideDown();
        },
      },
    });
  });
});

// formの入力確認
let $submit = $(".contact__footer-submit .-submit");
$("#js-form input, #js-form textarea").on("change", function () {
  if (
    $('#js-form input[type="text"]').val() !== "" &&
    $('#js-form input[type="email"]').val() !== "" &&
    $('#js-form input[name="entry.724652302"]').prop("checked") === true
  ) {
    // すべて入力された時
    $submit.prop("disabled", false);
    $submit.addClass("-active");
    $submit.css("background", "#3EA1D1");
    $submit.css("color", "#fff");
  } else {
    // すべて入力されていない時
    $submit.prop("disabled", true);
    $submit.removeClass("-active");
    $submit.css("background", "#fff");
    $submit.css("color", "#3EA1D1");
  }
});
