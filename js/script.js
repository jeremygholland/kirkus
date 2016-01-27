$(document).ready(function(){
	$('.horoscope').hide();
	$('.fields').on('submit', function(e){
		e.preventDefault();
		var date = $('#day').val();
		var month = $('#month').val();
		var year = $('#year').val();
		if(date > 31){
			alert("please enter a correct date number (01-31)");
			date = false;
		}
		if(month> 12){
			month = false;
			alert("please enter a correct month (01-12)");
		}
		if(month && date){
		var birthday = (month + '/'+ date +'/'+year);
		$('.chatContain').append('<div class = "user"> <p> You said that your birthday was ' + birthday + '. Would you like to know your horoscope?</p> </div>');
		$('.birthday-form').hide();
		$('.horoscope').show();
		}

	})
})