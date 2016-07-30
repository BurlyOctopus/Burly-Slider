$.fn.burlySlide = function( options ) {
    var settings = $.extend({
      // These are the defaults.
      fade_content: true,
      horizontal_scroll: true,
      vertical_scroll: false,
      dev_mode: false
    }, options );

    var sliderLength = $(this).children().length - 1,
        imageWidth =  $('img:first-child', this).width();
    if(settings.dev_mode === true){
      console.log("%c%s","font-size: 18px;","Burly Slider Loaded");
      console.log('Number Of Items: '+ sliderLength + '\nWidth Of Items: ' + imageWidth);
    }
    function textAnimate(){
      $('.sliderText').addClass('load');
      setTimeout(function () {
        $('.sliderText').removeClass('load');
      },400);
    }
    if(settings.fadeContent === true){
      $('.sliderNext').click(function(){
        textAnimate();
      });
    }

    $('.sliderNext').click(function(){
      // textAnimate();
      $('.sliderImageItem.active').removeClass('active');
      if(currentIndex === sliderLength){
       currentIndex = 0
      } else{
       currentIndex = currentIndex + 1;
      }
      console.log(currentIndex);
      $('.sliderImageItem').eq(currentIndex).addClass('active')
      $('.sliderImageItem').css({'transform':'translatex(-' + currentIndex + '00%)'});
    });
    $('.sliderPrevious').click(function(){
      // textAnimate();
      $('.sliderImageItem.active').removeClass('active');
      if(currentIndex === 0){
       currentIndex = sliderLength;
      } else{
       currentIndex = currentIndex - 1;
      }
      console.log(currentIndex);
      $('.sliderImageItem').eq(currentIndex).addClass('active')
      $('.sliderImageItem').css({'transform':'translatex(-' + currentIndex + '00%)'});
    });

   return this;
}

var sliderLength = $('.sliderImageWrapper').children().length - 1,
    currentIndex = $('.sliderImageItem.active').index(),
    imageWidth =  $('.sliderImage:first-child img').width(),
    sliderWidth = imageWidth * (sliderLength + 1);
    $('.sliderImageWrapper').width(sliderWidth);
    $('.sliderImageItem').width(imageWidth).css('float','left');
