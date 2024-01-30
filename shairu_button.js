function audio() {
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio').play(); //クリックしたら音を再生
}

function reset(){

}
function ring1(){  document.getElementById('a').currentTime = 0; document.getElementById('a').play(); }
function ring2(){  document.getElementById('b').currentTime = 0; document.getElementById('b').play(); }
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