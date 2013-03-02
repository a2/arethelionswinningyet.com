;(function ($, window, undefined) {
	$.getJSON('http://data.adicu.com/athletics?game_after=1970-01-01%2000%3A00%3A00&api_token=51314d99a237900002959a87&jsonp=?', function(data) {
		var now = new Date();
		$.each((function(v) {
		    for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
		    return v;
		})(data.data), function(i, e) {
			$('#game, h2')
				.animate({'opacity': 0}, 500)
				.queue(function(n) {
					$('#game').text(e.title);
					$('h2').text(function() {
						if (new Date(e.time) > now)
							return "TBD!";
						else if (e.win == null)
							return "IDK!";
						else if (e.win)
							return "YES!";
						else
							return "NO!";
					});
					n();
				})
				.animate({'opacity': 1}, 500)
				.delay(2000);
		});
	});
})(jQuery, this);
