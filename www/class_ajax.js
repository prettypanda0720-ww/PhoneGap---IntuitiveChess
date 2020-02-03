
/************************************************************************************

 * 												    					Class: Ajax

 ************************************************************************************/

"use strict";


var AJAX = {

	Connect: function (vars) {

    	$.ajax({
        	url: "https://intuitivechessapp.com/" + VERSION_DIR + "/back/back.php",
        	method: "POST",
        	data: { version: VERSION_DIR,
                	id_app:  ID_APP,
                    action:  vars[0],
                             p1:  vars[1],
                             p2:  vars[2],
                             p3:  vars[3],
                             p4:  vars[4],
                             p5:  vars[5],
                             p6:  vars[6],
                             p7:  vars[7],
                             p8:  vars[8],
                             p9:  vars[9],
                             p10: vars[10],
                             p11: vars[11],
                             p12: vars[12],
                             p13: vars[13],
                             p14: vars[14],
                             p15: vars[15] 
                    },
        	success: (function (result) {
        		if (vars[0] == "update_store") {
        			STORE.Populate_Store(result);
        		}
        		if (vars[0] == "down_mod" || vars[0] == "down_amostra") {
        			var foo = new Download(result);
        		}
        		if (vars[0] == "new_cadastro") {
        			AJAX.Handle_Retorno_Cadastro(result);	
        		}
				if (vars[0] == "suporte") {
					AJAX.Handle_Retorno_Send_Suporte(result);				
				}        		
				if (vars[0] == "new_user") {
					AJAX.Handle_Retorno_New_User(result);				
				}          		
				if (vars[0] == "check_msg_suporte") {
					AJAX.Handle_Retorno_Msg_Suporte(result);				
				}      
				return true;        		
         	}),
        	fail: (function () {
				return false;
        	})
    	});

	},
	
	
	Handle_Retorno_Cadastro: function (result) {
	
	    var arr = result.split("~");
	
	    if (arr[0].trim() == "OK") {
	        $("#modal2_header").html(LG.tit_modal_msg);
	        $("#modal2_body").html(LG.conta_vinculada);
	        $("#show_modal2").click();	 	        
	        localStorage.setItem('cadastro', 'OK');
			NAV.Show_Gym();
	    } else {
	        $("#modal2_header").html(LG.tit_modal_msg);
	        $("#modal2_body").html(LG.erro_gravar_cad);
	        $("#show_modal2").click();	    	
	    }
		
	},

	
	Handle_Retorno_Msg_Suporte: function (result) {
	
	    var saida       = "";
	    var tot_alerts  = 0;
	    var arr         = result.split("|");
	
	    if (arr[0].trim() == "OK") {
	        tot_alerts = arr[1];
	        for (var i = 2; i < arr.length - 1; i++) {
	            if (arr[i] != null) {
	                var line = arr[i].split("~");
	                saida += HTML_Chat_Suporte(i, line[1], line[2], line[3], line[4]);
	            }
	        }
	        $("#suporte_area").html(saida);
	    }
	
	    if (tot_alerts > 0) {
	        $('#alert_main').attr("data-badge", tot_alerts)
	        $("#alert_main").css('display', 'block');
	    }
	
	},

	
	Handle_Retorno_New_User: function (result) {
	
	    var arr = result.split("~");
	
	    if (arr[0].trim() == "OK") {
	        localStorage.setItem('id_app', ID_APP);
	    } else {
	        $("#modal2_header").html(LG.tit_modal_msg);
	        $("#modal2_body").html(LG.conexao_acesso_1);
	        $("#show_modal2").click();
	    }
	
	},
	
	

	
	Handle_Retorno_Send_Suporte: function (result) {
	
	    var arr = result.split("~");
	
	    if (arr[0].trim() == "OK") {
	    	AJAX.Check_New_Messages();
	        $("#modal2_header").html(LG.tit_modal_msg);
	        $("#modal2_body").html(LG.msg_suporte_recebida);
	        $("#show_modal2").click();
	    } else {
	        $("#modal2_header").html(LG.tit_modal_msg);
	        $("#modal2_body").html(LG.msg_suporte_falhou + ": " + result);
	        $("#show_modal2").click();
	    }
	
	},
	
		
		
	HTML_Chat_Suporte: function (ind, pergunta, resposta, data_perg, data_resp) {
	
	    if (ind % 2 === 0) {
	        var cla1 = "chat_box_user";
	        var cla2 = "chat_box_ic";
	    } else {
	        var cla1 = "chat_box_user_alt";
	        var cla2 = "chat_box_ic_alt";
	    }
	
	    var perg =  '<div style="font-size: 1em; color: #FFFFFF; text-align: left; padding: 0px 0px 0px 10px;"><i>Você:</i></div>' +
	                '<div style="clear: both;"></div>' +
	                '<div class="' + cla1 + '">' + pergunta +
	                '<div style="font-size: 11px; color: #777777; padding: 10px 0px 0px 0px; float: right;">' + data_perg + '</div>' +
	                '<div style="clear: both;"></div>' +
	                '</div>' +
	                '<div style="clear: both;"></div>';
	
	    var resp =  '<div style="font-size: 1em; color: #FFFFFF; text-align: right; padding: 20px 10px 0px 0px;">Intuitive Chess:</div>' +
	                '<div class="' + cla2 + '">' + resposta +
	                '<div style="font-size: 0.7em; color: #777777; padding: 10px 0px 0px 0px; float: right;">' + data_resp + '</div>' +
	                '<div style="clear: both;"></div>' +
	                '</div><div style="clear: both;">';
	
	    if (resposta == "") {
	        return perg;
	    } else {
	        return resp + perg;
	    }
	
	},
	

	
	Check_New_Messages: function() {
	
		var vars = ["check_msg_suporte"];
		AJAX.Connect(vars);
			
	},
	
	Download_Amostra: function(id_mod) {
	
		var vars = ["down_amostra", id_mod];
		AJAX.Connect(vars);	
		
	},
		
	Download_Mod: function(id_mod) {
	
		var vars = ["down_mod", id_mod];
		AJAX.Connect(vars);	
		
	},
		
	Upload_ID_App: function() {
	
		var os = 1; // ******************************* ANDROID
		
		var vars = ["new_user", os];
		AJAX.Connect(vars);

	},

	Upload_Acesso: function() {

    	var vars = ["novo_acesso", ID_APP, VERSION + "." + RELEASE, CEL_WIDTH, CEL_APPCODENAME, CEL_APPNAME, CEL_APPVERSION,
                    CEL_COOKIEENABLED, CEL_LANGUAGE, CEL_PLATFORM, CEL_USERAGENT, CEL_ONLINE];
    	AJAX.Connect(vars);

	},

	Update_Store: function() {

		var vars = ["update_store"];
		AJAX.Connect(vars);

	},
		
	Save_Cadastro: function(user_name, user_email, user_country, user_sexo, user_nasc_dd, user_nasc_mm, user_nasc_aa, user_idioma) {
	
		var vars = ["new_cadastro", user_name, user_email, user_country, user_sexo, user_nasc_dd, user_nasc_mm, user_nasc_aa, user_idioma];
		AJAX.Connect(vars);				

	},

	Send_Msg: function(msg) {

		var vars = ["suporte", msg];
		AJAX.Connect(vars);
	
	}
		


}

