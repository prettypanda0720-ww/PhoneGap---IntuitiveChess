/************************************************************************************
 * 												     
 * 												     
 * 												    					Class: Quote
 * 												     
 * 												     
 * 												     
 ************************************************************************************/

"use strict";

var QUOTE = {


	Print: function() {
		
		//console.log(LG_ESP.tab_quotes[1]);
		
    	var sel = Random(0, LG.tab_quotes.length - 1);
    	
    	var arr = LG.tab_quotes[sel].split("~~~");

    	$("#quote_text").html('"' + arr[0] + '"');
    	$("#quote_sign").html(arr[1]);
    	
	}


}
