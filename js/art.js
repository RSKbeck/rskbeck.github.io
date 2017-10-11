function show(urrl) {
  $('#fader').css('display','block');
  $('#viewer').css('background-color','#fff');
  $('#viewer').html(urrl);
  $('#fader').animate({opacity:1},1000);
}

function showcol(urrl, col) {
  $('#fader').css('display','block');
  $('#viewer').css('background-color',col);
  $('#viewer').html(urrl);
  $('#fader').animate({opacity:1},1000);
}

$('#morphcover').click(function() {
	showcol("<img src=\'https:\/\/rskbeck.000webhostapp.com\/melt.gif\' \/>", "#333");
});

$('#glitchcover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/2.jpg\' \/>");
});

