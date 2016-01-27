$(document).ready(function(){
	$('.fields').on('submit', function(e){
		e.preventDefault();
		var date = $('#day').val();
		var month = $('#month').val();
		var year = $('#year').val();
		var birthday = (month + '/'+ date +'/'+year);
		$('.chatContain').append('<div class = "user"> <p>' + birthday + '</p> </div>');
		$('#day').html('');
	})
})