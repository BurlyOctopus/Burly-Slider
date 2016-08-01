$.fn.burlySlide = function( options ) {
    var settings = $.extend({
      // These are the defaults.
      fade_content: true,
      vertical_scroll: false,
      dev_mode: false
    }, options );

    var slider = $(this),
        sliderLength = $(this).children().length,
        sliderIndexed = sliderLength - 1;
    if(settings.dev_mode === true){
      console.log('%c%s','font-size: 18px;','Burly Slider Loaded');
      console.log('Number Of Items: '+ sliderLength + '\nSlider Length Indexed: ' + sliderIndexed);
    }
      slider.addClass('burlySlider');
      $( 'img',slider).wrapAll( '<div class="burlyTrack"/>');
      slider.append('<div class="cycleBtn next" />');
      slider.append('<div class="cycleBtn prev" />');
      var sliderTrack = $('.burlyTrack'),
          imageWidth = $('.burlyTrack:first-child img', slider).width(),
          imageHeight = $('.burlyTrack:first-child img', slider).height();
      $('.burlyTrack img:first-child').addClass('active');
      slider.width(imageWidth).height(imageHeight);
      if(settings.dev_mode === true){
        console.log('%c%s','font-size: 18px;','\nSlider Initalized');
        console.log('Track Width: ' + imageWidth + '\nTrack Height: ' + imageHeight);
      }
      if(settings.vertical_scroll === true){
        sliderTrack.addClass('vertical');
      } else{
        sliderTrack.addClass('horizontal');
        sliderTrack.width(sliderLength * imageWidth);
      }
      $('.cycleBtn').click(function(){
          var currentIndex = $('.active', sliderTrack).index();
          $('.active', sliderTrack).removeClass('active');
          if($(this).hasClass('next')){
            if(currentIndex === sliderIndexed){
              currentIndex = 0;
            } else{
              currentIndex = currentIndex + 1;
            }
          } else{
            if(currentIndex === 0){
              currentIndex = sliderIndexed;
            } else{
              currentIndex = currentIndex - 1;
            }
          }
          $('img',sliderTrack).eq(currentIndex).addClass('active');
          if(settings.vertical_scroll === true){
            sliderTrack.css({'transform':'translatey(-' + (imageHeight * currentIndex) + 'px)'});
          } else{
            sliderTrack.css({'transform':'translatex(-' + (imageWidth * currentIndex) + 'px)'});
          }
      });

   return this;
}
