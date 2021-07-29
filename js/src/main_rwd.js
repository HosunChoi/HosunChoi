// js / src / main.js
(function($){

// jQuery
// 1. #headBox 내부에 외부파일 header.html을 불러와서 처리
// 2. .page_content 내부에 외부파일 page_content.html 불러오기 
// 3. #footBox 내부에 외부파일 footer.html 불러오기

var body = $('body');
var headBox = $('#headBox');
// var pageCon = $('.page_content');
var footBox = $('#footBox');

// headBox.load("./common/header.html", function(){
//   body.append('<script src="../js/src/header.js"></script>');
// });

headBox.load("./common/header.html");
// pageCon.load("./main/page_content.html");
footBox.load("./common/footer.html");

// setTimeout(function(){
//   body.append('<script src="../js/src/main_all_effect.js"></script>');
// }, 300);

// 콜백기능이 매우 많아질 수 있다.
// 단점 : 느리다 



})(jQuery);