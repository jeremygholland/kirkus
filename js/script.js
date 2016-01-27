$(document).ready(function(){
	$('#submit').click(function(){
		var date = $('#day').val();
		var month = $('#month').val();
		var year = $('#year').val();
		var birthday = (month + '/'+ date +'/'+year);
		$('.chatContain').append('<div class = "user"> <p>' + birthday + '</p> </div>');
	})
})