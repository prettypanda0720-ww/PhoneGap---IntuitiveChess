/************************************************************************************
 * 												     
 * 												     
 * 												    					Class: Stats
 * 												     
 * 												     
 * 												     
 ************************************************************************************/

"use strict";

var STATS = {


	Build_Stats: function(id_mod) {
	
	    var this_mod 		= "my" + id_mod;
	
	    var data_acertos    = localStorage.getItem(this_mod + '_acertos');
	    var data_tempo      = localStorage.getItem(this_mod + '_tempo');
	    var mod_titulo      = localStorage.getItem(this_mod + '_titulo');
	    var mod_tipo        = localStorage.getItem(this_mod + '_tipo');
	
	    $('#titulo_mod_stats').html(mod_titulo);
	
	    STATS.Print_Lines_Stats(data_acertos, data_tempo, mod_tipo);
	
	    $(".section_stats").css('display', 'block');
	    window.scrollTo({ top: 0, behavior: 'smooth' });
	
	},

	
	Formata_Time: function(time) {
	
	    if (time == "X")    { return "0:00"; }
	    if (time < 60)      { return "0:" + Pad(time, 2); }
	    if (time < 120)     { return "1:" + Pad(time - 60, 2); }
	    if (time < 180)     { return "2:" + Pad(time - 120, 2); }
	    if (time < 240)     { return "3:" + Pad(time - 180, 2); }
	    if (time < 300)     { return "4:" + Pad(time - 240, 2); }
	    if (time < 360)     { return "5:" + Pad(time - 300, 2); }
	
	    return "?:??";
	
	},

	
	
	// retorna a posiçao do exercício começando do 1
	// freq = número da coluna que aparece nas estatísticas
	Get_Frequencia: function(arg1, arg2) {									
	
		var day 	= arg1;
		var exerc 	= arg2;
	
	    var index = 0, freq = 0;
	
	    if (day == 1)  { if (exerc > 8) { index = exerc - 8; freq = 2; } else { index = exerc; freq = 1; } }
	    if (day == 2)  { if (exerc > 8) { index = exerc; freq = 2; } else { index = exerc + 8; freq = 1; } }
	    if (day == 3)  { index = exerc; freq = 3; }
	    if (day == 4)  { if (exerc > 8) { index = exerc + 8; freq = 2; } else { index = exerc + 16; freq = 1; } }
	    if (day == 5)  { if (exerc > 8) { index = exerc + 16; freq = 2; } else { index = exerc + 24; freq = 1; } }
	    if (day == 6)  { index = exerc + 16; freq = 3; }
	    if (day == 7)  { index = exerc; freq = 4; }
	    if (day == 8)  { if (exerc > 8) { index = exerc + 24; freq = 2; } else { index = exerc + 32; freq = 1; } }
	    if (day == 9)  { if (exerc > 8) { index = exerc + 32; freq = 2; } else { index = exerc + 40; freq = 1; } }
	    if (day == 10) { index = exerc + 32; freq = 3; }
	    if (day == 11) { if (exerc > 8) { index = exerc + 40; freq = 2; } else { index = exerc + 48; freq = 1; } }
	    if (day == 12) { if (exerc > 8) { index = exerc + 48; freq = 2; } else { index = exerc + 56; freq = 1; } }
	    if (day == 13) { index = exerc + 48; freq = 3; }
	    if (day == 14) { index = exerc + 32; freq = 4; }
	    if (day == 15) { index = exerc; freq = 5; }
	    if (day == 16) { index = exerc + 16; freq = 5; }
	    if (day == 17) { index = exerc + 32; freq = 5; }
	    if (day == 18) { index = exerc + 48; freq = 5; }
	    if (day == 19) { index = exerc; freq = 6; }
	    if (day == 20) { index = exerc + 32; freq = 6; }
	    if (day == 21) { index = exerc; freq = 7; }
	
	    var arr = [index, freq];
	    return arr;
	
	},

	
	Print_Lines_Stats: function(data_acertos, data_tempo, mod_tipo) {
	
	    var itens   = data_acertos.split("~");
	    var time    = data_tempo.split("~");
	    var tot     = itens.length - 1;
	    var dados   = "";
	
	    for (var i = 0; i < tot; i++) {
	        var num = i + 1;
	        var t_res = itens[i].split(",");
	        var t_time = time[i].split(",");
	        var ini = '<table width="100%" align="center" border="0" class="line_bibli">' +
	            '<tr style="height: 50px; border-bottom: 0px solid #DDDDDD;">' +
	            '<td width="16%" align="center" valign="middle" style="font-size: 2.2em; color: #ff6c25;"><b>' + num + '</b></td>';
	        var meio = '';
	
	        for (var j = 0; j < t_res.length; j++) {
	            if (mod_tipo == 1) {
	                var time_f = STATS.Formata_Time(t_time[j]);
	            } else {
	                var time_f = "...";
	            }
	
	            if (t_res[j] == "S") {
	                var color = "#009900";
	                var icon = '<i class="fa fa-check-circle" style="color: #009900; font-size: 1.5em;"></i>';
	            } else if (t_res[j] == "N") {
	                var color = "#CC0000";
	                var icon = '<i class="fa fa-times-circle" style="color: #CC0000; font-size: 1.5em;"></i>';
	            } else {
	                var color = "#AAAAAA";
	                var icon = '<i class="fa fa-circle" style="color: #CCCCCC; font-size: 1.5em;"></i>';
	            }
	
	            var meio = meio +
	                '<td width="12%" align="center" valign="middle">' + icon +
	                '<div style="font-weight: normal; color: ' + color + '; font-size: 1em; padding: 0px 0px 0px 0px;">' + time_f + '</div>'
	            '</td>';
	
	        }
	
	        var fim = '</tr></table><hr style="padding: 2px; margin: 0px;">';
	        dados = dados + ini + meio + fim;
	
	    }
	
	    $('#stats_dados').html(dados);
	
	},
		


	Update_My_Acertos: function(day, exerc, resultado) {
			
		var this_mod = "my" + MOD.id_mod;
			
		var arr 		= STATS.Get_Frequencia(day, exerc);
		var ind_exerc 	= arr[0] - 1;
		var freq 		= arr[1];	
		
		var new_str   	= "";
		var new_result 	= "";
		var mod_acertos	= localStorage.getItem(this_mod + "_acertos");
		var arr_exercs 	= mod_acertos.split("~");
		var arr_freq   	= arr_exercs[ind_exerc].split(",");
		
		freq--;
		arr_freq[freq]      = resultado;
		
		for (var i = 0; i < 7; i++) {
		   new_result = new_result + arr_freq[i] + ",";
		}
		
		new_result              = Remove_Last_Char(new_result);
		arr_exercs[ind_exerc]   = new_result;
		
		for (var i = 0; i < MOD.tot_exercs; i++) {
		    new_str = new_str + arr_exercs[i] + "~";
		}
		
		localStorage.setItem(this_mod + '_acertos', new_str);
		
	},
			
		
		
	Update_My_Days: function(day, last_ok) {
			
		var this_mod = "my" + MOD.id_mod;
		
		var new_str     = "";
		var mod_days    = localStorage.getItem(this_mod + "_days");
		var arr_days    = mod_days.split("~");
		var ind         = day - 1;
		arr_days[ind]   = last_ok;
		
		for (var i = 0; i < 21; i++) {
			new_str = new_str + arr_days[i] + "~";
		}
		
		localStorage.setItem(this_mod + '_days', new_str);
		
	},
		

		
	Update_My_Tempo: function(day, exerc, time_spent) {
						
		var this_mod = "my" + MOD.id_mod;						

		var new_str    	= "";
		var new_freq 	= "";
		    						
		var arr 		= STATS.Get_Frequencia(day, exerc);
		var ind_exerc 	= arr[0] - 1;
		var freq 		= arr[1];		
		    
		var mod_tempo 	= localStorage.getItem(this_mod + "_tempo");    
		    
		var arr_exercs	= mod_tempo.split("~");
		var arr_freq  	= arr_exercs[ind_exerc].split(",");
		
		freq--;
		arr_freq[freq]	= time_spent;
		
		for (var i = 0; i < 7; i++) {
		    new_freq = new_freq + arr_freq[i] + ",";
		}
		
		new_freq = Remove_Last_Char(new_freq);
		
		arr_exercs[ind_exerc] = new_freq;
		
		for (var i = 0; i < MOD.tot_exercs; i++) {
		    new_str = new_str + arr_exercs[i] + "~";
		}
		
		localStorage.setItem(this_mod + '_tempo', new_str);
	
	}
				


		

}


