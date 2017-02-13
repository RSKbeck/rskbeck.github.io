$(document).ready(function(){
		$("#submit").click(function(event){  
			$.post( "https://75.128.13.118:8082", { "msg": $("#textbox").val() }, function( data ) {
				$( "#result" ).html( data );
			}, "json");
		});
	});