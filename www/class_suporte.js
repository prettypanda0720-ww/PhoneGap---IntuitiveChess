/************************************************************************************
 * 												     
 * 												     
 * 												    				  Class: Suporte
 * 												     
 * 												     
 * 												     
 ************************************************************************************/

"use strict";

var SUPP = {
	

	Send_Msg: function() {
	
	    var msg = document.getElementById("msg_suporte").value;  	    
		if (msg == "") { return; }	    
	         	
    	AJAX.Send_Msg(msg);
	
	}
	
	
	
	

}



function Show_Suporte() {

    Icons_Off();
    document.getElementById("msg_suporte").value = '';

    $("#alert_main").css        ('display', 'none');
    $("#area_input_msg").css    ('display', 'block');
    $(".section_suporte").css   ('display', 'block');

    var vars = ["leu_msgs", ID_APP];
    Ajax_Connect(vars);

    window.scrollTo({ top: 0, behavior: 'smooth' });

}

