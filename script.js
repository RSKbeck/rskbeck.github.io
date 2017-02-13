$(document).ready(function(){
	$("#submit").click(function(event){
		var postData = {msg : $("#textbox").val()};
		$.post("https://pi.rskbeck.com:8082",
       		postData,
       		function(data){
        		$("#result").html(data);
        });
    });
});