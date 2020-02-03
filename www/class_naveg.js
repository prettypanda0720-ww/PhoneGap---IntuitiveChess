
/************************************************************************************
 * 												     
 * 												     
 * 												    					Class: Naveg
 * 												     			         
 * 												     
 * 												     
 ************************************************************************************/

"use strict";

var NAV = {


	Hide_All: function() {
	
	    $(".section_about").css         ('display', 'none');
	    $(".section_account").css       ('display', 'none');
	    $(".section_board").css         ('display', 'none');
	    $(".section_conf").css          ('display', 'none');
	    $(".section_conf_board").css    ('display', 'none');
	    $(".section_conf_idioma").css   ('display', 'none');
	    $(".section_conf_sounds").css   ('display', 'none');
	    $(".section_conf_treino").css   ('display', 'none');
	    $(".section_days").css          ('display', 'none');
	    $(".section_help").css          ('display', 'none');
	    $(".section_help_questions").css('display', 'none');
	    $(".section_help_answers").css  ('display', 'none');
	    $(".section_menu").css          ('display', 'none');
	    $(".section_mods_store").css    ('display', 'none');
	    $(".section_home").css          ('display', 'none');
	    $(".section_stats").css         ('display', 'none');
	    $(".section_suporte").css       ('display', 'none');
	    $(".section_naveg").css         ('display', 'block');	
	
	},


	Icon_Conf_Sel: function() {

    	NAV.Icons_Off();
    	$("#icon_conf").css('background', 'linear-gradient(#4f6d8f, #5788ac)');
    	$("#icon_conf_img").html('<img src="img/nav_config_orange.png" width="32" height="32">');

	},



	Icon_Gym_Sel: function() {

    	NAV.Icons_Off();
    	$("#icon_gym").css('background', 'linear-gradient(#4f6d8f, #5788ac)');
    	$("#icon_gym_img").html('<img src="img/nav_home_orange.png" width="32" height="32">');

	},



	Icon_Help_Sel: function() {

    	NAV.Icons_Off();
    	$("#icon_help").css('background', 'linear-gradient(#4f6d8f, #5788ac)');
    	$("#icon_help_img").html('<img src="img/nav_help_orange.png" width="28" height="28">');

	},


	Icon_Menu_Sel: function() {

    	NAV.Icons_Off();
    	$("#icon_menu").css('background', 'linear-gradient(#4f6d8f, #5788ac)');
    	$("#icon_menu_img").html('<img src="img/nav_menu_orange.png" width="32" height="32">');

	},


	Icon_Store_Sel: function() {

    	NAV.Icons_Off();
    	$("#icon_store").css('background', 'linear-gradient(#4f6d8f, #5788ac)');
    	$("#icon_store_img").html('<img src="img/nav_store_orange.png" width="32" height="32">');

	},


	Icon_Back_On: function() {

    	$("#icon_back_img").html('<img src="img/nav_seta_bege.png" width="32" height="32">');

	},


	Icon_Back_Off: function() {

    	$("#icon_back_img").html('<img src="img/nav_seta_grey.png" width="32" height="32">');

	},


	Icons_Off: function() {
	
	    $("#icon_back").css('background',   'linear-gradient(#374354, #5d718c)');
	    $("#icon_menu").css('background',   'linear-gradient(#374354, #5d718c)');
	    $("#icon_store").css('background',  'linear-gradient(#374354, #5d718c)');
	    $("#icon_gym").css('background',    'linear-gradient(#374354, #5d718c)');
	    $("#icon_conf").css('background',   'linear-gradient(#374354, #5d718c)');
	    $("#icon_help").css('background',   'linear-gradient(#374354, #5d718c)');
	
	    $("#icon_back_img").html    ('<img src="img/nav_seta_grey.png" width="32" height="32">');
	    $("#icon_conf_img").html    ('<img src="img/nav_config_bege.png" width="32" height="32">');
	    $("#icon_gym_img").html     ('<img src="img/nav_home_bege.png" width="28" height="28">');
	    $("#icon_help_img").html    ('<img src="img/nav_help_bege.png" width="26" height="26">');
	    $("#icon_menu_img").html    ('<img src="img/nav_menu_bege.png" width="32" height="32">');
	    $("#icon_store_img").html   ('<img src="img/nav_store_bege.png" width="32" height="32">');
	
	},


	Reset_Days: function() {
	
    	for (var i = 1; i < 22; i++) {
        	$("#bg_day_" + i).css('background-color', '#999999');
        	$("#txt_day_" + i).css('color', '#999999');
        	$("#txt_day_" + i).html(i);
        	$('#bg_day_' + i).data('off', true);
    	}	
	
	},
	
	
	Limita_Amostra: function(cur_mod) {
	
		var tipo_down   = localStorage.getItem(cur_mod + "_tipo_down");
	    	if (tipo_down == "A") {
        	for (var i=4; i < 22; i++) {
            	$("#bg_day_" + i).css('background-color', '#DDDDDD');
            	$("#txt_day_" + i).css('color', '#DDDDDD');
            	$("#txt_day_" + i).html(i);
        	}
    	}
	
	},	


	Paint_Days_OK: function(day) {
			
	    for (var i=1; i < day; i++) {
	        $("#bg_day_" + i).css('background-color', '#339900');
	        $("#txt_day_" + i).css('color', '#339900');
	        $("#txt_day_" + i).html("OK");
	    }
		
	},
	
	
	Paint_Dia_do_Treino: function(day) {
    	
    	$("#bg_day_" + day).css('background-color', '#ff9300');
    	$("#txt_day_" + day).css('color', '#ff9300');
    	$("#txt_day_" + day).html(day);
    	$('#bg_day_' + day).data('off', false);		
		
	},
		
		
	 
	Get_Current_Training_Day: function(mod_days) {
	
    	var arr_days = mod_days.split("~");
    	var last_ok = 0;

    	for (var i = 1; i < 22; i++) {
        	if (arr_days[i - 1] == "ok") {
            	last_ok = i;
        	}
    	}

    	return last_ok + 1;	
	
	},
			
		
	Build_Days: function(id_mod) {

    	var cur_mod	= "my" + id_mod;
    	
    	var mod_titulo  = localStorage.getItem(cur_mod + "_titulo");
    	var mod_days    = localStorage.getItem(cur_mod + "_days");
    	var day         = NAV.Get_Current_Training_Day(mod_days);

		NAV.Reset_Days();		
		NAV.Limita_Amostra(cur_mod);
		NAV.Paint_Days_OK(day);		
		NAV.Paint_Dia_do_Treino(day);

    	$('#mod_titulo').html(mod_titulo);
    	$('#mod_id').html(id_mod);
    	$(".section_days").css('display', 'block');

	},

	
	Show_About: function() {
		
		NAV.Hide_All();
    	NAV.Icon_Menu_Sel();
    	NAV.Icon_Back_On();
    	$(".section_about").css('display', 'block');
    	
    	//Store_Tracking("sec_about");	
	},
		
		
	Show_Account: function() {
		
		NAV.Hide_All();
		NAV.Icon_Menu_Sel();
		NAV.Icon_Back_On();
   		$(".section_account").css('display', 'block');
   		
   		//Store_Tracking("sec_account");

	},
		
		
	Show_Board: function() {
		
		NAV.Hide_All();
		NAV.Icon_Gym_Sel();
    	$(".section_board").css('display', 'block');   
    	window.scrollTo({ top: 0, behavior: 'smooth' }); 
    	
    	//Store_Tracking("sec_board");

	},
		
		
	Show_Conf: function() {	
	
		Reset_Training();		
		NAV.Hide_All();
		NAV.Icon_Conf_Sel();
    	$(".section_conf").css('display', 'block');
    	
    	//Store_Tracking("sec_conf");

	},
		
		
	Show_Conf_Board: function() {

		NAV.Hide_All();
		NAV.Icon_Conf_Sel();
		NAV.Icon_Back_On();
    	$(".section_conf_board").css('display', 'block');
    	
    	//Store_Tracking("sec_conf_board");
    
	},
		
			
	Show_Conf_Idioma: function() {

		NAV.Hide_All();
		NAV.Icon_Conf_Sel();
		NAV.Icon_Back_On();
    	$(".section_conf_idioma").css('display', 'block');
    	
    	//Store_Tracking("sec_conf_idioma");
    
	},
		
		
	Show_Conf_Sounds: function() {

		NAV.Hide_All();
		NAV.Icon_Conf_Sel();
		NAV.Icon_Back_On();
    	$(".section_conf_sounds").css('display', 'block');
    	
    	//Store_Tracking("sec_conf_sounds");
    
	},
		
		
	Show_Conf_Treino: function() {

		NAV.Hide_All();
		NAV.Icon_Conf_Sel();
		NAV.Icon_Back_On();
    	$(".section_conf_treino").css('display', 'block');
    	
    	//Store_Tracking("sec_conf_treino");
    
	},
		

	Show_Days: function(id_mod) {

		NAV.Hide_All();
		NAV.Icon_Gym_Sel();
		NAV.Icon_Back_On();
		NAV.Build_Days(id_mod);
    	$(".section_days").css('display', 'block');
    	
    	//Store_Tracking("sec_days");
    
	},
		
		
	Show_Gym: function() {
		
		Reset_Training();
		NAV.Hide_All();
		NAV.Icon_Gym_Sel();
    	$(".section_home").css('display', 'block');
    	
    	//Store_Tracking("sec_home");

	},
		
		
	Show_Help: function() {
		
		Reset_Training();		
		NAV.Hide_All();
		NAV.Icon_Help_Sel();
    	$(".section_help").css('display', 'block');
    	
    	//Store_Tracking("sec_help");

	},
		
		
	Show_Help_Questions: function(categ) {
		
		NAV.Hide_All();
		NAV.Icon_Help_Sel();
		NAV.Icon_Back_On();
    	$(".section_help_questions").css('display', 'block');
    	
    	//Store_Tracking("sec_help_questions [" + categ + "]");

	},
		
		
	Show_Menu: function() {
		
		Reset_Training();
		NAV.Hide_All();
		NAV.Icon_Menu_Sel();
    	$(".section_menu").css('display', 'block');
    	
    	//Store_Tracking("sec_menu");

	},
		
		
	Show_Stats: function() {

		NAV.Hide_All();
		NAV.Icon_Gym_Sel();
		NAV.Icon_Back_On();
    	$(".section_stats").css('display', 'block');
    	
    	//Store_Tracking("sec_stats");

	},
		
		
	Show_Store: function() {
		
		Reset_Training();
		NAV.Hide_All();
		NAV.Icon_Store_Sel();
    	$(".section_mods_store").css('display', 'block');
    	
		//Store_Tracking("sec_store");

	},
		
		
	Show_Suporte: function() {
		
		NAV.Hide_All();
		NAV.Icon_Store_Sel();
		NAV.Icon_Back_On();
    	$(".section_suporte").css('display', 'block');
    	
		//Store_Tracking("suporte");	

	}		


/*
	function Store_Tracking(my_var) {
		
		var foo = new Tracking(my_var);

	}
*/	
	


}


