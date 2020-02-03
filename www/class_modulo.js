
/************************************************************************************
 * 												     
 * 												     
 * 												    					Class: Modulo
 * 												     
 * 												     
 * 												     
 ************************************************************************************/
"use strict";


var MOD = {

	id_mod: 		0,
	titulo: 		"",
	descr: 			"",
	tipo: 			0,
	categ_cod: 		0,
	categ_descr: 	"",
	txt_intro: 		"",
	txt_days: 		"",
	txt_final: 		"",
	str_exercs: 	"",
	tab_exercs: 	[],
	tot_exercs: 	0,
	stats_days: 	"",
    stats_acertos: 	"",
    stats_tempo: 	"",

	
	Get_Current_Training_Day: function() {
		
		var mod_days = localStorage.getItem("my" + MOD.id_mod + "_days");
		
	    var arr_days = mod_days.split("~");
	    var last_ok = 0;
	
	    for (var i = 1; i < 22; i++) {
	        if (arr_days[i - 1] == "ok") {
	            last_ok = i;
	        }
	    }
	
	    return last_ok + 1;	
		
	},
		
		
	Get_Exercs_Reforco: function() {               // retorna posição, não o ID
	
	  	var temp = "";
	    var temp_tab = [];
	    var data_acertos    = localStorage.getItem("my" + MOD.id_mod + '_acertos');
	    var nenhum_errado   = true;
	
	    var arr = data_acertos.split("~");
	    for (var i=0; i < arr.length; i++) {
	        if (arr[i].indexOf('N') >= 0) {
	            var index = i + 1;
	            temp = temp + index + ",";
	            nenhum_errado = false;
	        }
	    }
	
	    if (nenhum_errado) {
	        temp_tab[0] = "nenhum_errado";
	    } else {
	    	temp = Remove_Last_Char(temp);
	    	var temp_tab = temp.split(",");
	    }    	
	    	
	    return temp_tab;		
		
	}, 
		
		
	Get_Last_Exerc_OK: function(day) {
    	
	    var mod_days    = localStorage.getItem("my" + MOD.id_mod + "_days");
	    var arr_days    = mod_days.split("~");
	    var ind         = day - 1;
	
	    return arr_days[ind];	 
		 
	},
	 		
		 	 				
	Get_Stats_Acertos: function() {
	
		return 	localStorage.getItem("my" + MOD.id_mod + '_acertos');
	
	},			
			
				
	Get_Stats_Tempos: function() {
	
		return 	localStorage.getItem("my" + MOD.id_mod + '_tempo');
	
	},


    Reset: function() {
        MOD.id_mod = 0;
	    MOD.titulo = "";
	    MOD.descr = "";
	    MOD.tipo = 0;
	    MOD.categ_cod = 0;
	    MOD.categ_descr = "";
	    MOD.txt_intro = "";
	    MOD.txt_days = "";
	    MOD.txt_final = "";
	    MOD.str_exercs = "";
	    MOD.tab_exercs = [];
	    MOD.tot_exercs = 0;
	    MOD.stats_days = "";
        MOD.stats_acertos = "";
        MOD.stats_tempo = "";
    },


	Save_Modulo: function(arr) {

	 	var mod_name        = arr[0];	// "my" + id_mod
	    var tipo_down       = arr[1];
	    var mod_edition     = arr[2];
	    var mod_titulo      = arr[3];
	    var mod_descr       = arr[4];
	    var mod_tipo        = arr[5];
	    var mod_categ       = arr[6];
	    var mod_categ_descr = arr[7];
	    var tot_exercs      = arr[8];
	    var mod_exercs      = arr[9];
	    var txt_intro_por   = arr[10];
	    var txt_days_por    = arr[11];
	    var txt_final_por   = arr[12];
	    var txt_intro_eng   = arr[13];
	    var txt_days_eng    = arr[14];
	    var txt_final_eng   = arr[15];
	    var cover_img       = arr[16];
	
		var str_acertos		= "";
		var str_tempo		= "";
	
	    for (var i = 0; i < tot_exercs; i++) {
	        str_acertos     = str_acertos   + "X,X,X,X,X,X,X~";
	        str_tempo       = str_tempo     + "X,X,X,X,X,X,X~";
	    }
	
	    localStorage.setItem(mod_name + '_tipo_down', tipo_down);
	    localStorage.setItem(mod_name + '_str_exercs', mod_exercs);
	    localStorage.setItem(mod_name + '_acertos', str_acertos);
	    localStorage.setItem(mod_name + '_tempo', str_tempo);
	    localStorage.setItem(mod_name + '_days', "0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~");
	    localStorage.setItem(mod_name + '_titulo', mod_titulo);
	    localStorage.setItem(mod_name + '_edition', mod_edition);
	    localStorage.setItem(mod_name + '_descr', mod_descr);
	    localStorage.setItem(mod_name + '_tipo', mod_tipo);
	    localStorage.setItem(mod_name + '_categ_cod', mod_categ);
	    localStorage.setItem(mod_name + '_categ_descr', mod_categ_descr);
	    localStorage.setItem(mod_name + '_tot_exercs', tot_exercs);
	
	    localStorage.setItem(mod_name + '_txt_intro_POR', txt_intro_por);
	    localStorage.setItem(mod_name + '_txt_days_POR', txt_days_por);
	    localStorage.setItem(mod_name + '_txt_final_POR', txt_final_por);
	
	    localStorage.setItem(mod_name + '_txt_intro_ENG', txt_intro_eng);
	    localStorage.setItem(mod_name + '_txt_days_ENG', txt_days_eng);
	    localStorage.setItem(mod_name + '_txt_final_ENG', txt_final_eng);
	
	    localStorage.setItem(mod_name + '_cover_img', cover_img);				
					
	},
		
	Set_Modulo: function(id) {
			    	
		MOD.id_mod			= id;
	    MOD.titulo			= localStorage.getItem('my' + MOD.id_mod + '_titulo');
	    MOD.descr       	= localStorage.getItem('my' + MOD.id_mod + '_descr');
	    MOD.tipo        	= localStorage.getItem('my' + MOD.id_mod + '_tipo');
	    MOD.categ_cod   	= localStorage.getItem('my' + MOD.id_mod + '_categ_cod');
	    MOD.categ_descr		= localStorage.getItem('my' + MOD.id_mod + '_categ_descr');
	    MOD.tot_exercs  	= localStorage.getItem('my' + MOD.id_mod + '_tot_exercs');
	    MOD.txt_intro   	= localStorage.getItem('my' + MOD.id_mod + '_txt_intro_' + CONF.lang);
	    MOD.txt_days    	= localStorage.getItem('my' + MOD.id_mod + '_txt_days_' + CONF.lang);
	    MOD.txt_final   	= localStorage.getItem('my' + MOD.id_mod + '_txt_final_' + CONF.lang);
	    MOD.str_exercs		= localStorage.getItem('my' + MOD.id_mod + '_str_exercs');      	
	    MOD.stats_days		= localStorage.getItem('my' + MOD.id_mod + '_days');  	
	    MOD.stats_acertos	= localStorage.getItem('my' + MOD.id_mod + '_acertos');
	    MOD.stats_tempo  	= localStorage.getItem('my' + MOD.id_mod + '_tempo');
	    	    	
	    var arr = MOD.str_exercs.split("@");
	
		MOD.tab_exercs.length = 0;
	    for (var i=1; i < arr.length; i++) {
	        MOD.tab_exercs[i] = arr[i - 1];
	    }		

	},	

	Update_My_Acertos: function(ind, freq, result) {
		 
	    var new_str         = "";
	    var new_result      = "";
	    var mod_acertos     = localStorage.getItem("my" + MOD.id_mod + "_acertos");
	    var arr_exercs      = mod_acertos.split("~");
	    var arr_freq        = arr_exercs[ind].split(",");
	
	    freq--;
	    arr_freq[freq]      = result;
	
	    for (var i = 0; i < 7; i++) {
	        new_result = new_result + arr_freq[i] + ",";
	    }
	
	    new_result   	= Remove_Last_Char(new_result);
	    arr_exercs[ind] = new_result;
	
	    for (var i = 0; i < MOD.tot_exercs; i++) {
	        new_str = new_str + arr_exercs[i] + "~";
	    }
	
	    localStorage.setItem("my" + MOD.id_mod + '_acertos', new_str);	 
		 	 
	},
		

	Update_My_Days: function(day, last_ok) {
	 
	    var new_str     = "";
	    var mod_days    = localStorage.getItem("my" + MOD.id_mod + "_days");
	    var arr_days    = mod_days.split("~");
	    var ind         = day - 1;
	    	
	    arr_days[ind]   = last_ok;
	
	    for (var i = 0; i < 21; i++) {
	        new_str = new_str + arr_days[i] + "~";
	    }
	
	    localStorage.setItem("my" + MOD.id_mod + '_days', new_str);
	
	},
					
	Update_My_Tempo: function(ind, freq, secs) {
	
	    var new_str         = "";
	    var new_freq        = "";
	    var mod_tempo       = localStorage.getItem("my" + MOD.id_mod + "_tempo");
	    var arr_exercs      = mod_tempo.split("~");
	    var arr_freq        = arr_exercs[ind].split(",");
	
	    freq--;
	    arr_freq[freq]      = secs;
	
	    for (var i = 0; i < 7; i++) {
	        new_freq = new_freq + arr_freq[i] + ",";
	    }
	
	    new_freq = Remove_Last_Char(new_freq);
	    arr_exercs[ind] = new_freq;
	
	    for (var i = 0; i < MOD.tot_exercs; i++) {
	        new_str = new_str + arr_exercs[i] + "~";
	    }
	
	    localStorage.setItem("my" + MOD.id_mod + '_tempo', new_str);
	
	},
					
				
	Zera_Stats_Modulo: function() {
	
		var my_mod	= "my" + MOD.id_mod;
	
		var str_acertos 	= "";
	    var str_tempo   	= "";    
		var tot 			= localStorage.getItem(my_mod + '_tot_exercs');    
	    
	    for (var i = 0; i < tot; i++) {
	        str_acertos     = str_acertos   + "X,X,X,X,X,X,X~";
	        str_tempo       = str_tempo     + "X,X,X,X,X,X,X~";
	    }
	
	    localStorage.setItem(my_mod + '_acertos', str_acertos);
	    localStorage.setItem(my_mod + '_tempo', str_tempo);
	    localStorage.setItem(my_mod + '_days', "0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~");
	    
	}
		
	
}





