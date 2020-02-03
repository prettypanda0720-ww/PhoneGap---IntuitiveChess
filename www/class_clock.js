
/************************************************************************************
 * 												     
 * 												     
 * 												    					Class: Clock
 * 												     
 * 												     
 * 												     
 ************************************************************************************/

"use strict";


var CLOCK = {

	clock_ini: 0,
	clock_fim: 0,
	
	time_control: "",
	
	Clock_Update: function() {
	    
	    var minutes = 0;
	    var seconds = 0;
	
	    var diff = TIME_PER_EXERC - (((Date.now() - CLOCK.clock_ini) / 1000) | 0);   
	    
	    if (diff == 0) {            																												// tempo esgotado	        
	        CLOCK.Off();
	        $("#clock").html('<span style="color: #CC0000">00:00</span>');
	    } else {
	        minutes = (diff / 60) | 0;
	        seconds = (diff % 60) | 0;
	        minutes = minutes < 10 ? "0" + minutes : minutes;
	        seconds = seconds < 10 ? "0" + seconds : seconds;    
	        $("#clock").html(minutes + ":" + seconds);         
	    }
	
	},
	
	
	On: function() {
	
	    CLOCK.clock_ini = Date.now();
	    CLOCK.Clock_Update();
	    CLOCK.time_control = setInterval(CLOCK.Clock_Update, 1000);
	
	},

	Off: function() {
	
	    CLOCK.clock_fim = Date.now();
	    clearInterval(CLOCK.time_control);
	
	},
	
	Get_Time_Spent: function() {
	
	    var time_spent  = CLOCK.clock_fim - CLOCK.clock_ini;
	    var time_secs   = parseInt(time_spent / 1000);
	    
	    return time_secs;
	
	},

    Reset: function() {

        CLOCK.clock_ini = 0;
        CLOCK.clock_fim = 0;
	    clearInterval(CLOCK.time_control);

    }

};





