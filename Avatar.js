function Avatar(nam, ag, user){
		
	/*Informacion primaria*/
	this.avatarName = nam;
	this.age = ag;
	this.userOwner = user;
	
	/*informacion de estados ( EN PORCENTAJES %)*/
	
	this.healty = 100;
	this.hambre = 50;
	this.bath = 25;
	this.dream = 10;
	this.happyness = 80;
	

	
	/*parts (SIN USAR) => para asignar en ventana de juego, despues de crear*/
	this.avatarStyle = function(){
	
		this.bodyStyle;
		this.headStyle;
		this.eyesStyle;
		this.mouthStyle;
		this.wingsStyle;
		this.hornsStyle;
	
	}

		
	/*Metodos*/
	
	/*crea contenedor con dimensiones del avatar*/
	this.createAvatarSpace = function(){

			this.avatarSpace = document.createElement("div");
			this.avatarSpace.setAttribute("class", "avatarSpace");			
			config.playArea.appendChild(this.avatarSpace);			
			
			/*Ocultar optionsBox*/
			this.avatarSpace.addEventListener("click", function(){
				var optBox = document.getElementsByClassName("optionsBox");
				optBox[0].style.display = "none";
			});
		}
		
	/*crea body del avatar*/
	this.createAvatarBody = function(){
	
			var avatarBody = document.createElement("div");
			avatarBody.setAttribute("id", "avatarBody");			
			this.avatarSpace.appendChild(avatarBody);
		}	
		
	/*crea head del avatar*/
	this.createAvatarHead = function(){
	
			this.avatarHead = document.createElement("div");
			this.avatarHead.setAttribute("id", "avatarHead");
			var pivotPoint = document.createElement("div");
			pivotPoint.setAttribute("class", "pivotPoint");			
			this.avatarSpace.appendChild(this.avatarHead);
			this.avatarHead.appendChild(pivotPoint);			
			
		}	
	
	/*crea eyes del avatar*/
	this.createAvatarEyes = function(){
	
			var avatarEyes = document.createElement("div");
			avatarEyes.setAttribute("class", "avatarEyes");
			avatarEyes.setAttribute("id", "avatarEyesPrimary");			
			this.avatarHead.appendChild(avatarEyes);
			
			/*var animation = setInterval(gestures, 200);*/
			
			
		

		}	
	/*crea mouth del avatar*/
	this.createAvatarMouth = function(){
	
			var avatarMouth = document.createElement("div");
			avatarMouth.setAttribute("id", "avatarMouth");			
			this.avatarHead.appendChild(avatarMouth);
		}
	/*crea horns del avatar*/
	this.createAvatarHorns = function(){
	
			var avatarHorns = document.createElement("div");
			avatarHorns.setAttribute("id", "avatarHorns");			
			this.avatarHead.appendChild(avatarHorns);
		}		
	
	/*Inicializa el personaje*/
	this.executeAvatar = function(){
	
		myAvatar.createAvatarSpace(); /*render space(invisible)*/
		myAvatar.createAvatarBody(); /*render cuerpo*/
		myAvatar.createAvatarHead(); /*render cabeza*/
		myAvatar.createAvatarEyes(); /*render ojos*/
		myAvatar.createAvatarHorns(); /*render cuernos*/
		myAvatar.createAvatarMouth();  /*render boca*/
	}
}