// js / src/ header.js

(function($){

var data = [
  {page:'회사소개',link:"./about.html"},
  {page:'제품소개',link:"./product.html"},
  {page:'제품판매',link:"./notice.html"},
  {page:'게시판',link:"./event.html"},

]  

// 1. gnb 내부에 list를 생성하여서
// 4개 정도의 요소링크를 생성한다.
var gnb = $('#gnb')
gnb.append('<ul class="clearfix"></ul>');
var gnbUl = gnb.find('ul'); 
var linkText = '<li><a heaf="#"></a></li>'
var li;
var i=0;

for(; i<data.length ; i+=1){
  gnbUl.append(linkText);
  li = gnbUl.find('li').eq(i).find('a');
  li.attr({href: data[i].link});
  li.text(data[i].page);
}
li = gnbUl.find('li');
console.log(gnb);

})(jQuery);