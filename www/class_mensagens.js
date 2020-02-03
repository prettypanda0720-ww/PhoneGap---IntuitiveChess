
/************************************************************************************
 * 												     
 * 												     
 * 												    				Class: Mensagens
 * 												     
 * 												     
 * 												     
 ************************************************************************************/

"use strict";

// Qualquer alteração também deverá ser efetuada no combo do ADM_MODS.PHP (id=msgs_list) 

var MSG_POR = [	'Não utilizado', 
				'As brancas abandonam',
				'As negras abandonam',
				'Ganhando a Dama',
				'Ganhando uma peça',
				'Com empate por afogamento',
				'Com vantagem decisiva para as brancas',
				'Com vantagem decisiva para as negras',
				'Xeque-mate',
				'As brancas estão melhor',
				'As negras estão melhor',
				'O jogo está equilibrado',
				'As brancas estão um pouco melhor',
				'As negras estão um pouco melhor',
				'Com empate por xeque perpétuo',
				'As brancas estão em zugzwang (qualquer jogada piora sua situação)',
				'As negras estão em zugzwang (qualquer jogada piora sua situação)',
				'Com chances de empate',
				'Oferecendo um peão em troca de maior controle no centro.',
				'Recuperando o peão e desenvolvendo uma peça',
				'Em uma situação aberta, as brancas jogam duas vezes uma peça já desenvolvida.',
				'Cedendo o centro para o adversário.',	
				'Las negras se defienden con una jugada de desarrollo.',
				'Atacando a Dama e ganhando tempo para desenvolver uma peça.',
				'Trazendo mais uma peça para ajudar no ataque.',		
				'Forçando o adversário a debilitar o seu roque',
				'As brancas sacrificam o seu desenvolvimento para tentar manter um peão de vantagem',
				'As negras sacrificam o seu desenvolvimento para tentar manter um peão de vantagem',
				'E as brancas conseguem resistir um pouco mais',
				'E as negras conseguem resistir um pouco mais',
				'E o jogo está aproximadamente equilibrado'		
																																	
];


var MSG_ENG = [	'EN-Não utilizado', 
				'EN-As brancas abandonam',
				'EN-As negras abandonam',
				'EN-Ganhando a Dama',
				'EN-Ganhando uma peça',
				'EN-Com empate por afogamento',
				'EN-Com vantagem decisiva para as brancas',
				'EN-Com vantagem decisiva para as negras',
				'EN-Xeque-mate',
				'EN-As brancas estão melhor',
				'EN-As negras estão melhor',
				'EN-O jogo está equilibrado',
				'EN-As brancas estão um pouco melhor',
				'EN-As negras estão um pouco melhor',
				'EN-Com empate por xeque perpétuo',
				'EN-As brancas estão em zugzwang (qualquer jogada piora sua situação)',
				'EN-As negras estão em zugzwang (qualquer jogada piora sua situação)',
				'EN-Com chances de empate',
				'EN-Oferecendo um peão em troca de maior controle no centro.',
				'EN-Recuperando o peão e desenvolvendo uma peça',
				'EN-Em uma situação aberta, as brancas jogam duas vezes uma peça já desenvolvida.',
				'EN-Cedendo o centro para o adversário.',	
				'EN-Las negras se defienden con una jugada de desarrollo.',
				'EN-Atacando a Dama e ganhando tempo para desenvolver uma peça.',
				'EN-Trazendo mais uma peça para ajudar no ataque.',		
				'EN-Forçando o adversário a debilitar o seu roque',
				'EN-As brancas sacrificam o seu desenvolvimento para tentar manter um peão de vantagem',
				'EN-As negras sacrificam o seu desenvolvimento para tentar manter um peão de vantagem',
				'EN-E as brancas conseguem resistir um pouco mais',
				'EN-E as negras conseguem resistir um pouco mais',
				'EN-E o jogo está aproximadamente equilibrado'																															
];


var MSG_SPN = [	'SP-Não utilizado', 
				'SP-As brancas abandonam',
				'SP-As negras abandonam',
				'SP-Ganhando a Dama',
				'SP-Ganhando uma peça',
				'SP-Com empate por afogamento',
				'SP-Com vantagem decisiva para as brancas',
				'SP-Com vantagem decisiva para as negras',
				'SP-Xeque-mate',
				'SP-As brancas estão melhor',
				'SP-As negras estão melhor',
				'SP-O jogo está equilibrado',
				'SP-As brancas estão um pouco melhor',
				'SP-As negras estão um pouco melhor',
				'SP-Com empate por xeque perpétuo',
				'SP-As brancas estão em zugzwang (qualquer jogada piora sua situação)',
				'SP-As negras estão em zugzwang (qualquer jogada piora sua situação)',
				'SP-Com chances de empate',
				'SP-Oferecendo um peão em troca de maior controle no centro.',
				'SP-Recuperando o peão e desenvolvendo uma peça',
				'SP-Em uma situação aberta, as brancas jogam duas vezes uma peça já desenvolvida.',
				'SP-Cedendo o centro para o adversário.',	
				'SP-Las negras se defienden con una jugada de desarrollo.',
				'SP-Atacando a Dama e ganhando tempo para desenvolver uma peça.',
				'SP-Trazendo mais uma peça para ajudar no ataque.',		
				'SP-Forçando o adversário a debilitar o seu roque',
				'SP-As negras sacrificam o seu desenvolvimento para tentar manter um peão de vantagem',
				'SP-As brancas sacrificam o seu desenvolvimento para tentar manter um peão de vantagem',
				'SP-E as brancas conseguem resistir um pouco mais',
				'SP-E as negras conseguem resistir um pouco mais',
				'SP-E o jogo está aproximadamente equilibrado'																													
];



var TIPS_POR = [	'Não utilizado',
                'Bispo bom',
                'Bispo mau',
                'Bispo na frente da cadeia de peões',
                'Bispo atrás da cadeia de peões',
                'Casa débil',
                'Lance duvidoso',
                'Lance excelente',
                'Lance ruim',
                'Peão atrasado',
                'Posto avançado',
                'Peão bloqueado',
                'Peão cravado',
                'Peão débil',
                'Peão isolado',
                'Peões dobrados',
                'Peões colgantes',
                'Peça ativa',
                'Peça bloqueada',
                'Peça cravada',
                'Peça desprotegida',
                'Peça mal colocada',
                'Peça não desenvolvida',
                'Peça passiva',
                'Peça sobrecarregada',
                'Rei exposto',
                'Peça prisioneira'
];



var TIPS_ENG = [	'Não utilizado',
                'Bispo bom',
                'Bispo mau',
                'Bispo na frente da cadeia de peões',
                'Bispo atrás da cadeia de peões',
                'Casa débil',
                'Lance duvidoso',
                'Lance excelente',
                'Lance ruim',
                'Peão atrasado',
                'Posto avançado',
                'Peão bloqueado',
                'Peão cravado',
                'Peão débil',
                'Peão isolado',
                'Peões dobrados',
                'Peões colgantes',
                'Peça ativa',
                'Peça bloqueada',
                'Peça cravada',
                'Peça desprotegida',
                'Peça mal colocada',
                'Peça não desenvolvida',
                'Peça passiva',
                'Peça sobrecarregada',
                'Rei exposto',
                'Peça prisioneira'
];



var TIPS_SPN = [	'Não utilizado',
                'Bispo bom',
                'Bispo mau',
                'Bispo na frente da cadeia de peões',
                'Bispo atrás da cadeia de peões',
                'Casa débil',
                'Lance duvidoso',
                'Lance excelente',
                'Lance ruim',
                'Peão atrasado',
                'Posto avançado',
                'Peão bloqueado',
                'Peão cravado',
                'Peão débil',
                'Peão isolado',
                'Peões dobrados',
                'Peões colgantes',
                'Peça ativa',
                'Peça bloqueada',
                'Peça cravada',
                'Peça desprotegida',
                'Peça mal colocada',
                'Peça não desenvolvida',
                'Peça passiva',
                'Peça sobrecarregada',
                'Rei exposto',
                'Peça prisioneira'
];

