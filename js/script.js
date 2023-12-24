//スムーススクロール
jQuery('a[href^="#"]').on("click", function () {
  var header = jQuery("header").innerHeight();
  var id = jQuery(this).attr("href");
  var position = 0;
  if (id != "#") {
    var position = jQuery(id).offset().top - header;
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    300
  );

  return false;
});

//wow
new WOW().init();

//top-button(スムーススクロール)
jQuery(window).on("scroll", function () {
  if (100 < jQuery(this).scrollTop()) {
    jQuery(".page__top").addClass("is-show");
  } else {
    jQuery(".page__top").removeClass("is-show");
  }
});
jQuery(".page__top").on("click", function () {
  jQuery("html, body").animate({ scrollTop: 0 }, "fast");
});

//モーダル
$(function () {
  $(".js-modal-open").each(function () {
    $(this).on("click", function () {
      var target = $(this).data("target");
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
  });
  $(".js-modal-close").on("click", function () {
    $(".js-modal").fadeOut();
    return false;
  });
  $(".modal__bg").on("click", function (e) {
    e.stopPropagation();
  });
});

// form
let $form = $('#js-form')
$form.submit(function (e) {
  $.ajax({
    url: $form.attr('action'),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        //送信に成功したときの処理 
        $form.slideUp()
        $('#js-success').slideDown()
      },
      200: function () {
        //送信に失敗したときの処理 
        $form.slideUp()
        $('#js-error').slideDown()
      }
    }
  });
  return false;
});

// formの入力確認
let $submit = $('.contact__button.-submit')
$('#js-form input, #js-form textarea').on('change', function () {
  if(
    $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      $('#js-form input[name="entry.1084891860"]').prop('checked') === true
      ){
    //すべて入力された時
    $submit.prop('disabled' , false)
    $submit.addClass('-active')
    $submit.css('background', '#159741');
  } else {
    //すべて入力さていない時
    $submit.prop('disabled' , true)
    $submit.removeClass('-active')
    $submit.css('background', '#bdbdbd');
  }
})

 