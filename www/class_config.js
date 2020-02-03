
/************************************************************************************
 * 												     
 * 												     
 * 												    					Class: Config
 * 												     
 * 												     
 * 												     
 ************************************************************************************/

"use strict";


var CONF = {

	lang: "POR",	
	theme: "default",
	sound_moves: "on",
	sound_msgs: "on",
	sound_keys: "on",
	notifications: "on",

	lang_default: "POR",
	theme_default: "default",
	sound_moves_default: "on",
	sound_msgs_default: "on",
	sound_keys_default: "on",
	notifications_default: "on",		



	Update_Conf_Page: function() {
	
	    CONF.Toggle_Config("sound_moves",   CONF.sound_moves);
    	CONF.Toggle_Config("sound_msgs",   	CONF.sound_msgs);
    	CONF.Toggle_Config("sound_keys",  	CONF.sound_keys);
    	CONF.Toggle_Config("notifications",	CONF.notifications);
	
	},

	
	Toggle_Config: function(tag, status) {

    	if (status == "off") {
        	$("#" + tag).html('<img src="img/toggle_off.png" style="margin: 0px 10px 0px 0px;" width="60" height="26">');
    	} else {
        	$("#" + tag).html('<img src="img/toggle_on.png" style="margin: 0px 10px 0px 0px;" width="60" height="26">');
    	}

	},





	Set_User_Config_Default: function() {
		
		//console.log("Set_User_Config_Default" + CONF.lang_default);

		CONF.lang       	= CONF.lang_default;
    	CONF.theme         	= CONF.theme_default;    
    	CONF.sound_moves   	= CONF.sound_moves_default;
    	CONF.sound_msgs    	= CONF.sound_msgs_default;
    	CONF.sound_keys    	= CONF.sound_keys_default;
    	CONF.notifications 	= CONF.notifications_default;

    	localStorage.setItem('conf_lang',       CONF.lang);
		localStorage.setItem('conf_theme',		 CONF.theme);
    	localStorage.setItem('sound_moves',     CONF.sound_moves);
    	localStorage.setItem('sound_msgs',      CONF.sound_msgs);
    	localStorage.setItem('sound_keys',      CONF.sound_keys);
    	localStorage.setItem('notifications',   CONF.notifications);	

	},
	


	Set_To_Default: function() {	
	
		CONF.Set_User_Config_Default();	
		CONF.Update_Conf_Page();	
	
	},
		
	Set_User_Config: function() {
		
		//console.log("3: " + localStorage.getItem('conf_lang'));
		//console.log("3: " + localStorage.getItem('conf_theme'));
		
		CONF.lang       	= localStorage.getItem('conf_lang');
    	CONF.theme         	= localStorage.getItem('conf_theme');    	
    	CONF.sound_moves  	= localStorage.getItem('sound_moves');
    	CONF.sound_msgs   	= localStorage.getItem('sound_msgs');
    	CONF.sound_keys    	= localStorage.getItem('sound_keys');    	
    	CONF.notifications	= localStorage.getItem('notifications');
    	
		CONF.Update_Conf_Page();
		
	}


}




