
/************************************************************************************
 * 												     
 * 												     
 * 												    				Class: My_Mods
 * 												     			         
 * 												     
 * 												     
 ************************************************************************************/

"use strict";




var MY_MODS = {

	Populate_Mods_Acquired: function() {
	
	    var content = "";
	    var count   = 0;
	
	    for (var i = 1; i < MAX_MODS_IDS; i++) {
	        if (localStorage.getItem("my" + i + "_str_exercs") !== null) {
	            content += MY_MODS.HTML_Mods_Acquired_Line(i);
	            count++;
	        }
	    }
	
	    if (count == 0) {
	        content = MY_MODS.HTML_No_Mods_Downloaded();
	    }
	
	    $("#area_mods").html(content);
	
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
	
	HTML_Mods_Acquired_Line: function(num) {
	
	    var tipo_down       = localStorage.getItem("my" + num + "_tipo_down");
	    var mod_titulo      = localStorage.getItem("my" + num + "_titulo");
	    var mod_categ_descr = localStorage.getItem("my" + num + "_categ_descr");
	    var mod_days        = localStorage.getItem("my" + num + "_days");
	    var cover_img       = localStorage.getItem("my" + num + '_cover_img');
	
	    var day = MY_MODS.Get_Current_Training_Day(mod_days);
	
	    if (day == 22) {
	        var status = LG.sec_gym_1;
	    } else {
	        var status = LG.sec_gym_2 + " " + day;
	    }
	
	    if (tipo_down == "A") {
	        mod_titulo = mod_titulo + " (" + LG.sec_gym_3 + ")";
	        if (day == 4) {
	            var status = LG.sec_gym_4;
	        } else {
	            var status = LG.sec_gym_2 + " " + day;
	        }
	    }
	
	    return  '<center><div class="store_box" style="min-height: 170px; padding: 5px 0px 0px 0px;">' +
	            '<div class="cover_img">' +
	            '<!-- <div style="float: right;"><i class="fa fa-times-circle" style="font-size: 18px; color: #AAAAAA; padding: 0px 6px 0px 0px;"></i></div> -->' +
	            '<img src="img/covers/' + cover_img + '" width="112" height="144" style="padding: 10px;" align="left">' +
	            '</div>' +
	            '<div class="modulo_titulo">' +
	            '<b>' + mod_titulo + '</b>' +
	            '</div>' +
	            '<div style="font-size: 1em; color: #333333; text-align: left; padding: 0px 0px 0px 10px;"><b>' + LG.sec_gym_9 + ':</b> ' + mod_categ_descr + '</div>' +
	            '<div class="modulo_descr2">' +
	            '<b>Status:</b> ' + status + '</div>' +
	            '<div style="padding: 30px 0px 0px 0px; text-align: left;">' +
	            '<button type="button" class="btn btn-success" style="font-size: 1em; font-weight: bold; margin-right: 10px; " onclick="Nav_Training_Clicked(' + num + ');">' + LG.sec_gym_5 + '</button>' +
	            '<button type="button" class="btn btn-warning" style="font-size: 1em; font-weight: bold;" onclick="Nav_Stats_Clicked(' + num + ');">' + LG.sec_gym_6 + '</button>' +
	            '<br><br>' +
	            '</div></div></center>';
	
	},
	
	
	HTML_No_Mods_Downloaded: function() {
	
	    return  '<div style="color: #EEEEEE; padding: 10px 0px 20px 0px;">' + LG.sec_gym_8 + ' ' +
	            '<i class="fa fa-sad-tear" style="font-size: 2em;"></i><br><br>' +
	            '<button type="button" class="btn btn-warning" style="width: 140px;" onclick="Nav_Store_Clicked();">' + LG.sec_gym_7 + '</button>' +
	            '</div>';
	
	}
	


	

}



