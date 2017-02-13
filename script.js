$(document).ready(function(){
		$("#submit").click(function(event){
			$.post( "http:// 75.128.13.118:8081", $("#textbox").val(), function( data ) {
				$( "#result" ).html( data );
			});
		});
	});