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
});
