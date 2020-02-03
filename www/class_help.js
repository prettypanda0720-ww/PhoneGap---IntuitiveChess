
/************************************************************************************								     
 * 												     
 * 												    				     Class: Help
 * 												     												     
 ************************************************************************************/
 
"use strict";

var HELP = {	
	
	questions_conta: [],
	answers_conta: [],
	questions_mods: [],
	answers_mods: [],
	questions_treino: [],
	answers_treino: [],
	questions_solucao: [],
	answers_solucao: [],
	
	pergs: [],
	resps: [],
	grupo: [],
	
	tot_help: 0,
	
		
	
	Populate_Help: function() {
	
	    HELP.pergs.push(LG.help_perg_1);
	    HELP.resps.push(LG.help_resp_1);
	    HELP.grupo.push('CON');
	
	    HELP.pergs.push(LG.help_perg_2);
	    HELP.resps.push(LG.help_resp_2);
	    HELP.grupo.push('CON');
	
	    HELP.pergs.push(LG.help_perg_3);
	    HELP.resps.push(LG.help_resp_3);
	    HELP.grupo.push('CON');
	
	    HELP.pergs.push(LG.help_perg_4);
	    HELP.resps.push(LG.help_resp_4);
	    HELP.grupo.push('DIV');
	
	    HELP.pergs.push(LG.help_perg_5);
	    HELP.resps.push(LG.help_resp_5);
	    HELP.grupo.push('MOD');
	
	    HELP.pergs.push(LG.help_perg_6);
	    HELP.resps.push(LG.help_resp_6);
	    HELP.grupo.push('MOD');
	
	    HELP.pergs.push(LG.help_perg_7);
	    HELP.resps.push(LG.help_resp_7);
	    HELP.grupo.push('MOD');
	
	    HELP.pergs.push(LG.help_perg_8);
	    HELP.resps.push(LG.help_resp_8);
	    HELP.grupo.push('MOD');
	
	    HELP.pergs.push(LG.help_perg_9);
	    HELP.resps.push(LG.help_resp_9);
	    HELP.grupo.push('MOD');
	
	    HELP.pergs.push(LG.help_perg_10);
	    HELP.resps.push(LG.help_resp_10);
	    HELP.grupo.push('TRN');    
	
	    HELP.pergs.push(LG.help_perg_11);
	    HELP.resps.push(LG.help_resp_11);
	    HELP.grupo.push('TRN');
	
	    HELP.pergs.push(LG.help_perg_12);
	    HELP.resps.push(LG.help_resp_12);
	    HELP.grupo.push('TRN');
	
	    HELP.pergs.push(LG.help_perg_13);
	    HELP.resps.push(LG.help_resp_13);
	    HELP.grupo.push('TRN');
	
	    HELP.pergs.push(LG.help_perg_14);
	    HELP.resps.push(LG.help_resp_14);
	    HELP.grupo.push('TRN');
	
	    HELP.pergs.push(LG.help_perg_15);
	    HELP.resps.push(LG.help_resp_15);
	    HELP.grupo.push('TRN');
	    
	    HELP.pergs.push(LG.help_perg_16);
	    HELP.resps.push(LG.help_resp_16);
	    HELP.grupo.push('TRN');    
	
	    HELP.pergs.push(LG.help_perg_17);
	    HELP.resps.push(LG.help_resp_17);
	    HELP.grupo.push('TRN');
	
	    HELP.pergs.push(LG.help_perg_18);
	    HELP.resps.push(LG.help_resp_18);
	    HELP.grupo.push('TRN');
	
	    HELP.pergs.push(LG.help_perg_19);
	    HELP.resps.push(LG.help_resp_19);
	    HELP.grupo.push('TRN');
	
	    HELP.pergs.push(LG.help_perg_20);
	    HELP.resps.push(LG.help_resp_20);
	    HELP.grupo.push('TRN');
	
	    HELP.pergs.push(LG.help_perg_21);
	    HELP.resps.push(LG.help_resp_21);
	    HELP.grupo.push('TRN');
	
	    HELP.tot_help = HELP.pergs.length;
	
	},
	
	
	Populate_Help_Questions: function(categ) {
	
	    var content = "";
	
	    if (categ == "modulos") {
	        for (var i = 0; i < HELP.tot_help; i++) {
	            if (HELP.grupo[i] == "MOD") {
	                content += HELP.HTML_Questions(i, HELP.pergs[i]);
	            }
	        }
	    }
	
	    if (categ == "treino") {
	        for (var i = 0; i < HELP.tot_help; i++) {
	            if (HELP.grupo[i] == "TRN") {
	                content += HELP.HTML_Questions(i, HELP.pergs[i]);
	            }
	        }
	    }
	
	    if (categ == "conta") {
	        for (var i = 0; i < HELP.tot_help; i++) {
	            if (HELP.grupo[i] == "CON") {
	                content += HELP.HTML_Questions(i, HELP.pergs[i]);
	            }
	        }
	    }
	
	    if (categ == "solucao") {
	        for (var i = 0; i < HELP.tot_help; i++) {
	            if (HELP.grupo[i] == "DIV") {
	                content += HELP.HTML_Questions(i, HELP.pergs[i]);
	            }
	        }
	    }
	
	    $("#help_questions_area").html(content);
	
	},
	
	
	Show_Help_Answer: function(ind, categ) {
	
	    var content;
	
	    if (categ == "modulos") {
	        content = HELP.HTML_Answers(HELP.questions_mods[ind], HELP.answers_mods[ind]);
	    }
	
	    if (categ == "treino") {
	        content = HELP.HTML_Answers(HELP.questions_treino[ind], HELP.answers_treino[ind]);
	    }
	
	    if (categ == "conta") {
	        content = HELP.HTML_Answers(HELP.questions_conta[ind], HELP.answers_conta[ind]);
	    }
	
	    if (categ == "solucao") {
	        content = HELP.HTML_Answers(HELP.questions_solucao[ind], HELP.answers_solucao[ind]);
	    }
	
	    $("#help_answers_area").html(content);
	
	    $(".section_help_questions").css    ('display', 'none');
	    $(".section_help_answers").css      ('display', 'block');
	
	},
	
	
		
	
	HTML_Answers: function(question, answer) {
	
	    return  '<div style="font-size: 2em; font-weight: bold; color: #ff6424;">' + question + '</div>' +
	            '<div style="padding: 20px 10px 10px 10px; line-height: 130%; color: #555555;">' + answer + '</div>';
	},
	
	
	HTML_Questions: function(ind, question) {
	
	    return '<div onclick="Show_Help(' + ind + ');" style="border-bottom: 1px solid #999999; padding: 10px 20px 10px 20px; color: #FFFFF0;">' + question + '</div>';
	
	},
	
	Show: function(ind) {	
        	
        $("#modal3_header").html(HELP.pergs[ind]);
        $("#modal3_body").html(HELP.resps[ind]);    
    	$("#show_modal3").click();		
		
	} 


}


