$('#wbscover').click(function() {
	window.location.hash = 'wbs';
	$('#scroller').load('https://rskbeck.github.io/pages/games/wbs.htm');
	$('#scroller').scrollTop(0);
});

$('#wolfcover').click(function() {
	window.location.hash = 'wolf';
	$('#scroller').load('https://rskbeck.github.io/pages/games/wolf.htm');
	$('#scroller').scrollTop(0);
});

$('#canycover').click(function() {
	window.location.hash = 'cany';
	$('#scroller').load('https://rskbeck.github.io/pages/games/cany.htm');
	$('#scroller').scrollTop(0);
});

$('#ctfcover').click(function() {
	window.location.hash = 'wip';
	$('#scroller').load('https://rskbeck.github.io/pages/games/wip.htm');
	$('#scroller').scrollTop(0);
});
