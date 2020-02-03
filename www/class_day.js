/************************************************************************************
 * 												     
 * 												    					Class: Day
 * 												     								     
 ************************************************************************************/

'use_strict';

var DAY = {
	
	cur_day: 0,
	cur_exerc: 0,
	last_done: 0,

	tab_exercs: [],	// contém todos os exercícios do módulo - IND começa do [1] - Ex: [1] a [64]
	tab_inds: [],	// contém a posição dos exercícios a serem feitos no dia - Posição [0] = NOT USED
	tot_exercs: 0,

	is_reforco: false,


    Reset: function() {

 	    DAY.cur_day = 0;
	    DAY.cur_exerc = 0;
	    DAY.last_done = 0;

	    DAY.tab_exercs = [];
	    DAY.tab_inds = [];
	    DAY.tot_exercs = 0;

	    DAY.is_reforco = false;
    },
	

	Carrega_Tab_Exercs: function() {
		
		DAY.tab_exercs.length = 0;
		
		var arr = MOD.str_exercs.split("@");
		
    	for (var i=1; i < arr.length; i++) {
        	DAY.tab_exercs[i] = arr[i - 1];
    	}

	},


	Fim_do_Day: function() {
	
	   // But_Board_Off();
	
	    if (!DAY.is_reforco) {
	    	STATS.Update_My_Days(DAY.cur_day, "ok");
	        MY_MODS.Populate_Mods_Acquired();
	    }
	
	    DAY.Print_Final_Day();
	
	},
	
	

	Get_Exercs_Reforco: function() {		
	
		var my_mod	= "my" + MOD.id_mod;																		// Retorna posicao dentro do módulo, não o ID do exercício
																											
	    var temp = "";
	    var temp_tab = [];
	    var data_acertos    = localStorage.getItem(my_mod + '_acertos');
	    var nenhum_errado   = true;
	
	    var arr = data_acertos.split("~");
	    for (var i=1; i < arr.length; i++) {
	        if (arr[i-1].indexOf('N') >= 0) {
	            var index = i + 1;
	            temp = temp + index + ",";
	            nenhum_errado = false;
	        }
	    }
	
	    if (nenhum_errado) {
	        temp_tab[0] = "nenhum_errado";
	        return temp_tab;
	    }	
	
	    temp = Remove_Last_Char(temp);
	    var temp_tab = temp.split(",");
	    return temp_tab;
	
	},

			

    Inicio_do_Day: function() {
    	
		if (DAY.cur_exerc == 0) {
			return true;
		} else {
			return false;		
		}     
		
    },
    


    Inicio_do_Modulo: function() {
    	
		if (DAY.cur_day == 1 && DAY.cur_exerc == 0) {
			return true;
		} else {
			return false;		
		}     
		
    },


	
	Monta_Training_Reforco: function() {
	
		var tab_temp = [];
		DAY.Carrega_Tab_Exercs();	

	    var list = DAY.Get_Exercs_Reforco();

	    if (list[0] == "nenhum_errado") {
	        //TAB_EXERCS_DAY.length   = 0;
	        //TOT_EXERCS_DAY = 0;
	        return;
	    }
	
		tab_temp.push("not used");
		tab_temp = tab_temp.concat(list);
		
		DAY.tab_inds = tab_temp;
	
	},


	Print_Final_Day: function() {
	
	    if (CONF.sound_moves == "on") {
	        AUD.Play('congrat_1');
	    }
	
	    if (DAY.is_reforco) {
	        GRAPH.Print_Message(LG.reforco_ended);
            var but = new Buttons(0, 0, 0, 0, false, false);
	    } else {
	        GRAPH.Print_Message(LG.day_ended);
            var but = new Buttons(0, 0, 0, 0, false, false);
	    }

	    setTimeout(NAV.Show_Gym, 3000);
	
	},
	
	

	 
	Print_Final_Mod_Msg: function() {
	
    	var texto	= localStorage.getItem("my" + MOD.id_mod + '_txt_final_' + CONF.lang);
    	var arr     = texto.split("<NL>");

    	$('#modal5_header').html(arr[0]);
    	$('#modal5_body').html(arr[1]);
    	$("#show_modal5").click();
	
	},
		
	

	Print_Intro_Day_Msg: function() {
		
		return;

    	var txt_days    = localStorage.getItem("my" + MOD.id_mod + '_txt_days_' + CONF.lang);
    	var arr         = txt_days.split("~");
    	var texto       = arr[DAY.cur_day - 1];
    	
    	var arr         = texto.split("<NL>");

    	$('#modal4_header').html(arr[0]);
    	$('#modal4_body').html(arr[1]);
    	$("#show_modal4").click();
	
	}, 
	 
	 
	Print_Intro_Mod_Msg: function() {
	
    	var texto	= localStorage.getItem("my" + MOD.id_mod + '_txt_intro_' + CONF.lang);
    	var arr     = texto.split("<NL>");

    	$('#modal5_header').html(arr[0]);
    	$('#modal5_body').html(arr[1]);
    	$("#show_modal5").click();
	
	}, 
	 
	
	Print_Intro_Reforco: function() {
	
	    $("#modal6_body").html(LG.reforco_explain);
	    $("#show_modal6").click();
	
	},
		
		
		
	Reforco_Not_Available: function() {
		
		DAY.is_reforco = false;
	    $("#modal6_body").html(LG.nao_tem_exercs_reforco);
	    $("#show_modal6").click();
	    			
	    setTimeout(NAV.Show_Gym, 3000);	        		
	
	},		
		

	
	Right_Move: function() {
		
		EXERC.User_Acertou();

	},
	
	


	Set_Last_Done: function(day) {
	
		if (DAY.is_reforco) {
			DAY.last_done = DAY.cur_exerc - 1;		
		} else {
			DAY.last_done = parseInt(MOD.Get_Last_Exerc_OK(day));
		}	
	
	},

	
	
	Wrong_Move: function() {
		
		EXERC.User_Errou();
	
	},	
	
	

				
	Canvas_Is_Clicavel: function() {			
	
		if (EXERC.Get_Is_Exercing() && EXERC.Get_User_Turn()) {
			return true;			
		} else {
			return false;			
		}		
		
	},
		
				
	Check_User_Move: function(sq_from, sq_to) {		
			
	    if (EXERC.Ve_Se_Acertou(sq_from, sq_to)) {
	        DAY.Right_Move();
	    } else {
	        DAY.Wrong_Move();
	    }	    
	    	
	},		
		
		
	Next_Exerc: function() {			
		
    	if (DAY.Inicio_do_Modulo()) {
        	DAY.Print_Intro_Mod_Msg();
    	}    
    			
    	if (DAY.Inicio_do_Day()) {
    		DAY.Print_Intro_Day_Msg();	
    	} 		
    		   		
    	if (DAY.is_reforco && DAY.tot_exercs == 0) {
	        DAY.Reforco_Not_Available();   				
    	}	    		   		    		   		
    		   		
    	if (DAY.cur_exerc >= DAY.tot_exercs) {
        	DAY.Fim_do_Day();
        	return;
    	}		   				
    				
		DAY.cur_exerc++;
		DAY.Set_Last_Done(DAY.cur_day);
		EXERC.Set_New_Exerc(DAY.tab_exercs[DAY.tab_inds[DAY.cur_exerc]].split("'"), DAY.cur_day, DAY.cur_exerc, DAY.last_done, DAY.tot_exercs, DAY.is_reforco);	
				
	},
	
		
	Next_Half: function() {	
			
		EXERC.Show_Next_Half();
		
	},
		
		
	Prev_Exerc: function() {	
		
		DAY.cur_exerc--;
		EXERC.Set_New_Exerc(DAY.tab_exercs[DAY.tab_inds[DAY.cur_exerc]].split("'"), DAY.cur_day, DAY.cur_exerc, DAY.last_done, DAY.tot_exercs, DAY.is_reforco);
		EXERC.Print_Header(DAY.cur_exerc, DAY.tot_exercs);
			
	},	

	
	Prev_Half: function() {	
	
		EXERC.Back_Move();
		
	},	

		
	Redo_Exerc: function() {				
	
		EXERC.Set_New_Exerc(DAY.tab_exercs[DAY.tab_inds[DAY.cur_exerc]].split("'"), DAY.cur_day, DAY.cur_exerc, DAY.last_done, tot_exercs, DAY.is_reforco);
		EXERC.Print_Header(DAY.cur_exerc, tot_exercs);	
				
	},	
	
		
	Set_Training_Day: function(day) {	
				
		DAY.is_reforco = false;			
			
		DAY.cur_day = day;
			
		DAUX.Set_Training_Day(day, MOD.categ_cod);	
		DAY.tab_inds = DAUX.Get_Tab_Exercs_Day();
		
		DAY.tot_exercs 	= DAY.tab_inds.length - 1;
			
		DAY.Carrega_Tab_Exercs();			
		DAY.Set_Last_Done(DAY.cur_day);
			
		DAY.cur_exerc 	= DAY.last_done;
					
		
	}, 	
		
	
	Start_Reforco: function() {		
		
		DAY.is_reforco = true;
		
		DAY.Monta_Training_Reforco();

		DAY.last_done 	= 0;
		DAY.cur_exerc 	= 0;
		DAY.tot_exercs 	= DAY.tab_inds.length - 1;
		
	}



}



