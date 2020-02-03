
/************************************************************************************
 * 												     
 * 												     
 * 												    				Class: Account
 * 												     
 * 												     
 * 												     
 ************************************************************************************/

"use strict";


var ACC = {

	Consiste_Cad_User: function(user_name, user_email, user_country, user_sexo, user_nasc_dd, user_nasc_mm, user_nasc_aa, user_idioma) {
	
		var tem_erros = false;
	
		if (!Consiste_Preenchido(user_name, "user_name")) {
			tem_erros = true;
		}
	        
		if (!Consiste_Email(user_email, "user_email")) {
			tem_erros = true;
		}        
	        
	    if (user_country == 0) {                
	        $('#user_country').addClass('error');
	        tem_erros = true;
	    }
	
		if (user_sexo == 0) {
	        $('#user_sexo').addClass('error');
			tem_erros = true;
		}
	                
	    if (user_nasc_dd == 0) {
	        $('#user_nasc_dd').addClass('error');
			tem_erros = true;
		}
	        
	    if (user_nasc_mm == 0) {
	        $('#user_nasc_mm').addClass('error');
			tem_erros = true;
		}
	        
	    if (user_nasc_aa == 0) {
	        $('#user_nasc_aa').addClass('error');
			tem_erros = true;
		}
	        
	    if (user_idioma == 0) {
	        $('#user_idioma').addClass('error');
			tem_erros = true;
		}
	
		if (tem_erros) {
			return false;
		}
	
		return true;
	
	},


	Save_Cadastro: function() {
	
		var user_name	    = document.getElementById("user_name").value;
		var user_email	    = document.getElementById("user_email").value;
		var user_country	= document.getElementById("user_country").value;
		var user_sexo	    = document.getElementById("user_sexo").value;
		var user_nasc_dd	= document.getElementById("user_nasc_dd").value;
		var user_nasc_mm	= document.getElementById("user_nasc_mm").value;
		var user_nasc_aa	= document.getElementById("user_nasc_aa").value;
		var user_idioma	    = document.getElementById("user_idioma").value;	
	
		if (this.Consiste_Cad_User(user_name, user_email, user_country, user_sexo, user_nasc_dd, user_nasc_mm, user_nasc_aa, user_idioma)) {
		
			AJAX.Save_Cadastro(user_name, user_email, user_country, user_sexo, user_nasc_dd, user_nasc_mm, user_nasc_aa, user_idioma);	
		
		}	
	
	
	}
	
};
