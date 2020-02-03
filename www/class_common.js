
/************************************************************************************								     
 * 												     
 * 												    				Class: Common
 * 												     												     
 ************************************************************************************/

"use strict";


const BOARD_BORDER = 2;


const DELAY = {
	inicial: 		1000,
	clear_graph: 	1500,
	clear_msg: 		3000,
	clear_msg_lg: 	3500,
	clear_seq: 		1000,
	clear_tip: 		2000,
	next_graph: 	500,
	next_seq: 		800,	
	square: 		300,
	tot: 			300
}


const COLOR = {
	black:			"#000000",
	blue:			"#0099CC",
	grey:			"#CCCCCC",
	green:			"#168E22",
	light_grey:		"#CCCCCC",
	orange:			"#FF6600",
	pink:			"#FF00FF",
	purple:			"#800080",
	red:			"#FF0000",
	teal:			"#008080",
	violet:			"#9933FF",
	wine:			"#CC0000",
	white:			"#FFFFFF",
	yellow:			"#EBEB00"
}


const ERROS_SHOW_SOLUTION 	= 3;
const MAX_MODS_IDS			= 50;		// número máximo de módulos que o app busca no localStorage (que o usuário pode adquirir)
const TIME_PER_EXERC      	= 180;


const MSGS_UPDATE_FREQ     	= 0.5;  	// em minutos
const QUOTES_UPDATE_FREQ  	= 0.250;  	// em minutos
const STORE_UPDATE_FREQ   	= 15;   	// em minutos
const TRACKING_FREQ			= 0.5		// em minutos
		

const COLUMNS         	= "abcdefgh";
const COLUMNS_FLIP    	= "hgfedcba";
const ROWS            	= "87654321";
const ROWS_FLIP       	= "12345678";

const START_POSITION  	= "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";



var params_board = {
    orientation:    'white',
    showErrors:     'alert',
    draggable:      false,
    dropOffBoard:   'snapback',
    position:       START_POSITION,
    showNotation:   true
};
   


function Ajusta_Nav_Board(last_action) {

    if (last_action == "starting") {
        $('#area_alt_2but').css('display', 'none');
        $('#area_alt_3but').css('display', 'none');
        $('#area_but_go').css('display', 'none');
        $('#sec_control').css('display', 'block');
        return;
    }

    if (last_action == "but_alt_clicked") {
        $('#area_alt_2but').css('display', 'none');
        $('#area_alt_3but').css('display', 'none');
        $('#sec_control').css('display', 'block');
        return;
    }

    if (last_action == "fim_da_alternativa") {
        $('#sec_control').css('display', 'none');
        $('#area_but_go').css('display', 'block');
        return;
    }

    if (last_action == "fim_da_alternativa_clicked") {
        $('#area_but_go').css('display', 'none');

        if (GRAPH.tot_alts == 1) {
            $('#area_alt_2but').css('display', 'block');
        } else {
            $('#area_alt_3but').css('display', 'block');
        }
        return;
    }


}




function Click_Button_Alt(exerc_id) {

    Ajusta_Nav_Board("but_alt_clicked");

    console.log("Alternativa: " + exerc_id);

    if (Alternativa_Correta(exerc_id)) {
        if (ID_APP == "admin") {
            Click_Next_Move();
        } else {
            EXERC.Show_Next_Half();
        }
    } else {
        if (ID_APP == "admin") {
            Save_Main_Line();
            Load_This_Alternativa(exerc_id);
            Build_Array_Halfs();
            Click_Next_Move();
        } else {
            EXERC.Save_Main_Line();
            EXERC.Load_This_Alternativa(exerc_id);
            EXERC.Build_Array_Halfs();
            EXERC.Show_Next_Half();
        }

    }

}




function Alternativa_Correta(exerc_id) {

    if (ID_APP == "admin") {
        if (exerc_id == MOD.cur_exerc) {
            return true;
        } else {
            return false;
        }
    } else {
        if (exerc_id == EXERC.id) {
            return true;
        } else {
            return false;
        }
    }


}



function Click_Fim_Alternativa() {

    if (ID_APP == "admin") {
        Restore_Main_Line();
        Ajusta_Nav_Board("fim_da_alternativa_clicked");
    }  else {
        EXERC.Restore_Main_Line();
        Ajusta_Nav_Board("fim_da_alternativa_clicked");
    }




}




















