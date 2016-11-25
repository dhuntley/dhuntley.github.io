if (document.documentElement.clientWidth > 800) {
	// Load the IFrame Player API code asynchronously.
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/player_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	// Replace the 'ytplayer' element with an <iframe> and
	// YouTube player after the API code downloads.
	var player;
	function onYouTubePlayerAPIReady() {
		player = new YT.Player('ytplayer', {
			height: '720',
			width: '1280',
			playerVars: {
				autoplay: 1,
				controls: 0,
				disablekb: 1,
				enablejsapi: 1,
				fs: 0,
				iv_load_policy: 3,
				loop: 1,
				modestbranding: 1,
				showinfo: 0
			},
			videoId: '9LssTi4X8jY'
		});
	}
}