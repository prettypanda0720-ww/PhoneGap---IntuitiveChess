/************************************************************************************
 * 												     
 * 												     
 * 												    					Class: Buttons
 * 												     			         Control Board
 * 												     
 * 												     
 ************************************************************************************/

"use strict";


var Buttons = function(arg1, arg2, arg3, arg4, arg5, arg6) {
	
	
	
	var but_cur_exerc 		= arg1;
	var but_ind_half		= arg2;
	var but_tot_halfs 		= arg3;	
	var but_last_done 		= arg4;
	var but_user_turn		= arg5;
	var but_is_exercing		= arg6;	
	
	var but_board_on    	= "#00ff00";
	var but_board_off   	= "#777777";


	if (MOD.tipo == 0 || but_cur_exerc == 0) {
		But_Board_Off();
	} else {
		Handle_But_Board();
	}

	
	
	function Handle_But_Board() {

    	But_Board_Off();
    	But_Board_1_On();
    	But_Board_2_On();
    	But_Board_3_On();
    	But_Board_4_On();
    	But_Board_5_On();

	}


	function But_Board_Off() {

    	$("#but_board_1").css('color', but_board_off);
    	$("#but_board_2").css('color', but_board_off);
    	$("#but_board_3").css('color', but_board_off);
    	$("#but_board_4").css('color', but_board_off);
    	$("#but_board_5").css('color', but_board_off);

    	BUTTONS.but_1 = false;
    	BUTTONS.but_2 = false;
    	BUTTONS.but_3 = false;
    	BUTTONS.but_4 = false;
    	BUTTONS.but_5 = false;

	}	


	function But_Board_1_On() {

    	if (MOD.tipo == 1) {
        	if (but_cur_exerc > 1) {
            	$("#but_board_1").css('color', but_board_on);
            	BUTTONS.but_1 = true;
        	}
    	} else {
        	if (but_cur_exerc > 1) {
            	$("#but_board_1").css('color', but_board_on);
            	BUTTONS.but_1 = true;
        	}
    	}

	}


	function But_Board_2_On() {

    	if (MOD.tipo == 2) {
        	if (but_ind_half > 0) {
            	$("#but_board_2").css('color', but_board_on);
            	BUTTONS.but_2 = true;
        	}
    	} else {
        	if (but_ind_half > 0) {
            	$("#but_board_2").css('color', but_board_on);
            	BUTTONS.but_2 = true;
        	}
    	}

	}


	function But_Board_3_On() {

    	if (MOD.tipo == 2) {
        	if (but_ind_half == but_tot_halfs && !but_is_exercing) {
            	$("#but_board_3").css('color', but_board_on);
            	BUTTONS.but_3 = true;
        	}
    	} else {
        	if (but_ind_half == but_tot_halfs && !but_user_turn) {
            	$("#but_board_3").css('color', but_board_on);
            	BUTTONS.but_3 = true;
        	}
    	}

	}


	function But_Board_4_On() {

    	if (MOD.tipo == 2) {
        	if (but_ind_half >= but_tot_halfs) {
            	return;
        	}
        	$("#but_board_4").css('color', but_board_on);
        	BUTTONS.but_4 = true;
    	} else {
        	if (but_last_done >= but_cur_exerc) {
            	if (but_ind_half < but_tot_halfs) {
                	$("#but_board_4").css('color', but_board_on);
                	BUTTONS.but_4 = true;
            	}
        	}
    	}

	}


	function But_Board_5_On() {


    	if (MOD.tipo == 2) {
        	if (!but_is_exercing) {
            	$("#but_board_5").css('color', but_board_on);
            	BUTTONS.but_5 = true;
        	}
    	} else {
        	if (!but_user_turn) {
            	$("#but_board_5").css('color', but_board_on);
            	BUTTONS.but_5 = true;
        	}
    	}

	}


	 
}



