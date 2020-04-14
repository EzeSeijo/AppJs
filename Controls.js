function Controls(){
	
	var optionTypePosition = 0; /*cambio de iconos entre body, head, eyes, mouth, horns, wings*/
	var nextOptionType; /*cambio de posicion de iconos de estilo del mismo tipo*/
	/*crea contenedor de los botones*/
	this.createControlsArea = function(){
	
		this.controlsArea = document.createElement("div");
		this.controlsArea.setAttribute("id", "controlsArea");
		config.cont.appendChild(this.controlsArea);
	}

	/*CREA RECUADRO DE OPCIONES DE ESTILO DE AVATAR*/
	this.createOptionsBox = function(kit){	/*Ejecucion cada vez que se cliquea buttonOption*/
	
		/*div.optionsBox*/
		this.optionsBox = document.createElement("div");
		this.optionsBox.setAttribute("class", "optionsBox");
		config.optionsCont.appendChild(this.optionsBox);
		
		var optionsCollection = []; /*coleccion de opciones a crear*/ 
		
		/*newOptionStyle : crea botones de seleccion de estilos para cada parte del cuerpo*/
		/*--divClass = clase a asignar 
		/*--divId = id a asignar (se autoincrementa el nombre)
		/*--parent = elemento donde se insertará el div creado
		/*--cant = cantidad de divs a crear*/
		this.newOptionStyle = function(divClass, divId, parent, cant){
			
			
			
			for(let c = 1, nextOptionType = 0; c <= cant; c++, nextOptionType = nextOptionType -15){
				var optionStyle = document.createElement("div");
				optionStyle.setAttribute("class", divClass);
				optionStyle.setAttribute("id", divId + c);
				
				/*carga de iconos de estilo*/
				optionStyle.style.backgroundImage = "url('buttons-grid2.jpg')";
				optionStyle.style.backgroundPosition = nextOptionType + "vw " + optionTypePosition + "vw";
				
				parent.appendChild(optionStyle);
				optionsCollection.push(optionStyle);	
			}	

		}
		
		/*clase, id, elemPadre, cantidad*/
		this.newOptionStyle("optionStyle", "avatarStyle", this.optionsBox,8);		
		
		/*seleccion de estilo de kit*/
		for(let s = 0; s < optionsCollection.length; s++){
		 
			optionsCollection[s].addEventListener("click", function() {
				var currentOption = this.id;
				var kitSelected = kit;
				
				/*coordenadas para tipo de kit a modificar (cabeza, ojos,etc)*/
				switch(kitSelected){
					case "buttonOption1" : kiType = "avatarBody"; yPos = -90; break;
					case "buttonOption2" : kiType = "avatarHead"; yPos = 0; break;
					case "buttonOption3" : kiType = "avatarEyesPrimary"; yPos = -282; break;
					case "buttonOption4" : kiType = "avatarMouth"; yPos = -311; break;
					case "buttonOption5" : kiType = "avatarHorns"; yPos = -252; break;
					case "buttonOption6" : kiType = "avatarWings"; yPos = -90; break;
				}
				
				/*coordenadas para estilo modificar dentro de un elemento del avatar*/
				switch(currentOption){
					case "avatarStyle1": xPos = 0; break;
					case "avatarStyle2": xPos = -50; break;
					case "avatarStyle3": xPos = -100; break;
					case "avatarStyle4": xPos = -150; break;
					case "avatarStyle5": xPos = -200; break;
					case "avatarStyle6": xPos = -250; break;
					case "avatarStyle7": xPos = -300; break;
					case "avatarStyle8": xPos = -350; break;
					default: xPos = 0; break;
				}
				
				var itemSelected = document.getElementById(kiType);				
				itemSelected.style.backgroundPosition = xPos + "vw " + yPos + "vw";				

			});	
		}
		


		
		/*range-hue-rotation y fieldset*/
		var group = document.createElement("fieldset");
		var groupLegend = document.createElement("legend");
		groupLegend.innerText = "Color";
		var hueBar = document.createElement("input");
		hueBar.setAttribute("type", "range");
		hueBar.setAttribute("min", "130");
		hueBar.setAttribute("max", "240");
		hueBar.setAttribute("value", "60");
		hueBar.setAttribute("class", "slider");
		hueBar.setAttribute("id", "range-hue");		
		this.optionsBox.appendChild(group);
		group.appendChild(groupLegend);
		group.appendChild(hueBar);
		
	}
	
	/*crea los botones (VER SI SE PUEDE SIMPLIFICAR)*/
	this.createBodyStyleButtons = function(){
	
		var buttonsArray = []; /*coleccion de los botones a crear*/   
	
		for(let i = 1; i <= 6; i++){
			
			/*crea botones de estilo*/
			var buttonOptions = document.createElement("div");
			buttonOptions.setAttribute("class", "buttonOptions");
			buttonOptions.setAttribute("id", "buttonOption" + i);
			this.controlsArea.appendChild(buttonOptions);
			
			/*crea efecto hover/active*/
			var selectedOption = document.createElement("div");
			selectedOption.setAttribute("class", "selectedOption");
			buttonOptions.appendChild(selectedOption);					

			/*guarda en el array cada instancia de boton creado*/			
			buttonsArray.push(buttonOptions);
						
		}	
		
		
		/*******CLICK********/
		
		/*efecto colorear el boton activo*/
		for(let n = 0; n < buttonsArray.length ; n++){	
			buttonsArray[n].addEventListener("click", function() {	
								
				this.childNodes[0].style.display = "block";	
				
				var brothers = getSiblings(this); /*coleccion de botones no cliqueados*/				
				for(let x = 0; x < brothers.length; x++){
					brothers[x].childNodes[0].style.display = "none";	
				}
				
				/*Acciones del optionBox*/					
				var styleKit = this.id;

				switch(styleKit){
					case "buttonOption1" : optionTypePosition = 0; break;
					case "buttonOption2" : optionTypePosition = -15; break;
					case "buttonOption3" : optionTypePosition = -30; break;
					case "buttonOption4" : optionTypePosition = -45; break;
					case "buttonOption5" : optionTypePosition = -60; break;
					case "buttonOption6" : optionTypePosition = -75; break;
				}
				
				setAvatarStyle(styleKit);/* 1ºcarga el optionsBox con el kit de estilo cliqueado*/
										
				
				
				
				/*******************************************
				********************************************
				Obtener siblings del elemento ckiqueado*/
				function getChildren(n, skipMe){
					var r = [];
					for( ; n; n = n.nextSibling)
						if(n.nodeType == 1 && n != skipMe)
						r.push(n);
					return r;	
				}
				function getSiblings(n){
					return getChildren(n.parentNode.firstChild, n);
				}
				/*******************************************
				********************************************/
				
			});
		}			
			
	}	

	var setAvatarStyle = function(kit){/*Se ejecuta cada vez que se cliquea un buttonOption */
	
		controls.createOptionsBox(kit);			
		controls.optionsBox.style.display = "block";		
		if(controls.optionsBox.previousSibling){
			controls.optionsBox.previousSibling.remove();
		}

		
	}	
}