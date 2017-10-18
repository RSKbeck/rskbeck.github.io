function show(urrl) {
  $('#fader').css('display','block');
  $('#viewer').css('background-color','#fff');
  $('#viewer').html("<img class=\'viewimg\' src=\'https:\/\/rskbeck.github.io\/img\/art\/" + urrl + "\' \/>");
  $('#fader').animate({opacity:1},1000);
}

function showcol(urrl, col) {
  $('#fader').css('display','block');
  $('#viewer').css('background-color',col);
  $('#viewer').html("<img class=\'viewimg\' src=\'https:\/\/rskbeck.github.io\/img\/art\/" + urrl + "\' \/>");
  $('#fader').animate({opacity:1},1000);
}

function hide() {
  $('#fader').animate({opacity:0},1000, function() {
    $('#viewer').html("");
    $('#fader').css('display','none');
  });
}

$('#clipcover').click(function() {
	showcol("clip.PNG", "#000");
});
$('#cutcover').click(function() {
	showcol("cut2.PNG", "#000");
});
$('#mintcover').click(function() {
	show("mint.png");
});
$('#popcover').click(function() {
	show("chopo.png");
});
$('#poptcover').click(function() {
	show("tez.png");
});
$('#popgcover').click(function() {
	showcol("dripopco.png", "#EFE4D4");
});
$('#morphcover').click(function() {
	showcol("melt.gif", "#333");
});
$('#glitchcover').click(function() {
	show("good.png");
});
$('#dropcover').click(function() {
	showcol("drop.png", "#000");
});
$('#handcover').click(function() {
	showcol("hand2.png", "#000");
});
$('#skullcover').click(function() {
	showcol("skull2.png", "#000");
});
$('#splcover').click(function() {
	showcol("splash.png", "#000");
});
$('#cocover').click(function() {
	showcol("cococo.jpg", "#001854");
});
$('#starcover').click(function() {
	show("swag.bmp");
});
