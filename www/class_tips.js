

/******************************************************************************************************
 *																	   						Tooltipster
 ******************************************************************************************************/


function Print_Tooltipster(sq, tip) {

    var orientation = Get_Orientation();

    if (orientation == "black") {
        sq = Flip_Square(sq);
    }

    $('#tip_' + sq).tooltipster('content', tip);
    $('#tip_' + sq).tooltipster('open');

}

function Close_Tooltipster(sq) {

    var orientation = Get_Orientation();

    if (orientation == "black") {
        sq = Flip_Square(sq);
    }

    $('#tip_' + sq).tooltipster('close');

}





function Flip_Square(sq) {

    var t1 = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8",
              "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8",
              "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8",
              "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8",
              "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8",
              "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8",
              "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8",
              "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"];

    var t2 = ["h8", "h7", "h6", "h5", "h4", "h3", "h2", "h1",
              "g8", "g7", "g6", "g5", "g4", "g3", "g2", "g1",
              "f8", "f7", "f6", "f5", "f4", "f3", "f2", "f1",
              "e8", "e7", "e6", "e5", "e4", "e3", "e2", "e1",
              "d8", "d7", "d6", "d5", "d4", "d3", "d2", "d1",
              "c8", "c7", "c6", "c5", "c4", "c3", "c2", "c1",
              "b8", "b7", "b6", "b5", "b4", "b3", "b2", "b1",
              "a8", "a7", "a6", "a5", "a4", "a3", "a2", "a1"];

    for (var i=0; i < 64; i++) {
        if (sq == t1[i]) {
            return t2[i];
        }
    }

}




function Inicializa_Tooltipster() {
	
	var TAB_TOP     	= [HALF_SQUARE,
                   		SQUARE_WIDTH + HALF_SQUARE,
                   		(SQUARE_WIDTH * 2) + HALF_SQUARE,
                   		(SQUARE_WIDTH * 3) + HALF_SQUARE,
                   		(SQUARE_WIDTH * 4) + HALF_SQUARE,
                   		(SQUARE_WIDTH * 5) + HALF_SQUARE,
                   		(SQUARE_WIDTH * 6) + HALF_SQUARE,
                   		(SQUARE_WIDTH * 7) + HALF_SQUARE];

	var TAB_LEFT     	= [HALF_SQUARE + Q_SQUARE,
                   		SQUARE_WIDTH + HALF_SQUARE + Q_SQUARE,
                   		(SQUARE_WIDTH * 2) + HALF_SQUARE + Q_SQUARE,
                   		(SQUARE_WIDTH * 3) + HALF_SQUARE + Q_SQUARE,
                   		(SQUARE_WIDTH * 4) + HALF_SQUARE - Q_SQUARE,
                   		(SQUARE_WIDTH * 5) + HALF_SQUARE - Q_SQUARE,
                   		(SQUARE_WIDTH * 6) + HALF_SQUARE - Q_SQUARE,
                   		(SQUARE_WIDTH * 7) + HALF_SQUARE - Q_SQUARE];


    var max_width = 200;

    $('#tip_a8').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[0];
            position.coord.left += TAB_LEFT[0];
            return position;
        }
    });

    $('#tip_b8').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[0];
            position.coord.left += TAB_LEFT[1];
            return position;
        }
    });

    $('#tip_c8').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[0];
            position.coord.left += TAB_LEFT[2];
            return position;
        }
    });

    $('#tip_d8').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[0];
            position.coord.left += TAB_LEFT[3];
            return position;
        }
    });

    $('#tip_e8').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[0];
            position.coord.left += TAB_LEFT[4];
            return position;
        }
    });

    $('#tip_f8').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[0];
            position.coord.left += TAB_LEFT[5];
            return position;
        }
    });

    $('#tip_g8').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[0];
            position.coord.left += TAB_LEFT[6];
            return position;
        }
    });

    $('#tip_h8').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[0];
            position.coord.left += TAB_LEFT[7];
            return position;
        }
    });

    $('#tip_a7').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[1];
            position.coord.left += TAB_LEFT[0];
            return position;
        }
    });

    $('#tip_b7').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[1];
            position.coord.left += TAB_LEFT[1];
            return position;
        }
    });

    $('#tip_c7').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[1];
            position.coord.left += TAB_LEFT[2];
            return position;
        }
    });

    $('#tip_d7').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[1];
            position.coord.left += TAB_LEFT[3];
            return position;
        }
    });

    $('#tip_e7').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[1];
            position.coord.left += TAB_LEFT[4];
            return position;
        }
    });

    $('#tip_f7').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[1];
            position.coord.left += TAB_LEFT[5];
            return position;
        }
    });

    $('#tip_g7').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[1];
            position.coord.left += TAB_LEFT[6];
            return position;
        }
    });

    $('#tip_h7').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[1];
            position.coord.left += TAB_LEFT[7];
            return position;
        }
    });

    $('#tip_a6').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[2];
            position.coord.left += TAB_LEFT[0];
            return position;
        }
    });

    $('#tip_b6').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[2];
            position.coord.left += TAB_LEFT[1];
            return position;
        }
    });

    $('#tip_c6').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[2];
            position.coord.left += TAB_LEFT[2];
            return position;
        }
    });

    $('#tip_d6').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[2];
            position.coord.left += TAB_LEFT[3];
            return position;
        }
    });

    $('#tip_e6').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[2];
            position.coord.left += TAB_LEFT[4];
            return position;
        }
    });

    $('#tip_f6').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[2];
            position.coord.left += TAB_LEFT[5];
            return position;
        }
    });

    $('#tip_g6').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[2];
            position.coord.left += TAB_LEFT[6];
            return position;
        }
    });

    $('#tip_h6').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[2];
            position.coord.left += TAB_LEFT[7];
            return position;
        }
    });

    $('#tip_a5').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[3];
            position.coord.left += TAB_LEFT[0];
            return position;
        }
    });

    $('#tip_b5').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[3];
            position.coord.left += TAB_LEFT[1];
            return position;
        }
    });

    $('#tip_c5').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[3];
            position.coord.left += TAB_LEFT[2];
            return position;
        }
    });

    $('#tip_d5').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[3];
            position.coord.left += TAB_LEFT[3];
            return position;
        }
    });

    $('#tip_e5').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[3];
            position.coord.left += TAB_LEFT[4];
            return position;
        }
    });

    $('#tip_f5').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[3];
            position.coord.left += TAB_LEFT[5];
            return position;
        }
    });

    $('#tip_g5').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[3];
            position.coord.left += TAB_LEFT[6];
            return position;
        }
    });

    $('#tip_h5').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[3];
            position.coord.left += TAB_LEFT[7];
            return position;
        }
    });

    $('#tip_a4').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[4];
            position.coord.left += TAB_LEFT[0];
            return position;
        }
    });

    $('#tip_b4').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[4];
            position.coord.left += TAB_LEFT[1];
            return position;
        }
    });

    $('#tip_c4').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[4];
            position.coord.left += TAB_LEFT[2];
            return position;
        }
    });

    $('#tip_d4').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[4];
            position.coord.left += TAB_LEFT[3];
            return position;
        }
    });

    $('#tip_e4').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[4];
            position.coord.left += TAB_LEFT[4];
            return position;
        }
    });

    $('#tip_f4').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[4];
            position.coord.left += TAB_LEFT[5];
            return position;
        }
    });

    $('#tip_g4').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[4];
            position.coord.left += TAB_LEFT[6];
            return position;
        }
    });

    $('#tip_h4').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[4];
            position.coord.left += TAB_LEFT[7];
            return position;
        }
    });

    $('#tip_a3').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[5];
            position.coord.left += TAB_LEFT[0];
            return position;
        }
    });

    $('#tip_b3').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[5];
            position.coord.left += TAB_LEFT[1];
            return position;
        }
    });

    $('#tip_c3').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[5];
            position.coord.left += TAB_LEFT[2];
            return position;
        }
    });

    $('#tip_d3').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[5];
            position.coord.left += TAB_LEFT[3];
            return position;
        }
    });

    $('#tip_e3').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[5];
            position.coord.left += TAB_LEFT[4];
            return position;
        }
    });

    $('#tip_f3').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[5];
            position.coord.left += TAB_LEFT[5];
            return position;
        }
    });

    $('#tip_g3').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[5];
            position.coord.left += TAB_LEFT[6];
            return position;
        }
    });

    $('#tip_h3').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[5];
            position.coord.left += TAB_LEFT[7];
            return position;
        }
    });

    $('#tip_a2').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top  += TAB_TOP[6];
            position.coord.left += TAB_LEFT[0];
            return position;
        }
    });

    $('#tip_b2').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[6];
            position.coord.left += TAB_LEFT[1];
            return position;
        }
    });

    $('#tip_c2').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[6];
            position.coord.left += TAB_LEFT[2];
            return position;
        }
    });

    $('#tip_d2').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[6];
            position.coord.left += TAB_LEFT[3];
            return position;
        }
    });

    $('#tip_e2').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[6];
            position.coord.left += TAB_LEFT[4];
            return position;
        }
    });

    $('#tip_f2').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[6];
            position.coord.left += TAB_LEFT[5];
            return position;
        }
    });

    $('#tip_g2').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[6];
            position.coord.left += TAB_LEFT[6];
            return position;
        }
    });

    $('#tip_h2').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[6];
            position.coord.left += TAB_LEFT[7];
            return position;
        }
    });

    $('#tip_a1').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[7];
            position.coord.left += TAB_LEFT[0];
            return position;
        }
    });

    $('#tip_b1').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[7];
            position.coord.left += TAB_LEFT[1];
            return position;
        }
    });

    $('#tip_c1').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[7];
            position.coord.left += TAB_LEFT[2];
            return position;
        }
    });

    $('#tip_d1').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['right'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[7];
            position.coord.left += TAB_LEFT[3];
            return position;
        }
    });

    $('#tip_e1').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[7];
            position.coord.left += TAB_LEFT[4];
            return position;
        }
    });

    $('#tip_f1').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[7];
            position.coord.left += TAB_LEFT[5];
            return position;
        }
    });

    $('#tip_g1').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[7];
            position.coord.left += TAB_LEFT[6];
            return position;
        }
    });

    $('#tip_h1').tooltipster({
        animation:  'fade',
        theme:      ['tooltipster-default'],
        delay:      200,
        trigger:    'click',
        side:       ['left'],
        maxWidth: max_width,
        functionPosition: function(instance, helper, position){
            position.coord.top += TAB_TOP[7];
            position.coord.left += TAB_LEFT[7];
            return position;
        }
    });


}
