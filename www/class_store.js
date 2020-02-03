/************************************************************************************
 * 												     
 * 												     
 * 												    					Class: Store
 * 												     
 * 												     
 * 												     
 ************************************************************************************/

"use strict";



var STORE = {

	Populate_Store: function(result) {

		var categs = ['foo', LG.mates, LG.tatica, LG.miniaturas, LG.games, LG.finais, LG.aberturas];
    	var content = "";

    	var arr = result.split("|");

    	for (var i = 1; i < arr.length; i++) {
        	if (arr[i] != "") {
            	content += '<div class="tit_biblioteca">' + categs[i] + '</div>';
            	var lines = arr[i].split("<NL>");
            	for (var j = 0; j < lines.length; j++) {
                	var infos = lines[j].split("~");
                	if (infos[0] != "") {
                    	content += STORE.Monta_Store_Box(infos[0], infos[1], infos[2], infos[3], infos[4], infos[5], infos[6]);
                	}
            	}
        	}
    	}

    	$("#store_lines").html(content);

	},


	Monta_Store_Box: function(id_mod, titulo, descr, cover_img, preco_rs, preco_us, tipo_down) {

    	var but_amostra     = STORE.Get_But_Amostra(id_mod, preco_rs, tipo_down);
    	var but_comprar     = STORE.Get_But_Comprar(id_mod, preco_rs, "reais");
    	var but_adquirido   = STORE.Get_But_Adquirido(id_mod);

    	if (tipo_down == "C") {
        	but_amostra = "";
        	but_comprar = "";
    	} else {
        	but_adquirido = "";
    	}

    	return  '<center><div class="store_box">' +
            '<div class="cover_img">' +
            '<img src="img/covers/' + cover_img + '" width="140" height="180" style="padding: 10px;" align="left">' +
            '</div>' +
            '<div class="modulo_descr">' + '<b>' + titulo + '</b>' + '</div>' +
            '<div class="store_descr">' + descr + '</div>' +
            '<div style="padding: 20px 0px 0px 0px;">' + but_amostra + but_comprar + but_adquirido +
            '<br><br>' +
            '</div></div></center>';

	},


	Get_But_Adquirido: function(id_mod) {

    	return  '<i class="btn btn-success" style="width: 140px; margin: 0px 0px 0px 0px; font-weight: bold;"><i class="fa fa-download" style="font-size: 1.5em;"></i>&nbsp; ' + LG.store_adquirido + '</i>';

	},	


	Get_But_Amostra: function(id_mod, preco, tipo_down) {

    	if (preco == "0.00") {
        	return "";
    	}

    	if (tipo_down == "A") {
        	return  '<i class="btn btn-secondary" style="width: 140px; margin: 0px 0px 0px 0px; font-weight: bold;"><i class="fa fa-download" style="font-size: 1.5em;"></i>&nbsp; ' + LG.store_amostra + '</i>';
    	}

    	return  '<i class="btn btn-primary" onclick="But_Down_Amostra(' + id_mod + ');" style="width: 140px; margin: 0px 0px 0px 0px; font-weight: bold;"><i class="fa fa-download" style="font-size: 1.5em;"></i>&nbsp; ' + LG.store_amostra + '</i>';

	},


	Get_But_Comprar: function(id_mod, preco, moeda) {

    	if (preco == "0.00") {
        	preco   = LG.store_gratis;
        	prefixo = "";
    	} else {
        	if (moeda == "reais") { var prefixo = "R$"; }
        	if (moeda == "dolar") { var prefixo = "Us$"; }
    	}

    	return  '<i class="btn btn-warning" onclick="Buy_New_Product(' + id_mod + ');" style="width: 140px; margin: 0px 0px 0px 10px; font-weight: bold;"><i class="fa fa-download" style="font-size: 1.5em;"></i>&nbsp; ' + prefixo + ' ' + preco + '</i>';

	},



	Print_Store_Promo_Box: function (promo_header_1, promo_img_1, promo_body_1, promo_footer_1,
                                promo_header_2, promo_img_2, promo_body_2, promo_footer_2,
                                promo_header_3, promo_img_3, promo_body_3, promo_footer_3) {

    	$("#box_promo_1").css('display', 'none');
    	$("#box_promo_2").css('display', 'none');
    	$("#box_promo_3").css('display', 'none');

    	if (promo_header_1 != "") {
        	$("#box_promo_header_1").html(promo_header_1);
        	$("#box_promo_img_1").attr('src', 'img/covers/' + promo_img_1 + ".jpg");
        	$("#box_promo_body_1").html(Converte_NL(promo_body_1));
        	$("#box_promo_footer_1").html(Converte_NL(promo_footer_1));
        	$("#box_promo_1").css('display', 'block');
    	}

    	if (promo_header_2 != "") {
        	$("#box_promo_header_2").html(promo_header_2);
        	$("#box_promo_img_2").attr('src', 'img/covers/' + promo_img_2 + ".jpg");
        	$("#box_promo_body_2").html(Converte_NL(promo_body_2));
        	$("#box_promo_footer_2").html(Converte_NL(promo_footer_2));
        	$("#box_promo_2").css('display', 'block');
    	}

    	if (promo_header_3 != "") {
        	$("#box_promo_header_3").html(promo_header_3);
        	$("#box_promo_img_3").attr('src', 'img/covers/' + promo_img_3 + ".jpg");
        	$("#box_promo_body_3").html(Converte_NL(promo_body_3));
        	$("#box_promo_footer_3").html(Converte_NL(promo_footer_3));
        	$("#box_promo_3").css('display', 'block');
    	}

	}


	


    
}


