$('#navbar-topCasaFina').on('show.bs.collapse', function() {
	$('.banner_casafina').css('transform', 'translate(-50%, 10%)');
});

$('#navbar-topCasaFina').on('hide.bs.collapse', function() {
	$('.banner_casafina').css('transform', 'translate(-50%, -50%)');
});

