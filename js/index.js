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

  $("#gme").click(function() {
    $("#scroller").load('https://rskbeck.github.io/pages/games.htm'); 
  });

  $("#pro").click(function() {
    $("#scroller").load('https://rskbeck.github.io/pages/proj.htm'); 
  });

  $("#hme").click(function() {
  	$("#scroller").load('https://rskbeck.github.io/pages/bio.htm');
  });

  $('#screen').click(hide);
  $('#closer').click(hide);
});