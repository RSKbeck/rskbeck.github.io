$(document).ready(function(){
		$("#submit").click(function(event){
			console.log({msg: "test"});
			console.log(JSON.stringify({msg: "test"}, null, 2));
			$.post( "https://75.128.13.118:8082", { "msg": $("#textbox").val() }, function( data ) {
				$( "#result" ).html( data );
			}, "application/json");
		});
	});