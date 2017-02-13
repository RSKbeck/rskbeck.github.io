$(document).ready(function(){
		$("#submit").click(function(event){
			$.post( "https://75.128.13.118:8082", $("#textbox").val(), function( data ) {
				$( "#result" ).html( data );
			});
		});
	});