;(function ($, window, undefined) {
	$.getJSON('http://data.adicu.com/athletics?win=true&pretty=true&api_token=51314d99a237900002959a87&jsonp=?', function(data) {
		$.each(data.data, function(i, e) {
			console.log(data);
			$('#st')
			.delay(100)
			.animate({'opacity' : 0}, 100)
			.queue(function(n) {
				$(this).text(e.title);
				if( e.win ) {
				$(this).text($(this).text() + ' YES');
				}
				else {
				$(this).text($(this).text() + ' NO');
				}
			       	n();
			})
			.animate({'opacity' : 1}, 100)
			;
		});
	});
})(jQuery, this);
