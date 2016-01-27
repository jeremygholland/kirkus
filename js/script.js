$(document).ready(function(){
	var horoscope;
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

		$('.birthday-form').hide();
		$('.horoscope').show();
			if( ((month == 4) && (date >= 21)) || ((month==5)&&(date<=20))){
				var horoscope = "Taurus";
			}
			else if(((month == 5) && (date >= 21)) || ((month==6)&&(date<=20))){
				var horoscope = "Gemini";
			}
			else if (((month == 6) && (date >= 21)) || ((month==7)&&(date<=20))){
				var horoscope = "Cancer";
			}
			else if (((month == 7) && (date >= 21)) || ((month==8)&&(date<=20))){
				var horoscope = "Leo";
			}
			else if (((month == 8) && (date >= 21)) || ((month==9)&&(date<=20))){
				var horoscope = "Virgo";
			}
			else if (((month == 9) && (date >= 21)) || ((month==10)&&(date<=20))){
				var horoscope = "Libra";
			}
			else if (((month == 10) && (date >= 21)) || ((month==11)&&(date<=20))){
				var horoscope = "Sagittarius";
			}
			else if (((month == 12) && (date >= 21)) || ((month==1)&&(date<=20))){
				var horoscope = "Capricorn";
			}
			else if (((month == 1) && (date >= 21)) || ((month==2)&&(date<=20))){
				var horoscope = "Aquarius";
			}
			else{
				var horoscope = "Pisces"
			}
			$('.chatContain').append('<div class = "user"> <p> You said that your birthday was ' + birthday + '. That means you are a '+ horoscope+'! Would you like to know your horoscope?</p> </div>');
		}

	})
})
