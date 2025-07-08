$(document).ready(function () {
  let currentAudio = null;

  // JSONファイルからボタンを自動生成
  $.getJSON("voices.json", function (data) {
    data.forEach((voice) => {
      const button = $(`<button class="voice-btn" data-audio="${voice.file}">${voice.label}</button>`);
      $("#button-list").append(button);
    });

    // ボタンが生成された後、イベントを登録
    $("#button-list").on("click", ".voice-btn", function () {
      const audioFile = $(this).data("audio");

      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      currentAudio = new Audio(audioFile);
      currentAudio.play();
    });
  });

  // 「TOPに戻る」ボタンの初期化
  let topButton = $('#scrollTop');    // ボタンの要素を変数topButtonに格納
  topButton.hide();   // hideメソッドでtopButtonを非表示にする

  // スクロール時に「TOPに戻る」ボタンを表示
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        topButton.fadeIn();  // ボタンをフェードインさせる
    } else {
        topButton.fadeOut();  // ボタンをフェードアウトさせる
    }

  // ボタンを下からフェードイン
    $('.fade-in').each(function() {
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var wHeight = $(window).height();
      if (scroll > pos - wHeight + wHeight/100){
        $(this).addClass('inview');
      }
    });
  });
  

  // クリックでページ先頭に戻るボタン
  topButton.click(function (event) {
      event.preventDefault();
      $('body,html').animate({
          scrollTop: 0
      },500);  // 500ミリ秒で先頭までスクロールする
  });
  
});