
/************************************************************************************
 * 											     
 * 												     
 * 												    					Class: Exerc
 * 												     
 * 												     
 * 												     
 ************************************************************************************/

"use strict";

var EXERC = {

	id: 0,
	white: "",
	black: "",
	place: "",
	fen: "",
	who: "",
	dispo: "",
	pgn: "",
	alts: "",

	tot_erros: 0,
	acertou: true,

    tab_alts_key: [],
    tab_alts_moves: [],
    tab_alts_comms: [],
    tab_alts_alts: [],

    str_moves: "",
    str_comms: "",
    str_alts: "",

    half_moves: [],
    half_comms: [],
    half_alts: [],
    tot_halfs: 0,
    ind_half: -1,

    cur_day: 0,
	cur_exerc: 0,
    cur_alt: 0,
	last_done: 0,
	is_reforco: false,

	user_turn: false,
	is_exercing: false,


    saved_half_moves: [],
    saved_half_comms: [],
    saved_half_alts: [],
    saved_tot_halfs: 0,
    saved_ind_half: 0,


    Save_Main_Line: function() {

        EXERC.saved_half_moves = EXERC.half_moves.slice();
        EXERC.saved_half_comms = EXERC.half_comms.slice();
        EXERC.saved_half_alts  = EXERC.half_alts.slice();

        EXERC.saved_tot_halfs  = EXERC.tot_halfs;
        EXERC.saved_ind_half   = EXERC.ind_half;

    },

    Restore_Main_Line: function() {

        EXERC.half_moves      = EXERC.saved_half_moves.slice();
        EXERC.half_comms      = EXERC.saved_half_comms.slice();
        EXERC.half_alts       = EXERC.saved_half_alts.slice();

        EXERC.tot_halfs       = EXERC.saved_tot_halfs;
        EXERC.ind_half        = EXERC.saved_ind_half;

        CHESS.load(EXERC.fen);

        for (var i=0; i < EXERC.ind_half; i++) {
            CHESS.move(EXERC.half_moves[i]);
        }

        EXERC.Update_Board();

    },

	Build_Array_Halfs: function() {

    	EXERC.half_moves.length     = 0;
    	EXERC.half_comms.length     = 0;
    	EXERC.half_alts.length      = 0;
    	EXERC.ind_half              = 0;

    	var arr_moves   = EXERC.str_moves.split("|");
    	var arr_comms   = EXERC.str_comms.split("|");
    	var arr_alts    = EXERC.str_alts.split("|");

	    for (var i=0; i < arr_moves.length - 1; i++) {
	        var y1 = arr_moves[i];
	        var y2 = arr_comms[i];
	        var y3 = arr_alts[i];
	        if (y1 != "") { 
	            EXERC.half_moves.push(y1);
	            EXERC.half_comms.push(y2);
	            EXERC.half_alts.push(y3);
	        }

           // console.log(i + " | " + arr_moves[i] + " | " + arr_comms[i] + " | " + arr_alts[i]);
	    }       
    
    	EXERC.tot_halfs = EXERC.half_moves.length;
       
	},
	
    Make_Move: function(my_half) {

        var my_half_long  = EXERC.Get_Long_Notation(my_half);

	    CHESS.move(my_half);
	    BOARD.move(my_half_long);
	    setTimeout(EXERC.Update_Board, 10);

	    var sq = my_half_long.split("-");
	    GRAPH.Draw_Border_Square(sq[0], COLOR_CLICK, 2);
	    GRAPH.Draw_Border_Square(sq[1], COLOR_CLICK, 2);

	    if (CONF.sound_moves == "on") {
	        AUD.Play('click');
	    }

    },


    Handle_Alts: function() {

        if (EXERC.half_alts[EXERC.ind_half] != "") {

            var arr		= EXERC.half_alts[EXERC.ind_half].split("#");
        	var ind1 	= EXERC.tab_alts_key.indexOf(arr[0]);
        	var ind2 	= EXERC.tab_alts_key.indexOf(arr[1]);

        	var str_moves1 = EXERC.tab_alts_moves[ind1];
        	var str_moves2 = EXERC.tab_alts_moves[ind2];

        	if (typeof str_moves1 !== "undefined") {
        	    var m1	= str_moves1.split("|");
        	} else {
        	    var m1 = [];
        	}

    	    if (typeof str_moves2 !== "undefined") {
    			var m2	= str_moves2.split("|");
    	    } else {
    			var m2 = [];
    	    }

            GRAPH.Handle_Alts(EXERC.half_alts[EXERC.ind_half], EXERC.id, EXERC.half_moves[EXERC.ind_half + 1], m1[0], m2[0]);

        }

    },


	Computer_Plays: function() {

        console.log("Computer_Plays - ind_half: " + EXERC.ind_half);
        console.log("EXERC.cur_alt: " + EXERC.cur_alt);
        console.log("EXERC.tot_halfs: " + EXERC.tot_halfs);
        console.log("EXERC.id: " + EXERC.id);
        console.log("------------------");

        if (EXERC.cur_alt != EXERC.id) {                                // é uma alternativa
            if (EXERC.ind_half + 1 == EXERC.tot_halfs) {
                Ajusta_Nav_Board("fim_da_alternativa");
            }
        } else {
            if (EXERC.ind_half + 1 == EXERC.tot_halfs) {
    	        EXERC.Fim_do_Exerc();
            }
        }

        var this_half   = EXERC.half_moves[EXERC.ind_half];

        EXERC.Make_Move(this_half);

    	GRAPH.Handle_Comms(EXERC.half_comms[EXERC.ind_half]);
        EXERC.Handle_Alts();

    	EXERC.ind_half++;

        if (EXERC.cur_alt == EXERC.id) {                                // é a linha principal
            if (EXERC.ind_half == EXERC.tot_halfs) {
    	        EXERC.Fim_do_Exerc();
            }
        }

	    EXERC.Show_Turn();
	    EXERC.Handle_User_Input();

	},





	Computer_Plays_OLD: function() {

        console.log("Computer_Plays - ind_half: " + EXERC.ind_half);
        console.log("EXERC.cur_alt: " + EXERC.cur_alt);
        console.log("EXERC.tot_halfs: " + EXERC.tot_halfs);
        console.log("EXERC.id: " + EXERC.id);
        console.log("------------------");

        if (EXERC.cur_alt != EXERC.id) {      // é uma alternativa
            if (EXERC.ind_half == EXERC.tot_halfs) {
                alert("Fim da alternativa 1");
                Ajusta_Nav_Board("fim_da_alternativa");
                return;
            }
        } else {
            if (EXERC.ind_half >= EXERC.tot_halfs) {
    	        EXERC.Fim_do_Exerc();
                return;
            }
        }

        /*
	    if (MOD.tipo == 2) {										// MODO view
	        if (EXERC.ind_half >= EXERC.tot_halfs) {
	            EXERC.Fim_do_Exerc();
	            EXERC.Handle_But_Board();
	            return;
	        }
	    }
        */
	    
	    var long_notation = EXERC.Get_Long_Notation(EXERC.half_moves[EXERC.ind_half]);
	
	    CHESS.move(EXERC.half_moves[EXERC.ind_half]);
	    BOARD.move(long_notation);
		
	    setTimeout(EXERC.Update_Board, 10);
	
	    var sq = long_notation.split("-");
	    GRAPH.Draw_Border_Square(sq[0], COLOR_CLICK, 3);
	    GRAPH.Draw_Border_Square(sq[1], COLOR_CLICK, 3);
	
	    if (CONF.sound_moves == "on") {
	        AUD.Play('click');
	    }

    	GRAPH.Handle_Comms(EXERC.half_comms[EXERC.ind_half]);

        if (EXERC.half_alts[EXERC.ind_half] != "") {

    	    var arr		= EXERC.half_alts[EXERC.ind_half].split("#");
    	    var ind1 	= EXERC.tab_alts_key.indexOf(arr[0]);
    	    var ind2 	= EXERC.tab_alts_key.indexOf(arr[1]);

    	    var str_moves1 = EXERC.tab_alts_moves[ind1];
    	    var str_moves2 = EXERC.tab_alts_moves[ind2];

    	    if (typeof str_moves1 !== "undefined") {
    			var m1	= str_moves1.split("|");
    	    } else {
    			var m1 = [];
    	    }

    	    if (typeof str_moves2 !== "undefined") {
    			var m2	= str_moves2.split("|");
    	    } else {
    			var m2 = [];
    	    }

        	GRAPH.Handle_Alts(EXERC.half_alts[EXERC.ind_half], EXERC.id, EXERC.half_moves[EXERC.ind_half + 1], m1[0], m2[0]);

        }

    	EXERC.ind_half++;


        if (EXERC.cur_alt != EXERC.id) {      // é uma alternativa
            if (EXERC.ind_half > EXERC.tot_halfs) {
                alert("Fim da alternativa 2");
                Ajusta_Nav_Board("fim_da_alternativa");
            }
        } else {
            if (EXERC.ind_half >= EXERC.tot_halfs) {
    	        EXERC.Fim_do_Exerc();
            }
        }

	    EXERC.Show_Turn();
	    EXERC.Handle_User_Input();
	
	},
	

	
	Fim_do_Exerc: function() {
		
		EXERC.is_exercing = false;		
		EXERC.user_turn = false;
		
		CLOCK.Off();
		
		if (!EXERC.is_reforco) {
		    var time_spent = CLOCK.Get_Time_Spent();	    
		    
	    	if (EXERC.acertou && time_spent < TIME_PER_EXERC) {
	        	var resultado = "S";
	    	} else {
	    		var resultado = "N";
	    		if (time_spent > TIME_PER_EXERC) {
					time_spent = TIME_PER_EXERC + 1;    		
	    		}	
	    	}
		
		    if (EXERC.last_done <= EXERC.cur_exerc) {
		        STATS.Update_My_Tempo(EXERC.cur_day, EXERC.cur_exerc, time_spent);
		        STATS.Update_My_Acertos(EXERC.cur_day, EXERC.cur_exerc, resultado);
		        STATS.Update_My_Days(EXERC.cur_day, EXERC.cur_exerc);
		    }				
		}
	    
	    EXERC.Print_Final_Exerc_Msg();  
	
		
	
	
	},
		
	
	Print_Final_Exerc_Msg: function() {
	
	    setTimeout(GRAPH.Print_OK_Icon, 500);
	    setTimeout(GRAPH.Clear_Layer, 1500);
	
	},	
	
		
    Reset: function() {
    	EXERC.id = 0;
    	EXERC.white = "";
    	EXERC.black = "";
    	EXERC.place = "";
    	EXERC.fen = "";
    	EXERC.who = "";
    	EXERC.dispo = "";
    	EXERC.pgn = "";
    	EXERC.alts = "";

    	EXERC.tot_erros = 0;
    	EXERC.acertou = true;

        EXERC.tab_alts_key = [];
        EXERC.tab_alts_moves = [];
        EXERC.tab_alts_comms = [];
        EXERC.tab_alts_alts = [];

        EXERC.str_moves = "";
        EXERC.str_comms = "";
        EXERC.str_alts = "";

        EXERC.half_moves = [];
        EXERC.half_comms = [];
        EXERC.half_alts = [];
        EXERC.tot_halfs = 0;
        EXERC.ind_half = -1;

        EXERC.cur_day = 0;
    	EXERC.cur_exerc = 0;
        EXERC.cur_alt = 0;
    	EXERC.last_done = 0;
    	EXERC.is_reforco = false;

    	EXERC.user_turn = false;
    	EXERC.is_exercing = false;

    },
	
		

	Get_Long_Notation: function(lance) {

    	var moves   = CHESS.moves({ verbose: true });
    	var len     = moves.length;

    	for (var i=0; i < len; i++) {
        	if (Stripped_San(lance) == Stripped_San(moves[i].san)) {
            	return moves[i].from + "-" + moves[i].to;
        	}
    	}

    	console.log("erro: (" + lance + ")");

	},
	
	
	
	Get_Turn: function() {
	
	    return CHESS.turn();
	
	},	
		
	
	Handle_User_Input: function() {


		var but = new Buttons(EXERC.cur_exerc, EXERC.ind_half, EXERC.tot_halfs, EXERC.last_done, EXERC.user_turn, EXERC.is_exercing);


	},
	


	Load_This_Alternativa: function(id_exerc) {
	
	    var ind = EXERC.tab_alts_key.indexOf(id_exerc.toString());
	
	    EXERC.str_moves     = EXERC.tab_alts_moves[ind];
	    EXERC.str_comms     = EXERC.tab_alts_comms[ind];
	    EXERC.str_alts      = EXERC.tab_alts_alts[ind];

	    EXERC.cur_alt       =  id_exerc;

	},

	

	Store_Tags_ALT: function(my_var) {

    	EXERC.tab_alts_key.length   = 0;
    	EXERC.tab_alts_moves.length = 0;
    	EXERC.tab_alts_comms.length = 0;
    	EXERC.tab_alts_alts.length  = 0;

    	var arr = my_var.split("<ALT>");
	
	    for (var i=1; i < arr.length; i++) {
	        var xis = arr[i].split("<>");
	        EXERC.tab_alts_key.push(xis[0]);
	        EXERC.tab_alts_moves.push(xis[1]);
	        EXERC.tab_alts_comms.push(xis[2]);
	        EXERC.tab_alts_alts.push(xis[3]);
	    }

	},
	


	Print_Board: function(my_fen, my_dispo) {
	
	    BOARD.position(my_fen, false);
	    CHESS.load(my_fen);
	
	    if (my_dispo == "w") {
	        BOARD.orientation('white');
	    } else {
	        BOARD.orientation('black');
	    }
	
	},
			
	
	Show_Solution: function() {
	
	    var my_delay = 1000;
	
	    for (var i = EXERC.ind_half; i < EXERC.tot_halfs; i++) {
	        setTimeout(EXERC.Computer_Plays, my_delay);
	        my_delay = my_delay + 2000;
	    }
	
	},
		


	Show_Turn: function() {

    	var turn = EXERC.Get_Turn();

    	if (turn == "w") {
        	$("#turn").css('color', '#FFFFFF');
    	} else {
        	$("#turn").css('color', '#000000');
    	}

	},




	Update_Board: function() {

    	var new_fen = CHESS.fen();
    	BOARD.position(new_fen);

	},



	Get_Is_Exercing: function() {

		return EXERC.is_exercing;
		
	},	 
	
	 
	Get_User_Turn: function() {
			
		return EXERC.user_turn;
		
	},	 
	 
	 
	User_Acertou: function() {
		
		var long_notation = EXERC.Get_Long_Notation(EXERC.half_moves[EXERC.ind_half]);
	 		
	    CHESS.move(EXERC.half_moves[EXERC.ind_half]);
	    BOARD.move(long_notation);
	    	
	    setTimeout(EXERC.Update_Board, 10);
	    	
	    GRAPH.Handle_Comms(EXERC.half_comms[EXERC.ind_half]);
	    EXERC.ind_half++;
	
	    EXERC.Show_Turn();
	
	    if (EXERC.ind_half == EXERC.tot_halfs) {
	        EXERC.Fim_do_Exerc();
	    } else {
	        if (MOD.tipo == 1) {
	            setTimeout(EXERC.Computer_Plays, 1000);
	            EXERC.user_turn = true;
	        }
	    }
	    	
		EXERC.Handle_User_Input();
			
	},	 
	 
	 
	User_Errou: function() {
	        
		if (CONF.sound_msgs == "on") {
	        AUD.Play('wrong');
	    }	
		
		EXERC.acertou = false;
	    EXERC.tot_erros++;
	
	    if (EXERC.tot_erros >= ERROS_SHOW_SOLUTION) {
	        EXERC.Show_Solution();
	        EXERC.tot_erros = 0;
	    } else {
	        EXERC.user_turn = true;
	    }	
		
	},	 
	 
	 

	Set_New_Exerc: function(arr, arg1, arg2, arg3, arg4, arg5) {  
		
		EXERC.cur_day	 = arg1;
		EXERC.cur_exerc = arg2;
		EXERC.last_done = arg3;
		EXERC.is_reforco = arg5;
	      
		EXERC.id		= arr[0];
		EXERC.white 	= arr[1];
		EXERC.black 	= arr[2];
		EXERC.place 	= arr[3];
		EXERC.fen 	= arr[4];
		EXERC.who 	= arr[5];
		EXERC.dispo 	= arr[6];
		EXERC.pgn 	= arr[7];
		EXERC.alts 	= arr[8];
			
		EXERC.Store_Tags_ALT(EXERC.alts);	
		EXERC.Load_This_Alternativa(EXERC.id);
	    EXERC.Build_Array_Halfs();
			
		EXERC.ind_half = 0;
					
		EXERC.Print_Board(EXERC.fen, EXERC.dispo);	
		EXERC.Print_Header(EXERC.cur_exerc, arg4);
			
		EXERC.Show_Turn();
			
		EXERC.acertou		= true;
		EXERC.is_exercing = true;	
			
    	if (MOD.tipo == 1 && EXERC.cur_exerc >= EXERC.last_done) {
        	EXERC.user_turn = true;
        	CLOCK.On();
    	}			
			
		EXERC.Handle_User_Input();			
	
	},
				
			 

	Show_Next_Half: function() {
		
		GRAPH.Clear_Layer();
		EXERC.Computer_Plays();
		
	},
		
		
	Back_Move: function() {
		
		CHESS.undo();
    	setTimeout(EXERC.Update_Board, 10);
    	EXERC.ind_half--;

    	GRAPH.Handle_Comms(EXERC.half_comms[EXERC.ind_half]);

    	EXERC.Show_Turn();
    	EXERC.Handle_User_Input();
				
	},				
		
				
	Print_Header: function(arg1, arg2) {
	
    	$("#clock").html("03:00");
    	$("#white").html(EXERC.white);
    	$("#black").html(EXERC.black);    
    	$("#place").html(EXERC.place);
    	$("#gym_exerc").html(arg1); 		
    	$("#gym_tot").html(arg2);

        if (MOD.tipo == 1) {
            $("#clock").css('display', 'block');
        } else {
            $("#clock").css('display', 'none');
        }
	
	},
		
				
		 	
	Ve_Se_Acertou: function(sq_from, sq_to) {		
		
		EXERC.user_turn 	= false;
		
    	var long_notation   = EXERC.Get_Long_Notation(EXERC.half_moves[EXERC.ind_half]); 	    	
    	var arr             = long_notation.split("-");
    	if (arr[0] == sq_from && arr[1] == sq_to) {
        	return true;
    	}

    	return false;		
	
	}

	 

}

