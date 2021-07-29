// js/ src / rwd_layout_001.js
/*
해야할 것
1 li 만들기
2. li 많이 
3. li안에 코드 넣기
4. 함수 처리..?(...?멀 해야하지? )
5. 버튼 처리...는 ㄴㅏ중에 아니다 일단 ..  내용 각각 ㄸㅏ로 넣어주기
*/
var cardListData = [
  {
    vinylBg : '../img/vinyl_img/vinyl_001.jpg',
    vinylp : 'cigarettes after sex - cigarettes after sex[LP]',
    vinylspan1 : '41,900',
    vinylspan2 : '40,000'
  },
  {
    vinylBg : '../img/vinyl_img/vinyl_002.jpg',
    vinylp : 'oasis(오아시스) - (whats the story) morning glory (remastered)(gateflod)(2LP)',
    vinylspan1 : '41,900',
    vinylspan2 : '40,000'
  },
  {
    vinylBg : '../img/vinyl_img/vinyl_003.jpg',
    vinylp : '보헤미안 랩소디 영화음악 (queen - bohemian rhapsody OST vinyl) [2LP]',
    vinylspan1 : '41,900',
    vinylspan2 : '40,000'
  },
  {
    vinylBg : '../img/vinyl_img/vinyl_004.jpg',
    vinylp : 'the beatles(비틀즈) ‎– abbey road anniversary[LP]',
    vinylspan1 : '41,900',
    vinylspan2 : '40,000'
  },
  {
    vinylBg : '../img/vinyl_img/vinyl_005.jpg',
    vinylp : 'the beatles(비틀즈) ‎– 1[LP]',
    vinylspan1 : '41,900',
    vinylspan2 : '40,000'
  },
  {
    vinylBg : '../img/vinyl_img/vinyl_006.jpg',
    vinylp : 'sid vicious(시드 비셔스) - my way[LP]',
    vinylspan1 : '41,900',
    vinylspan2 : '40,000'
  },
  {
    vinylBg : '../img/vinyl_img/vinyl_007.jpg',
    vinylp : 'charlie puth(찰리 푸스) ‎– voicenotes[LP]',
    vinylspan1 : '41,900',
    vinylspan2 : '40,000'
  },
  {
    vinylBg : '../img/vinyl_img/vinyl_008.jpg',
    vinylp : 'michael jackson (마이클 잭슨)- dangerous (picture disc)[LP]',
    vinylspan1 : '41,900',
    vinylspan2 : '40,000'
  },
  {
    vinylBg : '../img/vinyl_img/vinyl_009.jpg',
    vinylp : 'david bowie(데이비드 보위) - the man who sold the world(vinyl 12" picture disc)[LP]',
    vinylspan1 : '41,900',
    vinylspan2 : '40,000'
  },
  {
    vinylBg : '../img/vinyl_img/vinyl_010.jpg',
    vinylp : 'lany(레이니) - malibu nights (LP) ',
    vinylspan1 : '41,900',
    vinylspan2 : '40,000'
  },
  {
    vinylBg : '../img/vinyl_img/vinyl_011.jpg',
    vinylp : 'charlie puth(찰리 푸스) ‎– nine track mind[LP]',
    vinylspan1 : '41,900',
    vinylspan2 : '40,000'
  },
  {
    vinylBg : '../img/vinyl_img/vinyl_012.jpg',
    vinylp : 'ariana grande(아리아나 그란데) - positions[LP]',
    vinylspan1 : '41,900',
    vinylspan2 : '40,000'
  },

];
var vinylBox = document.getElementsByClassName('vinyl_box')[0];
var vinylList = vinylBox.getElementsByClassName('viny_list_area')[0];

// var makeLi = document.createElement('li');
// vinylList.appendChild(makeLi);

var makeLiFn = function(data, i){
  var makeLi = document.createElement('li');
  vinylList.appendChild(makeLi); 
  var liContent = '<div class="li_wrap">\
  <div class="vinyl"><span class="blind">이미지박스</span></div>\
  <div class="vinyl_rarr">\
    <p></p>\
    <span> <del></del> </span>\
    <span></span>\
  </div>\
  <div class="vinyl_btn">\
    <button type="button"> 구매하기 </button>\
    <button type="button"> 장바구니 </button>\
  </div></div>';

  makeLi.innerHTML = liContent;
  // vinylBg : div class= vinyl : 상품 사진 
  // vinylNarr : vinylNarr > p : vinyl 이름
  // vinylspan1 : vinylNarr > p > span > del  가격 1
  // vinylspan2 : vinylNarr > p > span 가격 2 

  // var cardListData = [
  //   {
  //     vinylBg : '../img/vinyl_img/vinyl_001.jpg',
  //     vinylNarr : 'cigarettes after sex - cigarettes after sex[LP]',
  //     vinylspan1 : '41,900',
  //     vinylspan2 : '40,000'
  //   },
// -----------------------------------------------

var vinyl = makeLi.getElementsByClassName('vinyl')[0];
// // background-image:url();  -> backgroundImage = 'url('+ 소스 +')';
vinyl.style.backgroundImage ='url('+ cardListData[i].vinylBg +')';
var vinylNarr = makeLi.getElementsByClassName('vinyl_rarr')[0];
var vinylp = vinylNarr.getElementsByTagName('p')[0];
vinylp.innerText = cardListData[i].vinylp;
var vinylhm1 = vinylNarr.getElementsByTagName('span')[0];
vinylhm1.innerText = cardListData[i].vinylspan1
var vinylhm2 = vinylNarr.getElementsByTagName('span')[1];
vinylhm2.innerText = cardListData[i].vinylspan2
};
//----------------------------

// ---------------------------


// ---------------------
// var imgUrl = '../img/vinyl_img/';

// function SetCardData(url, data){
//   this.vinylBg = url+data.vinylBg ;
//   this.vinylNarr ;
//   this.vinylspan1 ;
//   this.vinylspan2 ;
// }

var i =0;
var cardLen = cardListData.length;
var setCard;
for(; i < cardLen ; i++){
  // setCard =  new SetCardData(cardListData[i]);
  makeLiFn(cardListData, i);
}




