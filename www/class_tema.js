/************************************************************************************
 * 												     
 * 												     
 * 												    				Class: Tema
 * 												     
 * 												     
 * 												     
 ************************************************************************************/

"use strict";

var TEMA = {


	Set_Theme: function(tema) {
		
		var tab_themes = [ 'default', 'light_blue', 'dark_blue', 'olive', 'purple', 'army', 'coffee', 'dark_green', 'green', 'maroon', 'ocre', 'cinza_escuro', 
	                   'teal', 'pink', 'cinza_claro', 'orange', 'violet'];		
	
	    if (tema == 'default')          { 
	    	TEMA.Set_Theme_Colors("#f0d9b5", "#f1dab7", "#dca578", "#b98767"); 
	    	COLOR_CLICK = COLOR.violet;
	    }
	    
	    if (tema == 'army')             { 
	    	TEMA.Set_Theme_Colors("#799b84", "#799b84", "#5c7c64", "#5c7c64"); 
			COLOR_CLICK = COLOR.yellow;
	    }
	    
	    if (tema == 'cinza_claro')      { 
	    	TEMA.Set_Theme_Colors("#f1eed6", "#f1eed6", "#d5d6b2", "#d5d6b2"); 
			COLOR_CLICK = COLOR.orange;
	    }
	    
	    if (tema == 'cinza_escuro')     { 
	    	TEMA.Set_Theme_Colors("#f7f7f7", "#f7f7f7", "#777777", "#777777"); 
			COLOR_CLICK = COLOR.orange;
	    }
	    
	    if (tema == 'coffee')           { 
	    	TEMA.Set_Theme_Colors("#ffd79e", "#ffd79e", "#b06b28", "#b06b28"); 
	    	COLOR_CLICK = COLOR.pink;
	    }
	    
	    if (tema == 'dark_blue')        { 
	    	TEMA.Set_Theme_Colors("#c0cbd5", "#c0cbd5", "#4470a6", "#4470a6"); 
	    	COLOR_CLICK = COLOR.violet;
	    }
	    
	    if (tema == 'dark_green')       { 
	    	TEMA.Set_Theme_Colors("#d2cfce", "#d2cfce", "#004549", "#004549"); 
	    	COLOR_CLICK = COLOR.yellow;
	    }
	    
	    if (tema == 'green')            { 
	    	TEMA.Set_Theme_Colors("#dfdf6f", "#dfdf6f", "#7f7f3f", "#7f7f3f"); 
	    	COLOR_CLICK = COLOR.violet;
	    }
	    
	    if (tema == 'light_blue')       { 
	    	TEMA.Set_Theme_Colors("#dce2e5", "#dce2e5", "#87a0ab", "#87a0ab"); 
	    	COLOR_CLICK = COLOR.pink;
	    }
	    
	    if (tema == 'maroon')           { 
	    	TEMA.Set_Theme_Colors("#d4aa70", "#d4aa70", "#38281b", "#38281b"); 
	    	COLOR_CLICK = COLOR.white;
	    }
	    
	    if (tema == 'ocre')             { 
	    	TEMA.Set_Theme_Colors("#edcaa0", "#edcaa0", "#b94529", "#b94529"); 
	    	COLOR_CLICK = COLOR.teal;
	    }
	    
	    if (tema == 'olive')            { 
	    	TEMA.Set_Theme_Colors("#fcffdf", "#fcffdf", "#78ab6d", "#78ab6d"); 
	    	COLOR_CLICK = COLOR.pink;
	    }
	    
	    if (tema == 'orange')           { 
	    	TEMA.Set_Theme_Colors("#ffd699", "#ffd699", "#ff9900", "#ff9900"); 
	    	COLOR_CLICK = COLOR.blue;
	    }
	    
	    if (tema == 'pink')             { 
	    	TEMA.Set_Theme_Colors("#ffe6f2", "#ffe6f2", "#ff80bf", "#ff80bf"); 
	    	COLOR_CLICK = COLOR.teal;
	    }
	    
	    if (tema == 'purple')           { 
	    	TEMA.Set_Theme_Colors("#f5e6ff", "#f5e6ff", "#9900ff", "#9900ff"); 
	    	COLOR_CLICK = COLOR.green;
	    }
	    
	    if (tema == 'teal')             { 
	    	TEMA.Set_Theme_Colors("#e1e5e7", "#e1e5e7", "#0e8c9e", "#0e8c9e"); 
	    	COLOR_CLICK = COLOR.pink;
	    }
	    
	    if (tema == 'violet')           { 
	    	TEMA.Set_Theme_Colors("#a38aac", "#a38aac", "#873a88", "#873a88"); 
	    	COLOR_CLICK = COLOR.yellow;
	    }
	    
	
	    CONF.theme = tema;
	
	    for (var i = 0; i < tab_themes.length; i++) {
	        $("#theme_sel_" + tab_themes[i]).css('display', 'none');
	    }
	
	    $("#theme_sel_" + CONF.theme).css('display', 'block');
	
	    localStorage.setItem('conf_theme', CONF.theme);
	    	
	},
	

	Set_Theme_Colors: function(white_from, white_to, black_from, black_to) {
	
	    $("head").append('<style></style>');
	    var element = $("head").children(':last');
	    element.html('.white-1e1d7{background-image: linear-gradient(' + white_from + ', ' + white_to + ')}');
	    $("head").append('<style></style>');
	    var element = $("head").children(':last');
	    element.html('.black-3c85d{background-image: linear-gradient(' + black_from + ', ' + black_to + ')}');
	
	},
	



}


