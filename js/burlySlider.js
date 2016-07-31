$.fn.burlySlide = function( options ) {
    var settings = $.extend({
      // These are the defaults.
      fade_content: true,
      horizontal_scroll: true,
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
      slider.width(imageWidth).height(imageHeight);
      if(settings.dev_mode === true){
        console.log('%c%s','font-size: 18px;','\nSlider Initalized');
        console.log('Track Width: ' + imageWidth + '\nTrack Height: ' + imageHeight);
      }
      if(settings.horizontal_scroll === true){
        sliderTrack.width(sliderLength * imageWidth);
      }
   return this;
}
