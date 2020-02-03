
/************************************************************************************
 * 												     
 * 												     
 * 												    					Class: Graph
 * 												     
 * 												     
 * 												     
 ************************************************************************************/

"use strict";




var GRAPH = {

	tot_alts: 0,

	stack: [],


    Reset: function() {
 	    GRAPH.tot_alts = 0;
	    GRAPH.stack = [];
    },


	Clear_Layer: function () {

    	LAYER.clearRect(0, 0, SQUARE_WIDTH * 8 + 4, SQUARE_WIDTH * 8 + 4);

	},


	Clear_Square: function (square) {

    	var sq = GRAPH.Get_XY(square);
    	LAYER.clearRect(sq.x, sq.y, SQUARE_WIDTH, SQUARE_WIDTH);

	},
	
	
	Print_Comms: function (my_comm) {

    	if (typeof my_comm == null || my_comm == "") { return; }

    	var cmd     = my_comm.substring(0, 3);
    	var param   = my_comm.substring(3);
    	var param   = param.slice(1, -1);  // elimina parentesis

        if (cmd === "TIP") { return GRAPH.Handle_Command_Tip(param); }

        if (cmd === "ARR") { return GRAPH.Handle_Command_ARROW(param, COLOR.red); }
        if (cmd === "ARG") { return GRAPH.Handle_Command_ARROW(param, COLOR.green); }
        if (cmd === "ARO") { return GRAPH.Handle_Command_ARROW(param, COLOR.orange); }
        if (cmd === "ARB") { return GRAPH.Handle_Command_ARROW(param, COLOR.blue); }
        if (cmd === "ARP") { return GRAPH.Handle_Command_ARROW(param, COLOR.pink); }
        if (cmd === "ARV") { return GRAPH.Handle_Command_ARROW(param, COLOR.violet); }
        if (cmd === "ARY") { return GRAPH.Handle_Command_ARROW(param, COLOR.yellow); }
        if (cmd === "ARZ") { return GRAPH.Handle_Command_ARROW(param, COLOR.grey); }

        if (cmd === "CIR") { return GRAPH.Handle_Command_CIRCLE(param, COLOR.red); }
        if (cmd === "CIG") { return GRAPH.Handle_Command_CIRCLE(param, COLOR.green); }
        if (cmd === "CIO") { return GRAPH.Handle_Command_CIRCLE(param, COLOR.orange); }
        if (cmd === "CIB") { return GRAPH.Handle_Command_CIRCLE(param, COLOR.blue); }
        if (cmd === "CIP") { return GRAPH.Handle_Command_CIRCLE(param, COLOR.pink); }
        if (cmd === "CIV") { return GRAPH.Handle_Command_CIRCLE(param, COLOR.violet); }
        if (cmd === "CIY") { return GRAPH.Handle_Command_CIRCLE(param, COLOR.yellow); }
        if (cmd === "CIZ") { return GRAPH.Handle_Command_CIRCLE(param, COLOR.grey); }

        if (cmd === "SQR") { return GRAPH.Handle_Command_SQUARE(param, COLOR.red); }
        if (cmd === "SQG") { return GRAPH.Handle_Command_SQUARE(param, COLOR.green); }
        if (cmd === "SQO") { return GRAPH.Handle_Command_SQUARE(param, COLOR.orange); }
        if (cmd === "SQB") { return GRAPH.Handle_Command_SQUARE(param, COLOR.blue); }
        if (cmd === "SQP") { return GRAPH.Handle_Command_SQUARE(param, COLOR.pink); }
        if (cmd === "SQV") { return GRAPH.Handle_Command_SQUARE(param, COLOR.violet); }
        if (cmd === "SQY") { return GRAPH.Handle_Command_SQUARE(param, COLOR.yellow); }
        if (cmd === "SQZ") { return GRAPH.Handle_Command_SQUARE(param, COLOR.grey); }

        if (cmd === "BLR") { return GRAPH.Handle_Command_BULLET(param, COLOR.red); }
        if (cmd === "BLG") { return GRAPH.Handle_Command_BULLET(param, COLOR.green); }
        if (cmd === "BLO") { return GRAPH.Handle_Command_BULLET(param, COLOR.orange); }
        if (cmd === "BLB") { return GRAPH.Handle_Command_BULLET(param, COLOR.blue); }
        if (cmd === "BLP") { return GRAPH.Handle_Command_BULLET(param, COLOR.pink); }
        if (cmd === "BLV") { return GRAPH.Handle_Command_BULLET(param, COLOR.violet); }
        if (cmd === "BLY") { return GRAPH.Handle_Command_BULLET(param, COLOR.yellow); }
        if (cmd === "BLZ") { return GRAPH.Handle_Command_BULLET(param, COLOR.grey); }

        if (cmd === "PSR") { return GRAPH.Handle_Command_PAINT_SQUARE(param, COLOR.red); }
        if (cmd === "PSG") { return GRAPH.Handle_Command_PAINT_SQUARE(param, COLOR.green); }
        if (cmd === "PSO") { return GRAPH.Handle_Command_PAINT_SQUARE(param, COLOR.orange); }
        if (cmd === "PSB") { return GRAPH.Handle_Command_PAINT_SQUARE(param, COLOR.blue); }
        if (cmd === "PSP") { return GRAPH.Handle_Command_PAINT_SQUARE(param, COLOR.pink); }
        if (cmd === "PSV") { return GRAPH.Handle_Command_PAINT_SQUARE(param, COLOR.violet); }
        if (cmd === "PSY") { return GRAPH.Handle_Command_PAINT_SQUARE(param, COLOR.yellow); }
        if (cmd === "PSZ") { return GRAPH.Handle_Command_PAINT_SQUARE(param, COLOR.grey); }

        if (cmd === "PCR") { return GRAPH.Handle_Command_PAINT_CIRCLE(param, COLOR.red); }
        if (cmd === "PCG") { return GRAPH.Handle_Command_PAINT_CIRCLE(param, COLOR.green); }
        if (cmd === "PCO") { return GRAPH.Handle_Command_PAINT_CIRCLE(param, COLOR.orange); }
        if (cmd === "PCB") { return GRAPH.Handle_Command_PAINT_CIRCLE(param, COLOR.blue); }
        if (cmd === "PCP") { return GRAPH.Handle_Command_PAINT_CIRCLE(param, COLOR.pink); }
        if (cmd === "PCV") { return GRAPH.Handle_Command_PAINT_CIRCLE(param, COLOR.violet); }
        if (cmd === "PCY") { return GRAPH.Handle_Command_PAINT_CIRCLE(param, COLOR.yellow); }
        if (cmd === "PCZ") { return GRAPH.Handle_Command_PAINT_CIRCLE(param, COLOR.grey); }

    	if (cmd === "AMC") { return GRAPH.Handle_Command_Ameacando(param); }
    	if (cmd === "ATQ") { return GRAPH.Handle_Command_Atacando(param);  }
    	if (cmd === "BLQ") { return GRAPH.Handle_Command_Bloqueando(param); }
    	if (cmd === "IDE") { return GRAPH.Handle_Command_Ideia(param); }
    	if (cmd === "CTR") { return GRAPH.Handle_Command_Controlando(param); }
    	if (cmd === "CRV") { return GRAPH.Handle_Command_Cravando(param); }
    	if (cmd === "DEF") { return GRAPH.Handle_Command_Defendendo(param); }
    	if (cmd === "PRS") { return GRAPH.Handle_Command_Pressionando(param); }

    	if (cmd === "VAR") { return GRAPH.Handle_Command_Variante(param); }
    	if (cmd === "BAD") { return GRAPH.Handle_Command_Lance_Ruim(param); }
    	if (cmd === "DUV") { return GRAPH.Handle_Command_Lance_Duvidoso(param); }
    	if (cmd === "EXC") { return GRAPH.Handle_Command_Lance_Excelente(param); }
    	if (cmd === "MSG") { return GRAPH.Handle_Command_Mensagem(param); }

    	if (cmd === "ATV") { return GRAPH.Handle_Command_Peca_Ativa(param); }
    	if (cmd === "PSV") { return GRAPH.Handle_Command_Peca_Passiva(param); }
    	if (cmd === "DPR") { return GRAPH.Handle_Command_Peca_Desprotegida(param); }
    	if (cmd === "MAL") { return GRAPH.Handle_Command_Peca_Mal_Colocada(param); }
    	if (cmd === "UND") { return GRAPH.Handle_Command_Peca_Nao_Desenvolvida(param); }
    	if (cmd === "OVR") { return GRAPH.Handle_Command_Peca_Sobrecarregada(param); }

    	if (cmd === "BIB") { return GRAPH.Handle_Command_Bispo_Bom(param); }
    	if (cmd === "BIM") { return GRAPH.Handle_Command_Bispo_Mau(param); }
    	if (cmd === "BFC") { return GRAPH.Handle_Command_Bispo_Frente_Cadeia(param); }
    	if (cmd === "BAC") { return GRAPH.Handle_Command_Bispo_Atras_Cadeia(param); }
    	if (cmd === "DEB") { return GRAPH.Handle_Command_Casa_Debil(param); }
    	if (cmd === "AVC") { return GRAPH.Handle_Command_Posto_Avancado(param); }
    	if (cmd === "REX") { return GRAPH.Handle_Command_Rei_Exposto(param); }

    	if (cmd === "ATR") { return GRAPH.Handle_Command_Peao_Atrasado(param); }
    	if (cmd === "ISO") { return GRAPH.Handle_Command_Peao_Isolado(param); }
    	if (cmd === "DOB") { return GRAPH.Handle_Command_Peoes_Dobrados(param); }
    	if (cmd === "COL") { return GRAPH.Handle_Command_Peoes_Colgantes(param); }
    	if (cmd === "QMJ") { return GRAPH.Handle_Command_Maioria_Ala_Dama(param); }
    	if (cmd === "KMJ") { return GRAPH.Handle_Command_Maioria_Ala_Rei(param); }
    	if (cmd === "PMC") { return GRAPH.Handle_Command_Peoes_Mesma_Cor_Bispo_Adversario(param); }
  	
	},
	
	
	Handle_Alts: function(alts, id_exerc, main_half, alt1_half, alt2_half) {

    	if (typeof alts == null || alts == "") {
        	return;
    	}	

    	var arr			= alts.split("#");
    	GRAPH.tot_alts	= arr.length;

    	var a1 = GRAPH.Get_HTML_Button_Alt(id_exerc, main_half);
    	var a2 = GRAPH.Get_HTML_Button_Alt(arr[0], alt1_half);
    	
    	if (GRAPH.tot_alts > 1) {
    		var a3 = GRAPH.Get_HTML_Button_Alt(arr[1], alt2_half);
    	} else {
    		var a3 = "";
    	}

    	var arr = GRAPH.Shuffle_Alternativas(a1, a2, a3);

    	GRAPH.Print_Menu_Alternativas(arr);

	},

	
	Print_Menu_Alternativas: function(arr) {
	
	    $('#sec_control').css('display', 'none');
	
	    if (GRAPH.tot_alts > 1) {
	        $('#but1_3alts').html(arr[0]);
	        $('#but2_3alts').html(arr[1]);
	        $('#but3_3alts').html(arr[2]);
	        $('#area_alt_3but').css('display', 'block');	    	    	
	    } else {
	        $('#but1_2alts').html(arr[0]);
	        $('#but2_2alts').html(arr[1]);
	        $('#area_alt_2but').css('display', 'block');
	    }
	
	},

		
	Shuffle_Alternativas: function(opt1, opt2, opt3 = "") {

	    if (opt3 == "") {
	        var arr = [opt1, opt2];
	    } else {
	        var arr = [opt1, opt2, opt3];
	    }
	
	    for (var i = arr.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = arr[i];
	        arr[i] = arr[j];
	        arr[j] = temp;
	    }
	
	    return arr;
	
	},

	

	Get_HTML_Button_Alt: function(id_exerc, move) {
	
	    var but_label   = "";
	    var peca        = move[0];
	    var casa        = move.substr(1, 99);
	
	    if (peca == "a" || peca == "b" || peca == "c" || peca == "d" || peca == "e" || peca == "f" || peca == "g" || peca == "h" || peca == "O") {
	        but_label = '' + move + '';
	    }
	
	    if (peca == "K") {
	        but_label = '<img src="img/notation/wK.png" width="24" height="24" style="margin: 0px 0px 6px 0px;">' + casa + '</span>';
	    }
	
	    if (peca == "Q") {
	        but_label = '<img src="img/notation/wQ.png" width="24" height="24" style="margin: 0px 0px 6px 0px;">' + casa + '</span>';
	    }
	
	    if (peca == "R") {
	        but_label = '<img src="img/notation/wR.png" width="24" height="24" style="margin: 0px 0px 6px 0px;">' + casa + '</span>';
	    }
	
	    if (peca == "N") {
	        but_label = '<img src="img/notation/wN.png" width="24" height="24" style="margin: 0px 3px 6px 0px;">' + casa + '</span>';
	    }
	
	    if (peca == "B") {
	        but_label = '<img src="img/notation/wB.png" width="24" height="24" style="margin: 0px 1px 6px 0px;">' + casa + '</span>';
	    }
	
	    var html = '<button onclick="Click_Button_Alt(' + id_exerc + ');"  type="button" class="btn btn-warning" style="font-weight: bold; width: 90px; height: 42px; margin-top: 10px; padding: 0px; font-size: 18px;">' +
	               '<span>' + but_label + '</span>' +
	               '</button>';
	
	    return html;
	
	},
	
	

    Handle_Command_Tip: function (param) {

        var arr = param.split(",");

        console.log(arr[0]);
        console.log(arr[1]);

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, arr[0], TIPS[arr[1]]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(arr[0]);

    },

	
	Handle_Command_ARROW: function (param, color) {

    	var tab = param.split(",");

    	for (var i = 0; i < tab.length; i++) {
        	var arr     = tab[i].split("-");
        	GRAPH.stack.push(setTimeout(GRAPH.Draw_Arrow, DELAY.tot, arr[0], arr[1], color));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.Set_Graph_Delay();

	},

	

	Handle_Command_CIRCLE: function (param, color) {

    	var arr = param.split(",");

    	if (arr.length < 1) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Draw_Border_Circle, DELAY.tot, arr[i], color));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.Set_Graph_Delay();

	},


	Handle_Command_SQUARE: function (param, color) {

    	var arr = param.split(",");

    	if (arr.length < 1) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Draw_Border_Square, DELAY.tot, arr[i], color));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.Set_Graph_Delay();

	},


 	Handle_Command_BULLET: function (param, color) {

    	var arr = param.split(",");

    	if (arr.length < 1) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Draw_Bullet, DELAY.tot, arr[i], color));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.Set_Graph_Delay();

	},


  	Handle_Command_PAINT_SQUARE: function (param, color) {

    	var arr = param.split(",");

    	if (arr.length < 1) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Paint_Square, DELAY.tot, arr[i], color));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.Set_Graph_Delay();

	},


  	Handle_Command_PAINT_CIRCLE: function (param, color) {

    	var arr = param.split(",");

    	if (arr.length < 1) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Paint_Circle, DELAY.tot, arr[i], color));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.Set_Graph_Delay();

	},


	
	Handle_Command_Ameacando: function (param) {

    	var tab     = param.split(",");

    	for (var i = 0; i < tab.length; i++) {
        	var arr     = tab[i].split("-");
        	GRAPH.stack.push(setTimeout(GRAPH.Draw_Arrow, DELAY.tot, arr[0], arr[1], COLOR.red));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.Set_Graph_Delay();

	},
	

	Handle_Command_Atacando: function (param) {

    	var arr = param.split(",");

    	if (arr.length < 1) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Draw_Border_Circle, DELAY.tot, arr[i], COLOR.red));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.Set_Graph_Delay();

	},


	Handle_Command_Bloqueando: function (param) {

    	var arr = param.split("-");

    	if (arr.length < 2) {
        	return;
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Draw_Border_Circle, DELAY.tot, arr[1], COLOR.green));
    	GRAPH.stack.push(setTimeout(GRAPH.Draw_Border_Circle, DELAY.tot, arr[0], COLOR.orange));
    	DELAY.tot = DELAY.tot + DELAY.next_seq;

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, arr[0], TIPS[1]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(arr[0]);

	},


	Handle_Command_Ideia: function (param) {

    	var tab = param.split(",");

    	for (var i = 0; i < tab.length; i++) {
        	var arr     = tab[i].split("-");
        	GRAPH.stack.push(setTimeout(GRAPH.Draw_Arrow, DELAY.tot, arr[0], arr[1], COLOR.orange));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.Set_Graph_Delay();

	},


	Handle_Command_Controlando: function (param) {

    	var arr = param.split(",");

    	if (arr.length < 1) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Draw_Xis, DELAY.tot, arr[i]));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.Set_Graph_Delay();

	},


	Handle_Command_Cravando: function (param) {

    	var arr     = param.split("-");

    	if (arr.length < 2) {
        	return;
   	 	}

    	GRAPH.stack.push(setTimeout(GRAPH.Draw_Border_Circle, DELAY.tot, arr[0], COLOR.orange));
    	DELAY.tot = DELAY.tot + DELAY.square;
    	
    	GRAPH.stack.push(setTimeout(GRAPH.Draw_Border_Circle, DELAY.tot, arr[1], COLOR.red));
    	DELAY.tot = DELAY.tot + DELAY.square;
    	
    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, arr[0], TIPS[19]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(arr[0]);

	},


	Handle_Command_Defendendo: function (param) {

    	var arr = param.split(",");

    	if (arr.length < 1) {
        	return;
   	 	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Draw_Border_Circle, DELAY.tot, arr[i], COLOR.green));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.Set_Graph_Delay();

	},
	

	Handle_Command_Pressionando: function (param) {

    	var arr = param.split(",");

    	if (arr.length < 1) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Draw_Border_Circle, DELAY.tot, arr[i], COLOR.orange));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.Set_Graph_Delay();

	},


	Handle_Command_Variante: function (param) {

	
	},


	Handle_Command_Lance_Ruim: function (param) {

    	var arr = param.split("-");

    	if (arr.length < 2) {
        	return;
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Draw_Arrow, DELAY.tot, arr[0], arr[1], COLOR.red));
    	DELAY.tot = DELAY.tot + DELAY.square;

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, arr[1], TIPS[3]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(arr[1]);

	},


	Handle_Command_Lance_Duvidoso: function (param) {

    	var arr = param.split("-");

    	if (arr.length < 2) {
        	return;
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Draw_Arrow, DELAY.tot, arr[0], arr[1], COLOR.orange));
    	DELAY.tot = DELAY.tot + DELAY.square;

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, arr[1], TIPS[4]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(arr[1]);

	},


	Handle_Command_Lance_Excelente: function (param) {

    	var arr = param.split("-");

    	if (arr.length < 2) {
        	return;
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Draw_Arrow, DELAY.tot, arr[0], arr[1], COLOR.green));
    	DELAY.tot = DELAY.tot + DELAY.square;

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, arr[1], TIPS[5]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(arr[1]);

	},


	Handle_Command_Mensagem: function (param) {

    	if (!$.isNumeric(param) ||  param == 0) {
        	return;
    	}

    	var msg = MSG[param];

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Message, DELAY.tot, msg));
    	if (msg.length > 50) {
        	DELAY.tot = DELAY.tot + DELAY.clear_msg_lg;
    	} else {
        	DELAY.tot = DELAY.tot + DELAY.clear_msg;
   	 	}

    	GRAPH.Set_Graph_Delay();

	},
		

	Handle_Command_Peca_Ativa: function (param) {

    	var arr     = param.split(",");
    	var last    = "";
    	if (arr.length < 1) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Paint_Circle, DELAY.tot, arr[i], COLOR.green));
        	DELAY.tot = DELAY.tot + DELAY.square;
        	last = arr[i];
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, last, TIPS[6]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(last);

	},


	Handle_Command_Peca_Passiva: function (param) {

    	var arr     = param.split(",");
    	var last    = "";
    	if (arr.length < 1) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Paint_Circle, DELAY.tot, arr[i], COLOR.orange));
        	DELAY.tot = DELAY.tot + DELAY.square;
        	last = arr[i];
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot,last, TIPS[7]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(last);

	},




	Handle_Command_Peca_Desprotegida: function (param) {

    	var arr     = param.split(",");
    	if (arr.length < 1) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Paint_Circle, DELAY.tot, arr[i], COLOR.orange));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, arr[i-1], TIPS[8]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(arr[i-1]);

	},


	Handle_Command_Peca_Mal_Colocada: function (param) {

    	var arr     = param.split(",");
    	if (arr.length < 1) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Paint_Circle, DELAY.tot, arr[i], COLOR.red));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, arr[i-1], TIPS[9]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(arr[i-1]);

	},
	

	Handle_Command_Peca_Nao_Desenvolvida: function (param) {

    	var arr     = param.split(",");
    	if (arr.length < 1) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Paint_Circle, DELAY.tot, arr[i], COLOR.orange));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, arr[i-1], TIPS[10]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(arr[i-1]);

	},


	Handle_Command_Peca_Sobrecarregada: function (param) {

    	var arr     = param.split(",");
    	if (arr.length < 1) {
        	return;
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Paint_Circle, DELAY.tot, arr[0], COLOR.red));
    	DELAY.tot = DELAY.tot + DELAY.square;

    	for (var i = 1; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Paint_Circle, DELAY.tot, arr[i], COLOR.orange));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, arr[0], TIPS[11]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(arr[0]);

	},



	Handle_Command_Bispo_Bom: function (param) {

    	GRAPH.stack.push(setTimeout(GRAPH.Draw_Border_Circle, DELAY.tot, param, COLOR.green));
    	DELAY.tot = DELAY.tot + DELAY.square;

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, param, TIPS[12]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(param);

	},


	Handle_Command_Bispo_Mau: function (param) {

    	GRAPH.stack.push(setTimeout(GRAPH.Draw_Border_Circle, DELAY.tot, param, COLOR.red));
    	DELAY.tot = DELAY.tot + DELAY.square;

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, param, TIPS[13]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(param);

	},



	Handle_Command_Bispo_Frente_Cadeia: function (param) {

    	GRAPH.stack.push(setTimeout(GRAPH.Draw_Border_Circle, DELAY.tot, param, COLOR.green));
    	DELAY.tot = DELAY.tot + DELAY.square;

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, param, TIPS[14]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(param);

	},


	Handle_Command_Bispo_Atras_Cadeia: function (param) {

    	GRAPH.stack.push(setTimeout(GRAPH.Draw_Border_Circle, DELAY.tot, param, COLOR.red));
    	DELAY.tot = DELAY.tot + DELAY.square;

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, param, TIPS[15]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(param);

	},


	Handle_Command_Casa_Debil: function (param) {

    	var last = "";
    	var arr     = param.split(",");

    	if (arr.length < 1) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Draw_Border_Square, DELAY.tot, arr[i], COLOR.orange));
        	DELAY.tot = DELAY.tot + DELAY.square;
        	last = arr[i];
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, last, TIPS[16]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(last);

	},



	Handle_Command_Posto_Avancado: function (param) {

    	GRAPH.stack.push(setTimeout(GRAPH.Draw_Border_Square, DELAY.tot, param, COLOR.green));
    	DELAY.tot = DELAY.tot + DELAY.square;

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, param, TIPS[17]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(param);

	},


	Handle_Command_Rei_Exposto: function (param) {

    	GRAPH.stack.push(setTimeout(GRAPH.Paint_Circle, DELAY.tot, param, COLOR.red));
    	DELAY.tot = DELAY.tot + DELAY.square;

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, param, TIPS[18]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(param);

	},


	Handle_Command_Peao_Atrasado: function (param) {

    	GRAPH.stack.push(setTimeout(GRAPH.Paint_Circle, DELAY.tot, param, COLOR.orange));
    	DELAY.tot = DELAY.tot + DELAY.square;

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, param, TIPS[19]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(param);

	},


	Handle_Command_Peao_Isolado: function (param) {

    	var arr     = param.split(",");

    	if (arr.length < 1) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Paint_Circle, DELAY.tot, arr[i], COLOR.orange));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, arr[0], TIPS[20]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(arr[0]);

	},


	Handle_Command_Peoes_Dobrados: function (param) {

    	var arr     = param.split(",");

    	if (arr.length < 2) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Paint_Circle, DELAY.tot, arr[i], COLOR.orange));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, arr[i-1], TIPS[21]));
    	DELAY.tot = DELAY.tot + DELAY.square;

    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(arr[i-1]);

	},


	Handle_Command_Peoes_Colgantes: function (param) {

    	var arr     = param.split(",");

    	if (arr.length < 2) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Paint_Circle, DELAY.tot, arr[i], COLOR.orange));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, arr[i-1], TIPS[22]));
    	DELAY.tot = DELAY.tot + DELAY.square;
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(arr[i-1]);
	
	},


	Handle_Command_Maioria_Ala_Dama: function (param) {

    	var arr     = param.split(",");

    	if (arr.length < 2) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Paint_Circle, DELAY.tot, arr[i], COLOR.green));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, arr[i-1], TIPS[23]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(arr[i-1]);

	},


	Handle_Command_Maioria_Ala_Rei: function (param) {

    	var arr     = param.split(",");

    	if (arr.length < 2) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Paint_Circle, DELAY.tot, arr[i], COLOR.green));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, arr[i-1], TIPS[24]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(arr[i-1]);

	},



	Handle_Command_Peoes_Mesma_Cor_Bispo_Adversario: function (param) {

    	var arr     = param.split(",");

    	if (arr.length < 2) {
        	return;
    	}

    	for (var i = 0; i < arr.length; i++) {
        	GRAPH.stack.push(setTimeout(GRAPH.Paint_Circle, DELAY.tot, arr[i], COLOR.green));
        	DELAY.tot = DELAY.tot + DELAY.square;
    	}

    	GRAPH.stack.push(setTimeout(GRAPH.Print_Tooltip, DELAY.tot, arr[i-1], TIPS[25]));
    	DELAY.tot = DELAY.tot + DELAY.clear_tip;

    	GRAPH.Set_Graph_Delay(arr[i-1]);

	},



	Draw_All_Coordinates: function () {

    	var tab_sq = [	"a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8",
        	          	"b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8",
                  		"c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8",
                		"d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8",
                		"e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8",
                		"f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8",
                		"g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8",
                		"h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"
    				];

    	for (var i = 0; i < tab_sq.length; i++) {
        	GRAPH.Draw_Circle(tab_sq[i], COLOR.yellow);
        	GRAPH.Draw_Coordenate(tab_sq[i], COLOR.black);
    	}

	},


	Draw_Arrow: function (from, to, color) {

    	LAYER.globalAlpha = 0.7;
    	LAYER.shadowBlur = 14;
    	LAYER.shadowColor = COLOR.black;
    	
    	var arrow_width = 8;  // largura
    	var arrow_head = 10; // cabeça

    	var sq_from = GRAPH.Get_XY(from);
    	var sq_to = GRAPH.Get_XY(to);

    	var startPointX = sq_from.x + HALF_SQUARE;
    	var startPointY = sq_from.y + HALF_SQUARE;

    	var orientation = Get_Orientation();

    	if (orientation == "white") {
        	var ret = GRAPH.Draw_Arrow_Get_Endpoint_White(from, to, sq_to);
    	} else {
        	var ret = GRAPH.Draw_Arrow_Get_Endpoint_Black(from, to, sq_to);
    	}

    	var endPointX = ret[0];
    	var endPointY = ret[1];

    	LAYER.save();
    	LAYER.strokeStyle = color;
    	LAYER.lineWidth = arrow_width;

    	var arrowAngle = Math.atan2(endPointY - startPointY, endPointX - startPointX);

    	LAYER.beginPath();
    	LAYER.moveTo(startPointX, startPointY);

    	LAYER.lineTo(endPointX, endPointY);
    	LAYER.stroke();

    	LAYER.beginPath();
    	LAYER.moveTo(endPointX, endPointY);
    	LAYER.lineTo(endPointX - arrow_head * Math.cos(arrowAngle - Math.PI / 7),
        	endPointY - arrow_head * Math.sin(arrowAngle - Math.PI / 7));

    	LAYER.lineTo(endPointX - arrow_head * Math.cos(arrowAngle + Math.PI / 7),
        	endPointY - arrow_head * Math.sin(arrowAngle + Math.PI / 7));

    	LAYER.lineTo(endPointX, endPointY);
    	LAYER.lineTo(endPointX - arrow_head * Math.cos(arrowAngle - Math.PI / 7),
        	endPointY - arrow_head * Math.sin(arrowAngle - Math.PI / 7));

    	LAYER.stroke();
    	LAYER.closePath();
    	LAYER.restore();

	},


	Draw_Arrow_Get_Endpoint_White: function (from, to, sq_to) {

    	var X, Y;

    	if (from[0] > to[0]) {
        	if (from[1] == to[1]) {
            	X = sq_to.x + HALF_SQUARE + Q_SQUARE;
            	Y = sq_to.y + HALF_SQUARE;
        	} else {
            	if (from[1] > to[1]) {
                	X = sq_to.x + HALF_SQUARE + Q_SQUARE;
                	Y = sq_to.y + HALF_SQUARE - Q_SQUARE;
            	} else {
                	X = sq_to.x + HALF_SQUARE + Q_SQUARE;
                	Y = sq_to.y + HALF_SQUARE + Q_SQUARE;
            	}
        	}
    	} else {
        	if (from[0] < to[0]) {
            	if (from[1] == to[1]) {
                	X = sq_to.x + HALF_SQUARE - Q_SQUARE;
                	Y = sq_to.y + HALF_SQUARE;
            	} else {
                	if (from[1] > to[1]) {
                    	X = sq_to.x + Q_SQUARE;
                    	Y = sq_to.y + Q_SQUARE;
                	} else {
                    	X = sq_to.x + SQUARE_WIDTH - Q_SQUARE - HALF_SQUARE;
                    	Y = sq_to.y + Q_SQUARE + HALF_SQUARE;
                	}
            	}
        	} else {
            	if (from[1] < to[1]) {
                	X = sq_to.x + HALF_SQUARE;
                	Y = sq_to.y + SQUARE_WIDTH - Q_SQUARE;
            	} else {
                	if (from[1] > to[1]) {
                    	X = sq_to.x + HALF_SQUARE;
                    	Y = sq_to.y + HALF_SQUARE - Q_SQUARE;
                	}
            	}
        	}
    	}

    	var ret = [X, Y];
    	return ret;

	},



	Draw_Arrow_Get_Endpoint_Black: function (from, to, sq_to) {

    	var X, Y;

    	if (from[0] > to[0]) {
        	if (from[1] == to[1]) {
            	X = sq_to.x + HALF_SQUARE + Q_SQUARE - HALF_SQUARE;
            	Y = sq_to.y + HALF_SQUARE;
        	} else {
            	if (from[1] > to[1]) {
                	X = sq_to.x + HALF_SQUARE + Q_SQUARE - HALF_SQUARE;
                	Y = sq_to.y + HALF_SQUARE - Q_SQUARE + HALF_SQUARE;
            	} else {
                	X = sq_to.x + HALF_SQUARE + Q_SQUARE - HALF_SQUARE;
                	Y = sq_to.y + HALF_SQUARE + Q_SQUARE - HALF_SQUARE;
            	}
        	}
    	} else {
        	if (from[0] < to[0]) {
            	if (from[1] == to[1]) {
                	X = sq_to.x + HALF_SQUARE - Q_SQUARE + HALF_SQUARE;
                	Y = sq_to.y + HALF_SQUARE;
            	} else {
                	if (from[1] > to[1]) {
                    	X = sq_to.x + Q_SQUARE + HALF_SQUARE;
                    	Y = sq_to.y + Q_SQUARE + HALF_SQUARE;
                	} else {
                    	X = sq_to.x + SQUARE_WIDTH - Q_SQUARE - HALF_SQUARE + HALF_SQUARE;
                    	Y = sq_to.y + Q_SQUARE + HALF_SQUARE - HALF_SQUARE;
                	}
           	 	}
        	} else {
            	if (from[1] < to[1]) {
                	X = sq_to.x + HALF_SQUARE;
                	Y = sq_to.y + SQUARE_WIDTH - Q_SQUARE - HALF_SQUARE;
            	} else {
                	if (from[1] > to[1]) {
                    	X = sq_to.x + HALF_SQUARE;
                    	Y = sq_to.y + HALF_SQUARE - Q_SQUARE + HALF_SQUARE;
                	}
            	}
        	}
    	}	

    	var ret = [X, Y];
    	return ret;

	},


	Draw_Border_Circle: function (square, color, thick = 3) {

    	LAYER.globalAlpha = 0.99;
    	LAYER.shadowBlur = 0;

    	var sq = GRAPH.Get_XY(square);
    	var x = sq.x + HALF_SQUARE;
    	var y = sq.y + HALF_SQUARE;

    	LAYER.beginPath();
    	LAYER.arc(x, y, SQUARE_WIDTH / 2.2, 0, Math.PI * 2, true);
    	LAYER.strokeStyle = color;
    	LAYER.lineWidth = thick;
    	LAYER.stroke();

	},


	Draw_Border_Square: function (square, color, thick = 3) {

    	LAYER.globalAlpha = 0.99;
    	LAYER.shadowBlur = 0;

    	var sq = GRAPH.Get_XY(square);
    	var x = sq.x;
    	var y = sq.y;

    	LAYER.strokeStyle = color;
    	LAYER.lineWidth = thick;
    	LAYER.strokeRect(x, y, SQUARE_WIDTH, SQUARE_WIDTH);

	},


	Draw_Bullet: function (square, color) {

    	var sq = GRAPH.Get_XY(square);
    	var x = sq.x + HALF_SQUARE;
    	var y = sq.y + HALF_SQUARE;

    	LAYER.beginPath();
    	LAYER.globalAlpha = 0.7;
    	LAYER.shadowBlur = 0;
    	LAYER.arc(x, y, SQUARE_WIDTH / 6, 0, Math.PI * 2, true);
    	LAYER.fillStyle = color;
    	LAYER.fill();

	},


	Draw_Center: function (color1, color2) {

    	var center = ["d4", "e4", "d5", "e5"];
    	var exp_center = ["c3", "c4", "c5", "c6", "d3", "d6", "e3", "e6", "f3", "f4", "f5", "f6"];

    	for (var i = 0; i < center.length; i++) {
        	GRAPH.Paint_Square(center[i], color1);
    	}

    	for (var i = 0; i < exp_center.length; i++) {
        	GRAPH.Paint_Square(exp_center[i], color2);
    	}

	},


	Draw_Circle: function (square, color) {

    	LAYER.globalAlpha = 0.6;
    	LAYER.shadowBlur = 14;
    	LAYER.shadowColor = COLOR.black;

    	var sq = GRAPH.Get_XY(square);
    	var x = sq.x + HALF_SQUARE;
    	var y = sq.y + HALF_SQUARE;

    	LAYER.beginPath();
    	LAYER.arc(x, y, SQUARE_WIDTH / 2.3, 0, Math.PI * 2, true);
    	LAYER.fillStyle = color;
    	LAYER.fill();

	},


	Draw_Coordenate: function (square, color) {

    	var sq = GRAPH.Get_XY(square);
	    var x = sq.x + HALF_SQUARE - 10;
    	var y = sq.y + HALF_SQUARE + 6;

    	LAYER.fillStyle = color;
    	LAYER.font = "bold 20px Mali";
    	LAYER.fillText(square, x, y);

	},


	Draw_Xis: function (square) {

    	LAYER.globalAlpha = 0.8;
    	LAYER.shadowBlur = 4;

    	var sq = GRAPH.Get_XY(square);
	    var x = sq.x + SQUARE_WIDTH / 2;
    	var y = sq.y + SQUARE_WIDTH / 2;

    	GRAPH.Draw_Bullet(square, COLOR.violet);

	},


	Paint_Circle: function (square, color) {

    	LAYER.globalAlpha = 0.4;
    	LAYER.shadowBlur = 4;
    	LAYER.shadowColor = COLOR.grey;

    	var sq = GRAPH.Get_XY(square);
    	var x = sq.x + HALF_SQUARE;
    	var y = sq.y + HALF_SQUARE;

    	LAYER.beginPath();
    	LAYER.arc(x, y, SQUARE_WIDTH / 2.1, 0, Math.PI * 2, true);
    	LAYER.fillStyle = color;
    	LAYER.fill();

	},


	Paint_Square: function (square, color) {

    	LAYER.globalAlpha = 0.4;
    	LAYER.shadowBlur = 4;
    	LAYER.shadowColor = COLOR.black;

    	var sq = GRAPH.Get_XY(square);
    	LAYER.fillStyle = color;
    	LAYER.fillRect(sq.x, sq.y, SQUARE_WIDTH, SQUARE_WIDTH);

	},


	Print_Message: function (msg) {

    	if (msg == "") {
        	return;
    	}

    	LAYER.globalAlpha = 0.99;
    	LAYER.shadowBlur  = 0;
    	LAYER.shadowColor = COLOR.black;

    	var lines       = GRAPH.Quebra_Texto(msg, 26);
    	var tot_lines   = lines.length;

    	var w = (SQUARE_WIDTH * 8) - (Q_SQUARE * 2);
    	var h = HALF_SQUARE * (tot_lines + 1);

    	var x = Q_SQUARE + BOARD_BORDER;
    	var y = (SQUARE_WIDTH * 4) - (HALF_SQUARE * tot_lines / 2) - Q_SQUARE;

    	LAYER.beginPath();
    	LAYER.rect(x+1, y+1, w+1, h+1);
    	LAYER.fillStyle     = "#333333";
    	LAYER.fill();

    	LAYER.beginPath();
    	LAYER.rect(x, y, w, h);
    	LAYER.fillStyle     = "#FFE88A";
    	LAYER.strokeStyle   = "#FFD942";
    	LAYER.stroke();
    	LAYER.fill();

    	LAYER.textAlign     = "center";
    	LAYER.font          = "bold 18px Mali";
    	LAYER.fillStyle     = "#003399";

    	for (var i = 0; i < tot_lines; i++) {
        	LAYER.fillText(lines[i], (SQUARE_WIDTH * 4), y + (i * HALF_SQUARE) + HALF_SQUARE + (Q_SQUARE / 2));
    	}

	},


	Print_Tooltip: function (square, msg) {

    	Print_Tooltipster(square, msg);

	},

	
	Get_XY: function (square) {

    	var x = 0;
    	var y = 0;

    	var ret = { x: 0, y: 0 };

    	if (Get_Orientation() == "white") {
        	x = COLUMNS.indexOf(square[0]);
        	y = ROWS.indexOf(square[1]);
    	} else {
        	x = COLUMNS_FLIP.indexOf(square[0]);
        	y = ROWS_FLIP.indexOf(square[1]);
    	}

    	ret.x = BOARD_BORDER + (x * SQUARE_WIDTH);
    	ret.y = BOARD_BORDER + (y * SQUARE_WIDTH);

    	return ret;

	},


	Quebra_Texto: function (txt, chars) {

    	var parte       = "";
    	var last_blank  = 0;
    	var lines       = [];

    	while (txt.length > 0) {
        	parte = txt.substr(0, chars);
        	last_blank = parte.lastIndexOf(" ");

        	if (last_blank < 0 || txt.length <= chars) {
            	lines.push(txt);
            	break;
        	}

        	lines.push(txt.substr(0, last_blank));
        	txt = txt.substr(last_blank + 1, 99999);
    	}

    	return lines;

	},


	Set_Graph_Delay: function (sq = "") {

    	DELAY.tot = DELAY.tot + DELAY.clear_graph;
    	GRAPH.stack.push(setTimeout(GRAPH.Clear_Layer, DELAY.tot));

    	if (sq != "") {
        	GRAPH.stack.push(setTimeout(Close_Tooltipster, DELAY.tot, sq));
    	}

    	DELAY.tot = DELAY.tot + DELAY.next_graph;

	},


	Draw_Point: function (square, color) {

    	var sq = Get_XY(square);
	    var x = sq.x + HALF_SQUARE;
    	var y = sq.y + HALF_SQUARE;

    	LAYER.beginPath();
    	LAYER.arc(x, y, SQUARE_WIDTH / 8, 0, Math.PI * 2, true);
    	LAYER.fillStyle = color;
    	LAYER.fill();

	},


	Draw_King_Side: function (color) {

    	var tab = ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8",
        	       "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8",
            	   "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8",
             	   "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"
              	  ];

    	for (var i = 0; i < tab.length; i++) {
        	GRAPH.Paint_Square(tab[i], color);
    	}

	},


	Draw_Queen_Side: function (color) {

    	var tab = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8",
        	       "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8",
            	   "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8",
              	   "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"];

    	for (var i = 0; i < tab.length; i++) {
        	GRAPH.Paint_Square(tab[i], color);
    	}

	},

    Reset_Stack: function() {

        for (var i = 0; i < 20; i++) {
            clearTimeout(GRAPH.stack[i]);
        }

        GRAPH.stack = [];
        DELAY.tot = 300;

    },

		
	Handle_Comms: function(comms) {

        //console.log("Handle_Comms: " + comms);

        GRAPH.Reset_Stack();
	
		if (typeof comms == null || comms == "") { return; }

    	var arr         = comms.split(";");
    	var tot_comms   = arr.length;

    	if (tot_comms > 0) {
        	GRAPH.stack.push(setTimeout(GRAPH.Clear_Layer, DELAY.tot));     // apaga rastro de onde jogou
    	}

    	for (var i = 0; i < tot_comms; i++) {
        	GRAPH.Print_Comms(arr[i]);
    	}

	},
		
	
	Print_OK_Icon: function () {
		
	    LAYER.globalAlpha = 0.99;
	    var img = document.getElementById("hide_img");
	    LAYER.drawImage(img, SQUARE_WIDTH * 3 - SQUARE_WIDTH / 4, SQUARE_WIDTH * 3 - SQUARE_WIDTH / 3, SQUARE_WIDTH * 3, SQUARE_WIDTH * 3);

	   	if (CONF.sound_msgs == "on") {
	        AUD.Play('ok');
	    }	
	
	}
	


}




