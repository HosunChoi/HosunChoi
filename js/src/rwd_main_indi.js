// js / src/ rwd_main_indi.js

(function($){

// jQuery
var viewBox = $('#viewBox');
var indicator = $('.indicator');

var indiUl = indicator.find('ul');
var indiLi = indiUl.find('li');
var indiLink = indiLi.find('a');

var viewArea = viewBox.find('.view_area');
var viewGround = viewArea.find('.view_g');
var viewInner = viewGround.find('.view_inner');
var viewLi = viewInner.find('li');

var indiLiLen = indiLi.length;
var timed = 500;
var n = 0;
// ==========================

var cloneLi = viewLi.eq(-1).clone();
viewInner.prepend(cloneLi);
var newViewLi = viewInner.find('li');
var newLen = newViewLi.length;
viewInner.css({width: 100 * newLen +'%', left: -100 + '%'});
newViewLi.css({width: (100 / newLen) + '%'});

// =========================
var slideMoveFn = function(n, interval){
if( n <= 0 && interval){
  viewInner.css({marginLeft:100+'%'});
}
  viewInner.stop().animate({marginLeft: -(100*n) + '%'},timed);
  indiLi.eq(n).addClass('act');
  indiLi.eq(n).siblings().removeClass('act');
};

indiLink.on('click',function(e){
  e.preventDefault();
  n = $(this).parent().index();
  slideMoveFn(n, false);
});
// =========================
var autoMoveFn;
var slideGoFn = function(){
  autoMoveFn = setInterval(function(){
    n += 1;
    if(n >= indiLiLen){n = 0;}
    slideMoveFn(n, true);
  },timed*3);  
 
};

var slideStopFn = function(){
  clearInterval(autoMoveFn);
};

slideGoFn();

viewArea.on({
  'mouseenter' : slideStopFn,
  'mouseleave' : slideGoFn
});

// viewArea.on('mouseenter', function(){
//     clearInterval(autoMoveFn);
//   });
// viewArea.on('mouseleave', function(){
//   slideGoFn();
//   });


})(jQuery);