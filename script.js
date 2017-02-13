$(document).ready(function(){
	$("#submit").click(function(event){
		var postData = {msg : $("#textbox").val()};
		$.post("https://75.128.13.118:8082",
       		postData,
       		function(data){
        		$("#result").html(data);
        });
    });
});