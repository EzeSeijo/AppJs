function Animations(){
	
	/*ojos*/
	this.blink = function(){
	
		var interval = setInterval(gestures, 200);/*Animaciones calculadas a partir de este intervalo*/
		var countBlinks = 0; 
		function gestures(){
				
			countBlinks++;
				/*console.log(countBlinks);*/
			/*HEAD*/				
			if(countBlinks == 10){
				this.avatarHead.style.transform = "rotate(10deg)";						
			}
			if(countBlinks == 15){
				this.avatarHead.style.transform = "rotate(0deg)";						
			}
				
			/*EYES BLINK*/
			/*(1ºstep)*/
			/*if(countBlinks == 10){
				this.avatarEyes.setAttribute("id", "avatarEyesClose");	
			}
			if(countBlinks == 11){
				this.avatarEyes.setAttribute("id", "avatarEyesPrimary");	
			}
			if(countBlinks == 12){
				this.avatarEyes.setAttribute("id", "avatarEyesClose");	
			}
			if(countBlinks == 13){
				this.avatarEyes.setAttribute("id", "avatarEyesPrimary");						
			}
			/*(2ºstep)*/
			/*if(countBlinks == 32){
				this.avatarEyes.setAttribute("id", "avatarEyesClose");	
			}
			if(countBlinks == 33){
				this.avatarEyes.setAttribute("id", "avatarEyesPrimary");	
			}
			if(countBlinks == 34){
				this.avatarEyes.setAttribute("id", "avatarEyesClose");	
			}
			if(countBlinks == 35){
				this.avatarEyes.setAttribute("id", "avatarEyesPrimary");						
			}
				
			/*RESET*/
			if(countBlinks == 50){
				countBlinks = 1;
				/*clearInterval(animation);*/
			}
				
		}
		
	}/*blink*/

}