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
    window.location.hash = 'art';
    $("#scroller").load('https://rskbeck.github.io/pages/art.htm');
    $('#scroller').scrollTop(0); 
  });

  $("#gme").click(function() {
    window.location.hash = 'games';
    $("#scroller").load('https://rskbeck.github.io/pages/games.htm');
    $('#scroller').scrollTop(0);
  });

  $("#pro").click(function() {
    window.location.hash = 'proj';
    $("#scroller").load('https://rskbeck.github.io/pages/proj.htm');
    $('#scroller').scrollTop(0);
  });

  $("#hme").click(function() {
    window.location.hash = '';
  	$("#scroller").load('https://rskbeck.github.io/pages/bio.htm');
    $('#scroller').scrollTop(0);
  });

  $('#screen').click(hide);
  $('#closer').click(hide);

  if(window.location.hash) {
      var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
      var games = ["cany", "wbs", "wip", "wolf"];
      var projs = ["cvbrm", "stylo"];
      if ($.inArray(hash.toLowerCase(), games) > -1) {
        hash = 'games/' + hash;
      }
      else if ($.inArray(hash.toLowerCase(), projs) > -1) {
        hash = 'projs/' + hash;
      }
      $("#scroller").load('https://rskbeck.github.io/pages/' + hash + '.htm');
      $('#scroller').scrollTop(0);
  }
});