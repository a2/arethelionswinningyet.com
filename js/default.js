;(function ($, window, undefined) {
	$.getJSON('http://data.adicu.com/athletics?game_after=1970-01-01%2000%3A00%3A00&api_token=51314d99a237900002959a87&jsonp=?', function(data) {
		$.each(data.data, function(i, e) {
			$('#game, h2')
				.animate({'opacity': 0}, 500)
				.queue(function(n) {
					$('#game').text(e.title);
					$('h2').text(e.win == null ? "IDK!" : e.win ? "YES!" : "NO!");
					n();
				})
				.animate({'opacity': 1}, 500)
				.delay(2000);
		});
	});
})(jQuery, this);
