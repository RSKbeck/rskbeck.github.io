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

$(document).ready(function() {
  $("#art").click(function() {
    $("#scroller").load('https://rskbeck.github.io/pages/art.htm');
    $('#scroller').scrollTop(0); 
  });

  $("#gme").click(function() {
    $("#scroller").load('https://rskbeck.github.io/pages/games.htm');
    $('#scroller').scrollTop(0);
  });

  $("#pro").click(function() {
    $("#scroller").load('https://rskbeck.github.io/pages/proj.htm');
    $('#scroller').scrollTop(0);
  });

  $("#hme").click(function() {
  	$("#scroller").load('https://rskbeck.github.io/pages/bio.htm');
    $('#scroller').scrollTop(0);
  });

  $('#screen').click(hide);
  $('#closer').click(hide);
});