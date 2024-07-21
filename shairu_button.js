function audio() {
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio').play(); //クリックしたら音を再生
}

function reset(){

}
function ring1(){  document.getElementById('a').currentTime = 0; document.getElementById('a').play(); }
function ring2(){  document.getElementById('b').currentTime = 0; document.getElementById('b').play(); }
function ring3(){  document.getElementById('c').currentTime = 0; document.getElementById('c').play(); }
function ring4(){  document.getElementById('d').currentTime = 0; document.getElementById('d').play(); }
function ring5(){  document.getElementById('e').currentTime = 0; document.getElementById('e').play(); }
function ring6(){  document.getElementById('f').currentTime = 0; document.getElementById('f').play(); }
function ring7(){  document.getElementById('g').currentTime = 0; document.getElementById('g').play(); }
function ring8(){  document.getElementById('h').currentTime = 0; document.getElementById('h').play(); }
/*
avaScriptJavaScript
(function (window, $) {
  'use strict';
  $.fn.useSound = function (_event, _id) {
    var se = $(_id);
    this.on(_event, function(){
      se[0].currentTime = 0;
      se[0].play();
    });
    return this;
  };
})(this, this.jQuery);
$('.btn a').useSound('mousedown touchstart', '#sound');
*/
