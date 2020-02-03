
/************************************************************************************
 * 												     
 * 												     
 * 												    				Class: Lang
 * 												     
 * 												     
 * 												     
 ************************************************************************************/

"use strict";



var LG_POR = {
	
	sec_menu_1: 'Minha conta', 
	sec_menu_2: 'Fale Conosco', 
	sec_menu_3: 'Sobre o Intuitive Chess',
	sec_menu_4: 'Recuperar conta',
	sec_menu_5: 'Excluir conta',
	
	sec_account_1: 'Proteja sua conta!',
	sec_account_2: 'Preencha as informações abaixo para que você possa recuperar o progresso do seu treinamento em caso de mudança de aparelho.',
	sec_account_3: 'Selecione…',
	sec_account_4: 'Sexo Masculino',
	sec_account_5: 'Sexo Feminino',
	sec_account_6: 'Data de nascimento',
	sec_account_7: 'Português',
	sec_account_8: 'Inglês',
	sec_account_9: 'Espanhol',
	sec_account_10: 'Alemão',
	sec_account_11: "Cancelar",		// antigo sec_account_1	
	sec_account_12: "Salvar",		// antigo sec_account_2
		
	sec_home_1: 'MEUS MÓDULOS',
		
	sec_days_1: 'DIA',
	sec_days_2: 'REFORÇO',
	sec_days_3: 'REFAZER',
		 
	sec_about_1: 'Versão',
	sec_about_2: 'Criado por:',
	sec_about_3: 'Licenças de terceiros:',
	sec_about_4: 'Produzido no Brasil',
		
	sec_conf_1: 'Idioma',
	sec_conf_2: 'Sons e notificações',
	sec_conf_3: 'Tema',
		
	sec_help_1: 'Primeiros passos',
	sec_help_2: 'Módulos',
	sec_help_3: 'Treinamento',
	sec_help_4: 'Conta',
	sec_help_5: 'Solução de problemas',
	sec_help_6: 'Política de privacidade',
	sec_help_7: 'Termos de uso',
		
	sec_sup_1: 'Fale Conosco',
	sec_sup_2: 'Esse canal serve para você rapidamente reportar <b>eventuais problemas</b> do aplicativo, bem como enviar suas <b>dúvidas</b>, <b>críticas</b> e <b>sugestões</b>.',
	sec_sup_3: 'Você poderá se comunicar conosco em <b>Inglês</b>, <b>Português</b>, <b>Espanhol</b> e <b>Alemão</b>.',
	sec_sup_4: 'Faremos o possível para responder todas as mensagens em até <b>24 horas</b>.',
	sec_sup_5: 'Escreva aqui a sua mensagem',
	sec_sup_6: 'Enviar',
		
	excluir_conta: "Tem certeza que deseja excluir a sua conta?",
	refazer_modulo: "Tem certeza que quer refazer esse módulo?",
		
	store_adquirido: "Adquirido",
	store_gratis: "GRÁTIS",
	store_amostra: "Amostra",

	cadastro_ok: "O seu cadastro já está OK, ainda não é possível editar seus dados.",
	nao_implementado: "Ainda não implementado.",
	nao_tem_exercs_reforco: "Você ainda não tem nenhum exercício que precise de reforço.",
	tit_modal_msg: "Mensagem",
	erro_conexao: "Erro ao conectar ao servidor... Por favor, tente novamente dentro de alguns instantes.",
	erro_gravar_cad: "Falha de conexão ao salvar cadastro. Por favor, verifique a sua internet.",
	conta_vinculada: "A sua conta foi vinculada com o seu e-mail.",
		
	down_amostra_ok: "Download da amostra do módulo <b>@MOD_TITULO</b> concluído com sucesso!",
	down_modulo_ok: "Download do módulo <b>@MOD_TITULO</b> concluído com sucesso!",
	conexao_acesso_1: "Você precisa estar conectado para fazer o primeiro acesso.",
	msg_suporte_recebida: "Mensagem recebida. Em até 24 horas você deverá receber uma resposta. Obrigado!",
	msg_suporte_falhou: "Houve problema com envio da sua mensagem, por favor tente novamente mais tarde.",
	reforco_explain: "O treinamento de reforço é uma sequência de todos os exercícios que você não acertou nesse módulo.<br><br>Você poderá repetir esse treinamento sempre que quiser.<br><br>Quanto mais vezes fizer os exercícios de reforço, mais eles ficarão fixados em sua memória.",
	reforco_ended: "Parabéns! Você concluiu o seu treinamento de reforço para esse módulo. Você poderá repeti-lo sempre que quiser!",
	day_ended: "Parabéns! Você concluiu o seu treinamento de hoje.",
		
	mates: "MATES",
	tatica: "TÁTICA",
	miniaturas: "MINIATURAS",
	games: "GAMES",
	finais: "FINAIS",
	aberturas: "ABERTURAS",	
					
	help_perg_1: 'Mudei de celular, como faço para resgatar a minha conta anterior?',
	help_resp_1: 'Isso só é possível se você tiver criado uma <span style="color: #cc0000; font-weight: bold;">conta de segurança</span> informando seu nome, sexo, país e data de nascimento.<br><br>Nesse caso, basta entrar no <span style="color: #cc0000; font-weight: bold;">Fale Conosco</span>, que nós teremos prazer em ajudá-lo.',  
	help_perg_2: 'Posso excluir minha conta?',
	help_resp_2: 'Sim, mas perderá todas as informações estísticas referentes aos treinamentos e também precisará baixar os módulos novamente.', 
	help_perg_3: 'Porque eu não tenho uma senha?',
	help_resp_3: 'Entendemos que isso não é necessário. Quando você entra no aplicativo pela primeira vez, ele cria um <span style="color: #cc0000; font-weight: bold;">número de identificação único</span> que fica armazenado no seu celular.<br><br> É através desse número que conseguimos identificar cada um de nossos usuários.',  
	help_perg_4: 'Enviei uma pergunta ao suporte mas até agora não recebi resposta.',
	help_resp_4: 'O nosso prazo padrão de respostas do suporte é de <span style="color: #cc0000; font-weight: bold;">24 horas úteis</span>. <br><br>Caso já tenha decorrido esse tempo e você ainda não recebeu nenhuma resposta, por favor, envie um e-mail para: <b>sergio.tadela@gmail.com</b> relatando o ocorrido, para podermos averiguar o que aconteceu.', 
	help_perg_5: 'O que é um módulo?',
	help_resp_5: 'Um módulo é uma unidade de treinamento composta de um <span style="color: #cc0000; font-weight: bold;">conjunto de exercícios de determinado tema</span> (Tática, Mates etc...). <br><br>Embora o número de exercícios varie em função de cada tema, o tempo de treinamento de cada módulo será sempre de 21 dias.',  
	help_perg_6: 'Como faço para adquirir os módulos?',
	help_resp_6: 'Basta entrar na aba Módulos <img src="img/nav_store_orange.png" width="16" height="16"> e fazer o download dos módulos que você quiser. <br><br>Existem <span style="color: #cc0000; font-weight: bold;">módulos gratuitos</span> e módulos pagos. Antes de comprar um módulo, você poderá <span style="color: #cc0000; font-weight: bold;">baixar uma amostra</span> para sua avaliação. <br><br> As amostras baixadas estão limitadas aos três primeiros dias de treinamento.',      
	help_perg_7: 'Como faço para saber os módulos mais adequados para o meu treinamento?',
	help_resp_7: 'Dentro de cada tema os módulos estão em ordem crescente de dificuldade, ex: Tática 1, Tática 2 etc... Você pode <span style="color: #cc0000; font-weight: bold;">baixar uma amostra para avaliação</span> antes de comprar um módulo.',
	help_perg_8: 'Por quanto tempo funciona uma amostra?',
	help_resp_8: 'Os módulos baixados como amostra funcionam normalmente por <span style="color: #cc0000; font-weight: bold;">tempo indeterminado</span>, mas estão restritos aos <span style="color: #cc0000; font-weight: bold;">três primeiros dias</span> de treinamento.<br><br>Entendemos que esse tempo é suficiente para você ter uma ideia do nível de dificuldade dos exercícios.', 
	help_perg_9: 'Quantos exercícios tem cada módulo?',
	help_resp_9: 'Os módulos de Mates, Tática e Finais contém <span style="color: #cc0000; font-weight: bold;">64 exercícios</span> cada. Os Games tem <span style="color: #cc0000; font-weight: bold;">16 exercícios</span>  e as Miniaturas <span style="color: #cc0000; font-weight: bold;">32</span>.',
	help_perg_10: 'Como funciona o sistema de repetição dos exercícios?',
	help_resp_10: 'A técnica que utilizamos é chamada <span style="color: #cc0000; font-weight: bold;">SRS (Spaced Repetition)</span>, que significa repetir a mesma informação após um certo intervalo de tempo e é muito utilizada quando se quer <span style="color: #cc0000; font-weight: bold;">armazenar rapidamente um grande número de informações</span> por um longo período.<br><br>Essa técnica foi criada pelo professor C. A. Mace em 1932 e é muito utilizada em Flashcards.', 
	help_perg_11: 'Posso fazer os exercícios de vários dias seguidos?',
	help_resp_11: 'Sim, mas isso não é aconselhável porque prejudica a memorização das posições. <span style="color: #cc0000; font-weight: bold;">O ideal é fazer o exercício na sequência</span>, durante os 21 dias.',
	help_perg_12: 'Posso criar meus próprios exercícios para treinar?',
	help_resp_12: 'Infelizmente ainda <span style="color: #cc0000; font-weight: bold;">não é possível</span> fazer seus próprios exercícios.<br><br>Estamos estudando essa possibilidade em versões futuras.',
	help_perg_13: 'Posso treinar mais de um módulo ao mesmo tempo?',
	help_resp_13: 'Sim, você pode treinar <span style="color: #cc0000; font-weight: bold;">vários módulos simultâneamente</span>.<br><br> Contudo, é bom lembrar que na medida que o treinamento for evoluindo o tempo dispendido vai aumentando gradativamente.<br><br>Se você estiver treinando muitos módulos é bem provável que vai acabar abandonando alguns deles.',  
	help_perg_14: 'Para que servem as estatísticas?',
	help_resp_14: 'As estatísticas servem para você <span style="color: #cc0000; font-weight: bold;">avaliar o seu progresso</span> dentro de um determinado módulo.<br><br>Na medida que o treinamento for evoluindo é natural que os erros e o tempo gasto comecem a diminuir consideravelmente.<br><br>',
	help_perg_15: 'Para que serve o botão REFORÇO?',
	help_resp_15: 'No REFORÇO o sistema repassa <span style="color: #cc0000; font-weight: bold;">todos os exercícios que você errou</span>, independente do dia de treinamento.<br><br>Você pode utilizar esse recurso quantas vezes quiser.<br><br>Quanto mais usar, mais benefício terá.<br><br>',  
	help_perg_16: 'Para que serve o botão REFAZER?',
	help_resp_16: 'Para recomeçar o treinamento <span style="color: #cc0000; font-weight: bold;">a partir do início</span>.<br><br>É aconselhável utilizar esse recurso sempre que você fica vários dias sem treinar e percebe que se esqueceu daquilo que já foi aprendido.<br><br>Sempre que utilizar essa opção, as estatísticas daquele módulo serão zeradas.<br><br>', 
	help_perg_17: 'Porque o treinamento de cada módulo dura exatamente 21 dias?',
	help_resp_17: 'De acordo com a nossa experiência, esse é o tempo necessário para que cada exercício seja repetido espaçadamente durante sete vezes, o que é imprescindível para que você <span style="color: #cc0000; font-weight: bold;">não se esqueça daquela posição</span> alguns dias depois.',
	help_perg_18: 'Quanto tempo eu tenho para fazer cada exercício?',
	help_resp_18: 'Inicialmente o tempo máximo de cada exercício é de <span style="color: #cc0000; font-weight: bold;">3 minutos</span>.<br><br>Contudo, considere esse tempo <span style="color: #cc0000; font-weight: bold;">apenas como referência</span>, já que é desaconselhável fazer os exercícios apressadamente e contraproducente gastar mais do que três minutos para encontrar a solução.<br><br>',     
	help_perg_19: 'Como eu faço para fazer um lance?',
	help_resp_19: 'Basta clicar <span style="color: #cc0000; font-weight: bold;">sobre a peça</span> que quer mover e em seguida na <span style="color: #cc0000; font-weight: bold;">casa de destino</span>.',
	help_perg_20: 'Como funciona o sistema de anotação?',
	help_resp_20: 'O Intuitive Chess utiliza o <span style="color: #cc0000; font-weight: bold;">sistema de anotação algébrico</span>, que é o método utilizado mundialmente em todas as competições de xadrez.',  
	help_perg_21: 'Como proceder se eu esquecer ou não puder treinar um dia?',
	help_resp_21: 'Quando esquecer ou não puder treinar um determinado dia você simplesmente <span style="color: #cc0000; font-weight: bold;">continua de onde parou</span> como se nada tivesse acontecido.<br><br>Eventualmente, você poderá fazer dois dias em um, porém nesse caso recomendamos um intervalo de algumas horas entre um treinamento e outro.<br><br>',  
			     
	conf_board_1: 'Padrão',
	conf_board_2: 'Azul claro',
	conf_board_3: 'Azul escuro',
	conf_board_4: 'Café com leite',
	conf_board_5: 'Cinza claro',
	conf_board_6: 'Cinza escuro',
	conf_board_7: 'Laranja',
	conf_board_8: 'Marrom',
	conf_board_9: 'Ocre',
	conf_board_10: 'Rosa',
	conf_board_11: 'Roxo',
	conf_board_12: 'Teal',
	conf_board_13: 'Verde exército',
	conf_board_14: 'Verde oliva',
	conf_board_15: 'Verde',
	conf_board_16: 'Verde escuro',
	conf_board_17: 'Violeta',

	conf_sound_1: 'Som dos movimentos',
	conf_sound_2: 'Som das mensagens',
	conf_sound_3: 'Som das teclas',
	conf_sound_4: 'Receber notificações',
		
	conf_others_1: 'Tempo máximo de cada exercício',
	conf_others_2: 'Exibir resultado após x tentativas',
	conf_others_3: 'Exibir coordenadas',
			
	msg_no_touch: "Você não pode tocar nas peças agora. Use as setas abaixo do tabuleiro para navegar.",
		
	first_steps_tit: 'Primeiros passos',
	first_steps_body: 'O Intuitive Chess é um <span style="color: #cc0000; font-weight: bold;">revolucionário sistema de treinamento</span> de xadrez totalmente intuitivo e baseado na memorização de posições chaves, utilizando a técnica SRS (Spaced Repetition).<br><br>' +
		              'Esse processo de aprendizado permite que você, num <span style="color: #cc0000; font-weight: bold;">curto espaço de tempo</span>, obtenha um grande número de informações e consiga retê-las <span style="color: #cc0000; font-weight: bold;">indefinidamente em sua memória</span>.<br><br>' +
		              'Para facilitar o entendimento de cada posição chave, a maioria dos exercícios contém <span style="color: #cc0000; font-weight: bold;">simbolos gráficos</span> que explicam as principais jogadas.<br><br>' +
		              'Nosso aplicativo abrange três tipos de exercícios:<br><br>' +
		              '1) <span style="color: #cc0000; font-weight: bold;">Qual o melhor lance?</span> - A partir de uma posição você deve descobrir e fazer as melhores jogadas.<br><br>' +
		              '2) <span style="color: #cc0000; font-weight: bold;">Reprodução de partidas clássicas</span> - Você observa lance a lance as mais instrutivas partidas jogadas entre Grandes Mestres. Através das explicações gráficas você compreende e memoriza os conceitos estratégicos de cada uma delas.<br><br>' +
		              '3) <span style="color: #cc0000; font-weight: bold;">Lance do Mestre</span> - Você tem de descobrir qual das três alternativas disponíveis é a melhor jogada daquela posição. Em caso de escolher a alternativa errada, o aplicativo mostrará a sequência derivada a partir da sua escolha, fazendo com que você automaticamente corrija e aperfeiçoe a sua maneira de pensar naquele tipo de posição.<br><br>' +
		              'As posições chaves estão agrupadas em módulos dentro das seguintes categorias: <b>Mates</b>, <b>Tática</b>, <b>Miniaturas</b> e <b>Games</b>.<br><br>' +
		              'Estamos trabalhando em módulos para estudo de <b>Finais</b> e <b>Aberturas</b>.<br><br>' +
		              'Utilize o Fale Conosco para expressar suas <span style="color: #cc0000; font-weight: bold;">críticas e sugestões</span>. Elas serão muito bem-vindas pois nosso principal objetivo é oferecer-lhe um <span style="color: #cc0000; font-weight: bold;">produto cada vez melhor</span>.<br><br>' +
		              'Obrigado!<br><br>',
		                    		  
	info_days_tit: 'Sobre o treinamento',
	info_days_body: 'O treinamento de cada módulo dura 21 dias.<br><br>Durante esse período cada exercício é repetido 7 vezes em intervalos espaçados.<br><br>Dessa forma, você conseguirá fixar cada uma das posições estudadas e será capaz de reconhecê-la instantaneamente durante uma partida.<br><br>Embora seja possível fazer várias sequências em um único dia, recomendamos que entre uma e outra tenha um intervalo de 24 a 48 horas para não prejudicar a memorização das posições estudadas.<br><br>Se ficar muito tempo sem treinar, é aconselhável começar o módulo novamente. Para fazer isso clique no botão REFAZER nessa mesma página.<br><br>Use o botão REFORÇO sempre que quiser repetir os exercícios que você errou durante todo o treinamento desse módulo.',                    		  
		
	info_stats_tit: 'Sobre as estatísticas',
	info_stats_body: 'As estatísticas servem para você acompanhar a evolução do seu treinamento.<br><br>Os números à esquerda, representam os exercícios contidos em cada módulo.<br><br>Durante os 21 dias de treinamento cada exercício é repetido 7 vezes.<br><br>As colunas à direita mostram o resultado (acertos e erros) e o tempo gasto em cada uma dessas vezes.<br><br>',
		
	info_cad_tit: 'Porque se cadastrar...',
	info_cad_body: 'Embora não seja obrigatório é <b>muito importante</b> que você preencha esse cadastro.<br><br>Ele serve para <b>associarmos</b> a sua identidade no Intuitive Chess com um <b>e-mail de contato</b>.<br><br>Dessa forma, você poderá <b>mudar de aparelho</b> sem perder o seu progresso de treinamento.<br><br>Através dessas informações você também poderá acessar o IC de <b>vários dispositivos</b> diferentes (Ex: celular_1, celular_2, tablet, etc... bem como nos ajudar a fazer um <b>produto</b> cada vez <b>mais apropriado</b> para suas necessidades.<br><br>',
	
	sec_gym_1: 'Concluído',
	sec_gym_2: 'Dia',
	sec_gym_3: 'Amostra',
	sec_gym_4: 'Limitado',
	sec_gym_5: 'Treinar',
	sec_gym_6: 'Estatísticas',
	sec_gym_7: 'Baixar agora',
	sec_gym_8: 'Você não tem nenhum módulo',
	sec_gym_9: 'Categoria',

    not_implemented: 'Ainda não implementado',
	
	
	tab_quotes: [ 	'Todo grande mestre já foi um iniciante.~~~Irving Chernev',
				'O xadrez é a batalha contra o erro.~~~J. Zukertort',
				'O xadrez abre e enriquece a sua mente.~~~Saudin Robovic',
				'O xadrez é o ginásio da mente.', 'Blaise Pascal',
				'O xadrez é uma guerra sobre o tabuleiro cujo objetivo é destruir a mente do adversário.~~~Bobby Fischer',
				'O xadrez, como o amor, como a música, tem o poder de fazer as pessoas felizes.~~~Siegbert Tarrasch',
				'Eu não acredito em psicologia. Acredito em bons lances.~~~Bobby Fischer',
				'Uma partida de xadrez não é um teste de conhecimento; é uma batalha de nervos.~~~David Bronstein',
				'Quando você encontrar um bom lance, procure outro melhor.~~~Emanuel Lasker',
				'Mesmo um plano ruim é melhor do que não ter nenhum plano.~~~Mikhail Chigorin',
				'Na vida, como no xadrez, a premeditação vence.~~~Charles Buxton',
				'Os peões são a alma do xadrez.~~~F. Philidor',
				'Ninguém nunca ganhou uma partida de xadrez desistindo.~~~Savielly Tartakower',
				'Um lance ruim anula quarenta lances bons.~~~Bernhard Horwitz',
				'O Xadrez é a arte da análise.~~~Mikhail Botvinnik',
				'Tudo o que importa em um tabuleiro de xadrez são bons lances.~~~Bobby Fischer',
				'Ajude as suas peças, assim elas poderão ajudar você.~~~Paul Morphy',
				'Táticas nascem de uma posição superior.~~~Bobby Fischer',
				'O xadrez é tudo: arte, ciência e esporte.~~~Anatoly Karpov',
				'O xadrez é a arte que expressa a ciência da lógica.~~~Mikhail Botvinnik',
				'Nem todos artistas são jogadores de xadrez, mas todo jogador de xadrez é um artista.~~~Marcel Duchamp',
				'O Xadrez é imaginação.~~~David Bronstein',
				'Definir um objetivo é o ponto de partida de toda a realização.~~~W. Clement Stone',
				'Nós nos tornamos aquilo que pensamos.~~~Earl Nightingale',
				'A melhor época para plantar uma árvore foi há 20 anos. A segunda melhor é agora.~~~Provérbio Chinês',
				'Ganhar não é tudo, mas querer ganhar é.~~~Vince Lombardi',
				'Se você pensa que pode, ou que não pode, você está certo.~~~Henry Ford',
				'Acredite que você pode e você vai chegar lá.~~~Theodore Roosevelt',
				'Para ter sucesso, o seu desejo de sucesso deve ser maior do que o seu medo do fracasso.~~~Bill Cosby',
				'Não importa se você vai devagar, tanto quanto importa o fato de você não parar.~~~Confúcio',
				'Se você faz o que sempre fez, vai ter o que sempre teve.~~~Tony Robbins',
				'Persistência pode transformar fracassos em incríveis conquistas.~~~Matt Biondi',
				'Quanto mais eu treinar, mais sorte terei.~~~Gary Player',
				'A vontade de vencer é importante, mas a vontade de se preparar é vital.~~~Joe Paterno',
				'A disciplina é a mãe do êxito.~~~Ésquilo',
				'Você não precisa jogar bem, basta jogar melhor que seu adversário.~~~Siegbert Tarrasch',
				'Um peão passado aumenta sua força na medida que o número de peças no tabuleiro diminui.~~~Capablanca',
				'Estudar aberturas ensinam você a jogar aberturas. Estudar finais ensinam você a jogar xadrez!~~~Stephan Gerzadowicz'
			]

};




var LG_ENG = {
	
	sec_menu_1: 'My account', 
	sec_menu_2: 'EN-Fale Conosco', 
	sec_menu_3: 'About Intuitive Chess',
	sec_menu_4: 'Recover account',
	sec_menu_5: 'Delete account',
	
	sec_account_1: 'EN-Proteja sua conta!',
	sec_account_2: 'EN-Preencha as informações abaixo para que você possa recuperar o progresso do seu treinamento em caso de mudança de aparelho.',
	sec_account_3: 'EN-Selecione…',
	sec_account_4: 'Male',
	sec_account_5: 'Female',
	sec_account_6: 'Birthday',
	sec_account_7: 'Português',
	sec_account_8: 'English',
	sec_account_9: 'Spanish',
	sec_account_10: 'German',
	sec_account_11: "Cancel",		// antigo sec_account_1	
	sec_account_12: "Save",			// antigo sec_account_2
		
	sec_home_1: 'My moduls',
		
	sec_days_1: 'DAY',
	sec_days_2: 'REINFORCE',
	sec_days_3: 'REDO',
		 
	sec_about_1: 'Version',
	sec_about_2: 'Created by:',
	sec_about_3: 'EN-Licenças de terceiros:',
	sec_about_4: 'Made in Brazil',
		
	sec_conf_1: 'Language',
	sec_conf_2: 'Sounds and notifications',
	sec_conf_3: 'Theme',
		
	sec_help_1: 'First steps',
	sec_help_2: 'Moduls',
	sec_help_3: 'Training',
	sec_help_4: 'Account',
	sec_help_5: 'EN-Solução de problemas',
	sec_help_6: 'EN-Política de privacidade',
	sec_help_7: 'EN-Termos de uso',
		
	sec_sup_1: 'EN-Fale Conosco',
	sec_sup_2: 'EN-Esse canal serve para você rapidamente reportar <b>eventuais problemas</b> do aplicativo, bem como enviar suas <b>dúvidas</b>, <b>críticas</b> e <b>sugestões</b>.',
	sec_sup_3: 'EN-Você poderá se comunicar conosco em <b>Inglês</b>, <b>Português</b>, <b>Espanhol</b> e <b>Alemão</b>.',
	sec_sup_4: 'EN-Faremos o possível para responder todas as mensagens em até <b>24 horas</b>.',
	sec_sup_5: 'EN-Escreva aqui a sua mensagem',
	sec_sup_6: 'Send',
		
	excluir_conta: "EN-em certeza que deseja excluir a sua conta?",
	refazer_modulo: "EN-Tem certeza que quer refazer esse módulo?",
		
	store_adquirido: "EN-Adquirido",
	store_gratis: "EN-GRÁTIS",
	store_amostra: "EN-Amostra",

	cadastro_ok: "EN-O seu cadastro já está OK, ainda não é possível editar seus dados.",
	nao_implementado: "EN-Ainda não implementado.",
	nao_tem_exercs_reforco: "EN-Você ainda não tem nenhum exercício que precise de reforço.",
	tit_modal_msg: "EN-Mensagem",
	erro_conexao: "EN-Erro ao conectar ao servidor... Por favor, tente novamente dentro de alguns instantes.",
	erro_gravar_cad: "EN-Falha de conexão ao salvar cadastro. Por favor, verifique a sua internet.",
	conta_vinculada: "EN-A sua conta foi vinculada com o seu e-mail.",
		
	down_amostra_ok: "EN-Download da amostra do módulo <b>@MOD_TITULO</b> concluído com sucesso!",
	down_modulo_ok: "EN-Download do módulo <b>@MOD_TITULO</b> concluído com sucesso!",
	conexao_acesso_1: "EN-Você precisa estar conectado para fazer o primeiro acesso.",
	msg_suporte_recebida: "EN-Mensagem recebida. Em até 24 horas você deverá receber uma resposta. Obrigado!",
	msg_suporte_falhou: "EN-Houve problema com envio da sua mensagem, por favor tente novamente mais tarde.",
	reforco_explain: "EN-O treinamento de reforço é uma sequência de todos os exercícios que você não acertou nesse módulo.<br><br>Você poderá repetir esse treinamento sempre que quiser.<br><br>Quanto mais vezes fizer os exercícios de reforço, mais eles ficarão fixados em sua memória.",
	reforco_ended: "EN-Parabéns! Você concluiu o seu treinamento de reforço para esse módulo. Você poderá repeti-lo sempre que quiser!",
	day_ended: "EN-Parabéns! Você concluiu o seu treinamento de hoje.",
		
	mates: "EN-MATES",
	tatica: "EN-TÁTICA",
	miniaturas: "EN-MINIATURAS",
	games: "EN-GAMES",
	finais: "EN-FINAIS",
	aberturas: "EN-ABERTURAS",	
					
	help_perg_1: 'EN-Mudei de celular, como faço para resgatar a minha conta anterior?',
	help_resp_1: 'EN-Isso só é possível se você tiver criado uma <span style="color: #cc0000; font-weight: bold;">conta de segurança</span> informando seu nome, sexo, país e data de nascimento.<br><br>Nesse caso, basta entrar no <span style="color: #cc0000; font-weight: bold;">Fale Conosco</span>, que nós teremos prazer em ajudá-lo.',  
	help_perg_2: 'EN-Posso excluir minha conta?',
	help_resp_2: 'EN-Sim, mas perderá todas as informações estísticas referentes aos treinamentos e também precisará baixar os módulos novamente.', 
	help_perg_3: 'EN-Porque eu não tenho uma senha?',
	help_resp_3: 'EN-Entendemos que isso não é necessário. Quando você entra no aplicativo pela primeira vez, ele cria um <span style="color: #cc0000; font-weight: bold;">número de identificação único</span> que fica armazenado no seu celular.<br><br> É através desse número que conseguimos identificar cada um de nossos usuários.',  
	help_perg_4: 'EN-Enviei uma pergunta ao suporte mas até agora não recebi resposta.',
	help_resp_4: 'EN-O nosso prazo padrão de respostas do suporte é de <span style="color: #cc0000; font-weight: bold;">24 horas úteis</span>. <br><br>Caso já tenha decorrido esse tempo e você ainda não recebeu nenhuma resposta, por favor, envie um e-mail para: <b>sergio.tadela@gmail.com</b> relatando o ocorrido, para podermos averiguar o que aconteceu.', 
	help_perg_5: 'EN-O que é um módulo?',
	help_resp_5: 'EN-Um módulo é uma unidade de treinamento composta de um <span style="color: #cc0000; font-weight: bold;">conjunto de exercícios de determinado tema</span> (Tática, Mates etc...). <br><br>Embora o número de exercícios varie em função de cada tema, o tempo de treinamento de cada módulo será sempre de 21 dias.',  
	help_perg_6: 'EN-Como faço para adquirir os módulos?',
	help_resp_6: 'EN-Basta entrar na aba Módulos <img src="img/nav_store_orange.png" width="16" height="16"> e fazer o download dos módulos que você quiser. <br><br>Existem <span style="color: #cc0000; font-weight: bold;">módulos gratuitos</span> e módulos pagos. Antes de comprar um módulo, você poderá <span style="color: #cc0000; font-weight: bold;">baixar uma amostra</span> para sua avaliação. <br><br> As amostras baixadas estão limitadas aos três primeiros dias de treinamento.',      
	help_perg_7: 'EN-Como faço para saber os módulos mais adequados para o meu treinamento?',
	help_resp_7: 'EN-Dentro de cada tema os módulos estão em ordem crescente de dificuldade, ex: Tática 1, Tática 2 etc... Você pode <span style="color: #cc0000; font-weight: bold;">baixar uma amostra para avaliação</span> antes de comprar um módulo.',
	help_perg_8: 'EN-Por quanto tempo funciona uma amostra?',
	help_resp_8: 'EN-Os módulos baixados como amostra funcionam normalmente por <span style="color: #cc0000; font-weight: bold;">tempo indeterminado</span>, mas estão restritos aos <span style="color: #cc0000; font-weight: bold;">três primeiros dias</span> de treinamento.<br><br>Entendemos que esse tempo é suficiente para você ter uma ideia do nível de dificuldade dos exercícios.', 
	help_perg_9: 'EN-Quantos exercícios tem cada módulo?',
	help_resp_9: 'EN-Os módulos de Mates, Tática e Finais contém <span style="color: #cc0000; font-weight: bold;">64 exercícios</span> cada. Os Games tem <span style="color: #cc0000; font-weight: bold;">16 exercícios</span>  e as Miniaturas <span style="color: #cc0000; font-weight: bold;">32</span>.',
	help_perg_10: 'EN-Como funciona o sistema de repetição dos exercícios?',
	help_resp_10: 'EN-A técnica que utilizamos é chamada <span style="color: #cc0000; font-weight: bold;">SRS (Spaced Repetition)</span>, que significa repetir a mesma informação após um certo intervalo de tempo e é muito utilizada quando se quer <span style="color: #cc0000; font-weight: bold;">armazenar rapidamente um grande número de informações</span> por um longo período.<br><br>Essa técnica foi criada pelo professor C. A. Mace em 1932 e é muito utilizada em Flashcards.', 
	help_perg_11: 'EN-Posso fazer os exercícios de vários dias seguidos?',
	help_resp_11: 'EN-Sim, mas isso não é aconselhável porque prejudica a memorização das posições. <span style="color: #cc0000; font-weight: bold;">O ideal é fazer o exercício na sequência</span>, durante os 21 dias.',
	help_perg_12: 'EN-Posso criar meus próprios exercícios para treinar?',
	help_resp_12: 'EN-Infelizmente ainda <span style="color: #cc0000; font-weight: bold;">não é possível</span> fazer seus próprios exercícios.<br><br>Estamos estudando essa possibilidade em versões futuras.',
	help_perg_13: 'EN-Posso treinar mais de um módulo ao mesmo tempo?',
	help_resp_13: 'EN-Sim, você pode treinar <span style="color: #cc0000; font-weight: bold;">vários módulos simultâneamente</span>.<br><br> Contudo, é bom lembrar que na medida que o treinamento for evoluindo o tempo dispendido vai aumentando gradativamente.<br><br>Se você estiver treinando muitos módulos é bem provável que vai acabar abandonando alguns deles.',  
	help_perg_14: 'EN-Para que servem as estatísticas?',
	help_resp_14: 'EN-As estatísticas servem para você <span style="color: #cc0000; font-weight: bold;">avaliar o seu progresso</span> dentro de um determinado módulo.<br><br>Na medida que o treinamento for evoluindo é natural que os erros e o tempo gasto comecem a diminuir consideravelmente.<br><br>',
	help_perg_15: 'EN-Para que serve o botão REFORÇO?',
	help_resp_15: 'EN-No REFORÇO o sistema repassa <span style="color: #cc0000; font-weight: bold;">todos os exercícios que você errou</span>, independente do dia de treinamento.<br><br>Você pode utilizar esse recurso quantas vezes quiser.<br><br>Quanto mais usar, mais benefício terá.<br><br>',  
	help_perg_16: 'EN-Para que serve o botão REFAZER?',
	help_resp_16: 'EN-Para recomeçar o treinamento <span style="color: #cc0000; font-weight: bold;">a partir do início</span>.<br><br>É aconselhável utilizar esse recurso sempre que você fica vários dias sem treinar e percebe que se esqueceu daquilo que já foi aprendido.<br><br>Sempre que utilizar essa opção, as estatísticas daquele módulo serão zeradas.<br><br>', 
	help_perg_17: 'EN-Porque o treinamento de cada módulo dura exatamente 21 dias?',
	help_resp_17: 'EN-De acordo com a nossa experiência, esse é o tempo necessário para que cada exercício seja repetido espaçadamente durante sete vezes, o que é imprescindível para que você <span style="color: #cc0000; font-weight: bold;">não se esqueça daquela posição</span> alguns dias depois.',
	help_perg_18: 'EN-Quanto tempo eu tenho para fazer cada exercício?',
	help_resp_18: 'EN-Inicialmente o tempo máximo de cada exercício é de <span style="color: #cc0000; font-weight: bold;">3 minutos</span>.<br><br>Contudo, considere esse tempo <span style="color: #cc0000; font-weight: bold;">apenas como referência</span>, já que é desaconselhável fazer os exercícios apressadamente e contraproducente gastar mais do que três minutos para encontrar a solução.<br><br>',     
	help_perg_19: 'EN-Como eu faço para fazer um lance?',
	help_resp_19: 'EN-Basta clicar <span style="color: #cc0000; font-weight: bold;">sobre a peça</span> que quer mover e em seguida na <span style="color: #cc0000; font-weight: bold;">casa de destino</span>.',
	help_perg_20: 'EN-Como funciona o sistema de anotação?',
	help_resp_20: 'EN-O Intuitive Chess utiliza o <span style="color: #cc0000; font-weight: bold;">sistema de anotação algébrico</span>, que é o método utilizado mundialmente em todas as competições de xadrez.',  
	help_perg_21: 'EN-Como proceder se eu esquecer ou não puder treinar um dia?',
	help_resp_21: 'EN-Quando esquecer ou não puder treinar um determinado dia você simplesmente <span style="color: #cc0000; font-weight: bold;">continua de onde parou</span> como se nada tivesse acontecido.<br><br>Eventualmente, você poderá fazer dois dias em um, porém nesse caso recomendamos um intervalo de algumas horas entre um treinamento e outro.<br><br>',  
			     
	conf_board_1: 'EN-Padrão',
	conf_board_2: 'EN-Azul claro',
	conf_board_3: 'EN-Azul escuro',
	conf_board_4: 'EN-Café com leite',
	conf_board_5: 'EN-Cinza claro',
	conf_board_6: 'EN-Cinza escuro',
	conf_board_7: 'EN-Laranja',
	conf_board_8: 'EN-Marrom',
	conf_board_9: 'EN-Ocre',
	conf_board_10: 'EN-Rosa',
	conf_board_11: 'EN-Roxo',
	conf_board_12: 'EN-Teal',
	conf_board_13: 'EN-Verde exército',
	conf_board_14: 'EN-Verde oliva',
	conf_board_15: 'EN-Verde',
	conf_board_16: 'EN-Verde escuro',
	conf_board_17: 'EN-Violeta',

	conf_sound_1: 'EN-Som dos movimentos',
	conf_sound_2: 'EN-Som das mensagens',
	conf_sound_3: 'EN-Som das teclas',
	conf_sound_4: 'EN-Receber notificações',
		
	conf_others_1: 'EN-Tempo máximo de cada exercício',
	conf_others_2: 'EN-Exibir resultado após x tentativas',
	conf_others_3: 'EN-Exibir coordenadas',
			
	msg_no_touch: "EN-Você não pode tocar nas peças agora. Use as setas abaixo do tabuleiro para navegar.",
		
	first_steps_tit: 'EN-Primeiros passos',
	first_steps_body: 'EN-O Intuitive Chess é um <span style="color: #cc0000; font-weight: bold;">revolucionário sistema de treinamento</span> de xadrez totalmente intuitivo e baseado na memorização de posições chaves, utilizando a técnica SRS (Spaced Repetition).<br><br>' +
		              'Esse processo de aprendizado permite que você, num <span style="color: #cc0000; font-weight: bold;">curto espaço de tempo</span>, obtenha um grande número de informações e consiga retê-las <span style="color: #cc0000; font-weight: bold;">indefinidamente em sua memória</span>.<br><br>' +
		              'Para facilitar o entendimento de cada posição chave, a maioria dos exercícios contém <span style="color: #cc0000; font-weight: bold;">simbolos gráficos</span> que explicam as principais jogadas.<br><br>' +
		              'Nosso aplicativo abrange três tipos de exercícios:<br><br>' +
		              '1) <span style="color: #cc0000; font-weight: bold;">Qual o melhor lance?</span> - A partir de uma posição você deve descobrir e fazer as melhores jogadas.<br><br>' +
		              '2) <span style="color: #cc0000; font-weight: bold;">Reprodução de partidas clássicas</span> - Você observa lance a lance as mais instrutivas partidas jogadas entre Grandes Mestres. Através das explicações gráficas você compreende e memoriza os conceitos estratégicos de cada uma delas.<br><br>' +
		              '3) <span style="color: #cc0000; font-weight: bold;">Lance do Mestre</span> - Você tem de descobrir qual das três alternativas disponíveis é a melhor jogada daquela posição. Em caso de escolher a alternativa errada, o aplicativo mostrará a sequência derivada a partir da sua escolha, fazendo com que você automaticamente corrija e aperfeiçoe a sua maneira de pensar naquele tipo de posição.<br><br>' +
		              'As posições chaves estão agrupadas em módulos dentro das seguintes categorias: <b>Mates</b>, <b>Tática</b>, <b>Miniaturas</b> e <b>Games</b>.<br><br>' +
		              'Estamos trabalhando em módulos para estudo de <b>Finais</b> e <b>Aberturas</b>.<br><br>' +
		              'Utilize o Fale Conosco para expressar suas <span style="color: #cc0000; font-weight: bold;">críticas e sugestões</span>. Elas serão muito bem-vindas pois nosso principal objetivo é oferecer-lhe um <span style="color: #cc0000; font-weight: bold;">produto cada vez melhor</span>.<br><br>' +
		              'Obrigado!<br><br>',
		                    		  
	info_days_tit: 'EN-Sobre o treinamento',
	info_days_body: 'EN-O treinamento de cada módulo dura 21 dias.<br><br>Durante esse período cada exercício é repetido 7 vezes em intervalos espaçados.<br><br>Dessa forma, você conseguirá fixar cada uma das posições estudadas e será capaz de reconhecê-la instantaneamente durante uma partida.<br><br>Embora seja possível fazer várias sequências em um único dia, recomendamos que entre uma e outra tenha um intervalo de 24 a 48 horas para não prejudicar a memorização das posições estudadas.<br><br>Se ficar muito tempo sem treinar, é aconselhável começar o módulo novamente. Para fazer isso clique no botão REFAZER nessa mesma página.<br><br>Use o botão REFORÇO sempre que quiser repetir os exercícios que você errou durante todo o treinamento desse módulo.',                    		  
		
	info_stats_tit: 'EN-Sobre as estatísticas',
	info_stats_body: 'EN-As estatísticas servem para você acompanhar a evolução do seu treinamento.<br><br>Os números à esquerda, representam os exercícios contidos em cada módulo.<br><br>Durante os 21 dias de treinamento cada exercício é repetido 7 vezes.<br><br>As colunas à direita mostram o resultado (acertos e erros) e o tempo gasto em cada uma dessas vezes.<br><br>',
		
	info_cad_tit: 'EN-Porque se cadastrar...',
	info_cad_body: 'EN-Embora não seja obrigatório é <b>muito importante</b> que você preencha esse cadastro.<br><br>Ele serve para <b>associarmos</b> a sua identidade no Intuitive Chess com um <b>e-mail de contato</b>.<br><br>Dessa forma, você poderá <b>mudar de aparelho</b> sem perder o seu progresso de treinamento.<br><br>Através dessas informações você também poderá acessar o IC de <b>vários dispositivos</b> diferentes (Ex: celular_1, celular_2, tablet, etc... bem como nos ajudar a fazer um <b>produto</b> cada vez <b>mais apropriado</b> para suas necessidades.<br><br>',
	
	sec_gym_1: 'Done',
	sec_gym_2: 'Day',
	sec_gym_3: 'Demo',
	sec_gym_4: 'Limited',
	sec_gym_5: 'Train',
	sec_gym_6: 'Stats',
	sec_gym_7: 'Download now',
	sec_gym_8: 'You don&apos;t have any module.',
	sec_gym_9: 'Category',

    not_implemented: 'Not implemented yet',

	tab_quotes:	[ 	'Every chess master was once a beginner.~~~Irving Chernev',
				'Chess is the struggle against the error.~~~J. Zukertort',
				'Chess opens and enriches your mind.~~~Saudin Robovic',
				'Chess is the gymnasium of the mind.~~~Blaise Pascal',
				'Chess is a war over the board. The object is to crush the opponent’s mind.~~~Bobby Fischer',
				'Chess, like love, like music, has the power to make men happy.~~~Siegbert Tarrasch',
				'I don’t believe in psychology. I believe in good moves.~~~Bobby Fischer',
				'A game of chess is not an examination of knowledge; it is a battle of nerves.~~~David Bronstein',
				'When you see a good move, look for a better one.~~~Emanuel Lasker',
				'Even a poor plan is better than no plan at all.~~~Mikhail Chigorin',
				'In life, as in chess, forethought wins.~~~Charles Buxton',
				'Pawns are the soul of the game.~~~F. Philidor',
				'Nobody ever won a chess game by resigning.~~~Savielly Tartakower',
				'One bad move nullifies forty good ones.~~~Bernhard Horwitz',
				'Chess is the art of analysis.~~~Mikhail Botvinnik',
				'All that matters on the Chessboard is good moves.~~~Bobby Fischer',
				'Help your pieces so they can help you.~~~Paul Morphy',
				'Tactics flow from a superior position.~~~Bobby Fischer',
				'Chess is everything: art, science and sport.~~~Anatoly Karpov',
				'Chess is the art which expresses the science of logic.~~~Mikhail Botvinnik',
				'Not all artists are Chess players, but all Chess players are artists.~~~Marcel Duchamp',
				'Chess is imagination.~~~David Bronstein',
				//'Definir um objetivo é o ponto de partida de toda a realização.~~~W. Clement Stone',
				//'Nós nos tornamos aquilo que pensamos.~~~Earl Nightingale',
				//'A melhor época para plantar uma árvore foi há 20 anos. A segunda melhor é agora.~~~Provérbio Chinês',
				//'Ganhar não é tudo, mas querer ganhar é.~~~Vince Lombardi',
				//'Se você pensa que pode, ou que não pode, você está certo.~~~Henry Ford',
				//'Acredite que você pode e você vai chegar lá.~~~Theodore Roosevelt',
				//'Para ter sucesso, o seu desejo de sucesso deve ser maior do que o seu medo do fracasso.~~~Bill Cosby',
				//'Não importa se você vai devagar, tanto quanto importa o fato de você não parar.~~~Confúcio',
				//'Se você faz o que sempre fez, vai ter o que sempre teve.~~~Tony Robbins',
				//'Persistência pode transformar fracassos em incríveis conquistas.~~~Matt Biondi',
				//'Quanto mais eu treinar, mais sorte terei.~~~Gary Player',
				//'A vontade de vencer é importante, mas a vontade de se preparar é vital.~~~Joe Paterno',
				//'A disciplina é a mãe do êxito.~~~Ésquilo',
				'One doesn’t have to play well, it’s enough to play better than your opponent.~~~Siegbert Tarrasch',
				'A passed Pawn increases in strength as the number of pieces on the board diminishes.~~~Capablanca',
				'Openings teach you openings. Endgames teach you chess!~~~Stephan Gerzadowicz'
			]

};




var LG_ESP = {
	
	sec_menu_1: 'SP-Minha conta', 
	sec_menu_2: 'SP-Fale Conosco', 
	sec_menu_3: 'SP-Sobre o Intuitive Chess',
	sec_menu_4: 'SP-Recuperar conta',
	sec_menu_5: 'SP-Excluir conta',
	
	sec_account_1: 'SP-Proteja sua conta!',
	sec_account_2: 'SP-Preencha as informações abaixo para que você possa recuperar o progresso do seu treinamento em caso de mudança de aparelho.',
	sec_account_3: 'SP-Selecione…',
	sec_account_4: 'SP-Sexo Masculino',
	sec_account_5: 'SP-Sexo Feminino',
	sec_account_6: 'SP-Data de nascimento',
	sec_account_7: 'SP-Português',
	sec_account_8: 'SP-Inglês',
	sec_account_9: 'SP-Espanhol',
	sec_account_10: 'SP-Alemão',
	sec_account_11: "SP-Cancelar",		// antigo sec_account_1	
	sec_account_12: "SP-Salvar",		// antigo sec_account_2
		
	sec_home_1: 'SP-MEUS MÓDULOS',
		
	sec_days_1: 'SP-DIA',
	sec_days_2: 'SP-REFORÇO',
	sec_days_3: 'SP-REFAZER',
		 
	sec_about_1: 'SP-Versão',
	sec_about_2: 'SP-Criado por:',
	sec_about_3: 'SP-Licenças de terceiros:',
	sec_about_4: 'SP-Produzido no Brasil',
		
	sec_conf_1: 'SP-Idioma',
	sec_conf_2: 'SP-Sons e notificações',
	sec_conf_3: 'SP-Tema',
		
	sec_help_1: 'SP-Primeiros passos',
	sec_help_2: 'SP-Módulos',
	sec_help_3: 'SP-Treinamento',
	sec_help_4: 'SP-Conta',
	sec_help_5: 'SP-Solução de problemas',
	sec_help_6: 'SP-Política de privacidade',
	sec_help_7: 'SP-Termos de uso',
		
	sec_sup_1: 'SP-Fale Conosco',
	sec_sup_2: 'SP-Esse canal serve para você rapidamente reportar <b>eventuais problemas</b> do aplicativo, bem como enviar suas <b>dúvidas</b>, <b>críticas</b> e <b>sugestões</b>.',
	sec_sup_3: 'SP-Você poderá se comunicar conosco em <b>Inglês</b>, <b>Português</b>, <b>Espanhol</b> e <b>Alemão</b>.',
	sec_sup_4: 'SP-Faremos o possível para responder todas as mensagens em até <b>24 horas</b>.',
	sec_sup_5: 'SP-Escreva aqui a sua mensagem',
	sec_sup_6: 'SP-Enviar',
		
	excluir_conta: "SP-Tem certeza que deseja excluir a sua conta?",
	refazer_modulo: "SP-Tem certeza que quer refazer esse módulo?",
		
	store_adquirido: "SP-Adquirido",
	store_gratis: "SP-GRÁTIS",
	store_amostra: "SP-Amostra",

	cadastro_ok: "SP-O seu cadastro já está OK, ainda não é possível editar seus dados.",
	nao_implementado: "SP-Ainda não implementado.",
	nao_tem_exercs_reforco: "SP-Você ainda não tem nenhum exercício que precise de reforço.",
	tit_modal_msg: "SP-Mensagem",
	erro_conexao: "SP-Erro ao conectar ao servidor... Por favor, tente novamente dentro de alguns instantes.",
	erro_gravar_cad: "SP-Falha de conexão ao salvar cadastro. Por favor, verifique a sua internet.",
	conta_vinculada: "SP-A sua conta foi vinculada com o seu e-mail.",
		
	down_amostra_ok: "SP-Download da amostra do módulo <b>@MOD_TITULO</b> concluído com sucesso!",
	down_modulo_ok: "SP-Download do módulo <b>@MOD_TITULO</b> concluído com sucesso!",
	conexao_acesso_1: "SP-Você precisa estar conectado para fazer o primeiro acesso.",
	msg_suporte_recebida: "SP-Mensagem recebida. Em até 24 horas você deverá receber uma resposta. Obrigado!",
	msg_suporte_falhou: "SP-Houve problema com envio da sua mensagem, por favor tente novamente mais tarde.",
	reforco_explain: "SP-O treinamento de reforço é uma sequência de todos os exercícios que você não acertou nesse módulo.<br><br>Você poderá repetir esse treinamento sempre que quiser.<br><br>Quanto mais vezes fizer os exercícios de reforço, mais eles ficarão fixados em sua memória.",
	reforco_ended: "SP-Parabéns! Você concluiu o seu treinamento de reforço para esse módulo. Você poderá repeti-lo sempre que quiser!",
	day_ended: "SP-Parabéns! Você concluiu o seu treinamento de hoje.",
		
	mates: "SP-MATES",
	tatica: "SP-TÁTICA",
	miniaturas: "SP-MINIATURAS",
	games: "SP-GAMES",
	finais: "SP-FINAIS",
	aberturas: "SP-ABERTURAS",	
					
	help_perg_1: 'SP-Mudei de celular, como faço para resgatar a minha conta anterior?',
	help_resp_1: 'SP-Isso só é possível se você tiver criado uma <span style="color: #cc0000; font-weight: bold;">conta de segurança</span> informando seu nome, sexo, país e data de nascimento.<br><br>Nesse caso, basta entrar no <span style="color: #cc0000; font-weight: bold;">Fale Conosco</span>, que nós teremos prazer em ajudá-lo.',  
	help_perg_2: 'SP-Posso excluir minha conta?',
	help_resp_2: 'SP-Sim, mas perderá todas as informações estísticas referentes aos treinamentos e também precisará baixar os módulos novamente.', 
	help_perg_3: 'SP-Porque eu não tenho uma senha?',
	help_resp_3: 'SP-Entendemos que isso não é necessário. Quando você entra no aplicativo pela primeira vez, ele cria um <span style="color: #cc0000; font-weight: bold;">número de identificação único</span> que fica armazenado no seu celular.<br><br> É através desse número que conseguimos identificar cada um de nossos usuários.',  
	help_perg_4: 'SP-Enviei uma pergunta ao suporte mas até agora não recebi resposta.',
	help_resp_4: 'SP-O nosso prazo padrão de respostas do suporte é de <span style="color: #cc0000; font-weight: bold;">24 horas úteis</span>. <br><br>Caso já tenha decorrido esse tempo e você ainda não recebeu nenhuma resposta, por favor, envie um e-mail para: <b>sergio.tadela@gmail.com</b> relatando o ocorrido, para podermos averiguar o que aconteceu.', 
	help_perg_5: 'SP-O que é um módulo?',
	help_resp_5: 'SP-Um módulo é uma unidade de treinamento composta de um <span style="color: #cc0000; font-weight: bold;">conjunto de exercícios de determinado tema</span> (Tática, Mates etc...). <br><br>Embora o número de exercícios varie em função de cada tema, o tempo de treinamento de cada módulo será sempre de 21 dias.',  
	help_perg_6: 'SP-Como faço para adquirir os módulos?',
	help_resp_6: 'SP-Basta entrar na aba Módulos <img src="img/nav_store_orange.png" width="16" height="16"> e fazer o download dos módulos que você quiser. <br><br>Existem <span style="color: #cc0000; font-weight: bold;">módulos gratuitos</span> e módulos pagos. Antes de comprar um módulo, você poderá <span style="color: #cc0000; font-weight: bold;">baixar uma amostra</span> para sua avaliação. <br><br> As amostras baixadas estão limitadas aos três primeiros dias de treinamento.',      
	help_perg_7: 'SP-Como faço para saber os módulos mais adequados para o meu treinamento?',
	help_resp_7: 'SP-Dentro de cada tema os módulos estão em ordem crescente de dificuldade, ex: Tática 1, Tática 2 etc... Você pode <span style="color: #cc0000; font-weight: bold;">baixar uma amostra para avaliação</span> antes de comprar um módulo.',
	help_perg_8: 'SP-Por quanto tempo funciona uma amostra?',
	help_resp_8: 'SP-Os módulos baixados como amostra funcionam normalmente por <span style="color: #cc0000; font-weight: bold;">tempo indeterminado</span>, mas estão restritos aos <span style="color: #cc0000; font-weight: bold;">três primeiros dias</span> de treinamento.<br><br>Entendemos que esse tempo é suficiente para você ter uma ideia do nível de dificuldade dos exercícios.', 
	help_perg_9: 'SP-Quantos exercícios tem cada módulo?',
	help_resp_9: 'SP-Os módulos de Mates, Tática e Finais contém <span style="color: #cc0000; font-weight: bold;">64 exercícios</span> cada. Os Games tem <span style="color: #cc0000; font-weight: bold;">16 exercícios</span>  e as Miniaturas <span style="color: #cc0000; font-weight: bold;">32</span>.',
	help_perg_10: 'SP-Como funciona o sistema de repetição dos exercícios?',
	help_resp_10: 'SP-A técnica que utilizamos é chamada <span style="color: #cc0000; font-weight: bold;">SRS (Spaced Repetition)</span>, que significa repetir a mesma informação após um certo intervalo de tempo e é muito utilizada quando se quer <span style="color: #cc0000; font-weight: bold;">armazenar rapidamente um grande número de informações</span> por um longo período.<br><br>Essa técnica foi criada pelo professor C. A. Mace em 1932 e é muito utilizada em Flashcards.', 
	help_perg_11: 'SP-Posso fazer os exercícios de vários dias seguidos?',
	help_resp_11: 'SP-Sim, mas isso não é aconselhável porque prejudica a memorização das posições. <span style="color: #cc0000; font-weight: bold;">O ideal é fazer o exercício na sequência</span>, durante os 21 dias.',
	help_perg_12: 'SP-Posso criar meus próprios exercícios para treinar?',
	help_resp_12: 'SP-Infelizmente ainda <span style="color: #cc0000; font-weight: bold;">não é possível</span> fazer seus próprios exercícios.<br><br>Estamos estudando essa possibilidade em versões futuras.',
	help_perg_13: 'SP-Posso treinar mais de um módulo ao mesmo tempo?',
	help_resp_13: 'SP-Sim, você pode treinar <span style="color: #cc0000; font-weight: bold;">vários módulos simultâneamente</span>.<br><br> Contudo, é bom lembrar que na medida que o treinamento for evoluindo o tempo dispendido vai aumentando gradativamente.<br><br>Se você estiver treinando muitos módulos é bem provável que vai acabar abandonando alguns deles.',  
	help_perg_14: 'SP-Para que servem as estatísticas?',
	help_resp_14: 'SP-As estatísticas servem para você <span style="color: #cc0000; font-weight: bold;">avaliar o seu progresso</span> dentro de um determinado módulo.<br><br>Na medida que o treinamento for evoluindo é natural que os erros e o tempo gasto comecem a diminuir consideravelmente.<br><br>',
	help_perg_15: 'SP-Para que serve o botão REFORÇO?',
	help_resp_15: 'SP-No REFORÇO o sistema repassa <span style="color: #cc0000; font-weight: bold;">todos os exercícios que você errou</span>, independente do dia de treinamento.<br><br>Você pode utilizar esse recurso quantas vezes quiser.<br><br>Quanto mais usar, mais benefício terá.<br><br>',  
	help_perg_16: 'SP-Para que serve o botão REFAZER?',
	help_resp_16: 'SP-Para recomeçar o treinamento <span style="color: #cc0000; font-weight: bold;">a partir do início</span>.<br><br>É aconselhável utilizar esse recurso sempre que você fica vários dias sem treinar e percebe que se esqueceu daquilo que já foi aprendido.<br><br>Sempre que utilizar essa opção, as estatísticas daquele módulo serão zeradas.<br><br>', 
	help_perg_17: 'SP-Porque o treinamento de cada módulo dura exatamente 21 dias?',
	help_resp_17: 'SP-De acordo com a nossa experiência, esse é o tempo necessário para que cada exercício seja repetido espaçadamente durante sete vezes, o que é imprescindível para que você <span style="color: #cc0000; font-weight: bold;">não se esqueça daquela posição</span> alguns dias depois.',
	help_perg_18: 'SP-Quanto tempo eu tenho para fazer cada exercício?',
	help_resp_18: 'SP-Inicialmente o tempo máximo de cada exercício é de <span style="color: #cc0000; font-weight: bold;">3 minutos</span>.<br><br>Contudo, considere esse tempo <span style="color: #cc0000; font-weight: bold;">apenas como referência</span>, já que é desaconselhável fazer os exercícios apressadamente e contraproducente gastar mais do que três minutos para encontrar a solução.<br><br>',     
	help_perg_19: 'SP-Como eu faço para fazer um lance?',
	help_resp_19: 'SP-Basta clicar <span style="color: #cc0000; font-weight: bold;">sobre a peça</span> que quer mover e em seguida na <span style="color: #cc0000; font-weight: bold;">casa de destino</span>.',
	help_perg_20: 'SP-Como funciona o sistema de anotação?',
	help_resp_20: 'SP-O Intuitive Chess utiliza o <span style="color: #cc0000; font-weight: bold;">sistema de anotação algébrico</span>, que é o método utilizado mundialmente em todas as competições de xadrez.',  
	help_perg_21: 'SP-Como proceder se eu esquecer ou não puder treinar um dia?',
	help_resp_21: 'SP-Quando esquecer ou não puder treinar um determinado dia você simplesmente <span style="color: #cc0000; font-weight: bold;">continua de onde parou</span> como se nada tivesse acontecido.<br><br>Eventualmente, você poderá fazer dois dias em um, porém nesse caso recomendamos um intervalo de algumas horas entre um treinamento e outro.<br><br>',  
			     
	conf_board_1: 'SP-Padrão',
	conf_board_2: 'SP-Azul claro',
	conf_board_3: 'SP-Azul escuro',
	conf_board_4: 'SP-Café com leite',
	conf_board_5: 'SP-Cinza claro',
	conf_board_6: 'SP-Cinza escuro',
	conf_board_7: 'SP-Laranja',
	conf_board_8: 'SP-Marrom',
	conf_board_9: 'SP-Ocre',
	conf_board_10: 'SP-Rosa',
	conf_board_11: 'SP-Roxo',
	conf_board_12: 'SP-Teal',
	conf_board_13: 'SP-Verde exército',
	conf_board_14: 'SP-Verde oliva',
	conf_board_15: 'SP-Verde',
	conf_board_16: 'SP-Verde escuro',
	conf_board_17: 'SP-Violeta',

	conf_sound_1: 'SP-Som dos movimentos',
	conf_sound_2: 'SP-Som das mensagens',
	conf_sound_3: 'SP-Som das teclas',
	conf_sound_4: 'SP-Receber notificações',
		
	conf_others_1: 'SP-Tempo máximo de cada exercício',
	conf_others_2: 'SP-Exibir resultado após x tentativas',
	conf_others_3: 'SP-Exibir coordenadas',
			
	msg_no_touch: "SP-Você não pode tocar nas peças agora. Use as setas abaixo do tabuleiro para navegar.",
		
	first_steps_tit: 'SP-Primeiros passos',
	first_steps_body: 'SP-O Intuitive Chess é um <span style="color: #cc0000; font-weight: bold;">revolucionário sistema de treinamento</span> de xadrez totalmente intuitivo e baseado na memorização de posições chaves, utilizando a técnica SRS (Spaced Repetition).<br><br>' +
		              'Esse processo de aprendizado permite que você, num <span style="color: #cc0000; font-weight: bold;">curto espaço de tempo</span>, obtenha um grande número de informações e consiga retê-las <span style="color: #cc0000; font-weight: bold;">indefinidamente em sua memória</span>.<br><br>' +
		              'Para facilitar o entendimento de cada posição chave, a maioria dos exercícios contém <span style="color: #cc0000; font-weight: bold;">simbolos gráficos</span> que explicam as principais jogadas.<br><br>' +
		              'Nosso aplicativo abrange três tipos de exercícios:<br><br>' +
		              '1) <span style="color: #cc0000; font-weight: bold;">Qual o melhor lance?</span> - A partir de uma posição você deve descobrir e fazer as melhores jogadas.<br><br>' +
		              '2) <span style="color: #cc0000; font-weight: bold;">Reprodução de partidas clássicas</span> - Você observa lance a lance as mais instrutivas partidas jogadas entre Grandes Mestres. Através das explicações gráficas você compreende e memoriza os conceitos estratégicos de cada uma delas.<br><br>' +
		              '3) <span style="color: #cc0000; font-weight: bold;">Lance do Mestre</span> - Você tem de descobrir qual das três alternativas disponíveis é a melhor jogada daquela posição. Em caso de escolher a alternativa errada, o aplicativo mostrará a sequência derivada a partir da sua escolha, fazendo com que você automaticamente corrija e aperfeiçoe a sua maneira de pensar naquele tipo de posição.<br><br>' +
		              'As posições chaves estão agrupadas em módulos dentro das seguintes categorias: <b>Mates</b>, <b>Tática</b>, <b>Miniaturas</b> e <b>Games</b>.<br><br>' +
		              'Estamos trabalhando em módulos para estudo de <b>Finais</b> e <b>Aberturas</b>.<br><br>' +
		              'Utilize o Fale Conosco para expressar suas <span style="color: #cc0000; font-weight: bold;">críticas e sugestões</span>. Elas serão muito bem-vindas pois nosso principal objetivo é oferecer-lhe um <span style="color: #cc0000; font-weight: bold;">produto cada vez melhor</span>.<br><br>' +
		              'Obrigado!<br><br>',
		                    		  
	info_days_tit: 'SP-Sobre o treinamento',
	info_days_body: 'SP-O treinamento de cada módulo dura 21 dias.<br><br>Durante esse período cada exercício é repetido 7 vezes em intervalos espaçados.<br><br>Dessa forma, você conseguirá fixar cada uma das posições estudadas e será capaz de reconhecê-la instantaneamente durante uma partida.<br><br>Embora seja possível fazer várias sequências em um único dia, recomendamos que entre uma e outra tenha um intervalo de 24 a 48 horas para não prejudicar a memorização das posições estudadas.<br><br>Se ficar muito tempo sem treinar, é aconselhável começar o módulo novamente. Para fazer isso clique no botão REFAZER nessa mesma página.<br><br>Use o botão REFORÇO sempre que quiser repetir os exercícios que você errou durante todo o treinamento desse módulo.',                    		  
		
	info_stats_tit: 'SP-Sobre as estatísticas',
	info_stats_body: 'SP-As estatísticas servem para você acompanhar a evolução do seu treinamento.<br><br>Os números à esquerda, representam os exercícios contidos em cada módulo.<br><br>Durante os 21 dias de treinamento cada exercício é repetido 7 vezes.<br><br>As colunas à direita mostram o resultado (acertos e erros) e o tempo gasto em cada uma dessas vezes.<br><br>',
		
	info_cad_tit: 'SP-Porque se cadastrar...',
	info_cad_body: 'SP-Embora não seja obrigatório é <b>muito importante</b> que você preencha esse cadastro.<br><br>Ele serve para <b>associarmos</b> a sua identidade no Intuitive Chess com um <b>e-mail de contato</b>.<br><br>Dessa forma, você poderá <b>mudar de aparelho</b> sem perder o seu progresso de treinamento.<br><br>Através dessas informações você também poderá acessar o IC de <b>vários dispositivos</b> diferentes (Ex: celular_1, celular_2, tablet, etc... bem como nos ajudar a fazer um <b>produto</b> cada vez <b>mais apropriado</b> para suas necessidades.<br><br>',
	
	sec_gym_1: 'SP-Concluído',
	sec_gym_2: 'SP-Dia',
	sec_gym_3: 'SP-Amostra',
	sec_gym_4: 'SP-Limitado',
	sec_gym_5: 'SP-Treinar',
	sec_gym_6: 'SP-Estatísticas',
	sec_gym_7: 'SP-Baixar agora',
	sec_gym_8: 'SP-Você não tem nenhum módulo',
	sec_gym_9: 'SP-Categoria',

    not_implemented: 'Aún no implementado',
	
	tab_quotes: [ 	'Todo grande mestre já foi um iniciante.~~~Irving Chernev',
				'O xadrez é a batalha contra o erro.~~~J. Zukertort',
				'O xadrez abre e enriquece a sua mente.~~~Saudin Robovic',
				'O xadrez é o ginásio da mente.', 'Blaise Pascal',
				'O xadrez é uma guerra sobre o tabuleiro cujo objetivo é destruir a mente do adversário.~~~Bobby Fischer',
				'O xadrez, como o amor, como a música, tem o poder de fazer as pessoas felizes.~~~Siegbert Tarrasch',
				'Eu não acredito em psicologia. Acredito em bons lances.~~~Bobby Fischer',
				'Uma partida de xadrez não é um teste de conhecimento; é uma batalha de nervos.~~~David Bronstein',
				'Quando você encontrar um bom lance, procure outro melhor.~~~Emanuel Lasker',
				'Mesmo um plano ruim é melhor do que não ter nenhum plano.~~~Mikhail Chigorin',
				'Na vida, como no xadrez, a premeditação vence.~~~Charles Buxton',
				'Os peões são a alma do xadrez.~~~F. Philidor',
				'Ninguém nunca ganhou uma partida de xadrez desistindo.~~~Savielly Tartakower',
				'Um lance ruim anula quarenta lances bons.~~~Bernhard Horwitz',
				'O Xadrez é a arte da análise.~~~Mikhail Botvinnik',
				'Tudo o que importa em um tabuleiro de xadrez são bons lances.~~~Bobby Fischer',
				'Ajude as suas peças, assim elas poderão ajudar você.~~~Paul Morphy',
				'Táticas nascem de uma posição superior.~~~Bobby Fischer',
				'O xadrez é tudo: arte, ciência e esporte.~~~Anatoly Karpov',
				'O xadrez é a arte que expressa a ciência da lógica.~~~Mikhail Botvinnik',
				'Nem todos artistas são jogadores de xadrez, mas todo jogador de xadrez é um artista.~~~Marcel Duchamp',
				'O Xadrez é imaginação.~~~David Bronstein',
				'Definir um objetivo é o ponto de partida de toda a realização.~~~W. Clement Stone',
				'Nós nos tornamos aquilo que pensamos.~~~Earl Nightingale',
				'A melhor época para plantar uma árvore foi há 20 anos. A segunda melhor é agora.~~~Provérbio Chinês',
				'Ganhar não é tudo, mas querer ganhar é.~~~Vince Lombardi',
				'Se você pensa que pode, ou que não pode, você está certo.~~~Henry Ford',
				'Acredite que você pode e você vai chegar lá.~~~Theodore Roosevelt',
				'Para ter sucesso, o seu desejo de sucesso deve ser maior do que o seu medo do fracasso.~~~Bill Cosby',
				'Não importa se você vai devagar, tanto quanto importa o fato de você não parar.~~~Confúcio',
				'Se você faz o que sempre fez, vai ter o que sempre teve.~~~Tony Robbins',
				'Persistência pode transformar fracassos em incríveis conquistas.~~~Matt Biondi',
				'Quanto mais eu treinar, mais sorte terei.~~~Gary Player',
				'A vontade de vencer é importante, mas a vontade de se preparar é vital.~~~Joe Paterno',
				'A disciplina é a mãe do êxito.~~~Ésquilo',
				'Você não precisa jogar bem, basta jogar melhor que seu adversário.~~~Siegbert Tarrasch',
				'Um peão passado aumenta sua força na medida que o número de peças no tabuleiro diminui.~~~Capablanca',
				'Estudar aberturas ensinam você a jogar aberturas. Estudar finais ensinam você a jogar xadrez!~~~Stephan Gerzadowicz'
			]

};



var Lang = function() {

	var tab_langs = ['POR', 'ENG', 'SPN', 'GER'];

	this.Set_Lang_Selec = function () {
	
		for (var i = 0; i < tab_langs.length; i++) {
			$("#lang_sel_" + tab_langs[i]).css('display', 'none');
		}
		
		$("#lang_sel_" + CONF.lang).css('display', 'block');
		
	}
		

}

