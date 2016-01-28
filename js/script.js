var horoscope;
var birthday;
document.getElementById('horoscope').style.display = "none";
document.getElementById('birthday-form').style.display = "none";
document.getElementById('botMsg').style.visibility = "hidden";


//an object containing objects for each zodiological sign
var sign = {
    taurus: {
        name: "Taurus",
        string: "The inexplicably tense or awkward communication you recently had with a co-worker will suddenly make sense today when you learn something new about them. This new information will lift a weight off your shoulders and help you stop worrying about what they think of you. You're getting a fuller picture of this person -- and your role in their life. Look for things to loosen up between you two and even for some silliness to emerge! There's a great sense of humor under their seriousness."
    },
    gemini: {
        name: "Gemini",
        string: "One of your friends has suddenly gone missing, socially speaking. Your calls aren't getting answered, and your texts aren't getting replies. What gives? They might have some new things going on in their life. Maybe they are simply too busy to get back to you. Don't take it personally. And if they're hanging out with a new friend, don't feel threatened by it. You've got to curb any possessive impulses and know that there is plenty of room in their life for the both of you."
    },
    cancer: {
        name: "Cancer",
        string: "Relationships of all kinds should be thriving at this time, Cancer. Mind and emotions join together in a beneficial partnership, enabling you to increase your understanding of those close to you. Romantic involvements strengthen in particular, as an understanding of your partner's values, attitudes, and motivations becomes clearer to you. Make your new insights known to everyone around you, preferably in a subtle rather than verbal way. The latter might sound patronizing."
    },
    leo: {
        name: "Leo",
        string: "A compromise you made a few days ago is starting to bug you -- you may be feeling like you were manipulated. Coming to the realization that you were controlled by someone else is not a good feeling, but before you confront them about it, ask someone for advice. Tell them the story and see what they say. Make sure you are as objective as you can be, and don't lead them to any conclusions. You're extra-sensitive lately, and you might be jumping to the wrong conclusion."
    },
    virgo: {
        name: "Virgo",
        string: "One of your friends needs your help -- but they're too shy to ask you for it. So if you notice one of your friends acting oddly or stuck in a blue funk, reach out to them. Let them know that they can rely on you for support. And if they don't immediately take you up on your offer to talk, don't take it personally. Maybe you're just not the right person for the job, maybe they're not ready to talk about it with anyone. What matters most is that you offered to help them."
    },
    libra: {
        name: "Libra",
        string: "You're wise to avoid the people who are bragging today -- not only do they have nothing to brag about, but people who exaggerate their worth do so because they're really pretty uninteresting. So skip the big talkers. Don't get upset if they aren't noticing you. Why would you want attention from someone who is so shallow and powerless? Stick with the people you already know and love. Now is the time to cherish the people you have in your life."
    },
    sagittarius: {
        name: "Sagittarius",
        string: "Your conversations can reveal major things today, but only if you go about them in the right way. Be more questioning when you're talking to the people who have the answers. Ask probing questions and do not shy away from having a heated debate. Sometimes people withhold information simply because they don't know that anyone wants it. Your curiosity will help you uncover new facts and you'll even get someone to spill a juicy secret they've been holding on to for quite a while!"
    },
    capricorn: {
        name: "Capricorn",
        string: "Today you will need to deal with a relationship issue as early as you can -- but luckily, it will end up being pretty much a non-issue as soon as you two start talking. You are both good at communicating what you need, and even better at listening to what the other person has to say. Together, you can come up with the solution in no time -- and be able to start having fun much sooner than you had hoped! The best plan is a low-key one. A nice early dinner and lots of talk is the perfect idea."
    },
    aquarius: {
        name: "aquarius",
        string: "Today, you may suddenly sense a disturbance in the room -- someone has just said something controversial, and all eyes are on them. Instead of joining in on the recriminations, just do your own thing. Ignore the growing dramas around you and quietly move along according to your own agenda. Adding your voice to the mix will only add fuel to the fire. Folks have been waiting for an excuse to get angry, but you shouldn't be a part of it. Try not to let their antics distract you."
    },
    pisces: {
        name: "Pisces",
        string: "After a little bit of a rocky period, the balance of power between you and a romantic or professional partner is healthy again. Each of you is performing your half of the duties well, so this is a time of great stability for you two. As a strong team, you can begin to explore new territory together. It is time to have that discussion you've been putting off. Find out if what they want for the future is the same as what you want, then take it from there."
    }
};


// used to append user's chat later in program
var approval = function() {
    var x = document.createElement("P");
    x.className = "user"
    var t = document.createTextNode("yes");
    x.appendChild(t);
    document.getElementById('chatContain').appendChild(x);
}
var negative = function() {
    var x = document.createElement("P");
    x.className = "user"
    var t = document.createTextNode("no");
    x.appendChild(t);
    document.getElementById('chatContain').appendChild(x);
}

document.getElementById("beginProgram").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById('beginProgram').className = "";
    document.getElementById('birthday-form').style.display = "block";
    document.getElementById('fakeForm').style.display = "none";
    document.getElementById('botMsg').style.visibility = "visible";
    document.getElementById('beginProgram').style.color = "black";

<<<<<<< HEAD
	document.getElementById("submit").addEventListener("click", function(e){
		e.preventDefault();
		var date = document.getElementById('day').value;
		var month = document.getElementById('month').value;
		var year = document.getElementById('year').value;
		console.log(month.length)
		if(date > 31) {
			alert("please enter a correct date number (01-31)");
			date = false;
			document.getElementById('horoscope').style.display = "none";
			document.getElementById('birthday-form').style.display = "block";
		}
		else if( (month > 12) || (month.length<2) ){
			month = false;
			alert("please enter a correct month (01-12)");
			document.getElementById('horoscope').style.display = "none";
			document.getElementById('birthday-form').style.display = "block";
		}

	else{
		document.getElementById('horoscope').style.display = "block";
		document.getElementById('birthday-form').style.display = "none";
		var birthday = (month + '/'+ date +'/'+year);
=======
})
>>>>>>> 057ba5e6785416abe3c83109c2dc26c1af019d64

document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault();
    var date = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    console.log(month.length)
    if (date > 31) {
        alert("please enter a correct date number (01-31)");
        date = false;
        document.getElementById('horoscope').style.display = "none";
        document.getElementById('birthday-form').style.display = "block";
    } else if ((month > 12) || (month.length < 2)) {
        month = false;
        alert("please enter a correct month (01-12)");
        document.getElementById('horoscope').style.display = "none";
        document.getElementById('birthday-form').style.display = "block";
    } else {
        document.getElementById('horoscope').style.display = "block";
        document.getElementById('birthday-form').style.display = "none";
        var birthday = (month + '/' + date + '/' + year);

        //used to post user's birthday in user's chat box
        var x = document.createElement("P");
        x.className = "user";
        var t = document.createTextNode(birthday);
        x.appendChild(t);
        document.getElementById('chatContain').appendChild(x);


<<<<<<< HEAD
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

		console.log(horoscope);
		document.getElementById("submitHoro").addEventListener("click", function(e){
				e.preventDefault();
				console.log(horoscope);
					var answer = document.getElementById('horoAnswer').value;
					if ((answer == "yes") || (answer == "no")){
						if(answer == "yes"){
							approval();
					document.getElementById('horoAnswer').value = "";
						if(horoscope == "Taurus"){
							var x = document.createElement("P");
							x.className = "bot"
							var t = document.createTextNode(sign.taurus.string);
							x.appendChild(t);
							document.getElementById('chatContain').appendChild(x);
							}
						else if(horoscope == "Gemini"){
							var x = document.createElement("P");
							x.className = "bot"
							var t = document.createTextNode(sign.gemini.string);
							x.appendChild(t);
							document.getElementById('chatContain').appendChild(x);
						}
						else if(horoscope == "Cancer"){
							var x = document.createElement("P");
							x.className = "bot"
							var t = document.createTextNode(sign.cancer.string);
							x.appendChild(t);
							document.getElementById('chatContain').appendChild(x);
						}
						else if(horoscope == "Leo"){
							var x = document.createElement("P");
							x.className = "bot"
							var t = document.createTextNode(sign.leo.string);
							x.appendChild(t);
							document.getElementById('chatContain').appendChild(x);
						}
						else if(horoscope == "Virgo"){
							var x = document.createElement("P");
							x.className = "bot"
							var t = document.createTextNode(sign.virgo.string);
							x.appendChild(t);
							document.getElementById('chatContain').appendChild(x);
						}
						else if(horoscope == "Libra"){
							var x = document.createElement("P");
							x.className = "bot"
							var t = document.createTextNode(sign.libra.string);
							x.appendChild(t);
							document.getElementById('chatContain').appendChild(x);
						}
						else if(horoscope == "Sagittarius"){
							var x = document.createElement("P");
							x.className = "bot"
							var t = document.createTextNode(sign.sagittarius.string);
							x.appendChild(t);
							document.getElementById('chatContain').appendChild(x);
						}
						else if(horoscope == "Capricorn"){
							var x = document.createElement("P");
							x.className = "bot"
							var t = document.createTextNode(sign.capricorn.string);
							x.appendChild(t);
							document.getElementById('chatContain').appendChild(x);
						}
						else if(horoscope == "Aquarius"){
							var x = document.createElement("P");
							x.className = "bot"
							var t = document.createTextNode(sign.aquarius.string);
							x.appendChild(t);
							document.getElementById('chatContain').appendChild(x);
						}
						else if(horoscope == "Pisces"){
							var x = document.createElement("P");
							x.className = "bot"
							var t = document.createTextNode(sign.pisces.string);
							x.appendChild(t);
							document.getElementById('chatContain').appendChild(x);
						}
					}
					else{
						var x = document.createElement("P");
						x.className = "bot"
						var t = document.createTextNode("Well then, live in mystery! Goodbye!");
						x.appendChild(t);
						document.getElementById('chatContain').appendChild(x);
					}
			}
					else{
							alert("please type 'Yes' or 'No'");
										}
=======
>>>>>>> 057ba5e6785416abe3c83109c2dc26c1af019d64

        if (((month == 4) && (date >= 23)) || ((month == 5) && (date <= 22))) {
            var horoscope = sign.taurus.name;
        } else if (((month == 5) && (date >= 23)) || ((month == 6) && (date <= 22))) {
            var horoscope = sign.gemini.name;
        } else if (((month == 6) && (date >= 23)) || ((month == 7) && (date <= 22))) {
            var horoscope = sign.cancer.name;
        } else if (((month == 7) && (date >= 23)) || ((month == 8) && (date <= 22))) {
            var horoscope = sign.leo.name;
        } else if (((month == 8) && (date >= 23)) || ((month == 9) && (date <= 22))) {
            var horoscope = sign.virgo.name;
        } else if (((month == 9) && (date >= 23)) || ((month == 10) && (date <= 22))) {
            var horoscope = sign.libra.name;
        } else if (((month == 10) && (date >= 23)) || ((month == 11) && (date <= 22))) {
            var horoscope = sign.sagittarius.name;
        } else if (((month == 12) && (date >= 23)) || ((month == 1) && (date <= 22))) {
            var horoscope = sign.capricorn.name;
        } else if (((month == 1) && (date >= 23)) || ((month == 2) && (date <= 22))) {
            var horoscope = sign.aquarius.name;
        } else {
            var horoscope = sign.pisces.name;
        }
        var x = document.createElement("P");
        x.className = "bot";
        var t = document.createTextNode('You said that your birthday was ' + birthday + '. That means you are a ' + horoscope + '! Would you like to know your horoscope?');
        x.appendChild(t);
        document.getElementById('chatContain').appendChild(x);
    }

    console.log(horoscope);
    document.getElementById("submitHoro").addEventListener("click", function(e) {
        e.preventDefault();
        console.log(horoscope);
        var answer = document.getElementById('horoAnswer').value;
        if ((answer == "yes") || (answer == "no")) {
            if (answer == "yes") {
                approval();

                function stopScroll() {
                    clearTimeout(scrolldelay);
                }
                document.getElementById('horoAnswer').value = "";
                if (horoscope == "Taurus") {
                    var x = document.createElement("P");
                    x.className = "bot"
                    var t = document.createTextNode(sign.taurus.string);
                    x.appendChild(t);
                    document.getElementById('chatContain').appendChild(x);
                } else if (horoscope == "Gemini") {
                    var x = document.createElement("P");
                    x.className = "bot"
                    var t = document.createTextNode(sign.gemini.string);
                    x.appendChild(t);
                    document.getElementById('chatContain').appendChild(x);
                } else if (horoscope == "Cancer") {
                    var x = document.createElement("P");
                    x.className = "bot"
                    var t = document.createTextNode(sign.cancer.string);
                    x.appendChild(t);
                    document.getElementById('chatContain').appendChild(x);
                } else if (horoscope == "Leo") {
                    var x = document.createElement("P");
                    x.className = "bot"
                    var t = document.createTextNode(sign.leo.string);
                    x.appendChild(t);
                    document.getElementById('chatContain').appendChild(x);
                } else if (horoscope == "Virgo") {
                    var x = document.createElement("P");
                    x.className = "bot"
                    var t = document.createTextNode(sign.virgo.string);
                    x.appendChild(t);
                    document.getElementById('chatContain').appendChild(x);
                } else if (horoscope == "Libra") {
                    var x = document.createElement("P");
                    x.className = "bot"
                    var t = document.createTextNode(sign.libra.string);
                    x.appendChild(t);
                    document.getElementById('chatContain').appendChild(x);
                } else if (horoscope == "Sagittarius") {
                    var x = document.createElement("P");
                    x.className = "bot"
                    var t = document.createTextNode(sign.sagittarius.string);
                    x.appendChild(t);
                    document.getElementById('chatContain').appendChild(x);
                } else if (horoscope == "Capricorn") {
                    var x = document.createElement("P");
                    x.className = "bot"
                    var t = document.createTextNode(sign.capricorn.string);
                    x.appendChild(t);
                    document.getElementById('chatContain').appendChild(x);
                } else if (horoscope == "Aquarius") {
                    var x = document.createElement("P");
                    x.className = "bot"
                    var t = document.createTextNode(sign.aquarius.string);
                    x.appendChild(t);
                    document.getElementById('chatContain').appendChild(x);
                } else if (horoscope == "Pisces") {
                    var x = document.createElement("P");
                    x.className = "bot"
                    var t = document.createTextNode(sign.pisces.string);
                    x.appendChild(t);
                    document.getElementById('chatContain').appendChild(x);
                }
            } else {
                negative();
                document.getElementById('horoAnswer').value = "";
                var x = document.createElement("P");
                x.className = "bot"
                var t = document.createTextNode("Well then, live in mystery! Goodbye!");
                x.appendChild(t);
                document.getElementById('chatContain').appendChild(x);
            }
        } else {
            alert("please type 'Yes' or 'No'");
        }

    });
})
