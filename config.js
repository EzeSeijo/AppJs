function Config(){
			
	/*Crea el contenedor general*/		
	this.createStageArea = function(){
	
		this.cont = document.createElement("div");
		this.cont.setAttribute("id", "cont");
		document.body.appendChild(this.cont);
		
	}
	
	/*Crea area del avatar*/
	this.createPlayArea = function(){
	
		this.playArea = document.createElement("div");
		this.playArea.setAttribute("id", "playArea");
		this.cont.appendChild(this.playArea);
		
	}
	
	/*parent para div.optionsBox*/
	this.createOptionsCont = function(){
	
		this.optionsCont = document.createElement("div");
		this.optionsCont.setAttribute("class", "optionsCont");
		this.playArea.appendChild(this.optionsCont);	
	
	}
	
	/*Crea menu de navegacion*/
	this.createNavigationArea = function(){
	
		this.navigationArea = document.createElement("div");
		this.navigationArea.setAttribute("class", "navigationArea");
		this.cont.appendChild(this.navigationArea);
		
	}
	
	/*Crea boton para generar el avatar final*/
	this.createGeneratorBtn = function(){
	
		var generatorBtn = document.createElement("a");
		generatorBtn.setAttribute("href", "http://google.com.ar");
		generatorBtn.innerText = "Terminar";
		generatorBtn.setAttribute("class", "generateAvatar");
		this.navigationArea.appendChild(generatorBtn);
		
		
	}
	
	/*Texturas*/
	this.loadTextures = function(){
	
		var playArea = document.getElementById("playArea");
		playArea.style.backgroundImage = "url('textures/playArea-cream.jpg')";
		
		/*avatarSpace todavia no existe*/
		/*var avatarSpace = document.getElementsByClassName("avatarSpace");
		avatarSpace[0].style.backgroundImage = "url('textures/shadowAvatar.png')";*/
		
	}
	
	/*Renderiza el entrono de la pantalla*/
	this.generateEnvironment = function(){
	
		config.createStageArea(); /*Render contenedor general de la pantalla*/
		config.createPlayArea(); /*Render contenedor del area de juego del personaje*/
		config.createOptionsCont(); /*Render contenedor del optionsBox*/
		config.createNavigationArea();	/*Render menu de navegacion a la proxima pantalla*/
		config.createGeneratorBtn(); /*Render boton a la proxima poantalla*/
		config.loadTextures(); /*render de texturas de los elementos*/
	
	}	
	

}





