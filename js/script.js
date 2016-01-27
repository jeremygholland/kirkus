$(document).ready(function(){
	var sign = {
		taurus:{
		name: "Taurus",
		string: ""
		},
		gemini: {
			name:"Gemini"
		},
		cancer:{
			name: "Cancer",
		},
		leo:{
			name: "Leo"
		},
		virgo:{
			name: "Virgo",
		},
		libra:{
			name: "Libra",
		},
		sagittarius:{
			name: "Sagittarius"
		},
		capricorn:{
			name: "Capricorn",
		},
		aquarius:{
			name: "aquarius"
		},
		pisces:{
			name: "Pisces"
		}
	};

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
				var horoscope = sign.taurus.name;
			}
			else if(((month == 5) && (date >= 21)) || ((month==6)&&(date<=20))){
				var horoscope = sign.gemini.name;
			}
			else if (((month == 6) && (date >= 21)) || ((month==7)&&(date<=20))){
				var horoscope = sign.cancer.name;
			}
			else if (((month == 7) && (date >= 21)) || ((month==8)&&(date<=20))){
				var horoscope = sign.leo.name;
			}
			else if (((month == 8) && (date >= 21)) || ((month==9)&&(date<=20))){
				var horoscope = sign.virgo.name;
			}
			else if (((month == 9) && (date >= 21)) || ((month==10)&&(date<=20))){
				var horoscope = sign.libra.name;
			}
			else if (((month == 10) && (date >= 21)) || ((month==11)&&(date<=20))){
				var horoscope = sign.sagittarius.name;
			}
			else if (((month == 12) && (date >= 21)) || ((month==1)&&(date<=20))){
				var horoscope = sign.capricorn.name;
			}
			else if (((month == 1) && (date >= 21)) || ((month==2)&&(date<=20))){
				var horoscope = sign.aquarius.name;
			}
			else{
				var horoscope = sign.pisces.name;
			}
			$('.chatContain').append('<div class = "user"> <p> You said that your birthday was ' + birthday + '. That means you are a '+ horoscope+'! Would you like to know your horoscope?</p> </div>');
		}

	})

})
