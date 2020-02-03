
/************************************************************************************								     
 * 												     
 * 												    				Class: Audio
 * 												     												     
 ************************************************************************************/

"use strict";

const sound_moves  		= Build_Sound("img/aud/move2.wav");		
const sound_capture 	= Build_Sound("img/aud/move2.wav");
const sound_congrat		= Build_Sound("img/aud/end_day.wav");
const sound_click    	= Build_Sound("img/aud/tic.wav");
const sound_intro  		= Build_Sound("img/aud/end_day.wav");
const sound_invalid  	= Build_Sound("img/aud/bleep.mp3");
const sound_ok       	= Build_Sound("img/aud/bell.mp3");
const sound_wrong    	= Build_Sound("img/aud/wrong.wav"); 


var AUD = {

	Play: function(tipo) {	
	
		if (tipo == 'moves') 		{ sound_moves.playclip(); }	
		if (tipo == 'congrat') 		{ sound_congrat.playclip(); }	
		if (tipo == 'click') 		{ sound_click.playclip(); }	
		if (tipo == 'intro') 		{ sound_intro.playclip(); }	
		if (tipo == 'invalid') 		{ sound_invalid.playclip(); }	
		if (tipo == 'ok') 			{ sound_ok.playclip(); }	
		if (tipo == 'wrong') 		{ sound_wrong.playclip(); }	
		
	}	

};


function Build_Sound(_file) {
		
	var audio_types = {
	    "mp3": "audio/mpeg",
	    "mp4": "audio/mp4",
	    "ogg": "audio/ogg",
	    "wav": "audio/wav"
	}
	
	var audio_element = document.createElement('audio')
	
	if (audio_element.canPlayType) {
	    	
	for (var i = 0; i < arguments.length; i++) {
		var source_element = document.createElement('source');
	    	source_element.setAttribute('src', arguments[i]);
	        if (arguments[i].match(/\.(\w+)$/i)) {
	        	source_element.setAttribute('type', audio_types[RegExp.$1]);
	            audio_element.appendChild(source_element);
	        }
	    }
	        
	    audio_element.load();    
	            
	    audio_element.playclip = function () {            
	       	audio_element.pause();
	        audio_element.currentTime = 0;
	        audio_element.play();
	    }
	
	    return audio_element;
	}
	
}   

