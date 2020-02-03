
/************************************************************************************
 * 												     
 * 												     
 * 												    				  Class: Download
 * 												     
 * 												     
 * 												     
 ************************************************************************************/

"use strict";


var Download = function(result) {	

    result      = result.trim();
    var arr_ret = result.split("~~~");

    var mod_name  	= arr_ret[0];
    var mod_titulo	= arr_ret[3];
    
    localStorage.setItem(mod_name + '_tipo_down', arr_ret[1]);
    localStorage.setItem(mod_name + '_edition', arr_ret[2]);
    localStorage.setItem(mod_name + '_titulo', arr_ret[3]);
    localStorage.setItem(mod_name + '_descr', arr_ret[4]);    
    localStorage.setItem(mod_name + '_tipo', arr_ret[5]);
    localStorage.setItem(mod_name + '_categ_cod', arr_ret[6]);
    localStorage.setItem(mod_name + '_categ_descr', arr_ret[7]);    
    localStorage.setItem(mod_name + '_tot_exercs', arr_ret[8]);        
    localStorage.setItem(mod_name + '_str_exercs', arr_ret[9]);        
    localStorage.setItem(mod_name + '_txt_intro_POR', arr_ret[10]);
    localStorage.setItem(mod_name + '_txt_days_POR', arr_ret[11]);
    localStorage.setItem(mod_name + '_txt_final_POR', arr_ret[12]);
    localStorage.setItem(mod_name + '_txt_intro_ENG', arr_ret[13]);
    localStorage.setItem(mod_name + '_txt_days_ENG', arr_ret[14]);
    localStorage.setItem(mod_name + '_txt_final_ENG', arr_ret[15]);
    localStorage.setItem(mod_name + '_cover_img', arr_ret[16]);
        
	var str_acertos     = "";
    var str_tempo       = "";

    for (var i = 0; i < arr_ret[8]; i++) {
        str_acertos     = str_acertos   + "X,X,X,X,X,X,X~";
        str_tempo       = str_tempo     + "X,X,X,X,X,X,X~";
    }    
        
    localStorage.setItem(mod_name + '_acertos', str_acertos);
    localStorage.setItem(mod_name + '_tempo', str_tempo);
    localStorage.setItem(mod_name + '_days', "0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~");

    MY_MODS.Populate_Mods_Acquired();
    AJAX.Update_Store();

    
    var my_temp = LG.down_modulo_ok.replace("@MOD_TITULO", mod_titulo);

    $("#modal2_header").html(LG.tit_modal_msg);
    $("#modal2_body").html(my_temp);
    $("#show_modal2").click();
	


}

