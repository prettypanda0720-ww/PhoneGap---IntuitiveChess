
/************************************************************************************
 * 												     
 * 												     
 * 												    				Class: Tracking
 * 												     			         
 * 												     
 * 												     
 ************************************************************************************/
 
"use strict";

var Tracking = function(my_var) {
	
	var now     = new Date(Date.now());
	var dia     = Pad(now.getDate(), 2);
	var mes     = Pad(now.getMonth() + 1, 2);
	var ano     = now.getFullYear();
	var hora    = Pad(now.getHours(), 2);
	var minu    = Pad(now.getMinutes(), 2);
	var seg     = Pad(now.getSeconds(), 2);

	var my_data = ano + "-" + mes + "-" + dia + " " + hora + ":" + minu + ":" + seg;

    my_var = my_data + "=" + my_var;

	var my_old = localStorage.getItem("tracking");
	
	if (my_old) {
		var my_new = my_old + ',' + my_var;
	 } else {
	 	var my_new = my_var;
	 }	
		
	localStorage.setItem("tracking", my_new);
	


}
