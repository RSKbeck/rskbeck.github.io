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

function hide() {
  $('#fader').animate({opacity:0},1000, function() {
    $('#viewer').html("");
    $('#fader').css('display','none');
  });
}

$(document).ready(function() {
  $("#art").click(function() {
    $("#scroller").load('https://rskbeck.github.io/pages/art.htm'); 
  });

  $("#wbs").click(function() {
    $("#scroller").load('https://rskbeck.github.io/pages/games/wbs.htm'); 
  });

  $('#screen').click(hide);
  $('#closer').click(hide);
});