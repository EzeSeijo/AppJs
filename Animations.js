function Animations(){
	
	var avatarBody = document.getElementById("avatarBody");
	var avatarHead = document.getElementById("avatarHead");
	var avatarEyes = document.getElementsByClassName("avatarEyes")[0];
	var avatarWings = document.getElementById("avatarWings");
	
	/*ojos*/
	this.blink = function(){
	
		var interval = setInterval(gestures, 200);/*Animaciones calculadas a partir de este intervalo*/
		var countBlinks = 0; 
		function gestures(){
				
			countBlinks++;
				/*console.log(countBlinks);*/
			/*HEAD*/
			
			
			if(countBlinks == 10){
				avatarHead.style.transform = "rotate(10deg)";						
			}
			if(countBlinks == 15){
				avatarHead.style.transform = "rotate(0deg)";						
			}
				
			/*EYES BLINK*/
			/*(1ºstep)*/
			if(countBlinks == 10){
				avatarEyes.style.backgroundPosition = "-25vw -394vw";	
			}
			if(countBlinks == 11){
				avatarEyes.style.backgroundPosition = "0vw -394vw";	
			}
			if(countBlinks == 12){
				avatarEyes.style.backgroundPosition = "-25vw -394vw";		
			}
			if(countBlinks == 13){
				avatarEyes.style.backgroundPosition = "0vw -394vw";						
			}
			/*(2ºstep)*/
			if(countBlinks == 32){
				avatarEyes.style.backgroundPosition = "-25vw -394vw";		
			}
			if(countBlinks == 33){
				avatarEyes.style.backgroundPosition = "0vw -394vw";	
			}
			if(countBlinks == 34){
				avatarEyes.style.backgroundPosition = "-25vw -394vw";		
			}
			if(countBlinks == 35){
				avatarEyes.style.backgroundPosition = "0vw -394vw";						
			}
				
			/*RESET*/
			if(countBlinks == 50){
				countBlinks = 1;
				/*clearInterval(interval);*//*Detiene la animacion*/
			}
				
		}
		
	}/*blink*/

}