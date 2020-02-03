


function Build_Modal_First_Steps() {

    $("#modal1_header").html(LG.first_steps_tit);
    $("#modal1_body").html(LG.first_steps_body);

}





function Stripped_San(move) {
    
    if (move.substr(2, 1) == "=") {
        return move.substr(0, 2);
    }    

    return move.replace(/=/,'').replace(/[+#]?[?!]*$/,'');

}


	
function Consiste_Email(email, tag) {
	
	if (!Validate_Email(email)) {
		$('#' + tag).addClass('error');
	    return false;
	}
	
	return true;
	
}
	
	
function Consiste_Preenchido(my_var, tag) {
	
	if (my_var == "") {
	   	$('#' + tag).addClass('error');
	    return false;
	}
	
	return true;
	
}
	
	

function My_Remove_Class(id_tag) {

    $('#' + id_tag).removeClass('error');

}

	
function Pad(str, max) {
	
	str = str.toString();
	return str.length < max ? Pad("0" + str, max) : str;
	
}
	
	
function Random(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}
	
 
 
function Remove_Last_Char(str) {

    return str.slice(0, -1);

}	
	
	
	

function Validate_Email(email) {
	
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
	
}
	
	
	


function Validate_Move(from,to) {

    var valids = CHESS.moves({ square: from });

    for (var i = 0; i < valids.length; i++) {
        var xis = Stripped_San(valids[i]);
        xis = xis.slice(-2);
        if (xis == to) {
            return true;
        }
    }

    return false;

}




function Create_Id() {

    return 'xxxxxxxxxxxxxxxx'.replace(/x/g, function (c) {
    	var r = Math.random() * 16 | 0;
        return r.toString(16).toUpperCase();
    });
                                            
}



function Draw_Buttons_Board() {

	var tamanho = SQUARE_WIDTH;
    var fonte   = tamanho / 2;
    var fonte2  = fonte - 2;

    $(".but_nav_board").css('width', tamanho);
    $(".but_nav_board").css('height', tamanho);
    $(".but_nav_board").css('font-size', fonte);

    $(".but_nav_board_redo").css('width', tamanho);
    $(".but_nav_board_redo").css('height', tamanho);
    $(".but_nav_board_redo").css('font-size', fonte2);

}


function Get_Current_Page() {

    if ($(".section_board").css('display')          == "block") { return 'section_board'; }
    if ($(".section_conf_board").css('display')     == "block") { return 'section_conf_board'; }
    if ($(".section_conf_idioma").css('display')    == "block") { return 'section_conf_idioma'; }
    if ($(".section_conf_sounds").css('display')    == "block") { return 'section_conf_sounds'; }
    if ($(".section_conf_treino").css('display')    == "block") { return 'section_conf_treino'; }
    if ($(".section_days").css('display')           == "block") { return 'section_days'; }
    if ($(".section_help").css('display')           == "block") { return 'section_help'; }
    if ($(".section_help_questions").css('display') == "block") { return 'section_help_questions'; }
    if ($(".section_menu").css('display')           == "block") { return 'section_menu'; }
    if ($(".section_mods_store").css('display')     == "block") { return 'section_mods_store'; }
    if ($(".section_home").css('display')           == "block") { return 'section_home'; }
    if ($(".section_stats").css('display')          == "block") { return 'section_stats'; }
    if ($(".section_suporte").css('display')        == "block") { return 'section_suporte'; }
    
    if ($(".section_about").css('display')        	== "block") { return 'section_about'; }
    if ($(".section_account").css('display')        == "block") { return 'section_account'; }

}



function Get_Square(col, row) {
    
    if (Get_Orientation() == "white") {
        return COLUMNS[col] + ROWS[row];
    } else {
        return COLUMNS_FLIP[col] + ROWS_FLIP[row];
    }

}




function Check_New_Messages() {

    AJAX.Check_New_Messages();

}



function Excluir_Conta() {		

	//console.log("Excluindo...");

    Set_ID_App();
    AJAX.Update_Store();
    
    MY_MODS.Populate_Mods_Acquired();
	NAV.Show_Gym();

}




function Set_ID_App() {

    ID_APP = localStorage.getItem('id_app');
    
    //console.log("ID_APP: " + ID_APP);

    if (ID_APP === null) {
        Show_Modal1();
        ID_APP = Create_Id();        
		CONF.Set_To_Default();        
        AJAX.Upload_ID_App();
        AJAX.Upload_Acesso();
    } else {
    	CONF.Set_User_Config();
        AJAX.Upload_Acesso();
    }


}


// ............................................................................................................ NEW


function Get_Last_Turn() {

    var cur_turn = Get_Turn();
    if (cur_turn == "w") {
        return "b";
    } else {
        return "w";
    }    

}

	

function Get_Long_Notation(lance) {
        
    var moves = CHESS.moves({ verbose: true });
    var len = moves.length;
        
    for (var i=0; i < len; i++) {
        if (Stripped_San(lance) == Stripped_San(moves[i].san)) {
            return moves[i].from + "-" + moves[i].to;
        }
    }
        
    alert("erro: (" + lance + ")");
        
}


function Get_Orientation() {
        
    return BOARD.orientation();
        
}


function Get_Turn() {
        
    return CHESS.turn();
        
}   
	
	

function Print_Board(fen, orientation) {
    
    BOARD.position(fen, false);
    CHESS.load(fen);
        
    if (orientation == "w") {
        BOARD.orientation('white');
    } else {
        BOARD.orientation('black');
    } 
    
}  




function Update_Board() {
        
    var new_fen = CHESS.fen();
    BOARD.position(new_fen);
        
}
     

        	