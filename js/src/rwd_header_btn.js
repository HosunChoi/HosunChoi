//

(function($){
// console.log('?');
//jQuery
var window = $(window);
var winW = window.outerWidth();
var gnb = $('#gnb');
var gnbBtn = gnb.find('.gnb_btn');
var gnbList = gnb.find('.gnb_area');

// if(winW < 1280){
  // var headBtn = $('.head_btn');
  // var gnbBtn = headBtn.find('.open_btn');
  gnbBtn.on('click', function(e){
    e.preventDefault();
    // console.log('!!!!!');
    gnbList.toggle();
  });
// }


})(jQuery);