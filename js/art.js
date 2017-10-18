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

$('#clipcover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/clip.PNG\' \/>");
});
$('#cutcover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/cut2.PNG\' \/>");
});
$('#mintcover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/mint.png\' \/>");
});
$('#popcover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/chopo.png\' \/>");
});
$('#poptcover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/tez.png\' \/>");
});
$('#popgcover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/dripopco.png\' \/>");
});
$('#morphcover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/melt.gif\' \/>");
});
$('#glitchcover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/good.png\' \/>");
});
$('#dropcover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/drop.png\' \/>");
});
$('#handcover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/hand2.png\' \/>");
});
$('#skullcover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/skull2.png\' \/>");
});
$('#splcover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/splash.png\' \/>");
});
$('#cocover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/cococo.jpg\' \/>");
});
$('#starcover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/swag.bmp\' \/>");
});
