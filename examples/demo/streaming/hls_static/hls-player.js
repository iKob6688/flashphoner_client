function initPage() {
    $("#urlServer").val(getHLSUrl());
    var player = videojs('remoteVideo');
    var applyFn = function () {
        var streamName = $("#playStream").val();
        streamName = encodeURIComponent(streamName);
        var src = $("#urlServer").val() + "/" + streamName + "/" + streamName + ".m3u8";
        var token = $("#token").val();
        if (token.length > 0) {
            src += "?token=" +token;
        }
        player.src({
            src: src,
            type: "application/vnd.apple.mpegurl"
        });
        player.play();
    };
    $("#applyBtn").prop('disabled', false).click(applyFn);

}