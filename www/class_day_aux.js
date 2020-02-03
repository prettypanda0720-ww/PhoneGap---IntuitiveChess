
/************************************************************************************
 * 												     
 * 												     
 * 												    			   		Class: Day_Aux
 * 												     
 * 												     
 * 												     
 ************************************************************************************/

"use strict";

var DAUX = {

	day: 0,
	tot_exercs: 0,
	

    Get_Letters: function() {
    
    	if ($.isNumeric(DAUX.day)) {
    		if (DAUX.day < 1 || DAUX.day > 21) {
    			return "ERR";
    		}
    	} else {
    		return "ERR";
    	}

    	if (DAUX.day == 1)   { return "AA";      }
    	if (DAUX.day == 2)   { return "BB";      }
    	if (DAUX.day == 3)   { return "AB";      }
    	if (DAUX.day == 4)   { return "CC";      }
    	if (DAUX.day == 5)   { return "DD";      }
    	if (DAUX.day == 6)   { return "CD";      }
    	if (DAUX.day == 7)   { return "ABCD";    }
    	if (DAUX.day == 8)   { return "EE";      }
    	if (DAUX.day == 9)   { return "FF";      }
    	if (DAUX.day == 10)  { return "EF";      }
    	if (DAUX.day == 11)  { return "GG";      }
    	if (DAUX.day == 12)  { return "HH";      }
    	if (DAUX.day == 13)  { return "GH";      }
    	if (DAUX.day == 14)  { return "EFGH";    }
    	if (DAUX.day == 15)  { return "AB";      }
    	if (DAUX.day == 16)  { return "CD";      }
    	if (DAUX.day == 17)  { return "EF";      }
    	if (DAUX.day == 18)  { return "GH";      }
    	if (DAUX.day == 19)  { return "ABCD";    }
    	if (DAUX.day == 20)  { return "EFGH";    }
    	if (DAUX.day == 21)  { return "ABCDEFGH";}
    	
    	return "ERR";

	},

	Get_Exercs_Day: function(letter, num) {    

	    if (num == 64) {
	        if (letter == "A") { return [1, 2, 3, 4, 5, 6, 7, 8]; }
	        if (letter == "B") { return [9, 10, 11, 12, 13, 14, 15, 16]; }
	        if (letter == "C") { return [17, 18, 19, 20, 21, 22, 23, 24]; }
	        if (letter == "D") { return [25, 26, 27, 28, 29, 30, 31, 32]; }
	        if (letter == "E") { return [33, 34, 35, 36, 37, 38, 39, 40]; }
	        if (letter == "F") { return [41, 42, 43, 44, 45, 46, 47, 48]; }
	        if (letter == "G") { return [49, 50, 51, 52, 53, 54, 55, 56]; }
	        if (letter == "H") { return [57, 58, 59, 60, 61, 62, 63, 64]; }
	    }

	    if (num == 48) {
	        if (letter == "A") { return [1, 2, 3, 4, 5, 6]; }
	        if (letter == "B") { return [7, 8, 9, 10, 11, 12]; }
	        if (letter == "C") { return [13, 14, 15, 16, 17, 18]; }
	        if (letter == "D") { return [19, 20, 21, 22, 23, 24]; }
	        if (letter == "E") { return [25, 26, 27, 28, 29, 30]; }
	        if (letter == "F") { return [31, 32, 33, 34, 35, 36]; }
	        if (letter == "G") { return [37, 38, 39, 40, 41, 42]; }
	        if (letter == "H") { return [43, 44, 45, 46, 47, 48]; }
	    }

	    if (num == 32) {
	        if (letter == "A") { return [1, 2, 3, 4]; }
	        if (letter == "B") { return [5, 6, 7, 8]; }
	        if (letter == "C") { return [9, 10, 11, 12]; }
	        if (letter == "D") { return [13, 14, 15, 16]; }
	        if (letter == "E") { return [17, 18, 19, 20]; }
	        if (letter == "F") { return [21, 22, 23, 24]; }
	        if (letter == "G") { return [25, 26, 27, 28]; }
	        if (letter == "H") { return [29, 30, 31, 32]; }
	    }

	    if (num == 24) {
	        if (letter == "A") { return [1, 2, 3]; }
	        if (letter == "B") { return [4, 5, 6]; }
	        if (letter == "C") { return [7, 8, 9]; }
	        if (letter == "D") { return [10, 11, 12]; }
	        if (letter == "E") { return [13, 14, 15]; }
	        if (letter == "F") { return [16, 17, 18]; }
	        if (letter == "G") { return [19, 20, 21]; }
	        if (letter == "H") { return [22, 23, 24]; }
	    }

	    if (num == 16) {
	        if (letter == "A") { return [1, 2]; }
	        if (letter == "B") { return [3, 4]; }
	        if (letter == "C") { return [5, 6]; }
	        if (letter == "D") { return [7, 8]; }
	        if (letter == "E") { return [9, 10]; }
	        if (letter == "F") { return [11, 12]; }
	        if (letter == "G") { return [13, 14]; }
	        if (letter == "H") { return [15, 16]; }
	    }

	},

	 
	Get_Tab_Exercs_Day: function() {
	
		var tab_ret = [];
	    var str_letters = DAUX.Get_Letters();
	    
	    if (str_letters == "ERR") {
	    	return ["Falta parâmetros", "Buuhh"];
	    }

		tab_ret.push("not used");
		
    	for (var i = 0; i < str_letters.length; i++) {
        	var list = DAUX.Get_Exercs_Day(str_letters[i], DAUX.tot_exercs);
        	tab_ret = tab_ret.concat(list);
    	}

    	return tab_ret;

	},


	Set_Training_Day: function(my_day, my_categ) {

		DAUX.day = my_day;
		
		if (my_categ == 1) { DAUX.tot_exercs = 64 }
		if (my_categ == 2) { DAUX.tot_exercs = 64 }
		if (my_categ == 3) { DAUX.tot_exercs = 32 }
		if (my_categ == 4) { DAUX.tot_exercs = 16 }
		if (my_categ == 5) { DAUX.tot_exercs = 64 }
		if (my_categ == 6) { DAUX.tot_exercs = 32 }

	}


}
