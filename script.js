$(function() {
  $('.bl_hamburger').on('click', function() {
    $('.bl_hamburger').toggleClass('is_active');
    $('.bl_headerNav').toggleClass('is_active');
  });
});

//スライドショー
$(function() {
  var count = $('.bl_media_imgList').length;

  var current = 1;

  var next = 2;

  var interval = 3000;

  var duration = 500;

  var timer;

  $('.bl_media_imgList:not(:first-child)').hide();

  timer = setInterval(slideTimer, interval);

  function slideTimer() {

    $('.bl_media_imgList:nth-child(' + current + ')').fadeOut(duration);

    $('.bl_media_imgList:nth-child(' + next + ')').fadeIn(duration);

    current = next;
    //変数currentの新しい値：変数nextの元の値

    next = ++next;
    //変数nextの新しい値:変数currentの新しい値+1

    if (next > count) {
      next = 1;
    }

    $('.bl_media_btnItem').removeClass('target');

    $('.bl_media_btnItem').eq(current-1).addClass('target');
  }

  $('.bl_media_btnItem').click(function() {
    next = $(this).html();

    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    slideTimer();

    return false;

  });
});

//スクロールバー固定
$(function(){
var navPos = $(".bl_header_inner").offset().top;

$(window).scroll(function(){
 if($(window).scrollTop() > navPos){
  $(".bl_header_inner").addClass("is_scroll")
  }else{
  $(".bl_header_inner").removeClass("is_scroll")
  }
 });

});
