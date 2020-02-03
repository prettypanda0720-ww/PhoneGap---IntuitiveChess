
/********************************************************************************************************
 * 
 *      Intuitive Chess API 
 *      Version: 0.9.0                         
 *      Created on: 15th jun 2019
 *      By: Sérgio Batista (sergio.tadela@gmail.com)
 * 
 ********************************************************************************************************/
  
var IChess = function() {
        
    var width = $("#board").width();

    $("#graph").attr('width', width);
    $("#graph").attr('height', width);
    
    function my_delay() {
        $("#teste1").html("Buuuu");
    }              
    
    return {
        
        Bosta:  function() {
            return "BLACK";
        },
        
        Merda: function() {
            setTimeout(my_delay, 2000);
            return BLACK;
        }
        
    }
    
}


/*

    var VERSION = "0.9.0";
    

    
    var ICHESS = new IChess();
    
    console.log("Result: " + ICHESS.Merda());
    
   

    var TAB_EXERCS  = [];
    
    var CLIC_FROM       = "";
    var CLIC_TO         = "";
    var CUR_HALF        = 0;
    var CUR_MOD         = 0;
    var CUR_DAY         = 0;
    var CUR_EXERC       = 0;
    var DELAY           = 0;        // Tempo entre um gráfico e outro

    var LAST_DONE       = 0;        // Último exercício completado (para controle dos botões de Navegação)
   
   
   
    var MOD             = {};
    
    var STACK           = [];
    var MOD_TITULO      = "";
    var MOD_DESCR       = "";
    var MOD_TIPO        = "";
    var MOD_CATEG_COD   = 0;
    var MOD_CATEG_DESCR = "";
    var MOD_STR_EXERCS  = "";
    var MOD_TOT_EXERCS  = 0;        // Total de exercícios do módulo corrente
    var MOD_TXT_INTRO   = "";
    var MOD_TXT_DAYS    = "";
    var MOD_TXT_FINAL   = "";
    var MOD_ACERTOS     = "";
    var MOD_TEMPO       = "";
    var MOD_DAYS        = "";
    var TOT_HALF        = 0;
    var TOT_EXERCS_DAY  = 0;        // Total de exercícios do dia de treinamento
    var TOT_ERROS       = 0;

    var USER_TURN       = false;

    var ACERTOU = false;
    var HALF_MOVES = [];
    var HALF_COMMS = [];
    var IND_HALF = 0;
    var TIME_CONTROL = 0;
    var CLOCK_CUR = 0;
    var CLOCK_INI = 0;
    var CLOCK_FIM = 0;



    var MOD = {
        tot_exercs:     0,
        tab_id_exercs:  [],
        cur_exerc:      0,   // Id do exercício corrente
        cur_ind:        0
    }


    var EXERC = {
        id          : 0,
        player1     : "White Player",
        player2     : "Black Player",
        place       : "Place",
        fen         : START_POSITION,
        turn        : "w",
        orientation : "w",
        str_moves   : "",
        str_comms   : "",
        str_alts    : "",
        pgn         : "",
        aux         : "",
        moves_white : [],
        moves_black : [],
        comms_white : [],
        comms_black : [],
        alts_white  : [],
        alts_black  : [],
        half_moves  : [],
        half_comms  : [],
        half_alts   : [],
        tot_moves   : 0,
        cur_move    : 0,
        half_ind    : -1,
        tot_halfs   : 0,
        alts_key    : [],
        alts_moves  : [],
        alts_comms  : [],
        alts_alts   : []
    };

    var CUR_HALF_IND    = [];
    var CUR_ID_LINE     = [];
    var CUR_FEN         = [];

    Startup();
    Set_Cron_Functions();
    Nav_Gym_Clicked();
    Set_User_Config();
    Set_Lang_Selec();
    Populate_Help();
    Set_Theme(CONF_THEME);






    function Save_Main_Line() {
    
        CUR_HALF_IND.push(EXERC.half_ind);
        CUR_ID_LINE.push(EXERC.id);
        CUR_FEN.push(EXERC.fen);
    
    }


    function Restore_Main_Line() {
    
        EXERC.half_ind  = CUR_HALF_IND.pop();
        EXERC.id        = CUR_ID_LINE.pop();
        EXERC.fen       = CUR_FEN.pop();
    
    }


    function Clear_Tabs_EXERC() {
            
        EXERC.moves_white.length    = 0;
        EXERC.moves_black.length    = 0; 
        EXERC.comms_white.length    = 0;
        EXERC.comms_black.length    = 0;
        EXERC.alts_white.length     = 0; 
        EXERC.alts_black.length     = 0;    
        EXERC.half_moves.length     = 0;
        EXERC.half_comms.length     = 0;
        EXERC.half_alts.length      = 0;
        EXERC.cur_move              = 1;
        EXERC.half_ind              = -1;    
        
    }





    function Ajax_Connect(vars) {

        $.ajax({
            url: "https://intuitivechessapp.com/" + VERSION + "/back/back.php",
            method: "POST",
            data: { action: vars[0], p1: vars[1], p2: vars[2], p3: vars[3], p4: vars[4], p5: vars[5], p6: vars[6] },
            success: (function (result) {
                Handle_Retorno_Ajax(result, vars[0]);
            }),
            fail: (function () {
                $("#modal2_header").html('Mensagem');
                $("#modal2_body").html('Erro ao conectar ao servidor... Por favor, tente novamente dentro de alguns instantes.');
                $("#show_modal2").click();
            })
        });

    }


    function Alt_Clicked(guess) {

        alert(guess);

    }


    function Back_Move() {

        CHESS.undo();
        setTimeout(Update_Board, 10);
        IND_HALF--;

        var comms = Get_Comms();
        Handle_Comms(comms);

        Show_Turn();
        Handle_But_Board();

    }


    function Build_Array_Comms(str_comms) {

        return;

        var ret = Extract_Param_Alts(str_comms);

        var str_alt1 = ret[0];
        var str_alt2 = ret[1];
        var str_comms = ret[2];

        var a = [];
        var x = str_comms.split("|");

        for (var i = 0; i < x.length - 1; i++) {
            var y = x[i].split("~");
            a.push(y[0]);
            a.push(y[1]);
        }

        return a;

    }


    function Build_Array_Moves() {

        var str_moves = TAB_EXERCS[CUR_EXERC - 1].moves;

        var a = [];
        var x = str_moves.split("|");

        for (var i = 0; i < x.length - 1; i++) {
            var y = x[i].split("~");
            if (y[0] != "") { a.push(y[0]); }
            if (y[1] != "") { a.push(y[1]); }
        }

        return a;

    }


    function Build_Sound(file) {

        var audio_element = document.createElement('audio')

        if (audio_element.canPlayType) {
            for (var i = 0; i < arguments.length; i++) {
                var source_element = document.createElement('source');
                source_element.setAttribute('src', arguments[i]);
                if (arguments[i].match(/\.(\w+)$/i)) {
                    source_element.setAttribute('type', AUDIO_TYPES[RegExp.$1]);
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


    function But_Board_1_On() {

        if (CUR_EXERC > 1) {
            $("#but_board_1").css('color', BUT_BOARD_ON);
            BUT_1_ON = true;
        }

    }


    function But_Board_2_On() {

        if (CUR_HALF > 1) {
            $("#but_board_2").css('color', BUT_BOARD_ON);
            BUT_2_ON = true;
        }

    }


    function But_Board_3_On() {

        if (IND_HALF == TOT_HALF && !USER_TURN) {
            $("#but_board_3").css('color', BUT_BOARD_ON);
            BUT_3_ON = true;
        }

    }


    function But_Board_4_On() {

        if (MOD_TIPO == 2) {
            $("#but_board_4").css('color', BUT_BOARD_ON);
            BUT_4_ON = true;
        } else {
            if (LAST_DONE >= CUR_EXERC) {
                if (IND_HALF < TOT_HALF) {
                    $("#but_board_4").css('color', BUT_BOARD_ON);
                    BUT_4_ON = true;
                }
            }
        }

    }


    function But_Board_5_On() {

        if (!USER_TURN) {
            $("#but_board_5").css('color', BUT_BOARD_ON);
            BUT_5_ON = true;
        }

    }


    function But_Board_Clicked(num_but) {

        $("#but_board_" + num_but).blur();

        if (BUT_1_ON && num_but == 1) {
            return But_Undo_Exerc();
        }

        if (BUT_2_ON && num_but == 2) {
            return But_Undo_Half();
        }

        if (BUT_3_ON && num_but == 3) {
            return But_Redo_Exerc();
        }

        if (BUT_4_ON && num_but == 4) {
            return But_Next_Half();
        }

        if (BUT_5_ON && num_but == 5) {
            return But_Next_Exerc();
        }

    }


    function But_Board_Off() {

        $("#but_board_1").css('color', BUT_BOARD_OFF);
        $("#but_board_2").css('color', BUT_BOARD_OFF);
        $("#but_board_3").css('color', BUT_BOARD_OFF);
        $("#but_board_4").css('color', BUT_BOARD_OFF);
        $("#but_board_5").css('color', BUT_BOARD_OFF);

        BUT_1_ON = false;
        BUT_2_ON = false;
        BUT_3_ON = false;
        BUT_4_ON = false;
        BUT_5_ON = false;

    }


    function But_Enviar_Clicked() {

        var msg = document.getElementById("msg_suporte").value;
        var vars = ["suporte", ID_APP, msg];
        Ajax_Connect(vars);

    }


    function But_Next_Exerc() {

        CUR_EXERC++;
        Start_Exerc();

    }


    function But_Next_Half() {

        Computer_Plays();

    }


    function But_Redo_Exerc() {

        CUR_EXERC--;
        But_Next_Exerc();

    }


    function But_Undo_Exerc() {

        CUR_EXERC--;
        Start_Exerc();

    }


    function But_Undo_Half() {

        Back_Move();

    }


    function Canvas_Clicked(event) {

        if (!USER_TURN) {
            return;
        }

        if (CONF_SOUND_MOVES == "on") {
            SOUND_CLICK.playclip();
        }

        if (window.screen.availWidth > 1300) {
            var ajusteX = 308;
            var ajusteY = 110;
        } else {
            var ajusteX = 0;
            var ajusteY = 110;
        }

        var col = parseInt((event.clientX - ajusteX) / 42.5);
        var row = parseInt((event.clientY - ajusteY) / 42.5);

        if (Get_Orientation() == "white") {
            var square = COLUMNS[col] + ROWS[row];
        } else {
            var square = COLUMNS_FLIP[col] + ROWS_FLIP[row];
        }

        if (CLIC_FROM != "") {
            Draw_Border_Square(square, ORANGE, 3);
            CLIC_TO = square;
            if (Validate_Move()) {
                setTimeout(Check_User_Move, 200);
            } else {
                if (CONF_SOUND_MOVES == "on") {
                    SOUND_INVALID.playclip();
                }
                Clear_Layer();
                console.log("Invalid move: " + CLIC_FROM + "-" + CLIC_TO);
                CLIC_TO = "";
                CLIC_FROM = "";
            }
        } else {
            Clear_Layer();
            Draw_Border_Square(square, ORANGE, 3);
            CLIC_FROM = square;
        }

    }


    function Carrega_Modulo_do_Dia() {

        MOD_TITULO      = localStorage.getItem(CUR_MOD + '_titulo');
        MOD_DESCR       = localStorage.getItem(CUR_MOD + '_descr');
        MOD_TIPO        = localStorage.getItem(CUR_MOD + '_tipo');
        MOD_CATEG_COD   = localStorage.getItem(CUR_MOD + '_categ_cod');
        MOD_CATEG_DESCR = localStorage.getItem(CUR_MOD + '_categ_descr');
        MOD_TOT_EXERCS  = localStorage.getItem(CUR_MOD + '_tot_exercs');
        MOD_STR_EXERCS  = localStorage.getItem(CUR_MOD + '_str_exercs');
        MOD_TXT_INTRO   = localStorage.getItem(CUR_MOD + '_txt_intro');
        MOD_TXT_DAYS    = localStorage.getItem(CUR_MOD + '_txt_days');
        MOD_TXT_FINAL   = localStorage.getItem(CUR_MOD + '_txt_final');
        MOD_ACERTOS     = localStorage.getItem(CUR_MOD + '_acertos');
        MOD_TEMPO       = localStorage.getItem(CUR_MOD + '_tempo');
        MOD_DAYS        = localStorage.getItem(CUR_MOD + '_days');

        var arr         = [];
        var obj_mod     = Cria_Obj_Modulo_Atual();
        var str_letters = Get_Letters();

        for (var i = 0; i < str_letters.length; i++) {
            var list = Get_Range_Exercs(str_letters[i]);
            arr = arr.concat(list);
        }

        TAB_EXERCS      = Extract_Exercs(obj_mod, arr);
        TOT_EXERCS_DAY  = TAB_EXERCS.length;

    }

    function Check_New_Messages() {

        var vars = ["check_msg_suporte", ID_APP];
        Ajax_Connect(vars);

    }


    function Check_User_Move() {

        User_Turn("off");

        if (Ve_Se_Acertou(CLIC_FROM, CLIC_TO)) {
            setTimeout(Right_Move, 100);
        } else {
            if (CONF_SOUND_MOVES == "on") {
                SOUND_WRONG.playclip();
            }
            Wrong_Move();
        }

    }



    function Clear_Vars_Exerc() {

        Reset_Stack();

        TOT_ERROS   = 0;
        CUR_HALF    = 0;
        IND_HALF    = 0;
        CLIC_FROM   = "";
        CLIC_TO     = "";
        ACERTOU     = true;

        User_Turn("off");
        $("#clock").html("00:00");

    }


    function Clock_On() {

        CLOCK_INI = Date.now();
        CLOCK_CUR = Date.now();

        Clock_Update();

        TIME_CONTROL = setInterval(Clock_Update, 1000);

    }


    function Clock_Off() {

        CLOCK_FIM = Date.now();
        clearInterval(TIME_CONTROL);

    }


    function Clock_Update() {

        var diff = TIME_PER_EXERC - (((Date.now() - CLOCK_CUR) / 1000) | 0);

        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $("#clock").html(minutes + ":" + seconds);

        if (diff <= 0) {
            CLOCK_CUR = Date.now() + 1000;
        }
    }


    function Computer_Plays() {

        Clear_Layer();
        var long_notation = Get_Long_Notation(HALF_MOVES[IND_HALF]);

        CHESS.move(HALF_MOVES[IND_HALF]);
        BOARD.move(long_notation);

        Update_Board();

        var sq = long_notation.split("-");
        Draw_Border_Square(sq[0], ORANGE, 3);
        Draw_Border_Square(sq[1], ORANGE, 3);

        if (CONF_SOUND_MOVES == "on") {
            SOUND_MOVES.playclip();
        }

        var comms = Get_Comms();
        Handle_Comms(comms);
        IND_HALF++;

        Show_Turn();

        if (IND_HALF >= TOT_HALF) {
            Fim_do_Exerc();
        }

        Handle_But_Board();

    }


    function Create_Id() {

        return 'xxxxxxxxxxxxxxxx'.replace(/x/g, function (c) {
            var r = Math.random() * 16 | 0;
            return r.toString(16).toUpperCase();
        });
    }


    function Cria_Obj_Modulo_Atual() {

        var obj = [];
        var tab_exercs = MOD_STR_EXERCS.split("@");

        for (var i = 0; i < tab_exercs.length - 1; i++) {
            var row = tab_exercs[i].split("'");
            var index = i + 1;
            obj[index] = {
                id_exerc: row[0],
                white: row[1],
                black: row[2],
                place: row[3],
                fen: row[4],
                who: row[5],
                orientation: row[6],
                moves: row[7],
                comms: row[8]
            }
        }

        return obj;

    }


    function Download_Amostra(id_mod) {

        var vars = ["down_amostra", ID_APP, id_mod];
        Ajax_Connect(vars);

    }

    function Download_Mod(id_mod) {

        var vars = ["down_mod", ID_APP, id_mod];
        Ajax_Connect(vars);

    }


    function Err(num_err, ref) {

        $("#modal2_header").html('Mensagem');
        $("#modal2_body").html("ERRO: " + TAB_ERROS[num_err] + "(" + ref + ")");
        $("#show_modal2").click();

    }

    function Extract_Exercs(obj, list) {

        var arr = [];

        for (var i = 0; i < list.length; i++) {
            arr.push(obj[list[i]]);
        }

        return arr;

    }


    function Extract_Param_Alts(my) {

        var ret = [];

        // Extrai Lances e comandos da ALT1
        var b1 = my.indexOf("{");
        var b2 = my.indexOf("}");
        var alt1 = my.substr(b1 + 1, b2 - b1 - 1);
        my = my.substr(0, b1) + my.substr(b2 + 1);

        //console.log("ALT1=" + interno1);

        // Extrai Lances e comandos da ALT2
        var b1 = my.indexOf("{");
        var b2 = my.indexOf("}");
        var alt2 = my.substr(b1 + 1, b2 - b1 - 1);
        my = my.substr(0, b1) + my.substr(b2 + 1);

        //console.log("ALT2=" + interno2);

        //console.log("NEW=" + my);

        ret[0] = alt1;
        ret[1] = alt2;
        ret[2] = my;

        return ret;

    }


    function Fim_do_Day() {

        But_Board_Off();
        Update_My_Days("ok");
        Print_Final_Day();
        Populate_Mods_Acquired();

    }

    function Fim_do_Exerc() {

        Clock_Off();

        var arr = Get_Exerc_LocalStorage();
        var ind_exerc = arr[0] - 1;
        var freq = arr[1];
        var time_spent = Get_Time_Spent();
        var resultado = Get_Resultado();

        if (LAST_DONE < CUR_EXERC) {
            Update_My_Tempo(ind_exerc, freq, time_spent);
            Update_My_Acertos(ind_exerc, freq, resultado);
            Update_My_Days(CUR_EXERC);
            LAST_DONE = CUR_EXERC;
        }

        Print_Final_Exerc_Msg();   // OK

    }


    function Formata_Time(time) {

        if (time == "X")    { return "0:00"; }
        if (time < 60)      { return "0:" + Pad(time, 2); }
        if (time < 120)     { return "1:" + Pad(time - 60, 2); }
        if (time < 180)     { return "2:" + Pad(time - 120, 2); }
        if (time < 240)     { return "3:" + Pad(time - 180, 2); }
        if (time < 300)     { return "4:" + Pad(time - 240, 2); }
        if (time < 360)     { return "5:" + Pad(time - 300, 2); }

        return "?:??";

    }

    function Get_Comms() {

        return HALF_COMMS[IND_HALF];

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
        if ($(".section_gym").css('display')            == "block") { return 'section_gym'; }
        if ($(".section_stats").css('display')          == "block") { return 'section_stats'; }
        if ($(".section_suporte").css('display')        == "block") { return 'section_suporte'; }

    }



    // Retorna o último dia de treinamento completo + 1
    function Get_Current_Training_Day(mod_days) {

        var arr_days = mod_days.split("~");
        var last_ok = 0;

        for (var i = 1; i < 22; i++) {
            if (arr_days[i - 1] == "ok") {
                last_ok = i;
            }
        }

        return last_ok + 1;

    }

    // retorna a posiçao do exercício começando do 1
    // freq = número da coluna que aparece nas estatísticas
    function Get_Exerc_LocalStorage() {

        var index = 0, freq = 0;

        if (CUR_DAY == 1)  { if (CUR_EXERC > 8) { index = CUR_EXERC - 8; freq = 2; } else { index = CUR_EXERC; freq = 1; } }
        if (CUR_DAY == 2)  { if (CUR_EXERC > 8) { index = CUR_EXERC; freq = 2; } else { index = CUR_EXERC + 8; freq = 1; } }
        if (CUR_DAY == 3)  { index = CUR_EXERC; freq = 3; }
        if (CUR_DAY == 4)  { if (CUR_EXERC > 8) { index = CUR_EXERC + 8; freq = 2; } else { index = CUR_EXERC + 16; freq = 1; } }
        if (CUR_DAY == 5)  { if (CUR_EXERC > 8) { index = CUR_EXERC + 16; freq = 2; } else { index = CUR_EXERC + 24; freq = 1; } }
        if (CUR_DAY == 6)  { index = CUR_EXERC + 16; freq = 3; }
        if (CUR_DAY == 7)  { index = CUR_EXERC; freq = 4; }
        if (CUR_DAY == 8)  { if (CUR_EXERC > 8) { index = CUR_EXERC + 24; freq = 2; } else { index = CUR_EXERC + 32; freq = 1; } }
        if (CUR_DAY == 9)  { if (CUR_EXERC > 8) { index = CUR_EXERC + 32; freq = 2; } else { index = CUR_EXERC + 40; freq = 1; } }
        if (CUR_DAY == 10) { index = CUR_EXERC + 32; freq = 3; }
        if (CUR_DAY == 11) { if (CUR_EXERC > 8) { index = CUR_EXERC + 40; freq = 2; } else { index = CUR_EXERC + 48; freq = 1; } }
        if (CUR_DAY == 12) { if (CUR_EXERC > 8) { index = CUR_EXERC + 48; freq = 2; } else { index = CUR_EXERC + 56; freq = 1; } }
        if (CUR_DAY == 13) { index = CUR_EXERC + 48; freq = 3; }
        if (CUR_DAY == 14) { index = CUR_EXERC + 32; freq = 4; }
        if (CUR_DAY == 15) { index = CUR_EXERC; freq = 5; }
        if (CUR_DAY == 16) { index = CUR_EXERC + 16; freq = 5; }
        if (CUR_DAY == 17) { index = CUR_EXERC + 32; freq = 5; }
        if (CUR_DAY == 18) { index = CUR_EXERC + 48; freq = 5; }
        if (CUR_DAY == 19) { index = CUR_EXERC; freq = 6; }
        if (CUR_DAY == 20) { index = CUR_EXERC + 32; freq = 6; }
        if (CUR_DAY == 21) { index = CUR_EXERC; freq = 7; }

        var arr = [index, freq];
        return arr;

    }


    function Get_Figurine(move) {

        var arr = [move[0], move.substr(1)];

        if (arr[0] == "a" || arr[0] == "b" || arr[0] == "c" || arr[0] == "d" ||
            arr[0] == "e" || arr[0] == "f" || arr[0] == "g" || arr[0] == "h" ||
            arr[0] == "O") {
            arr[0] = "";
            arr[1] = move;
        }

        return arr;

    }

    function Get_Frequencia() {

        if (CUR_DAY == 1)  { if (CUR_EXERC <= TOT_EXERCS_DAY / 2) { return 1; } else { return 2; } }
        if (CUR_DAY == 2)  { if (CUR_EXERC <= TOT_EXERCS_DAY / 2) { return 1; } else { return 2; } }
        if (CUR_DAY == 3)  { return 3; }
        if (CUR_DAY == 4)  { if (CUR_EXERC <= TOT_EXERCS_DAY / 2) { return 1; } else { return 2; } }
        if (CUR_DAY == 5)  { if (CUR_EXERC <= TOT_EXERCS_DAY / 2) { return 1; } else { return 2; } }
        if (CUR_DAY == 6)  { return 3; }
        if (CUR_DAY == 7)  { return 4; }
        if (CUR_DAY == 8)  { if (CUR_EXERC <= TOT_EXERCS_DAY / 2) { return 1; } else { return 2; } }
        if (CUR_DAY == 9)  { if (CUR_EXERC <= TOT_EXERCS_DAY / 2) { return 1; } else { return 2; } }
        if (CUR_DAY == 10) { return 3; }
        if (CUR_DAY == 11) { if (CUR_EXERC <= TOT_EXERCS_DAY / 2) { return 1; } else { return 2; } }
        if (CUR_DAY == 12) { if (CUR_EXERC <= TOT_EXERCS_DAY / 2) { return 1; } else { return 2; } }
        if (CUR_DAY == 13) { return 3; }
        if (CUR_DAY == 14) { return 4; }
        if (CUR_DAY == 15) { return 5; }
        if (CUR_DAY == 16) { return 5; }
        if (CUR_DAY == 17) { return 5; }
        if (CUR_DAY == 18) { return 5 }
        if (CUR_DAY == 19) { return 6; }
        if (CUR_DAY == 20) { return 6; }
        if (CUR_DAY == 21) { return 7; }

        Err(2, CUR_DAY);

    }


    function Get_ID_Exerc(num_exerc) {

        return exercs[num_exerc].id_exerc;

    }

    function Get_Last_Exerc_OK() {

        var MOD_DAYS    = localStorage.getItem(CUR_MOD + "_days");
        var arr_days    = MOD_DAYS.split("~");
        var ind         = CUR_DAY - 1;

        return arr_days[ind];

    }

    function Get_Letters() {

        if (CUR_DAY == 1)   { return "AA";      }
        if (CUR_DAY == 2)   { return "BB";      }
        if (CUR_DAY == 3)   { return "AB";      }
        if (CUR_DAY == 4)   { return "CC";      }
        if (CUR_DAY == 5)   { return "DD";      }
        if (CUR_DAY == 6)   { return "CD";      }
        if (CUR_DAY == 7)   { return "ABCD";    }
        if (CUR_DAY == 8)   { return "EE";      }
        if (CUR_DAY == 9)   { return "FF";      }
        if (CUR_DAY == 10)  { return "EF";      }
        if (CUR_DAY == 11)  { return "GG";      }
        if (CUR_DAY == 12)  { return "HH";      }
        if (CUR_DAY == 13)  { return "GH";      }
        if (CUR_DAY == 14)  { return "EFGH";    }
        if (CUR_DAY == 15)  { return "AB";      }
        if (CUR_DAY == 16)  { return "CD";      }
        if (CUR_DAY == 17)  { return "EF";      }
        if (CUR_DAY == 18)  { return "GH";      }
        if (CUR_DAY == 19)  { return "ABCD";    }
        if (CUR_DAY == 20)  { return "EFGH";    }
        if (CUR_DAY == 21)  { return "ABCDEFGH";}

    }

    function Get_Long_Notation(lance) {

        var moves   = CHESS.moves({ verbose: true });
        var len     = moves.length;

        //console.log(lance);

        for (var i = 0; i < len; i++) {
            //console.log("Lance: " + Stripped_San(lance) + ", " + moves[i].san);
            if (Stripped_San(lance) == Stripped_San(moves[i].san)) {
                return moves[i].from + "-" + moves[i].to;
            }
        }

        Err(3, lance);
    }

    function Get_Orientation() {

        return BOARD.orientation();

    }



    function Get_Range_Exercs(letter) {

        if (MOD_TOT_EXERCS == 64) {
            if (letter == "A") { return [1, 2, 3, 4, 5, 6, 7, 8]; }
            if (letter == "B") { return [9, 10, 11, 12, 13, 14, 15, 16]; }
            if (letter == "C") { return [17, 18, 19, 20, 21, 22, 23, 24]; }
            if (letter == "D") { return [25, 26, 27, 28, 29, 30, 31, 32]; }
            if (letter == "E") { return [33, 34, 35, 36, 37, 38, 39, 40]; }
            if (letter == "F") { return [41, 42, 43, 44, 45, 46, 47, 48]; }
            if (letter == "G") { return [49, 50, 51, 52, 53, 54, 55, 56]; }
            if (letter == "H") { return [57, 58, 59, 60, 61, 62, 63, 64]; }
        }

        if (MOD_TOT_EXERCS == 48) {
            if (letter == "A") { return [1, 2, 3, 4, 5, 6]; }
            if (letter == "B") { return [7, 8, 9, 10, 11, 12]; }
            if (letter == "C") { return [13, 14, 15, 16, 17, 18]; }
            if (letter == "D") { return [19, 20, 21, 22, 23, 24]; }
            if (letter == "E") { return [25, 26, 27, 28, 29, 30]; }
            if (letter == "F") { return [31, 32, 33, 34, 35, 36]; }
            if (letter == "G") { return [37, 38, 39, 40, 41, 42]; }
            if (letter == "H") { return [43, 44, 45, 46, 47, 48]; }
        }

        if (MOD_TOT_EXERCS == 32) {
            if (letter == "A") { return [1, 2, 3, 4]; }
            if (letter == "B") { return [5, 6, 7, 8]; }
            if (letter == "C") { return [9, 10, 11, 12]; }
            if (letter == "D") { return [13, 14, 15, 16]; }
            if (letter == "E") { return [17, 18, 19, 20]; }
            if (letter == "F") { return [21, 22, 23, 24]; }
            if (letter == "G") { return [25, 26, 27, 28]; }
            if (letter == "H") { return [29, 30, 31, 32]; }
        }

        if (MOD_TOT_EXERCS == 24) {
            if (letter == "A") { return [1, 2, 3]; }
            if (letter == "B") { return [4, 5, 6]; }
            if (letter == "C") { return [7, 8, 9]; }
            if (letter == "D") { return [10, 11, 12]; }
            if (letter == "E") { return [13, 14, 15]; }
            if (letter == "F") { return [16, 17, 18]; }
            if (letter == "G") { return [19, 20, 21]; }
            if (letter == "H") { return [22, 23, 24]; }
        }

        if (MOD_TOT_EXERCS == 16) {
            if (letter == "A") { return [1, 2]; }
            if (letter == "B") { return [3, 4]; }
            if (letter == "C") { return [5, 6]; }
            if (letter == "D") { return [7, 8]; }
            if (letter == "E") { return [9, 10]; }
            if (letter == "F") { return [11, 12]; }
            if (letter == "G") { return [13, 14]; }
            if (letter == "H") { return [15, 16]; }
        }

    }


    function Get_Resultado() {

        if (ACERTOU) {
            return "S";
        }

        return "N";

    }


    function Get_Tab_Msg_Lang() {

        if (conf_lang == "POR") { return msg_por; }
        if (conf_lang == "ENG") { return msg_eng; }
        if (conf_lang == "SPN") { return msg_spn; }
        if (conf_lang == "GER") { return msg_ger; }
        if (conf_lang == "ITA") { return msg_ita; }
        if (conf_lang == "DAN") { return msg_dan; }
        if (conf_lang == "SLO") { return msg_slo; }
        if (conf_lang == "FIN") { return msg_fin; }
        if (conf_lang == "FRE") { return msg_fre; }
        if (conf_lang == "HOL") { return msg_hol; }
        if (conf_lang == "CHI") { return msg_chi; }
        if (conf_lang == "HUN") { return msg_hun; }
        if (conf_lang == "JPN") { return msg_jpn; }
        if (conf_lang == "NOR") { return msg_nor; }
        if (conf_lang == "POL") { return msg_pol; }
        if (conf_lang == "RUS") { return msg_rus; }
        if (conf_lang == "SWE") { return msg_swe; }
        if (conf_lang == "UKR") { return msg_ukr; }

    }

    function Get_Time_Spent() {

        var time_spent  = CLOCK_FIM - CLOCK_INI;
        var time_secs   = parseInt(time_spent / 1000);

        return time_secs;

    }


    function Get_Turn() {

        return CHESS.turn();

    }

    
    function Handle_But_Board() {

        But_Board_Off();

        But_Board_1_On();
        But_Board_2_On();
        But_Board_3_On();
        But_Board_4_On();
        But_Board_5_On();

    }



    function Handle_Retorno_Ajax(result, action) {

        if (action == "update_store") {
            return Handle_Retorno_Update_Store(result);
        }

        if (action == "down_amostra" || action == "down_mod") {
            return Handle_Retorno_Download_Modulo(result);
        }

        if (action == "new_user") {
            return Handle_Retorno_New_User(result);
        }

        if (action == "novo_acesso") {
            return;
        }

        if (action == "progress") {
            return;
        }

        if (action == "suporte") {
            return Handle_Retorno_Send_Suporte(result);
        }

        if (action == "check_msg_suporte") {
            return Handle_Retorno_Msg_Suporte(result);
        }

        if (action == "leu_msgs") {
            return;
        }

    }


    function Handle_Retorno_Download_Modulo(result) {

        var str_acertos     = "";
        var str_tempo       = "";

        result      = result.trim();
        var arr_ret = result.split("~~~");

        var mod_name        = arr_ret[0];
        var mod_titulo      = arr_ret[1];
        var mod_descr       = arr_ret[2];
        var mod_tipo        = arr_ret[3];
        var mod_categ       = arr_ret[4];
        var mod_categ_descr = arr_ret[5];
        var tot_exercs      = arr_ret[6];
        var mod_exercs      = arr_ret[7];
        var txt_intro       = arr_ret[8];
        var txt_days        = arr_ret[9];
        var txt_final       = arr_ret[10];
        var cover_img       = arr_ret[11];

        localStorage.setItem(mod_name + '_str_exercs', mod_exercs);

        for (var i = 0; i < tot_exercs; i++) {
            str_acertos     = str_acertos + "X,X,X,X,X,X,X~";
            str_tempo       = str_tempo + "X,X,X,X,X,X,X~";
        }

        localStorage.setItem(mod_name + '_acertos', str_acertos);
        localStorage.setItem(mod_name + '_tempo', str_tempo);
        localStorage.setItem(mod_name + '_days', "0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~");
        localStorage.setItem(mod_name + '_titulo', mod_titulo);
        localStorage.setItem(mod_name + '_descr', mod_descr);
        localStorage.setItem(mod_name + '_tipo', mod_tipo);
        localStorage.setItem(mod_name + '_categ_cod', mod_categ);
        localStorage.setItem(mod_name + '_categ_descr', mod_categ_descr);
        localStorage.setItem(mod_name + '_tot_exercs', tot_exercs);
        localStorage.setItem(mod_name + '_txt_intro', txt_intro);
        localStorage.setItem(mod_name + '_txt_days', txt_days);
        localStorage.setItem(mod_name + '_txt_final', txt_final);
        localStorage.setItem(mod_name + '_cover_img', cover_img);

        //console.log("Down: " + cover_img);

        Populate_Mods_Acquired();

        $("#modal2_header").html('Mensagem');
        $("#modal2_body").html("Download do módulo <b>" + mod_titulo + "</b> concluído com sucesso!");
        $("#show_modal2").click();


    }


    function Handle_Retorno_Msg_Suporte(result) {

        //console.log(result);

        var saida       = "";
        var tot_alerts  = 0;
        var arr         = result.split("|");

        if (arr[0].trim() == "OK") {
            tot_alerts = arr[1];
            for (var i = 2; i < arr.length - 1; i++) {
                if (arr[i] != undefined) {
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

    }


    function Handle_Retorno_New_User(result) {

        var arr = result.split("~");

        if (arr[0].trim() == "OK") {
            localStorage.setItem('id_app', ID_APP);
        } else {
            $("#modal2_header").html('Mensagem');
            $("#modal2_body").html("Você precisa estar conectado para fazer o primeiro acesso.");
            $("#show_modal2").click();
        }

    }


    function Handle_Retorno_Send_Suporte(result) {

        $("#area_input_msg").css('display', 'none');

        var arr = result.split("~");

        if (arr[0].trim() == "OK") {
            Check_New_Messages();
            $("#modal2_header").html('Mensagem');
            $("#modal2_body").html("Mensagem recebida. Em até 24 horas você deverá receber uma resposta. Obrigado!");
            $("#show_modal2").click();
        } else {
            $("#modal2_header").html('Mensagem');
            $("#modal2_body").html("Houve problema com envio da sua mensagem, por favor tente novamente mais tarde." + result);
            $("#show_modal2").click();
        }

    }


    function Handle_Retorno_Update_Store(result) {

        var arr = result.split("|");

        if (arr[0].trim() == "OK") {
            localStorage.setItem('store_mods', result);
            Populate_Store();

            var data        = new Date();
            var hora        = Pad(data.getHours(), 2);
            var min         = Pad(data.getMinutes(), 2);
            var seg         = Pad(data.getSeconds(), 2);
            var str_hora    = hora + ':' + min + ':' + seg;

            //console.log("Updating Store..." + str_hora);
        }

        //console.log(result);

    }

    function Handle_User_Input() {

        if (MOD_TIPO == 1 && CUR_EXERC > LAST_DONE) {
            User_Turn("on");
            Clock_On();
        }

        Handle_But_Board();

    }
    


    function Hide_All() {

        $(".section_board").css         ('display', 'none');
        $(".section_conf").css          ('display', 'none');
        $(".section_conf_board").css    ('display', 'none');
        $(".section_conf_idioma").css   ('display', 'none');
        $(".section_conf_sounds").css   ('display', 'none');
        $(".section_conf_treino").css   ('display', 'none');
        $(".section_days").css          ('display', 'none');
        $(".section_help").css          ('display', 'none');
        $(".section_help_questions").css('display', 'none');
        $(".section_help_answers").css  ('display', 'none');
        $(".section_menu").css          ('display', 'none');
        $(".section_mods_store").css    ('display', 'none');
        $(".section_gym").css           ('display', 'none');
        $(".section_stats").css         ('display', 'none');
        $(".section_suporte").css       ('display', 'none');
        $(".section_naveg").css         ('display', 'block');

    }


    function HTML_Chat_Suporte(ind, pergunta, resposta, data_perg, data_resp) {

        if (ind % 2 === 0) {
            var cla1 = "chat_box_user";
            var cla2 = "chat_box_ic";
        } else {
            var cla1 = "chat_box_user_alt";
            var cla2 = "chat_box_ic_alt";
        }

        var perg = '<div style="font-size: 11px; color: #FFFFFF; text-align: left; padding: 0px 0px 0px 10px;"><i>Você:</i></div>' +
            '<div style="clear: both;"></div>' +
            '<div class="' + cla1 + '">' +
            pergunta +
            '<div style="font-size: 11px; color: #777777; padding: 10px 0px 0px 0px; float: right;">' + data_perg + '</div>' +
            '<div style="clear: both;"></div>' +
            '</div>' +
            '<div style="clear: both;"></div>';

        var resp = '<div style="font-size: 11px; color: #FFFFFF; text-align: right; padding: 20px 10px 0px 0px;">Intuitive Chess:</div>' +
            '<div class="' + cla2 + '">' +
            resposta +
            '<div style="font-size: 11px; color: #777777; padding: 10px 0px 0px 0px; float: right;">' + data_resp + '</div>' +
            '<div style="clear: both;"></div>' +
            '</div><div style="clear: both;">';

        if (resposta == "") {
            return perg;
        } else {
            return resp + perg;
        }

    }

    function HTML_Get_Button_Alt(peca, casa) {

        if (peca == "K" || peca == "Q" || peca == "R" || peca == "B" || peca == "N") {
            return '<table width="100%" align="center">' +
                '<tr>' +
                '<td width="50%" align="right">' +
                '<img src="img/notation/w' + peca + '.png" width="24" height="24">' +
                '</td>' +
                '<td width="50%" align="left">' +
                '<div style="font-size: 18px;"><b>' + casa + '</b></div>' +
                '</td>' +
                '</tr>' +
                '</table>';
        } else {
            return '<table width="100%" align="center">' +
                '<tr>' +
                '<td align="center">' +
                '<div style="font-size: 18px;"><b>' + casa + '</b></div>' +
                '</td>' +
                '</tr>' +
                '</table>';

        }

    }


    function HTML_Help_Answers(question, answer) {

        return '<div style="font-size: 22px; font-weight: bold; color: #ff6424;">' + question + '</div>' +
            '<div style="padding: 20px 10px 10px 10px; line-height: 130%; color: #555555;">' + answer + '</div>';
    }


    function HTML_Help_Questions(ind, question) {

        //categ = "'" + categ + "'";

        //var param = "'help', ind";

        //return '<div onclick="Show_Info(' + ind + ',' + categ + ');" style="border-bottom: 1px solid #999999; padding: 10px 20px 10px 20px; color: #FFFFF0;">' + question + '</div>';
        return '<div onclick="Show_Info(' + ind + ');" style="border-bottom: 1px solid #999999; padding: 10px 20px 10px 20px; color: #FFFFF0;">' + question + '</div>';
    }




    function HTML_Mods_Acquired_Line(num) {

        var mod_titulo      = localStorage.getItem("my" + num + "_titulo");
        var mod_categ_descr = localStorage.getItem("my" + num + "_categ_descr");
        var mod_days        = localStorage.getItem("my" + num + "_days");
        var cover_img       = localStorage.getItem("my" + num + '_cover_img');

        var day = Get_Current_Training_Day(mod_days);
        if (day == 22) {
            var status = "Concluído";
        } else {
            var status = "Dia " + day;
        }

        //console.log(cover_img);

        return '<center><div class="store_box" style="min-height: 170px; padding: 5px 0px 0px 0px;">' +
            '<div class="cover_img">' +
            '<!-- <div style="float: right;"><i class="fa fa-times-circle" style="font-size: 18px; color: #AAAAAA; padding: 0px 6px 0px 0px;"></i></div> -->' +
            '<img src="img/covers/' + cover_img + '" width="112" height="144" style="padding: 10px;" align="left">' +
            '</div>' +
            '<div class="modulo_titulo">' +
            '<b>' + mod_titulo + '</b>' +
            '</div>' +
            '<div style="font-size: 12px; color: #333333; text-align: left; padding: 0px 0px 0px 10px;"><b>Categoria:</b> ' +
            mod_categ_descr +
            '</div>' +
            '<div class="modulo_descr2">' +
            '<b>Status:</b> ' + status +
            '</div>' +

            '<div style="padding: 30px 0px 0px 0px; text-align: left;">' +
            '<button type="button" class="btn btn-success" style="font-size: 12px; font-weight: bold; margin-right: 10px; " onclick="Nav_Training_Clicked(' + num + ');">Treinar</button>' +
            '<button type="button" class="btn btn-warning" style="font-size: 12px; font-weight: bold;" onclick="Nav_Stats_Clicked(' + num + ');">Estatísticas</button>' +
            '<br><br>' +
            '</div></div></center>';

    }


    function HTML_Monta_Alt_Three_Buttons(opt1, opt2, opt3) {

        var arr1 = Get_Figurine(opt1);
        var arr2 = Get_Figurine(opt2);
        var arr3 = Get_Figurine(opt3);

        var but1 = HTML_Get_Button_Alt(arr1[0], arr1[1]);
        var but2 = HTML_Get_Button_Alt(arr2[0], arr2[1]);
        var but3 = HTML_Get_Button_Alt(arr3[0], arr3[1]);

        var html = '<table width="85%" align="center" border="0">' +
            '<tr>' +
            '<td align="center" width="30%">' +
            '<div id="but1" class="btn btn-warning" onClick="Alt_Clicked(\'' + opt1 + '\')" style="width: 90px; height: 40px; background: #CCCCCC; border: 1px solid #BBBBBB;">' +
            but1 +
            '</div>' +
            '</td>' +
            '<td width="5%"></td>' +
            '<td align="center" width="30%">' +
            '<div id="but2" class="btn btn-warning" onClick="Alt_Clicked(\'' + opt2 + '\')" style="width: 90px; height: 40px; background: #CCCCCC; border: 1px solid #BBBBBB;">' +
            but2 +
            '</div>' +
            '</td>' +
            '<td width="5%"></td>' +
            '<td align="center" width="30%">' +
            '<div id="but2" class="btn btn-warning" onClick="Alt_Clicked(\'' + opt3 + '\')" style="width: 90px; height: 40px; background: #CCCCCC; border: 1px solid #BBBBBB;">' +
            but3 +
            '</div>' +
            '</td>' +
            '</tr>' +
            '</table>';

        return html;

    }


    function HTML_Monta_Alt_Two_Buttons(opt1, opt2) {

        var arr1 = Get_Figurine(opt1);
        var arr2 = Get_Figurine(opt2);

        var but1 = HTML_Get_Button_Alt(arr1[0], arr1[1]);
        var but2 = HTML_Get_Button_Alt(arr2[0], arr2[1]);

        var html = '<table width="85%" align="center" border="0">' +
            '<tr>' +
            '<td align="center" width="50%">' +
            '<div id="but1" class="btn btn-warning" onClick="Alt_Clicked(\'' + opt1 + '\')" style="width: 90px; height: 40px; background: #CCCCCC; border: 1px solid #BBBBBB;">' +
            but1 +
            '</div>' +
            '</td>' +
            '<td align="center" width="50%">' +
            '<div id="but2" class="btn btn-warning" onClick="Alt_Clicked(\'' + opt2 + '\')" style="width: 90px; height: 40px; background: #CCCCCC; border: 1px solid #BBBBBB;">' +
            but2 +
            '</div>' +
            '</td>' +
            '</tr>' +
            '</table>';

        return html;

    }



    function HTML_No_Mods_Downloaded() {

        return '<div style="color: #EEEEEE; padding: 10px 0px 20px 0px;">' +
            'Você não tem nenhum módulo. <i class="fa fa-sad-tear" style="font-size: 24px;"></i><br><br>' +

            '<button type="button" class="btn btn-warning" style="width: 140px;" onclick="Nav_Store_Clicked();">Baixar agora</button>' +
            '</div>';

    }


    function HTML_Store_Regular_Box(id, titul, descr, cover_img, price) {

        return '<center><div class="store_box">' +
            '<div class="cover_img">' +
            '<img src="img/covers/' + cover_img + '" width="140" height="180" style="padding: 10px;" align="left">' +
            '</div>' +
            '<div class="modulo_descr">' +
            '<b>' + titul + '</b>' +
            '</div>' +
            '<div class="store_descr">' +
            descr +
            '</div>' +
            '<div style="padding: 20px 0px 0px 0px;">' +
            '<!--<i class="btn btn-info" onclick="Download_Amostra(' + id + ');" style="width: 140px; margin: 0px 0px 0px 0px;"><i class="fa fa-download" style="font-size: 18px;"></i>&nbsp; DEMO</i>-->' +
            '<!--<i class="btn btn-success" onclick="Download_Mod(' + id + ');" style="width: 140px; margin: 0px 0px 0px 10px;"><i class="fa fa-download" style="font-size: 18px;"></i>&nbsp; R$ 8,99</i>-->' +
            '<i class="btn btn-success" onclick="Download_Mod(' + id + ');" style="width: 140px; margin: 0px 0px 0px 0px;"><i class="fa fa-download" style="font-size: 18px;"></i>&nbsp; FREE</i>' +
            '<br><br>' +
            '</div></div></center>';

    }


    function Icon_Back_On() {

        $("#icon_back_img").html('<img src="img/nav_seta_bege.png" width="32" height="32">');

    }

    
    function Icon_Back_Off() {

        $("#icon_back_img").html('<img src="img/nav_seta_grey.png" width="32" height="32">');

    }


    function Icon_Conf_Sel() {

        Clock_Off();
        Icons_Off();
        $("#icon_conf").css('background', 'linear-gradient(#4f6d8f, #5788ac)');
        $("#icon_conf_img").html('<img src="img/nav_config_orange.png" width="32" height="32">');

    }

    
    function Icon_Gym_Sel() {

        Clock_Off();
        Icons_Off();
        $("#icon_gym").css('background', 'linear-gradient(#4f6d8f, #5788ac)');
        $("#icon_gym_img").html('<img src="img/nav_home_orange.png" width="32" height="32">');

    }

    
    function Icon_Help_Sel() {

        Clock_Off();
        Icons_Off();
        $("#icon_help").css('background', 'linear-gradient(#4f6d8f, #5788ac)');
        $("#icon_help_img").html('<img src="img/nav_help_orange.png" width="28" height="28">');

    }


    function Icon_Menu_Sel() {

        Clock_Off();
        Icons_Off();
        $("#icon_menu").css('background', 'linear-gradient(#4f6d8f, #5788ac)');
        $("#icon_menu_img").html('<img src="img/nav_menu_orange.png" width="32" height="32">');

    }

    
    function Icons_Off() {

        $("#icon_back").css('background',   'linear-gradient(#374354, #5d718c)');
        $("#icon_menu").css('background',   'linear-gradient(#374354, #5d718c)');
        $("#icon_store").css('background',  'linear-gradient(#374354, #5d718c)');
        $("#icon_gym").css('background',    'linear-gradient(#374354, #5d718c)');
        $("#icon_conf").css('background',   'linear-gradient(#374354, #5d718c)');
        $("#icon_help").css('background',   'linear-gradient(#374354, #5d718c)');

        $("#icon_back_img").html    ('<img src="img/nav_seta_grey.png" width="32" height="32">');
        $("#icon_conf_img").html    ('<img src="img/nav_config_bege.png" width="32" height="32">');
        $("#icon_gym_img").html     ('<img src="img/nav_home_bege.png" width="28" height="28">');
        $("#icon_help_img").html    ('<img src="img/nav_help_bege.png" width="26" height="26">');
        $("#icon_menu_img").html    ('<img src="img/nav_menu_bege.png" width="32" height="32">');
        $("#icon_store_img").html   ('<img src="img/nav_store_bege.png" width="32" height="32">');

    }


    function Icon_Store_Sel() {

        Clock_Off();
        Icons_Off();
        $("#icon_store").css('background', 'linear-gradient(#4f6d8f, #5788ac)');
        $("#icon_store_img").html('<img src="img/nav_store_orange.png" width="32" height="32">');

    }


    function Lang_Clicked(selec) {

        CONF_LANG = selec;
        localStorage.setItem('conf_lang', selec);
        Set_Lang_Selec();

    }


    function Nav_About_Clicked() {

        alert("Ainda não implementado.");

    }


    function Nav_Account_Clicked() {

        alert("Ainda não implementado.");

    }
    

    function Nav_Auto_Update() {

        if (CONF_AUTO_UPDATE == "on") {
            CONF_AUTO_UPDATE = "off";
        } else {
            CONF_AUTO_UPDATE = "on";
        }

        Toggle_Config("auto_update", CONF_AUTO_UPDATE);
        localStorage.setItem('auto_update', CONF_AUTO_UPDATE);

    }
    
    
    function Nav_Conf_Clicked() {

        Hide_All();
        Icon_Conf_Sel();
        Show_Conf();

    }


    function Nav_Conf_Board_Clicked() {

        Hide_All();
        Icons_Off();
        Icon_Back_On();
        Show_Conf_Board();

    }


    function Nav_Conf_Idioma_Clicked() {

        Hide_All();
        Icons_Off();
        Icon_Back_On();
        Show_Conf_Idioma();

    }


    function Nav_Conf_Sounds_Clicked() {

        Hide_All();
        Icons_Off();
        Icon_Back_On();
        Show_Conf_Sounds();

    }


    function Nav_Conf_Treino_Clicked() {

        Hide_All();
        Icons_Off();
        Icon_Back_On();
        Show_Conf_Treino();

    }


    function Nav_Day_Clicked(day) {

        var done = $('#bg_day_' + day).data('done');
        if (done) {      // dia já concluído
            return;
        }

        CUR_DAY = day;

        if (day == "review") {
            console.log("Rotina de revisão");
            return;
        }

        if (day == "restart") {
            Nav_Restart_Clicked();
            console.log("Rotina de restart");
            return;
        }

        Hide_All();
        Start_Training();

    }


    function Nav_Help_Clicked() {

        Hide_All();
        Icon_Help_Sel();
        Show_Help();

    }


    function Nav_GoBack() {

        var cur_page = Get_Current_Page();

        if (cur_page == 'section_board' || cur_page == 'section_stats' || cur_page == 'section_days') {
            MOD = {};
            return Nav_Gym_Clicked();
        }

        if (cur_page == 'section_conf_board' || cur_page == 'section_conf_idioma' || cur_page == 'section_conf_sounds' || cur_page == 'section_conf_treino') {
            return Nav_Conf_Clicked();
        }

        if (cur_page == 'section_help_questions') {
            return Nav_Help_Clicked();
        }

    }



    function Nav_Gym_Clicked() {

        Hide_All();
        Icon_Gym_Sel();
        Show_Gym();

    }


    function Nav_Menu_Clicked() {

        Hide_All();
        Icon_Menu_Sel();
        Show_Menu();

    }



    function Nav_No_Players_Name() {

        if (CONF_NO_PLAYERS_NAME == "on") {
            CONF_NO_PLAYERS_NAME = "off";
        } else {
            CONF_NO_PLAYERS_NAME = "on";
        }

        Toggle_Config("no_players_name", CONF_NO_PLAYERS_NAME);
        localStorage.setItem('no_players_name', CONF_NO_PLAYERS_NAME);

    }


    function Nav_Notifications() {

        if (CONF_NOTIFICATIONS == "on") {
            CONF_NOTIFICATIONS = "off";
        } else {
            CONF_NOTIFICATIONS = "on";
        }

        Toggle_Config("notifications", CONF_NOTIFICATIONS);
        localStorage.setItem('notifications', CONF_NOTIFICATIONS);

    }


    function Nav_Reset_Clicked() {

        var r = confirm("Tem certeza que quer excluir a sua conta?");
        if (r == true) {
            localStorage.clear();
            Set_ID_App();
            $(".section_mods_store").html('<div style="color: #FFFFF0; padding: 20px;">Atualizando...</div>');
            Update_Store();
            Populate_Mods_Acquired();
            $("#modal2_header").html('Mensagem');
            $("#modal2_body").html("Sua conta foi excluída com sucesso!");
            $("#show_modal2").click();

        }

    }


    function Nav_Restart_Clicked() {

        var r = confirm("Tem certeza que quer refazer esse módulo?");
        if (r == true) {

            var str_acertos = "";
            var str_tempo   = "";

            //console.log("TOT_EXERCS: " + TOT_EXERCS);

            for (var i = 0; i < TOT_EXERCS; i++) {
                str_acertos = str_acertos + "X,X,X,X,X,X,X~";
                str_tempo = str_tempo + "X,X,X,X,X,X,X~";
            }

            localStorage.setItem(CUR_MOD + '_acertos', str_acertos);
            localStorage.setItem(CUR_MOD + '_tempo', str_tempo);
            localStorage.setItem(CUR_MOD + '_days', "0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~0~");

            Populate_Mods_Acquired();
        }

    }


    function Nav_Review_Clicked() {

        alert("Ainda não implementado.");

    }


    function Nav_Share_Clicked() {

        alert("Ainda não implementado.");

    }


    function Nav_Sound_Moves() {

        if (CONF_SOUND_MOVES == "on") {
            CONF_SOUND_MOVES = "off";
        } else {
            CONF_SOUND_MOVES = "on";
        }

        Toggle_Config("sound_moves", CONF_SOUND_MOVES);
        localStorage.setItem('sound_moves', CONF_SOUND_MOVES);

    }


    function Nav_Sound_Keys() {

        if (CONF_SOUND_KEYS == "on") {
            CONF_SOUND_KEYS = "off";
        } else {
            CONF_SOUND_KEYS = "on";
        }

        Toggle_Config("sound_keys", CONF_SOUND_KEYS);
        localStorage.setItem('sound_keys', CONF_SOUND_KEYS);

    }


    function Nav_Sound_Msgs() {

        if (CONF_SOUND_MSGS == "on") {
            CONF_SOUND_MSGS = "off";
        } else {
            CONF_SOUND_MSGS = "on";
        }

        Toggle_Config("sound_msgs", CONF_SOUND_MSGS);
        localStorage.setItem('sound_msgs', CONF_SOUND_MSGS);

    }


    function Nav_Stats_Clicked(id_mod) {

        Hide_All();
        Icons_Off();
        Icon_Back_On();
        Show_Stats(id_mod);

    }


    function Nav_Store_Clicked() {

        Hide_All();
        Icon_Store_Sel();
        Show_Store();

    }


    function Nav_Suporte_Clicked() {

        Hide_All();
        Icons_Off();
        Icon_Back_On();
        Show_Suporte();

    }


    function Nav_Training_Clicked(id_mod) {

        Hide_All();
        Icons_Off();
        Icon_Back_On();
        Show_Days(id_mod);

    }


    function Pad(str, max) {

        str = str.toString();
        return str.length < max ? Pad("0" + str, max) : str;

    }


    function Populate_Arrays() {

        Populate_Mods_Acquired();
        Populate_Quotes();
        Populate_Store();

    }


    function Populate_Help() {


        HELP_PERGS.push('Mudei de celular, como faço para resgatar a minha conta anterior?'); 
        HELP_RESPS.push('');
        HELP_GRUPO.push('CON');


        HELP_PERGS.push('Posso excluir minha conta?');
        HELP_RESPS.push('Sim, mas perderá todas as informações referentes aos treinamentos e também precisará baixar os módulos novamente.');
        HELP_GRUPO.push('CON');


        HELP_PERGS.push('Como reinicio minha conta?'); 
        HELP_RESPS.push('');
        HELP_GRUPO.push('CON');


        HELP_PERGS.push('Porque eu não tenho uma senha?');
        HELP_RESPS.push('Entendemos que isso não é necessário. Quando você entra no aplicativo pela primeira vez, ele cria um número de identificação único que fica armazenado no seu celular.<br><br> É através desse número que conseguimos identificar cada um de nossos usuários.');
        HELP_GRUPO.push('CON');

        HELP_PERGS.push('Enviei uma pergunta ao suporte mas até agora não recebi resposta.');
        HELP_RESPS.push('O nosso prazo padrão de respostas do suporte é de 24 horas úteis. <br><br>Caso já tenha decorrido esse tempo e você ainda não recebeu nenhuma resposta, por favor, envie um e-mail para: <b>sergio.tadela@gmail.com</b> relatando o ocorrido, para podermos averiguar o que aconteceu.');
        HELP_GRUPO.push('DIV');

        HELP_PERGS.push('O que é um módulo?');
        HELP_RESPS.push('Um módulo é uma unidade de treinamento, composta de um conjunto de exercícios de determinado tema (Tática, Mates etc...). <br><br>Embora o número de exercícios varie em função de cada tema, o tempo de treinamento será sempre de 21 dias.');
        HELP_GRUPO.push('MOD');

        HELP_PERGS.push('Como faço para adquirir os módulos?');
        HELP_RESPS.push('Basta entrar na aba Módulos <img src="img/nav_store_orange.png" width="16" height="16"> e fazer o download dos módulos que você quiser. <br><br>Existem módulos gratuitos e módulos pagos. Antes de comprar um módulo, você poderá baixar uma amostra para sua avaliação. <br><br> As amostras baixadas estão limitadas aos três primeiros dias de treinamento.');
        HELP_GRUPO.push('MOD');

        HELP_PERGS.push('Como faço para saber os módulos mais adequados para o meu treinamento?');
        HELP_RESPS.push('Para os módulos pagos, você pode baixar uma amostra para avaliação antes de fazer a aquisição.');
        HELP_GRUPO.push('MOD');

        HELP_PERGS.push('Por quanto tempo funciona uma amostra?');
        HELP_RESPS.push('Os módulos baixados como amostra funcionam normalmente por tempo indeterminado, mas estão restritos aos três primeiros dias de treinamento.<br><br>Entendemos que esse tempo é suficiente para você ter uma ideia do nível de dificuldade dos exercícios.');
        HELP_GRUPO.push('MOD');

        HELP_PERGS.push('Quantos exercícios tem cada módulo?');
        HELP_RESPS.push('Os módulos de Mates, Tática e Finais contém 64 exercícios cada. Os Games tem 16 exercícios e as Miniaturas 32.');
        HELP_GRUPO.push('MOD');


        HELP_PERGS.push('Como funciona o sistema de repetição dos exercícios?'); 
        HELP_RESPS.push('');
        HELP_GRUPO.push('TRN');


        HELP_PERGS.push('Posso fazer os exercícios de vários dias seguidos?');
        HELP_RESPS.push('Sim, mas isso não é aconselhável porque prejudica a memorização das posições. O ideal é fazer o exercício na sequência, durante os 21 dias.');
        HELP_GRUPO.push('TRN');


        HELP_PERGS.push('Posso criar meus próprios exercícios para treinar?'); 
        HELP_RESPS.push('');
        HELP_GRUPO.push('TRN');



        HELP_PERGS.push('Posso treinar mais de um módulo ao mesmo tempo?'); 
        HELP_RESPS.push('');
        HELP_GRUPO.push('TRN');
        
        HELP_PERGS.push('Para que servem as estatísticas?'); 
        HELP_RESPS.push('');
        HELP_GRUPO.push('TRN');
        
        HELP_PERGS.push('Qual a diferença entre os botões REFAZER e REVISAR?'); 
        HELP_RESPS.push('');
        HELP_GRUPO.push('TRN');      
        
        HELP_PERGS.push('Porque o treinamento de cada módulo dura exatamente 21 dias?'); 
        HELP_RESPS.push('');
        HELP_GRUPO.push('TRN');


        HELP_PERGS.push('Quanto tempo eu tenho para fazer cada exercício?');
        HELP_RESPS.push('Inicialmente o tempo máximo de cada exercício é de 3 minutos. Mas a medida que o mesmo for se repetindo ao longo dos dias de treinamento esse tempo vai sendo reduzido gradativamente até que você consiga fazer cada exercício em 15 segundos.');
        HELP_GRUPO.push('TRN');

        HELP_PERGS.push('Como eu faço para fazer um lance?'); 
        HELP_RESPS.push('');
        HELP_GRUPO.push('TRN');
        
        HELP_PERGS.push('Como funciona o sistema de anotação?'); 
        HELP_RESPS.push('');
        HELP_GRUPO.push('TRN');
        
        HELP_PERGS.push('Como proceder se eu esquecer ou não puder treinar um dia?'); 
        HELP_RESPS.push('');
        HELP_GRUPO.push('TRN');
        
        HELP_PERGS.push('O aplicativo fecha sozinho'); 
        HELP_RESPS.push('');
        HELP_GRUPO.push('DIV');
        
        HELP_PERGS.push('Como desativo as notificações?'); 
        HELP_RESPS.push('');
        HELP_GRUPO.push('DIV');
        
        HELP_PERGS.push('Ao comprar um módulo deu erro de conexão, como faço para baixar de novo?'); 
        HELP_RESPS.push('');
        HELP_GRUPO.push('DIV');


        TOT_HELP = HELP_PERGS.length;

    }



    function Populate_Help_Questions(categ) {

        var content = "";

        if (categ == "modulos") {
            for (var i = 0; i < TOT_HELP; i++) {
                if (HELP_GRUPO[i] == "MOD") {
                    content += HTML_Help_Questions(i, HELP_PERGS[i]);
                }
            }
        }

        if (categ == "treino") {
            for (var i = 0; i < TOT_HELP; i++) {
                if (HELP_GRUPO[i] == "TRN") {
                    content += HTML_Help_Questions(i, HELP_PERGS[i]);
                }
            }
        }

        if (categ == "conta") {
            for (var i = 0; i < TOT_HELP; i++) {
                if (HELP_GRUPO[i] == "CON") {
                    content += HTML_Help_Questions(i, HELP_PERGS[i]);
                }
            }
        }

        if (categ == "solucao") {
            for (var i = 0; i < TOT_HELP; i++) {
                if (HELP_GRUPO[i] == "DIV") {
                    content += HTML_Help_Questions(i, HELP_PERGS[i]);
                }
            }
        }

        $("#help_questions_area").html(content);

    }


    function Populate_Mods_Acquired() {

        var content = "";
        var count = 0;

        for (var i = 1; i < MAX_MODS_IDS; i++) {
            if (localStorage.getItem("my" + i + "_str_exercs") !== null) {
                content += HTML_Mods_Acquired_Line(i);
                count++;
            }
        }

        if (count == 0) {
            content = HTML_No_Mods_Downloaded();
        }

        $("#area_mods").html(content + CEL_WIDTH);

    }




    function Populate_Store() {

        var content = "";
        var store_mods = localStorage.getItem("store_mods");
        var categs = ['FOO', 'ABERTURAS', 'TÁTICA', 'ESTRATÉGIA', 'FINAIS', 'GAMES', 'MINIATURAS', 'CÁLCULO', 'MATES'];

        if (localStorage.getItem("store_mods") === null) {
            return;
        }

        var arr = store_mods.split("|");

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] != "") {
                content += '<div class="tit_biblioteca">' + categs[i] + '</div>';
                var lines = arr[i].split("~~~");
                for (var j = 0; j < lines.length; j++) {
                    var infos = lines[j].split("~");
                    if (infos[0] != "") {
                        content += HTML_Store_Regular_Box(infos[0], infos[1], infos[2], infos[3], infos[4]);
                    }
                }
            }
        }

        $(".section_mods_store").html(content);

    }


    function Print_Alt_Buttons(opt1, opt2, opt3) {

        //$("#area_arrows").css("display", "none");

        if (opt3 === undefined || opt3 === null) {
            var arr = Shuffle_Alternativas(opt1, opt2);
            var html_txt = HTML_Monta_Alt_Two_Buttons(arr[0], arr[1]);
            $('#area_2but_alt').html(html_txt);
            $("#area_2but_alt").css("display", "block");
        } else {
            var arr = Shuffle_Alternativas(opt1, opt2, opt3);
            var html_txt = HTML_Monta_Alt_Three_Buttons(arr[0], arr[1], arr[2]);
            $('#area_3but_alt').html(html_txt);
            $("#area_3but_alt").css("display", "block");
        }

    }


    function Print_Final_Day() {

        if (CONF_SOUND_MSGS == "on") {
            SOUND_CONGRAT_1.playclip();
        }

        STACK.push(setTimeout(Print_Message, DELAY, "Parabéns! Você concluiu o seu treinamento de hoje."));
        DELAY = DELAY + 3000;
        setTimeout(Nav_Gym_Clicked, DELAY);

    }

    function Print_Final_Exerc_Msg() {

        STACK.push(setTimeout(Print_OK_Icon, DELAY));
        DELAY = DELAY + 800;
        STACK.push(setTimeout(Clear_Layer, DELAY));

    }


    function Print_Info_Game() {

        console.log(":: Print_Info_Game");

    }



    function Print_Info_Mod() {

        $("#gym_tot").html(TOT_EXERCS_DAY);
        $("#gym_name").html(MOD_TITULO);
        $("#gym_day").html("Dia: " + CUR_DAY);

    }


    function Print_Intro_Day_Msg() {

        var txt_days = localStorage.getItem(CUR_MOD + '_txt_days');
        var arr = txt_days.split("~");
        var texto = arr[CUR_DAY - 1];

        STACK.push(setTimeout(Print_Message, DELAY + 300, texto));
        DELAY = DELAY + DELAY_CLEAR_MSG;
        STACK.push(setTimeout(Clear_Layer, DELAY));

    }


    function Print_Intro_Mod_Msg() {

        var texto = localStorage.getItem(CUR_MOD + '_txt_intro');

        STACK.push(setTimeout(Print_Message, DELAY + 300, texto));
        DELAY = DELAY + DELAY_CLEAR_MSG;
        STACK.push(setTimeout(Clear_Layer, DELAY));

    }


    function Print_Lines_Stats(data_acertos, data_tempo) {

        var itens   = data_acertos.split("~");
        var time    = data_tempo.split("~");
        var tot     = itens.length;
        var dados   = "";

        for (var i = 0; i < tot; i++) {
            var num = i + 1;
            var t_res = itens[i].split(",");
            var t_time = time[i].split(",");
            var ini = '<table width="100%" align="center" border="0" class="line_bibli">' +
                '<tr style="height: 50px; border-bottom: 0px solid #DDDDDD;">' +
                '<td width="16%" align="center" valign="middle" style="font-size: 22px; color: #ff6c25;"><b>' + num + '</b></td>';
            var meio = '';

            for (var j = 0; j < t_res.length; j++) {
                var time_f = Formata_Time(t_time[j]);
                if (t_res[j] == "S") {
                    var color = "#009900";
                    var icon = '<i class="fa fa-check-circle" style="color: #009900; font-size: 18px;"></i>';
                } else if (t_res[j] == "N") {
                    var color = "#CC0000";
                    var icon = '<i class="fa fa-times-circle" style="color: #CC0000; font-size: 18px;"></i>';
                } else {
                    var color = "#AAAAAA";
                    var icon = '<i class="fa fa-circle" style="color: #CCCCCC; font-size: 18px;"></i>';
                }

                var meio = meio +
                    '<td width="12%" align="center" valign="middle">' + icon +
                    '<div style="font-weight: normal; color: ' + color + '; font-size: 12px; padding: 0px 0px 0px 0px;">' + time_f + '</div>'
                '</td>';

            }

            var fim = '</tr></table><hr style="padding: 2px; margin: 0px;">';
            dados = dados + ini + meio + fim;

        }

        $('#stats_dados').html(dados);

    }



    function Print_OK_Icon() {

        GRAPH.globalAlpha = 0.99;
        var img = document.getElementById("hide_img");
        GRAPH.drawImage(img, 112, 112, 120, 120);
        if (CONF_SOUND_MSGS == "on") {
            SOUND_OK.playclip();
        }

    }


    function Print_Random_Quote() {

        var sel = Random(0, QUOTES.length - 1);

        $("#quote_text").html('"' + QUOTES[sel] + '"');
        $("#quote_sign").html(AUTHORS[sel]);

    }


    function Random(min, max) {

        return Math.floor(Math.random() * (max - min + 1) + min);

    }


    function Remove_Last_Char(str) {

        return str.slice(0, -1);

    }


    function Right_Move() {

        Clear_Layer();
        CLIC_FROM   = "";
        CLIC_TO     = "";

        var long_notation = Get_Long_Notation(HALF_MOVES[IND_HALF]);
        CHESS.move(HALF_MOVES[IND_HALF]);
        BOARD.move(long_notation);

        var comms = Get_Comms();
        Handle_Comms(comms);
        IND_HALF++;

        Show_Turn();

        if (IND_HALF == TOT_HALF) {
            Fim_do_Exerc();
        } else {
            if (MOD_TIPO == 1) {
                setTimeout(Computer_Plays, 1000);
                User_Turn("on");
            }
        }

        Handle_But_Board();

    }


    function Set_Cron_Functions() {

        var x1 = setInterval(Update_Store, STORE_UPDATE_FREQ * 60000);
        var x2 = setInterval(Print_Random_Quote, QUOTES_UPDATE_FREQ * 60000);
        var x3 = setInterval(Check_New_Messages, MSGS_UPDATE_FREQ * 10000);

    }


    function Set_ID_App() {

        ID_APP = localStorage.getItem('id_app');

        if (ID_APP === null) {
            Show_Modal1();
            ID_APP = Create_Id();
            Set_User_Config_Default();
            Upload_ID_App();
        } else {
            Upload_Acesso();
        }

    }


    function Set_Lang() {

        $("#lang_conf_board_default").html          ('Padrão');
        $("#lang_conf_board_light_blue").html       ('Azul claro');
        $("#lang_conf_board_dark_blue").html        ('Azul escuro');
        $("#lang_conf_board_coffee").html           ('Café com leite');
        $("#lang_conf_board_light_grey").html       ('Cinza claro');
        $("#lang_conf_board_dark_grey").html        ('Cinza escuro');
        $("#lang_conf_board_orange").html           ('Laranja');
        $("#lang_conf_board_maroon").html           ('Marrom');
        $("#lang_conf_board_ocre").html             ('Ocre');
        $("#lang_conf_board_pink").html             ('Rosa');
        $("#lang_conf_board_purple").html           ('Roxo');
        $("#lang_conf_board_teal").html             ('Teal');
        $("#lang_conf_board_army").html             ('Verde exército');
        $("#lang_conf_board_olive").html            ('Verde oliva');
        $("#lang_conf_board_green").html            ('Verde');
        $("#lang_conf_board_dark_green").html       ('Verde escuro');
        $("#lang_conf_board_violet").html           ('Violeta');

        $("#lang_conf_sound_moves").html            ('Som dos movimentos');
        $("#lang_conf_sound_msgs").html             ('Som das mensagens');
        $("#lang_conf_sound_keys").html             ('Som das teclas');
        $("#lang_conf_auto_update").html            ('Atualizações automáticas');
        $("#lang_conf_notifications").html          ('Receber notificações');
        $("#lang_conf_hide_players").html           ('Omitir nome jogadores');

        $("#lang_conf_max_exerc_time").html         ('Tempo máximo de cada exercício');
        $("#lang_conf_show_solution").html          ('Exibir resultado após x tentativas');
        $("#lang_conf_show_coordenates").html       ('Exibir coordenadas');


    }


    function Set_Lang_Selec() {

        for (var i = 0; i < TAB_LANGS.length; i++) {
            $("#lang_sel_" + TAB_LANGS[i]).css('display', 'none');
        }

        $("#lang_sel_" + CONF_LANG).css('display', 'block');

    }


    function Set_Position() {

        HALF_MOVES.length   = 0;
        HALF_COMMS.length   = 0;
        IND_HALF            = 0;

        //console.log("CUR_EXERC: " + CUR_EXERC);

        BOARD.position(TAB_EXERCS[CUR_EXERC - 1].fen, false);
        CHESS.load(TAB_EXERCS[CUR_EXERC - 1].fen);

        var arr     = Build_Array_Moves();
        TOT_HALF    = arr.length;

        if (TAB_EXERCS[CUR_EXERC - 1].orientation == "w") {
            BOARD.orientation('white');
        } else {
            BOARD.orientation('black');
        }

        for (var i = 0; i < TOT_HALF; i++) {
            HALF_MOVES.push(arr[i]);
        }

        var arr = Build_Array_Comms(TAB_EXERCS[CUR_EXERC - 1].comms);

        for (var i = 0; i < TOT_HALF; i++) {
            //HALF_COMMS.push(arr[i]);
        }

        $("#white").html(TAB_EXERCS[CUR_EXERC - 1].white);
        $("#black").html(TAB_EXERCS[CUR_EXERC - 1].black);
        $("#place").html(TAB_EXERCS[CUR_EXERC - 1].place + " #" + TAB_EXERCS[CUR_EXERC - 1].id_exerc);
        $("#gym_exerc").html(CUR_EXERC);

        Show_Turn();

    }




    function Set_Theme(tema) {

        if (tema == 'default')          { Set_Theme_Colors("#f0d9b5", "#f1dab7", "#dca578", "#b98767"); }        
        if (tema == 'army')             { Set_Theme_Colors("#799b84", "#799b84", "#5c7c64", "#5c7c64"); }
        if (tema == 'cinza_claro')      { Set_Theme_Colors("#f1eed6", "#f1eed6", "#d5d6b2", "#d5d6b2"); }
        if (tema == 'cinza_escuro')     { Set_Theme_Colors("#f7f7f7", "#f7f7f7", "#777777", "#777777"); }        
        if (tema == 'coffee')           { Set_Theme_Colors("#ffd79e", "#ffd79e", "#b06b28", "#b06b28"); }
        if (tema == 'dark_blue')        { Set_Theme_Colors("#c0cbd5", "#c0cbd5", "#4470a6", "#4470a6"); }
        if (tema == 'dark_green')       { Set_Theme_Colors("#d2cfce", "#d2cfce", "#004549", "#004549"); }
        if (tema == 'green')            { Set_Theme_Colors("#dfdf6f", "#dfdf6f", "#7f7f3f", "#7f7f3f"); }                
        if (tema == 'light_blue')       { Set_Theme_Colors("#dce2e5", "#dce2e5", "#87a0ab", "#87a0ab"); }
        if (tema == 'maroon')           { Set_Theme_Colors("#d4aa70", "#d4aa70", "#38281b", "#38281b"); }
        if (tema == 'ocre')             { Set_Theme_Colors("#edcaa0", "#edcaa0", "#b94529", "#b94529"); }
        if (tema == 'olive')            { Set_Theme_Colors("#fcffdf", "#fcffdf", "#78ab6d", "#78ab6d"); }
        if (tema == 'orange')           { Set_Theme_Colors("#ffd699", "#ffd699", "#ff9900", "#ff9900"); }
        if (tema == 'pink')             { Set_Theme_Colors("#ffe6f2", "#ffe6f2", "#ff80bf", "#ff80bf"); }   
        if (tema == 'purple')           { Set_Theme_Colors("#f5e6ff", "#f5e6ff", "#9900ff", "#9900ff"); }     
        if (tema == 'teal')             { Set_Theme_Colors("#e1e5e7", "#e1e5e7", "#0e8c9e", "#0e8c9e"); }        
        if (tema == 'violet')           { Set_Theme_Colors("#a38aac", "#a38aac", "#873a88", "#873a88"); }        

        CONF_THEME = tema;

        for (var i = 0; i < TAB_THEMES.length; i++) {
            $("#theme_sel_" + TAB_THEMES[i]).css('display', 'none');
        }

        $("#theme_sel_" + CONF_THEME).css('display', 'block');

        localStorage.setItem('conf_theme', CONF_THEME);

    }

    function Set_Theme_Colors(white_from, white_to, black_from, black_to) {
        
        $("head").append('<style></style>');
        var element = $("head").children(':last');
        element.html('.white-1e1d7{background-image: linear-gradient(' + white_from + ', ' + white_to + ')}');
        $("head").append('<style></style>');
        var element = $("head").children(':last');
        element.html('.black-3c85d{background-image: linear-gradient(' + black_from + ', ' + black_to + ')}');       
        
    }



    function Set_User_Config() {

        CONF_THEME              = localStorage.getItem('conf_theme');
        CONF_LANG               = localStorage.getItem('conf_lang');
        CONF_SOUND_MOVES        = localStorage.getItem('sound_moves');
        CONF_SOUND_MSGS         = localStorage.getItem('sound_msgs');
        CONF_SOUND_KEYS         = localStorage.getItem('sound_keys');
        CONF_AUTO_UPDATE        = localStorage.getItem('auto_update');
        CONF_NOTIFICATIONS      = localStorage.getItem('notifications');
        CONF_NO_PLAYERS_NAME    = localStorage.getItem('no_players_name');

        Toggle_Config("sound_moves",        CONF_SOUND_MOVES);
        Toggle_Config("sound_msgs",         CONF_SOUND_MSGS);
        Toggle_Config("sound_keys",         CONF_SOUND_KEYS);
        Toggle_Config("auto_update",        CONF_AUTO_UPDATE);
        Toggle_Config("notifications",      CONF_NOTIFICATIONS);
        Toggle_Config("no_players_name",    CONF_NO_PLAYERS_NAME);

    }

    function Set_User_Config_Default() {

        localStorage.setItem('conf_theme',      CONF_THEME);
        localStorage.setItem('conf_lang',       CONF_LANG);
        localStorage.setItem('sound_moves',     CONF_SOUND_MOVES);
        localStorage.setItem('sound_msgs',      CONF_SOUND_MSGS);
        localStorage.setItem('sound_keys',      CONF_SOUND_KEYS);
        localStorage.setItem('auto_update',     CONF_AUTO_UPDATE);
        localStorage.setItem('notifications',   CONF_NOTIFICATIONS);
        localStorage.setItem('no_players_name', CONF_NO_PLAYERS_NAME);

    }



    function Show_Board() {

        if (CONF_NO_PLAYERS_NAME == "on") {
            $("#players").css('display', 'none');
        } else {
            $("#players").css('display', 'block');
        }

        $(".section_board").css('display', 'block');

    }


    function Show_Conf() {

        $(".section_conf").css('display', 'block');

    }


    function Show_Conf_Board() {

        $(".section_conf_board").css('display', 'block');

    }


    function Show_Conf_Idioma() {

        $(".section_conf_idioma").css('display', 'block');

    }


    function Show_Conf_Sounds() {

        $(".section_conf_sounds").css('display', 'block');

    }


    function Show_Conf_Treino() {

        $(".section_conf_treino").css('display', 'block');

    }


    function Show_Days(id_mod) {

        CUR_MOD         = "my" + id_mod;

        var mod_titulo  = localStorage.getItem(CUR_MOD + "_titulo");
        var mod_days    = localStorage.getItem(CUR_MOD + "_days");
        var day         = Get_Current_Training_Day(mod_days);

        // Reset
        for (var i = 1; i < 22; i++) {
            $("#bg_day_" + i).css('background-color', '#999999');
            $("#txt_day_" + i).css('color', '#999999');
            $("#txt_day_" + i).html(i);
            $('#bg_day_' + i).data('done', false);
        }


        // Dias já concluídos
        for (var i = 1; i < day; i++) {
            $("#bg_day_" + i).css('background-color', '#339900');
            $("#txt_day_" + i).css('color', '#339900');
            $("#txt_day_" + i).html("OK");
            $('#bg_day_' + i).data('done', true);
        }

        // Dia do Treino
        $("#bg_day_" + day).css('background-color', '#ff9300');
        $("#txt_day_" + day).css('color', '#ff9300');
        $("#txt_day_" + day).html(i);

        $('#mod_titulo').html(mod_titulo);
        $(".section_days").css('display', 'block');

    }




    function Show_First_Steps() {

        Show_Modal1();

    }


    function Show_Gym() {

        $(".section_gym").css('display', 'block');

    }

    function Show_Help() {

        $(".section_help").css('display', 'block');

    }



    function Show_Help_Answer(ind, categ) {

        var content;

        if (categ == "modulos") {
            content = HTML_Help_Answers(HELP_QUESTIONS_MODS[ind], HELP_ANSWERS_MODS[ind]);
        }

        if (categ == "treino") {
            content = HTML_Help_Answers(HELP_QUESTIONS_TREINO[ind], HELP_ANSWERS_TREINO[ind]);
        }

        if (categ == "conta") {
            content = HTML_Help_Answers(HELP_QUESTIONS_CONTA[ind], HELP_ANSWERS_CONTA[ind]);
        }

        if (categ == "solucao") {
            content = HTML_Help_Answers(HELP_QUESTIONS_SOLUCAO[ind], HELP_ANSWERS_SOLUCAO[ind]);
        }

        $("#help_answers_area").html(content);

        $(".section_help_questions").css    ('display', 'none');
        $(".section_help_answers").css      ('display', 'block');

    }

    function Show_Help_Questions(categ) {

        Populate_Help_Questions(categ);
        Hide_All();
        Icons_Off();
        Icon_Back_On();
        $(".section_help_questions").css('display', 'block');

    }



    function Show_Info(ref) {

        if (ref == "stats") {
            $("#modal3_header").html    (INFO_STATS_TIT);
            $("#modal3_body").html      (INFO_STATS_BODY);
        }

        if (ref == "days") {
            $("#modal3_header").html    (INFO_DAYS_TIT);
            $("#modal3_body").html      (INFO_DAYS_BODY);
        }

        if ($.isNumeric(ref)) {
            $("#modal3_header").html    (HELP_PERGS[ref]);
            $("#modal3_body").html      (HELP_RESPS[ref]);
        }


        $("#show_modal3").click();

    }


    function Show_Menu() {

        $(".section_menu").css('display', 'block');

    }


    function Show_Modal1() {

        $("#show_modal1").click();

    }


    function Show_Solution() {

        var my_delay = 1000;

        for (var i = IND_HALF; i < TOT_HALF; i++) {
            setTimeout(Computer_Plays, my_delay);
            my_delay = my_delay + 2000;
        }

    }

    function Show_Stats(id_mod) {

        var this_mod = "my" + id_mod;

        var data_acertos    = localStorage.getItem(this_mod + '_acertos');
        var data_tempo      = localStorage.getItem(this_mod + '_tempo');
        var mod_titulo      = localStorage.getItem(this_mod + '_titulo');

        $('#titulo_mod_stats').html(mod_titulo);

        Print_Lines_Stats(data_acertos, data_tempo);

        $(".section_stats").css('display', 'block');
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }


    function Show_Store() {

        $(".section_mods_store").css('display', 'block');

    }


    function Show_Suporte() {

        Icons_Off();
        document.getElementById("msg_suporte").value = '';

        $("#alert_main").css        ('display', 'none');
        $("#area_input_msg").css    ('display', 'block');
        $(".section_suporte").css   ('display', 'block');

        var vars = ["leu_msgs", ID_APP];
        Ajax_Connect(vars);

    }


    function Show_Turn() {

        var turn = Get_Turn();

        if (turn == "w") {
            $("#turn").css('color', '#FFFFFF');
        } else {
            $("#turn").css('color', '#000000');
        }

    }


    function Start_Exerc() {

        Clear_Vars_Exerc();

        if (CUR_EXERC > TOT_EXERCS_DAY) {
            Fim_do_Day();
        } else {
            Set_Position();
            Handle_User_Input();
        }

    }

    function Start_Training() {

        LAST_DONE = parseInt(Get_Last_Exerc_OK());
        CUR_EXERC = LAST_DONE + 1;

        Icon_Back_On();
        Carrega_Modulo_do_Dia();
        Print_Info_Mod();
        Show_Board();
        Start_Exerc();

    }

    
    function Startup() {

        Set_ID_App();
        Update_Store();
        Populate_Arrays();
        Print_Random_Quote();
        Check_New_Messages();
        But_Board_Off();

    }


    function Toggle_Config(tag, status) {

        if (status == "off") {
            $("#" + tag).html('<img src="img/toggle_off.png" style="margin: 0px 10px 0px 0px;" width="60" height="26">');
        } else {
            $("#" + tag).html('<img src="img/toggle_on.png" style="margin: 0px 10px 0px 0px;" width="60" height="26">');
        }

    }



    function Update_My_Days(last_ok) {

        var new_str     = "";
        var MOD_DAYS    = localStorage.getItem(CUR_MOD + "_days");
        var arr_days    = MOD_DAYS.split("~");
        var ind         = CUR_DAY - 1;
        arr_days[ind]   = last_ok;

        for (var i = 0; i < 21; i++) {
            new_str = new_str + arr_days[i] + "~";
        }

        new_str = Remove_Last_Char(new_str);
        localStorage.setItem(CUR_MOD + '_days', new_str);

        Upload_Progress(new_str);

    }


    function Update_My_Acertos(ind_exerc, freq, resultado) {

        var new_str         = "";
        var new_result      = "";
        var mod_acertos     = localStorage.getItem(CUR_MOD + "_acertos");
        var arr_exercs      = mod_acertos.split("~");
        var arr_freq        = arr_exercs[ind_exerc].split(",");
        
        freq--;
        arr_freq[freq]      = resultado;

        for (var i = 0; i < 7; i++) {
            new_result = new_result + arr_freq[i] + ",";
        }

        new_result              = Remove_Last_Char(new_result);
        arr_exercs[ind_exerc]   = new_result;

        for (var i = 0; i < MOD_TOT_EXERCS; i++) {
            new_str = new_str + arr_exercs[i] + "~";
        }

        new_str = Remove_Last_Char(new_str);
        localStorage.setItem(CUR_MOD + '_acertos', new_str);

    }
    
    
    function Update_My_Tempo(ind_exerc, freq, time_spent) {

        var new_str         = "";
        var new_freq        = "";
        var mod_tempo       = localStorage.getItem(CUR_MOD + "_tempo");
        var arr_exercs      = mod_tempo.split("~");
        var arr_freq        = arr_exercs[ind_exerc].split(",");
        
        freq--;
        arr_freq[freq]      = time_spent;

        for (var i = 0; i < 7; i++) {
            new_freq = new_freq + arr_freq[i] + ",";
        }

        new_freq = Remove_Last_Char(new_freq);

        arr_exercs[ind_exerc] = new_freq;

        for (var i = 0; i < MOD_TOT_EXERCS; i++) {
            new_str = new_str + arr_exercs[i] + "~";
        }

        new_str = Remove_Last_Char(new_str);
        localStorage.setItem(CUR_MOD + '_tempo', new_str);

    }


    function Update_Store() {

        var vars = ["update_store"];
        Ajax_Connect(vars);

    }


    function Upload_Acesso() {

        var vars = ["novo_acesso", ID_APP];
        Ajax_Connect(vars);

    }


    function Upload_ID_App() {

        var os      = 1;  // 1= Android; 2= iOS
        var vars    = ["new_user", ID_APP, os];
        Ajax_Connect(vars);

    }


    function Upload_Progress(new_str_days) {

        var mod_id      = CUR_MOD.substr(2);
        var vars        = ["progress", ID_APP, mod_id, new_str_days];
        Ajax_Connect(vars);

        //console.log("Uploading Progress... " + new_str_days + "(" + mod_id + ")");

    }


    function User_Turn(status) {

        if (status == "on") {
            USER_TURN = true;
        } else {
            USER_TURN = false;
        }

    }


    function Validate_Move() {

        var valids = CHESS.moves({ square: CLIC_FROM });

        for (var i = 0; i < valids.length; i++) {
            var xis = Stripped_San(valids[i]);
            xis = xis.slice(-2);
            if (xis == CLIC_TO) {
                return true;
            }
        }

        return false;

    }


    function Ve_Se_Acertou(sq_from, sq_to) {

        var long_notation   = Get_Long_Notation(HALF_MOVES[IND_HALF]);
        var arr             = long_notation.split("-");

        if (arr[0] == sq_from && arr[1] == sq_to) {
            return true;
        }

        return false;

    }


    function Wrong_Move() {

        Clear_Layer();
        
        CLIC_FROM   = "";
        CLIC_TO     = "";
        ACERTOU     = false;
        
        TOT_ERROS++;

        if (TOT_ERROS >= ERROS_SHOW_SOLUTION) {
            Show_Solution();
        } else {
            User_Turn("on");
        }

    }



var IChess__ = function() {
    
    var BLACK       = "#000000";
    var BLUE        = "#0099CC";
    var FUCHSIA     = "#FF00FF";
    var GREEN       = "#33bb41";
    var GREY        = "#999999";
    var LIGHT_GREY  = "#CCCCCC";
    var ORANGE      = "#FF6600";
    var PINK        = "#FF00FF";
    var PURPLE      = "#800080";
    var RED         = "#FF0000";
    var TEAL        = "#008080";
    var VIOLET      = "#9933FF";
    var WINE        = "#CC0000";
    var WHITE       = "#FFFFFF";
    var YELLOW      = "#EBEB00";    
    
    var START_POSITION  = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"; 
     
    var BOARD_WIDTH     = $("#board").WIDTH();
    var BOARD_BORDER    = 2;
    var SQUARE_WIDTH    = (BOARD_WIDTH - BOARD_BORDER * 2) / 8;
    var HALF_SQUARE     = SQUARE_WIDTH / 2;
    var Q_SQUARE        = SQUARE_WIDTH / 4;

    $("#graph").attr('width', BOARD_WIDTH);
    $("#graph").attr('height', BOARD_WIDTH);
    
    var my_canvas   = document.getElementById("graph");
    var GRAPH       = my_canvas.getContext("2d");


    var STACK               = [];   // Array para controlar os gráficos
    var DELAY               = 400;  // Tempo entre um gráfico e outro
    var DELAY_CLEAR_GRAPH   = 1500; 
    var DELAY_CLEAR_MSG     = 2000; 
    var DELAY_CLEAR_MSG_LG  = 3500;
    var DELAY_CLEAR_TIP     = 2000;
    var DELAY_NEXT_GRAPH    = 500;  
    var DELAY_SQUARE        = 300;
    
}    
 
 
 


function Build_Arrays() {

    Build_Array_Moves();
    Build_Array_Comms();
    Build_Array_Alts();    
    Build_Half_Arrays();        

}


function Build_Array_Alts() {

    EXERC.alts_white.length    = 0;
    EXERC.alts_black.length    = 0;       

    var x = EXERC.str_alts.split("|");

    EXERC.alts_white.push("not used");
    EXERC.alts_black.push("not used");      

    for (var i=0; i < EXERC.tot_moves; i++) {
        var y = x[i].split("~");
        EXERC.alts_white.push(y[0]);
        EXERC.alts_black.push(y[1]);
    }

}


function Build_Array_Comms() {

    EXERC.comms_white.length    = 0;
    EXERC.comms_black.length    = 0;       

    var x = EXERC.str_comms.split("|");

    EXERC.comms_white.push("not used");
    EXERC.comms_black.push("not used");    

    for (var i=0; i < EXERC.tot_moves; i++) {
        var y = x[i].split("~");
        EXERC.comms_white.push(y[0]);
        EXERC.comms_black.push(y[1]);
    }

}


function Build_Array_Moves() {   

    EXERC.moves_white.length    = 0;
    EXERC.moves_black.length    = 0;    

    var x           = EXERC.str_moves.split("|");
    EXERC.tot_moves = x.length - 1;

    EXERC.moves_white.push("not used");
    EXERC.moves_black.push("not used");

    for (var i=0; i < EXERC.tot_moves; i++) {
        var y = x[i].split("~");
        if (y[0] != "") { EXERC.moves_white.push(y[0]); }
        if (y[1] != "") { EXERC.moves_black.push(y[1]); }
    }

}


function Build_Half_Arrays() {

    EXERC.half_moves.length     = 0;
    EXERC.half_comms.length     = 0;
    EXERC.half_alts.length      = 0; 

    var cur_turn = Get_Turn();
    //console.log("Turn: " + cur_turn);

    if (cur_turn == "w") {        
        for (var i=1; i <= EXERC.tot_moves; i++) {
            if (typeof EXERC.moves_white[i] !== "undefined" && EXERC.moves_white[i] != "") {
                EXERC.half_moves.push(EXERC.moves_white[i]);
                EXERC.half_comms.push(EXERC.comms_white[i]);
                EXERC.half_alts.push(EXERC.alts_white[i]);
            }
            if (typeof EXERC.moves_black[i] !== "undefined" && EXERC.moves_black[i] != "") {
                EXERC.half_moves.push(EXERC.moves_black[i]);
                EXERC.half_comms.push(EXERC.comms_black[i]);
                EXERC.half_alts.push(EXERC.alts_black[i]);
            }
        }                
    } else {
        for (var i=1; i <= EXERC.tot_moves; i++) {
            if (typeof EXERC.moves_black[i] !== "undefined" && EXERC.moves_black[i] != "") {
                EXERC.half_moves.push(EXERC.moves_black[i]);
                EXERC.half_comms.push(EXERC.comms_black[i]);
                EXERC.half_alts.push(EXERC.alts_black[i]);
            }            
            if (typeof EXERC.moves_white[i] !== "undefined" && EXERC.moves_white[i] != "") {
                EXERC.half_moves.push(EXERC.moves_white[i]);
                EXERC.half_comms.push(EXERC.comms_white[i]);
                EXERC.half_alts.push(EXERC.alts_white[i]);
            }
        }            
    }

    EXERC.tot_halfs = EXERC.half_moves.length;

}


function Carrega_Mensagens() {

    TAB_MSG[0]  = "Não utilizado";
    TAB_MSG[1]  = "E as brancas abandonaram";
    TAB_MSG[2]  = "E as negras abandonaram";
    TAB_MSG[3]  = "Xeque-mate";
    TAB_MSG[4]  = "As brancas estão melhor";
    TAB_MSG[5]  = "As negras estão melhor";
    TAB_MSG[6]  = "O jogo está equilibrado";
    TAB_MSG[7]  = "As brancas estão um pouco melhor";
    TAB_MSG[8]  = "As negras estão um pouco melhor";
    TAB_MSG[9]  = "Com vantagem decisiva para as brancas";
    TAB_MSG[10] = "Com vantagem decisiva para as negras";
    TAB_MSG[11] = "As brancas tem xeque perpétuo";
    TAB_MSG[12] = "As negras tem xeque perpétuo";
    TAB_MSG[13] = "As brancas estão em zugzwang";
    TAB_MSG[14] = "As negras estão em zugzwang";
    TAB_MSG[15] = "Com chances de empate";
    TAB_MSG[16] = "As brancas ganham uma peça";
    TAB_MSG[17] = "As negras ganham uma peça";
    TAB_MSG[18] = "Oferecendo um peão em troca de maior controle no centro.";
    TAB_MSG[19] = "Recuperando o peão e desenvolvendo uma peça ao mesmo tempo.";
    TAB_MSG[20] = "Em uma situação aberta, as brancas jogam duas vezes uma peça já desenvolvida.";
    TAB_MSG[21] = "Cedendo o centro para o adversário.";
    TAB_MSG[22] = "Las negras se defienden con una jugada de desarrollo.";
    TAB_MSG[23] = "Atacando a Dama e ganhando tempo para desenvolver uma peça.";
    TAB_MSG[24] = "Trazendo mais uma peça para ajudar no ataque.";

    TAB_TIP[0]  = "Não utilizado";
    TAB_TIP[1]  = "Bad Move";
    TAB_TIP[2]  = "Good move";
    TAB_TIP[3]  = "Better was @_1 followed by @_2";
    TAB_TIP[4]  = "Teste com 3 linhas, para ver se funciona";

}


function Clear_Layer() {

    console.log("Clearing Layer...") + SQUARE_WIDTH;

    GRAPH.clearRect(0, 0, SQUARE_WIDTH * 8 + 4, SQUARE_WIDTH * 8 + 4);

}

function Clear_Square(square) {

    var sq = Get_XY(square);    
    GRAPH.clearRect(sq.x, sq.y, SQUARE_WIDTH, SQUARE_WIDTH);

}



function Download_Exerc() {

    var vars = ["get_exerc", MOD.cur_exerc];
    Ajax_Connect(vars);    

}


function Draw_All_Coordinates() {

    var tab_sq = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", 
                  "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", 
                  "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", 
                  "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8",
                  "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", 
                  "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8",
                  "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8",
                  "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"
                 ];

    for (var i=0; i < tab_sq.length; i++) {    
        Draw_Circle(tab_sq[i], YELLOW);
        Draw_Coordenate(tab_sq[i], BLACK);        
    }    

}



function Draw_Arrow(from, to, color) {

    GRAPH.globalAlpha   = 0.8;
    GRAPH.shadowBlur    = 14; 
    GRAPH.shadowColor   = BLACK;         
    var arrow_width     = 8;  // largura
    var arrow_head      = 10; // cabeça

    var sq_from         = Get_XY(from);
    var sq_to           = Get_XY(to);

    var startPointX     = sq_from.x + HALF_SQUARE; 
    var startPointY     = sq_from.y + HALF_SQUARE;   
    var piece           = CHESS.get(from);

    if (piece.type == "r") {
        var ret = Draw_Array_Get_Endpoint_Rook(from, to, sq_to);
    }    

    if (piece.type == "n" || piece.type == "b" || piece.type == "p") {
        var ret = Draw_Array_Get_Endpoint_Knight(from, to, sq_to);
    }      

    if (piece.type == "q" || piece.type == "k") {
        var ret = Draw_Array_Get_Endpoint_King(from, to, sq_to);
    }      

    var endPointX = ret[0];
    var endPointY = ret[1];

    GRAPH.save();
    GRAPH.strokeStyle   = color;
    GRAPH.lineWidth     = arrow_width;

    var arrowAngle = Math.atan2(endPointY-startPointY, endPointX-startPointX);

    GRAPH.beginPath();
    GRAPH.moveTo(startPointX, startPointY);

    GRAPH.lineTo(endPointX, endPointY);
    GRAPH.stroke();        

    GRAPH.beginPath();
    GRAPH.moveTo(endPointX, endPointY);
    GRAPH.lineTo(endPointX - arrow_head * Math.cos(arrowAngle - Math.PI/7),
                endPointY - arrow_head * Math.sin(arrowAngle - Math.PI/7));    

    GRAPH.lineTo(endPointX - arrow_head * Math.cos(arrowAngle + Math.PI/7),
                endPointY - arrow_head * Math.sin(arrowAngle + Math.PI/7));

    GRAPH.lineTo(endPointX, endPointY);
    GRAPH.lineTo(endPointX - arrow_head * Math.cos(arrowAngle - Math.PI/7),
                endPointY - arrow_head * Math.sin(arrowAngle - Math.PI/7));

    GRAPH.stroke();
    GRAPH.closePath();
    GRAPH.restore();

}


function Draw_Array_Get_Endpoint_King(from, to, sq_to) {

    var X, Y;

    if (from[0] > to[0]) {
        if (from[1] == to[1]) {
            X = sq_to.x   + Q_SQUARE - 6; 
            Y = sq_to.y   + HALF_SQUARE;  
        } else {
            if (from[1] > to[1]) {
                X = sq_to.x   + Q_SQUARE; 
                Y = sq_to.y   + HALF_SQUARE + Q_SQUARE;                  
            } else {
                X = sq_to.x   + Q_SQUARE; 
                Y = sq_to.y   + Q_SQUARE;   
            }         
        }
    } else {
        if (from[0] < to[0]) {
            if (from[1] == to[1]) {
                X = sq_to.x   + SQUARE_WIDTH - Q_SQUARE + 6;  
                Y = sq_to.y   + HALF_SQUARE; 
            } else {
                if (from[1] > to[1]) {
                    X = sq_to.x   + SQUARE_WIDTH - Q_SQUARE; 
                    Y = sq_to.y   + SQUARE_WIDTH - Q_SQUARE;                   
                } else {
                    X = sq_to.x  + SQUARE_WIDTH - Q_SQUARE; 
                    Y = sq_to.y  + Q_SQUARE;    
                }         
            }
        } else {
            if (from[1] < to[1]) {
                X = sq_to.x   + HALF_SQUARE;  
                Y = sq_to.y   + HALF_SQUARE - Q_SQUARE - 6;    
            } else {
                if (from[1] > to[1]) {
                    X = sq_to.x   + HALF_SQUARE;  
                    Y = sq_to.y   + HALF_SQUARE + Q_SQUARE + 6;   
                }                   
            }  
        }        
    }   

    var ret = [X, Y];
    return ret;

}


function Draw_Array_Get_Endpoint_Knight(from, to, sq_to) {

    var X, Y;

    if (from[0] > to[0]) { 
        if (from[1] > to[1]) {
            X = sq_to.x   + Q_SQUARE; 
            Y = sq_to.y   + HALF_SQUARE + Q_SQUARE;  
        } else {
            X = sq_to.x   + Q_SQUARE; 
            Y = sq_to.y   + Q_SQUARE;                
        } 
    } else {
        if (from[0] == to[0]) {
            if (from[1] > to[1]) {
                X = sq_to.x   + HALF_SQUARE; 
                Y = sq_to.y   + SQUARE_WIDTH;    
            } else {
                X = sq_to.x   + HALF_SQUARE; 
                Y = sq_to.y   + Q_SQUARE;                      
            }
        } else {
            if (from[1] > to[1]) {
                X = sq_to.x   + SQUARE_WIDTH - Q_SQUARE;  
                Y = sq_to.y   + HALF_SQUARE + Q_SQUARE;  
            } else {
                X = sq_to.x   + SQUARE_WIDTH - Q_SQUARE;  
                Y = sq_to.y   + Q_SQUARE;                
            }                
        }
    }

    var ret = [X, Y];
    return ret;

}


function Draw_Array_Get_Endpoint_Rook(from, to, sq_to) {

    var X, Y;

    if (from[0] > to[0]) {        
        X = sq_to.x   + Q_SQUARE - 6; 
        Y = sq_to.y   + HALF_SQUARE;    
    } else {
        if (from[0] < to[0]) {
            X = sq_to.x   + SQUARE_WIDTH - Q_SQUARE + 6;  
            Y = sq_to.y   + HALF_SQUARE;       
        } else {
            if (from[1] < to[1]) {
                X = sq_to.x   + HALF_SQUARE;  
                Y = sq_to.y   + HALF_SQUARE - Q_SQUARE - 6;    
            } else {
                if (from[1] > to[1]) {
                    X = sq_to.x   + HALF_SQUARE;  
                    Y = sq_to.y   + HALF_SQUARE + Q_SQUARE + 6;   
                }                   
            }           
        }     
    }

    var ret = [X, Y];
    return ret;

}




function Draw_Border_Square(square, color, thick = 2) {

    GRAPH.globalAlpha = 0.8;

    var sq  = Get_XY(square);    
    var x   = sq.x; 
    var y   = sq.y; 

    GRAPH.strokeStyle   = color;
    GRAPH.lineWidth     = thick;
    GRAPH.strokeRect(x, y, SQUARE_WIDTH, SQUARE_WIDTH);

}


function Draw_Bullet(square, color) {

    GRAPH.globalAlpha = 0.8;

    var sq = Get_XY(square);

    var x = sq.x + HALF_SQUARE; 
    var y = sq.y + HALF_SQUARE; 

    GRAPH.beginPath();
    GRAPH.arc(x, y, SQUARE_WIDTH / 4, 0, Math.PI * 2, true);
    GRAPH.fillStyle = color;
    GRAPH.fill();

}



function Draw_Center(color1, color2) {

    var center      = ["d4", "e4", "d5", "e5"];
    var exp_center  = ["c3", "c4", "c5", "c6", "d3", "d6", "e3", "e6", "f3", "f4", "f5", "f6"];

    for (var i=0; i < center.length; i++) {    
        Paint_Square(center[i], color1);     
    }    

    for (var i=0; i < exp_center.length; i++) {    
        Paint_Square(exp_center[i], color2);     
    }        

}


function Draw_Circle(square, color) {

    GRAPH.globalAlpha = 0.6;
    GRAPH.shadowBlur  = 14; 
    GRAPH.shadowColor = BLACK;        

    var sq = Get_XY(square);

    var x = sq.x + HALF_SQUARE; 
    var y = sq.y + HALF_SQUARE; 

    GRAPH.beginPath();
    GRAPH.arc(x, y, SQUARE_WIDTH / 2.3, 0, Math.PI * 2, true);
    GRAPH.fillStyle = color;
    GRAPH.fill();

}


function Draw_Coordenate(square, color) {

    var sq = Get_XY(square);

    var x = sq.x + HALF_SQUARE - 10; 
    var y = sq.y + HALF_SQUARE + 6; 

    GRAPH.fillStyle = color; 
    GRAPH.font = "bold 20px Verdana";
    GRAPH.fillText(square, x, y);

}


function Draw_King_Side(color) {

    var tab  = ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8",
                "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8",
                "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8",
                "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"
               ];

    for (var i=0; i < tab.length; i++) {    
        Paint_Square(tab[i], color);     
    }    
       
}


function Draw_Line(from, to, color) {

    GRAPH.globalAlpha   = 0.8;
    GRAPH.shadowBlur    = 14; 
    GRAPH.shadowColor   = BLACK;      

    var lineWidth       = 8;

    var sq_from         = Get_XY(from);
    var sq_to           = Get_XY(to);

    var startPointX     = sq_from.x + HALF_SQUARE; 
    var startPointY     = sq_from.y + HALF_SQUARE; 
    var endPointX       = sq_to.x + HALF_SQUARE; 
    var endPointY       = sq_to.y + HALF_SQUARE;

    if (endPointY > startPointY) {
        endPointY = endPointY + lineWidth / 2;
    } else {
        endPointY = endPointY - lineWidth / 2;
    }

    GRAPH.save();
    GRAPH.strokeStyle = color;
    GRAPH.lineWidth = lineWidth;

    GRAPH.beginPath();
    GRAPH.moveTo(startPointX, startPointY);

    GRAPH.lineTo(endPointX, endPointY);
    GRAPH.lineWidth = lineWidth;
    GRAPH.stroke();        

    GRAPH.beginPath();
    GRAPH.moveTo(endPointX, endPointY);
    GRAPH.lineTo(endPointX, endPointY);

    GRAPH.stroke();
    GRAPH.closePath();
    GRAPH.restore();

}


function Draw_Point(square, color) {

    var sq = Get_XY(square);

    var x = sq.x + HALF_SQUARE; 
    var y = sq.y + HALF_SQUARE; 

    GRAPH.beginPath();
    GRAPH.arc(x, y, SQUARE_WIDTH / 8, 0, Math.PI * 2, true);
    GRAPH.fillStyle = color;
    GRAPH.fill();

}



function Draw_Queen_Side(color) {

    var tab  = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8",
                "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8",
                "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8",
                "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"];

    for (var i=0; i < tab.length; i++) {    
        Paint_Square(tab[i], color);     
    }    
       
}


function Draw_Xis(square, color) {

    GRAPH.globalAlpha = 0.8;
    GRAPH.shadowBlur  = 14; 
    GRAPH.shadowColor = BLACK;        

    var sq = Get_XY(square);

    var x = sq.x + HALF_SQUARE - 5; 
    var y = sq.y + HALF_SQUARE + 5; 

    Draw_Bullet(square, YELLOW);

    GRAPH.fillStyle = color; 
    GRAPH.font = "bold 18px Verdana";
    GRAPH.fillText("x", x, y);

}


function Get_Figurine_Notation(id_exerc, move) {

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

    var html = '<button onclick="Click_Button_Alt(' + id_exerc + ');"  type="button" class="btn btn-danger" style="width: 90px; height: 40px; margin-top: 10px; font-size: 18px;">' +
            '<span>' + but_label + '</span>' +
            '</button>';

    return html;

}


function Get_First_Half_Alt(id_exerc) {

    var ind         = EXERC.alts_key.indexOf(id_exerc.toString());   
    var str_moves   = EXERC.alts_moves[ind];

    var arr = str_moves.split("|"); 
    var xis = arr[0].split("~"); 

    if (xis[0] == "") {
        return xis[1];
    } else {
        return xis[0];
    }

}


function Get_Long_Notation(lance) {

    var moves   = CHESS.moves({ verbose: true });
    var len     = moves.length;

    for (var i=0; i < len; i++) {
        //console.log("Lance: " + Stripped_San(lance) + ", " + moves[i].san);
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


function Get_XY(square) {

    var cols         = "abcdefgh";
    var cols_flip    = "hgfedcba";
    var rows         = "87654321";
    var rows_flip    = "12345678";
    var x            = 0;
    var y            = 0;

    var ret = { x: 0, y: 0 };

    if (Get_Orientation() == "w") {
        x = cols.indexOf(square[0]);
        y = rows.indexOf(square[1]);
    } else {
        x = cols_flip.indexOf(square[0]);
        y = rows_flip.indexOf(square[1]);
    }

    ret.x = 2 + (x * SQUARE_WIDTH);
    ret.y = 2 + (y * SQUARE_WIDTH);

    return ret;

} 


function Handle_Alts(alts) {

    //console.log("Handle_Alts: " + alts);

    if (typeof alts === "undefined" || alts == "") {
        return;
    }

    $('#area_nav_board').css('display', 'none');

    var arr         = alts.split("#");
    var tot_alts    = arr.length;

    var alt1 = Get_First_Half_Alt(arr[0]);    
    if (arr[1] != "" || arr[1] != "undefined") {
        var alt2 = Get_First_Half_Alt(arr[1]);
    }

    var a1 = Get_Figurine_Notation(EXERC.id, EXERC.half_moves[EXERC.half_ind + 1]);
    var a2 = Get_Figurine_Notation(arr[0], alt1);
    var a3 = Get_Figurine_Notation(arr[1], alt2);

    var arr = Shuffle_Alternativas(a1, a2, a3);

    if (tot_alts == 2) {
        $('#but_alt1_area').html(arr[0]);
        $('#but_alt2_area').html(arr[1]);  
        $('#but_alt3_area').html(arr[2]);
        $('#area_alt_3but').css('display', 'block');
    } else {
        $('#area_alt_2but').css('display', 'block');
    }

}


function Handle_Command_Alternativas(param) {

    var arr = param.split(",");
    Print_Alt_Buttons(arr[0], arr[1], arr[2]);

}


function Handle_Command_Ameacando(param) {

    var tab     = param.split(",");    

    for (var i = 0; i < tab.length; i++) {
        var arr     = tab[i].split("-");
        STACK.push(setTimeout(Draw_Arrow, DELAY, arr[0], arr[1], RED));
        DELAY = DELAY + DELAY_SQUARE;
    }

    DELAY = DELAY + DELAY_CLEAR_GRAPH;
    STACK.push(setTimeout(Clear_Layer, DELAY));
    DELAY = DELAY + DELAY_NEXT_GRAPH;                

}


function Handle_Command_Atacando(param) {

    var arr = param.split(",");

    for (var i = 0; i < arr.length; i++) {
        STACK.push(setTimeout(Paint_Square, DELAY, arr[i], RED));
        DELAY = DELAY + DELAY_SQUARE;
    }

    DELAY = DELAY + DELAY_CLEAR_GRAPH;
    STACK.push(setTimeout(Clear_Layer, DELAY));
    DELAY = DELAY + DELAY_NEXT_GRAPH;

}


function Handle_Command_Bloqueando(param) {

    Handle_Command_Paint(BLACK, param);

}


function Handle_Command_Border(my_color, param) {

    var arr = param.split(",");

    for (var i = 0; i < arr.length; i++) {
        STACK.push(setTimeout(Draw_Border_Square, DELAY, arr[i], my_color));
    }

    DELAY = DELAY + DELAY_CLEAR_GRAPH;
    STACK.push(setTimeout(Clear_Layer, DELAY));
    DELAY = DELAY + DELAY_NEXT_GRAPH;

}


function Handle_Command_Bullet(my_color, param) {

    var arr = param.split(",");

    for (var i = 0; i < arr.length; i++) {
        STACK.push(setTimeout(Draw_Bullet, DELAY, arr[i], my_color));
    }

    DELAY = DELAY + DELAY_CLEAR_GRAPH;
    STACK.push(setTimeout(Clear_Layer, DELAY));
    DELAY = DELAY + DELAY_NEXT_GRAPH;

}


function Handle_Command_Circle(my_color, param) {

    var arr = param.split(",");

    for (var i = 0; i < arr.length; i++) {
        STACK.push(setTimeout(Draw_Circle, DELAY, arr[i], my_color));
    }

    DELAY = DELAY + DELAY_CLEAR_GRAPH;
    STACK.push(setTimeout(Clear_Layer, DELAY));
    DELAY = DELAY + DELAY_NEXT_GRAPH;

}


function Handle_Command_Controlando(param) {

    var arr = param.split(",");

    for (var i = 0; i < arr.length; i++) {
        STACK.push(setTimeout(Draw_Xis, DELAY, arr[i], BLUE));
        DELAY = DELAY + DELAY_SQUARE;
    }

    DELAY = DELAY + DELAY_CLEAR_GRAPH;
    STACK.push(setTimeout(Clear_Layer, DELAY));
    DELAY = DELAY + DELAY_NEXT_GRAPH;

}


function Handle_Command_Cravando(param) {

    var arr     = param.split("-");

    STACK.push(setTimeout(Draw_Border_Square, DELAY, arr[0], ORANGE, 4));
    DELAY = DELAY + DELAY_SQUARE;
    STACK.push(setTimeout(Draw_Border_Square, DELAY, arr[1], RED, 4));

    DELAY = DELAY + DELAY_CLEAR_GRAPH;
    STACK.push(setTimeout(Clear_Layer, DELAY));
    DELAY = DELAY + DELAY_NEXT_GRAPH;   

}


function Handle_Command_Defendendo(param) {

    var arr = param.split(",");

    for (var i = 0; i < arr.length; i++) {
        STACK.push(setTimeout(Paint_Square, DELAY, arr[i], GREEN));
    }

    DELAY = DELAY + DELAY_CLEAR_GRAPH;
    STACK.push(setTimeout(Clear_Layer, DELAY));
    DELAY = DELAY + DELAY_NEXT_GRAPH;

}



function Handle_Command_Ideia(param) {

    var tab     = param.split(",");    

    for (var i = 0; i < tab.length; i++) {
        var arr     = tab[i].split("-");
        STACK.push(setTimeout(Draw_Arrow, DELAY, arr[0], arr[1], ORANGE));
        DELAY = DELAY + DELAY_SQUARE;
    }

    DELAY = DELAY + DELAY_CLEAR_GRAPH;
    STACK.push(setTimeout(Clear_Layer, DELAY));
    DELAY = DELAY + DELAY_NEXT_GRAPH;  

}


function Handle_Command_Mensagem(param) {

    var msg = TAB_MSG[param];

    STACK.push(setTimeout(Print_Message, DELAY, msg));
    if (msg.length > 50) {
        DELAY = DELAY + DELAY_CLEAR_MSG_LG;
    } else {
        DELAY = DELAY + DELAY_CLEAR_MSG;
    }    
    STACK.push(setTimeout(Clear_Layer, DELAY));
    DELAY = DELAY + DELAY_NEXT_GRAPH;

}


function Handle_Command_Open(param) {

    var arr = param.split(",");

    STACK.push(setTimeout(Draw_Border_Square, DELAY, arr[0], BLUE, 4));
    DELAY = DELAY + (DELAY_SQUARE * 2); 
    for (var i = 1; i < arr.length; i++) {
        STACK.push(setTimeout(Draw_Xis, DELAY, arr[i], BLUE));
        DELAY = DELAY + DELAY_SQUARE;
    }

    DELAY = DELAY + DELAY_CLEAR_GRAPH;
    STACK.push(setTimeout(Clear_Layer, DELAY));
    DELAY = DELAY + DELAY_NEXT_GRAPH;

}

function Handle_Command_Paint(my_color, param) {

    var arr = param.split(",");

    for (var i = 0; i < arr.length; i++) {
        STACK.push(setTimeout(Paint_Square, DELAY, arr[i], my_color));
    }

    DELAY = DELAY + DELAY_CLEAR_GRAPH;
    STACK.push(setTimeout(Clear_Layer, DELAY));
    DELAY = DELAY + DELAY_NEXT_GRAPH;

}


function Handle_Command_Pressionando(param) {

    var arr = param.split(",");

    for (var i = 0; i < arr.length; i++) {
        STACK.push(setTimeout(Paint_Square, DELAY, arr[i], ORANGE));
    }

    DELAY = DELAY + DELAY_CLEAR_GRAPH;
    STACK.push(setTimeout(Clear_Layer, DELAY));
    DELAY = DELAY + DELAY_NEXT_GRAPH;

}


function Handle_Command_Tip(param) {

    var arr     = param.split(",");
    var dica    = TAB_TIP[arr[1]];

    if (arr[2] != "") {
        dica = dica.replace("@_1", arr[2]);
    }

    if (arr[3] != "") {
        dica = dica.replace("@_2", arr[3]);
    }    

    STACK.push(setTimeout(Print_Tooltip, DELAY, arr[0], dica));
    DELAY = DELAY + DELAY_CLEAR_TIP;
    STACK.push(setTimeout(Clear_Layer, DELAY));
    DELAY = DELAY + DELAY_NEXT_GRAPH;

}


function Handle_Command_Xis(param) {

    var arr = param.split(",");

    for (var i = 0; i < arr.length; i++) {
        STACK.push(setTimeout(Draw_Letter, DELAY, arr[i], "x", TEAL));
    }

    DELAY = DELAY + DELAY_CLEAR_GRAPH;
    STACK.push(setTimeout(Clear_Layer, DELAY));
    DELAY = DELAY + DELAY_NEXT_GRAPH;

}


function Handle_Comms(comms) {

    if (typeof comms === "undefined" || comms == "") {
        return;
    }

    var arr         = comms.split(";");
    var tot_comms   = arr.length;

    for (var i = 0; i < tot_comms; i++) {
        Print_Comms(arr[i]);
    }

} 


function Load_This_Alternativa(id_exerc) {

    var ind = EXERC.alts_key.indexOf(id_exerc.toString());

    EXERC.str_moves     = EXERC.alts_moves[ind];
    EXERC.str_comms     = EXERC.alts_comms[ind];
    EXERC.str_alts      = EXERC.alts_alts[ind];   

}


function Paint_Square(square, color) {

    GRAPH.globalAlpha = 0.4;    
    GRAPH.shadowBlur  = 4; 
    GRAPH.shadowColor = BLACK;   

    var sq = Get_XY(square);    
    GRAPH.fillStyle = color;
    GRAPH.fillRect(sq.x + 1, sq.y, SQUARE_WIDTH, SQUARE_WIDTH);

} 


function Print_Tooltip(square, msg) {

    GRAPH.globalAlpha = 0.99;
    GRAPH.shadowBlur  = 4; 
    GRAPH.shadowColor = BLACK;     

    var lines = [];

    if (msg.length > 20) {
        lines = Quebra_Texto(msg, 20);        
    } else {
        lines[0] = msg;
    }    

    var orientation = Get_Orientation();

    if (square[0] == "a" || square[0] == "b" || square[0] == "c" || square[0] == "d") {
        if (orientation == "w") {
            Print_Tooltip_Right(square, msg, lines);
        } else {
            Print_Tooltip_Left(square, msg, lines);
        }
    } else {
        if (orientation == "w") {
            Print_Tooltip_Left(square, msg, lines);
        } else {
            Print_Tooltip_Right(square, msg, lines);
        }
    }

}   


function Print_Tooltip_Left(square, msg, lines) {    

    var tot_lines = lines.length;

    var sq = Get_XY(square);
    var line_height = SQUARE_WIDTH / 4;
        
    sq.x    = sq.x;
    sq.y    = sq.y + line_height - (tot_lines * line_height);

    var width = (msg.length * 8.5) / tot_lines + 10;

    var height = SQUARE_WIDTH / 2 * tot_lines + 4;
    var radius = 5;

    GRAPH.beginPath();

    GRAPH.moveTo(sq.x, sq.y);
    GRAPH.lineTo(sq.x, sq.y + height);
    GRAPH.lineTo(sq.x - width, sq.y + height);
    GRAPH.lineTo(sq.x - width, sq.y);
    GRAPH.fill(); 
        
    // Desenha seta para direita
    GRAPH.moveTo(36 + sq.x - SQUARE_WIDTH + 22, 16 + sq.y);
    GRAPH.lineTo(46 + sq.x - SQUARE_WIDTH - 2, 10 + sq.y);
    GRAPH.lineTo(46 + sq.x - SQUARE_WIDTH - 2, 20 + sq.y);
    GRAPH.fill();   
        
    GRAPH.closePath();
    GRAPH.fillStyle     = LIGHT_GREY; 
    GRAPH.strokeStyle   = GREY; 

    GRAPH.stroke();
    GRAPH.fill();
    GRAPH.shadowBlur  = 0;
    GRAPH.font      = "bold 14px PT Mono";
    GRAPH.fillStyle = "#003399";

    for (var i = 0; i < tot_lines; i++) {
        GRAPH.fillText(lines[i], sq.x + 5 - width, sq.y + ((i+1) * (line_height+6)));
    }

} 


function Print_Tooltip_Right(square, msg, lines) {    

    var tot_lines = lines.length;

    var sq          = Get_XY(square);
    var line_height = SQUARE_WIDTH / 4;
        
    sq.x    = sq.x + SQUARE_WIDTH;
    sq.y    = sq.y + line_height - (tot_lines * line_height);

    var width = (msg.length * 8.5) / tot_lines + 10;

    var height = SQUARE_WIDTH / 2 * tot_lines + 4;
    var radius = 0; // 5

    GRAPH.beginPath();
    GRAPH.moveTo(sq.x + radius, sq.y);
    GRAPH.lineTo(sq.x + width - radius, sq.y);
    //GRAPH.quadraticCurveTo(sq.x + width, sq.y, sq.x + width, sq.y + radius);
    GRAPH.lineTo(sq.x + width, sq.y + height - radius);
    //GRAPH.quadraticCurveTo(sq.x + width, sq.y + height, sq.x + width - radius, sq.y + height);
    GRAPH.lineTo(sq.x + radius, sq.y + height);
    //GRAPH.quadraticCurveTo(sq.x, sq.y + height, sq.x, sq.y + height - radius);
    GRAPH.lineTo(sq.x, sq.y + radius);
    //GRAPH.quadraticCurveTo(sq.x, sq.y, sq.x + radius, sq.y);
        
    // Desenha seta para esquerda
    GRAPH.moveTo(36 + sq.x - SQUARE_WIDTH, 16 + sq.y);
    GRAPH.lineTo(46 + sq.x - SQUARE_WIDTH, 10 + sq.y);
    GRAPH.lineTo(46 + sq.x - SQUARE_WIDTH, 20 + sq.y);
    GRAPH.fill();       
        
    GRAPH.closePath();
    GRAPH.fillStyle     = LIGHT_GREY; 
    GRAPH.strokeStyle   = GREY; 

    GRAPH.stroke();
    GRAPH.fill();
    GRAPH.shadowBlur  = 0;
    GRAPH.font      = "bold 14px PT Mono";
    GRAPH.fillStyle = "#003399";

    for (var i = 0; i < tot_lines; i++) {
        GRAPH.fillText(lines[i], sq.x + 5, sq.y + ((i+1) * (line_height+6)));
    }

}  


function Quebra_Texto(txt, chars) {

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


function Print_Comms(my_comm) {

    if (typeof my_comm === "undefined" || my_comm == "") { return; }

    var cmd     = my_comm.substring(0, 3);
    var param   = my_comm.substring(3);
    var param   = param.slice(1, -1);  // elimina parentesis

    if (cmd === "ALT") { return Handle_Command_Alternativas(param); }
    if (cmd === "AMC") { return Handle_Command_Ameacando(param); }
    if (cmd === "ATQ") { return Handle_Command_Atacando(param);  }
    if (cmd === "BLQ") { return Handle_Command_Bloqueando(param); }
    if (cmd === "CRV") { return Handle_Command_Cravando(param); }
    if (cmd === "CTR") { return Handle_Command_Controlando(param); }
    if (cmd === "DEF") { return Handle_Command_Defendendo(param); }
    if (cmd === "IDE") { return Handle_Command_Ideia(param); }    
    if (cmd === "MSG") { return Handle_Command_Mensagem(param); }
    if (cmd === "OPE") { return Handle_Command_Open(param); }
    if (cmd === "PRS") { return Handle_Command_Pressionando(param); }
    if (cmd === "TIP") { return Handle_Command_Tip(param); }

    alert("Invalid Command");

}


function Print_Message(msg) {

    if (msg == "") {
        return;
    }

    GRAPH.globalAlpha = 0.99;
    GRAPH.shadowBlur  = 4; 
    GRAPH.shadowColor = BLACK;        

    var lines = Quebra_Texto(msg, 30);
    var tot_lines = lines.length;

    var line_height = 24;
    var line_ini = 44 + ((12 - tot_lines) * (line_height / 2));

    var x = 10; // margem lateral
    var y = 10 + ((12 - tot_lines) * (line_height / 2)); // margens superior e inferior
    var width  = (SQUARE_WIDTH * 8) - (2 * x) + 4;
    var height = (SQUARE_WIDTH * 8) - (2 * y) - 12;
    var radius = 5;

    GRAPH.beginPath();
    GRAPH.moveTo(x + radius, y);
    GRAPH.lineTo(x + width - radius, y);
    GRAPH.quadraticCurveTo(x + width, y, x + width, y + radius);
    GRAPH.lineTo(x + width, y + height - radius);
    GRAPH.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    GRAPH.lineTo(x + radius, y + height);
    GRAPH.quadraticCurveTo(x, y + height, x, y + height - radius);
    GRAPH.lineTo(x, y + radius);
    GRAPH.quadraticCurveTo(x, y, x + radius, y);
    GRAPH.closePath();
    GRAPH.fillStyle     = "#FFE88A";
    GRAPH.strokeStyle   = "#FFD942"; 

    GRAPH.stroke();
    GRAPH.fill();

    GRAPH.shadowBlur = 0;
    GRAPH.textAlign = "center";
    GRAPH.font      = "bold 18px Mali";
    GRAPH.fillStyle = "#003399";

    for (var i = 0; i < tot_lines; i++) {
        GRAPH.fillText(lines[i], 172, line_ini + (i * line_height));
    }

}


function Reset_Stack() {

    for (var i = 0; i < 20; i++) {
        clearTimeout(STACK[i]);
    }

    Clear_Layer();
    STACK = [];
    DELAY = 300;

}   


function Shuffle_Alternativas(opt1, opt2, opt3 = "") {

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

}


function Start_Exerc() {

    Reset_Stack();
    // Hide_Side_Info();    
    // Clear_Tabs_EXERC();

    Print_Board(EXERC.fen, EXERC.orientation);
    Load_This_Alternativa(MOD.cur_exerc);
    Build_Arrays();

}


function Store_Tags_ALT() {

    EXERC.alts_key.length   = 0;
    EXERC.alts_moves.length = 0;
    EXERC.alts_comms.length = 0;
    EXERC.alts_alts.length  = 0;

    var arr = EXERC.aux.split("<ALT>");    
    for (var i=1; i < arr.length; i++) {
        var xis = arr[i].split("<>"); 
        EXERC.alts_key.push(xis[0]);
        EXERC.alts_moves.push(xis[1]);
        EXERC.alts_comms.push(xis[2]);
        EXERC.alts_alts.push(xis[3]); 
    }

}


function Stripped_San(move) {

    return move.replace(/=/,'').replace(/[+#]?[?!]*$/,'');

}




function Populate_Quotes() {

    QUOTES[0] = "Every chess master was once a beginner.";
    QUOTES[0] = "Todo grande mestre já foi um iniciante.";
    AUTHORS[0] = "Irving Chernev";

    QUOTES[1] = "Chess is the struggle against the error.";
    QUOTES[1] = "O xadrez é a batalha contra o erro.";
    AUTHORS[1] = "J. Zukertort";

    QUOTES[2] = "Chess opens and enriches your mind";
    QUOTES[2] = "O xadrez abre e enriquece a sua mente.";
    AUTHORS[2] = "Saudin Robovic";

    QUOTES[3] = "Chess is the gymnasium of the mind.";
    QUOTES[3] = "O xadrez é o ginásio da mente.";
    AUTHORS[3] = "Blaise Pascal";

    QUOTES[4] = "Chess is a war over the board. The object is to crush the opponent’s mind.";
    QUOTES[4] = "O xadrez é uma guerra sobre o tabuleiro cujo objetivo é destruir a mente do adversário.";
    AUTHORS[4] = "Bobby Fischer";

    QUOTES[5] = "Chess, like love, like music, has the power to make men happy.";
    QUOTES[5] = "O xadrez, como o amor, como a música, tem o poder de fazer as pessoas felizes.";
    AUTHORS[5] = "Siegbert Tarrasch";

    QUOTES[6] = "I don’t believe in psychology. I believe in good moves.";
    QUOTES[6] = "Eu não acredito em psicologia. Acredito em bons lances.";
    AUTHORS[6] = "Bobby Fischer";

    QUOTES[7] = "A game of chess is not an examination of knowledge; it is a battle of nerves.";
    QUOTES[7] = "Uma partida de xadrez não é um teste de conhecimento; é uma batalha de nervos.";
    AUTHORS[7] = "David Bronstein";

    QUOTES[8] = "When you see a good move, look for a better one.";
    QUOTES[8] = "Quando você encontrar um bom lance, procure outro melhor.";
    AUTHORS[8] = "Emanuel Lasker";

    QUOTES[9] = "Even a poor plan is better than no plan at all.";
    QUOTES[9] = "Mesmo um plano ruim é melhor do que não ter nenhum plano.";
    AUTHORS[9] = "Mikhail Chigorin";

    QUOTES[10] = "In life, as in chess, forethought wins.";
    QUOTES[10] = "Na vida, como no xadrez, a premeditação vence.";
    AUTHORS[10] = "Charles Buxton";

    QUOTES[11] = "Pawns are the soul of the game.";
    QUOTES[11] = "Os peões são a alma do xadrez.";
    AUTHORS[11] = "F. Philidor";

    QUOTES[12] = "Nobody ever won a chess game by resigning.";
    QUOTES[12] = "Ninguém nunca ganhou uma partida de xadrez desistindo.";
    AUTHORS[12] = "Savielly Tartakower";

    QUOTES[13] = "One bad move nullifies forty good ones.";
    QUOTES[13] = "Um lance ruim anula quarenta lances bons.";
    AUTHORS[13] = "Bernhard Horwitz";

    QUOTES[14] = "Chess is the art of analysis";
    QUOTES[14] = "O Xadrez é a arte da análise.";
    AUTHORS[14] = "Mikhail Botvinnik";

    QUOTES[15] = "All that matters on the Chessboard is good moves";
    QUOTES[15] = "Tudo o que importa em um tabuleiro de xadrez são bons lances.";
    AUTHORS[15] = "Bobby Fischer";

    QUOTES[16] = "Help your pieces so they can help you";
    QUOTES[16] = "Ajude as suas peças, assim elas poderão ajudar você.";
    AUTHORS[16] = "Paul Morphy";

    QUOTES[17] = "Tactics flow from a superior position";
    QUOTES[17] = "Táticas nascem de uma posição superior. ";
    AUTHORS[17] = "Bobby Fischer";

    QUOTES[18] = "Chess is everything: art, science and sport";
    QUOTES[18] = "O xadrez é tudo: arte, ciência e esporte.";
    AUTHORS[18] = "Anatoly Karpov";

    QUOTES[19] = "Chess is the art which expresses the science of logic.";
    QUOTES[19] = "O xadrez é a arte que expressa a ciência da lógica.";
    AUTHORS[19] = "Mikhail Botvinnik";

    QUOTES[20] = "Not all artists are Chess players, but all Chess players are artists.";
    QUOTES[20] = "Nem todos artistas são jogadores de xadrez, mas todo jogador de xadrez é um artista.";
    AUTHORS[20] = "Marcel Duchamp";

    QUOTES[21] = "Chess is imagination";
    QUOTES[21] = "O Xadrez é imaginação.";
    AUTHORS[21] = "David Bronstein";


    /*    
    QUOTES[11]   = "You may learn much more from a game you lose than from a game you win. You will have to lose hundreds of games before becoming a good player.";
    AUTHORS[11]  = "José Raúl Capablanca";   

    QUOTES[14]   = "One doesn’t have to play well, it’s enough to play better than your opponent.";
    AUTHORS[14]  = "Siegbert Tarrasch";   

    QUOTES[16]   = "Only the player with the initiative has the right to attack.";
    AUTHORS[16]  = "Wilhelm Steinitz";        

    QUOTES[17]   = "The winner of the game is the player who makes the next-to-last mistake";
    AUTHORS[17]  = "Savielly Tartakover";   

    QUOTES[18]   = "Openings teach you openings. Endgames teach you chess!";
    AUTHORS[18]  = "Stephan Gerzadowicz";   

    QUOTES[19]   = "Excellence at Chess is one mark of a scheming mind";
    AUTHORS[19]  = "Sir Arthur Conan Doyle";          

    QUOTES[21]   = "A passed Pawn increases in strength as the number of pieces on the board diminishes";
    AUTHORS[21]  = "Capablanca";   

    QUOTES[22]   = "Capture of the adverse King is the ultimate but not the first object of the game";
    AUTHORS[22]  = "William Steinitz";      

    QUOTES[23]   = "I am the best player in the world and I am here to prove it";
    AUTHORS[23]  = "Bobby Fischer";        

    QUOTES[24]   = "When the Chess game is over, the Pawn and the King go back to the same box";
    AUTHORS[24]  = "Irish saying";   

    QUOTES[28]   = "A Chess game is divided into three stages: the first, when you hope you have the advantage, the second when you believe you have an advantage, and the third... when you know you’re going to lose!";
    AUTHORS[28]  = "Savielly Tartakower";   

    QUOTES[33]   = "Daring ideas are like Chess men moved forward. They may be beaten, but they may start a winning game";
    AUTHORS[33]  = "Johann Wolfgang von Goethe";      
  

    }
    
    */