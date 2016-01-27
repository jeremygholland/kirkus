$(document).ready(function(){
	var sign = {
		taurus:{
		name: "Taurus",
		string: "testing"
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
	document.getElementById('horoscope').style.display = "none";
	document.getElementById("submit").addEventListener("click", function(e){
		e.preventDefault();
		var date = document.getElementById('day').value;
		var month = document.getElementById('month').value;
		var year = document.getElementById('year').value;
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

		document.getElementById('horoscope').style.visibility = "visible";
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
			var x = document.createElement("P");
			x.className = "bot";
			var t = document.createTextNode('You said that your birthday was ' + birthday + '. That means you are a '+ horoscope+'! Would you like to know your horoscope?');
			x.appendChild(t);
			document.getElementById('chatContain').appendChild(x);
		}
		document.getElementById('horoscope').style.display = "block";
		document.getElementById('birthday-form').style.display = "none";

	})

	$('.submitHoro').on('submit', function(e){
			e.preventDefault();
				var answer = document.getElementById('horoAnswer').value;
				if ((answer != "yes") || (answer != "no")){
					$(".horoscop").append("<p> Please type yes or no");
				}
				else{
					if(answer == "yes"){
					if(horoscope = "taurus"){

						$('.chatContain').append("<div class = bot> <p>" +sign.taurus.string + "</p></div>");
						}
				}
				}

			});
})
