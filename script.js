$(document).ready(function(){
		$("#submit").click(function(event){
			$.post( "https://75.128.13.118:8082", JSON.stringify({ "msg": $("#textbox").val() }, null, 2), function( data ) {
				$( "#result" ).html( data );
			}, "application/json");
		});
	});