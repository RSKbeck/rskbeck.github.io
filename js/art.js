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
	showcol("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/clip.PNG\' \/>", "#000");
});
$('#cutcover').click(function() {
	showcol("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/cut2.PNG\' \/>", "#000");
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
	showcol("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/dripopco.png\' \/>", "#EFE4D4");
});
$('#morphcover').click(function() {
	showcol("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/melt.gif\' \/>", "#333");
});
$('#glitchcover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/good.png\' \/>");
});
$('#dropcover').click(function() {
	showcol("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/drop.png\' \/>", "#000");
});
$('#handcover').click(function() {
	showcol("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/hand2.png\' \/>", "#000");
});
$('#skullcover').click(function() {
	showcol("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/skull2.png\' \/>", "#000");
});
$('#splcover').click(function() {
	showcol("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/splash.png\' \/>", "#000");
});
$('#cocover').click(function() {
	showcol("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/cococo.jpg\' \/>", "#001854");
});
$('#starcover').click(function() {
	show("<img src=\'https:\/\/rskbeck.github.io\/img\/art\/swag.bmp\' \/>");
});
