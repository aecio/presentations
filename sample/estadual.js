var http = require('http');

var candidatos = [
    {
        "partido": "PTC",
        "nome": "ABRAHÃO HISSA",
        "numero": "36545",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSB",
        "nome": "ACSA JUNIA GERMANO",
        "numero": "40002",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PCB",
        "nome": "ADAILTON",
        "numero": "21456",
        "coligacao": "PCB"
    },
    {
        "partido": "PSOL",
        "nome": "ADAILTON MARQUES",
        "numero": "50123",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PPS",
        "nome": "ADAIR ( DJ ARAGÃO)",
        "numero": "23124",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PMDB",
        "nome": "ADAIR OTAVIANO",
        "numero": "15555",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PMDB",
        "nome": "ADALCLEVER LOPES",
        "numero": "15123",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "ADAUTO BRASIL",
        "numero": "70125",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PROS",
        "nome": "ADAUTO CARTEIRO",
        "numero": "90500",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PR",
        "nome": "ADEMIR LUCAS",
        "numero": "22456",
        "coligacao": "PR"
    },
    {
        "partido": "PPL",
        "nome": "ADILSON CONSELHO DE SAÚDE",
        "numero": "54313",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTB",
        "nome": "ADILSON GOMES",
        "numero": "14510",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PRB",
        "nome": "ADONIAS",
        "numero": "10789",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PHS",
        "nome": "ADRIANA APARECIDA TEODORO",
        "numero": "31221",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PC do B",
        "nome": "ADRIANA DE SOUZA",
        "numero": "65314",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PSC",
        "nome": "ADRIANA KUTRAS",
        "numero": "20001",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PHS",
        "nome": "ADRIANA L BARROS",
        "numero": "31841",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT do B",
        "nome": "ADRIANA PERES",
        "numero": "70779",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PT",
        "nome": "ADRIANO VENTURA",
        "numero": "13012",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PMDB",
        "nome": "ADRIANO ZAGO",
        "numero": "15015",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PPL",
        "nome": "ADSON REIS",
        "numero": "54111",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSL",
        "nome": "AGENTE CORACI",
        "numero": "17888",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "AGNALDO BICALHO",
        "numero": "13713",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PV",
        "nome": "AGOSTINHO PATRUS FILHO",
        "numero": "43500",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PDT",
        "nome": "AGUEDA FREITAS",
        "numero": "12777",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTB",
        "nome": "AILTON FILCA",
        "numero": "14185",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PMN",
        "nome": "AIMAR DO CARTORIO",
        "numero": "33111",
        "coligacao": "PMN"
    },
    {
        "partido": "PEN",
        "nome": "AINOÃ",
        "numero": "51000",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT do B",
        "nome": "AIRTON PINHAL",
        "numero": "70800",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PC do B",
        "nome": "ALAN ANDRADE",
        "numero": "65900",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PEN",
        "nome": "ALANDERSON",
        "numero": "51001",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PR",
        "nome": "ALAOR OLIVEIRA LIMA",
        "numero": "22345",
        "coligacao": "PR"
    },
    {
        "partido": "PSD",
        "nome": "ALBERTH MONÇÃO",
        "numero": "55678",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PPS",
        "nome": "ALCIDES DINIZ",
        "numero": "23114",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PDT",
        "nome": "ALENCAR DA SILVEIRA JR",
        "numero": "12212",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PPS",
        "nome": "ALESSANDRA FARMACÊUTICA",
        "numero": "23444",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSDC",
        "nome": "ALESSANDRA KALARRAM",
        "numero": "27927",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSDC",
        "nome": "ALESSANDRO MARQUES",
        "numero": "27123",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSL",
        "nome": "ALEXANDRE CARREIRINHA",
        "numero": "17200",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PMN",
        "nome": "ALEXANDRINA",
        "numero": "33052",
        "coligacao": "PMN"
    },
    {
        "partido": "PC do B",
        "nome": "ALEXANDRO FALEIROS",
        "numero": "65115",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PRP",
        "nome": "ALFREDO TEIXEIRA",
        "numero": "44300",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PV",
        "nome": "ALINE NOGUEIRA",
        "numero": "43200",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PMDB",
        "nome": "ALLAN BORGES",
        "numero": "15515",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "ALMIR SILVA",
        "numero": "70777",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PV",
        "nome": "AMANDA MARTINS",
        "numero": "43415",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PEN",
        "nome": "AMIGÃO",
        "numero": "51124",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PTN",
        "nome": "AMIL",
        "numero": "19200",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSOL",
        "nome": "AMÉRICO",
        "numero": "50777",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PROS",
        "nome": "ANA",
        "numero": "90101",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PRP",
        "nome": "ANA CANDIDA",
        "numero": "44456",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PRTB",
        "nome": "ANA CARVALHO",
        "numero": "28113",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT do B",
        "nome": "ANA CLAUDIA MADRINHEIRA",
        "numero": "70300",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PRB",
        "nome": "ANA DA SOPA",
        "numero": "10015",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PMN",
        "nome": "ANA LUCIA",
        "numero": "33579",
        "coligacao": "PMN"
    },
    {
        "partido": "PT",
        "nome": "ANA LÚCIA RODRIGUES",
        "numero": "13881",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTC",
        "nome": "ANA MACEDO",
        "numero": "36081",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSDB",
        "nome": "ANA MARIA",
        "numero": "45789",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PPL",
        "nome": "ANA PAULA",
        "numero": "54555",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PDT",
        "nome": "ANDERSON BRITO",
        "numero": "12197",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PT",
        "nome": "ANDERSON CABIDO",
        "numero": "13000",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSDC",
        "nome": "ANDERSON DO GÁS",
        "numero": "27100",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PR",
        "nome": "ANDERSON SALEME",
        "numero": "22123",
        "coligacao": "PR"
    },
    {
        "partido": "PROS",
        "nome": "ANDRE LUIZ",
        "numero": "90000",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTN",
        "nome": "ANDRE NEIVA",
        "numero": "19115",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PT",
        "nome": "ANDRE QUINTÃO",
        "numero": "13555",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PC do B",
        "nome": "ANDRE SOUZA",
        "numero": "65007",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PSD",
        "nome": "ANDRIZIA LAGE",
        "numero": "55070",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PPL",
        "nome": "ANDRÉ KNUPP",
        "numero": "54418",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSOL",
        "nome": "ANDRÉ VELOSO",
        "numero": "50333",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PMDB",
        "nome": "ANDRÉ VILELA",
        "numero": "15155",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PEN",
        "nome": "ANGÉICA ANTUNES",
        "numero": "51676",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PMDB",
        "nome": "ANNA MARCHESINI",
        "numero": "15678",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTC",
        "nome": "ANSELMO JOSÉ DOMINGOS",
        "numero": "36123",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "ANTONIO CARLOS",
        "numero": "13030",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PHS",
        "nome": "ANTONIO DE MIRANDA",
        "numero": "31000",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PPS",
        "nome": "ANTONIO JORGE",
        "numero": "23123",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PT do B",
        "nome": "ANTONIO SOARES",
        "numero": "70385",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PTN",
        "nome": "ANTONIO UILSON",
        "numero": "19004",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSDB",
        "nome": "ANTÔNIO CARLOS ARANTES",
        "numero": "45010",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PR",
        "nome": "ANTÔNIO FERREIRA  O TONICO",
        "numero": "22970",
        "coligacao": "PR"
    },
    {
        "partido": "PR",
        "nome": "ANTÔNIO GORDURÃO",
        "numero": "22113",
        "coligacao": "PR"
    },
    {
        "partido": "PSOL",
        "nome": "APARECIDA GONÇALVES DAMASCENO",
        "numero": "50127",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSC",
        "nome": "ARGENTINO",
        "numero": "20120",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PPL",
        "nome": "ARILDO SILVEIRA",
        "numero": "54123",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTB",
        "nome": "ARLEN SANTIAGO",
        "numero": "14111",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PTB",
        "nome": "ARLETE AMARAL",
        "numero": "14313",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PTN",
        "nome": "ARLETE MAGALHAES",
        "numero": "19456",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSB",
        "nome": "ARMANDO FORTUNATO FILHO",
        "numero": "40000",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSDC",
        "nome": "ARMANDO FRANÇA",
        "numero": "27678",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PR",
        "nome": "ARNALDO",
        "numero": "22999",
        "coligacao": "PR"
    },
    {
        "partido": "PT",
        "nome": "ARNALDO GODOY",
        "numero": "13670",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSL",
        "nome": "ARNALDO GONTIJO",
        "numero": "17000",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "SD",
        "nome": "ARTHUR NEVES",
        "numero": "77125",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PC do B",
        "nome": "ARTUZINHO",
        "numero": "65556",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PRP",
        "nome": "ASSIS DA PREFEITURA",
        "numero": "44789",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PHS",
        "nome": "ATACIR VICENTE COSTA",
        "numero": "31888",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSDB",
        "nome": "AUGUSTO CESAR",
        "numero": "45236",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSB",
        "nome": "AUREA VINAGRE",
        "numero": "40999",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PHS",
        "nome": "AÉCIO XAVIER - MÉDICO OCULISTA",
        "numero": "31050",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PMN",
        "nome": "BABA CARLOS",
        "numero": "33777",
        "coligacao": "PMN"
    },
    {
        "partido": "PRTB",
        "nome": "BAIAO",
        "numero": "28614",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSD",
        "nome": "BALBINO DA AMBULANCIA",
        "numero": "55050",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSC",
        "nome": "BARBABELLA",
        "numero": "20129",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "BARBARA ALVARENGA",
        "numero": "13711",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT",
        "nome": "BARBARA KELLY",
        "numero": "13653",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PHS",
        "nome": "BARBOSA",
        "numero": "31600",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PC do B",
        "nome": "BARRAOZINHO",
        "numero": "65677",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PMN",
        "nome": "BARROS",
        "numero": "33045",
        "coligacao": "PMN"
    },
    {
        "partido": "PHS",
        "nome": "BERNARDO GUEDES",
        "numero": "31123",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PEN",
        "nome": "BETANIA",
        "numero": "51200",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT",
        "nome": "BETAO",
        "numero": "13613",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PPS",
        "nome": "BETO QUARENTINHA",
        "numero": "23222",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PCO",
        "nome": "BETÃO",
        "numero": "29999",
        "coligacao": "PCO"
    },
    {
        "partido": "PT",
        "nome": "BIA CAETANO",
        "numero": "13831",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PRP",
        "nome": "BIG MIX",
        "numero": "44222",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT do B",
        "nome": "BILL SOARES",
        "numero": "70151",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PTN",
        "nome": "BIM DA AMBULANCIA",
        "numero": "19193",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSC",
        "nome": "BINE ZIMMER",
        "numero": "20111",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PRP",
        "nome": "BOECHAT",
        "numero": "44033",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT do B",
        "nome": "BOSCO",
        "numero": "70100",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PTB",
        "nome": "BRAULIO BRAZ",
        "numero": "14444",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PEN",
        "nome": "BRENO DINIZ",
        "numero": "51420",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PRP",
        "nome": "BRUNA REIS",
        "numero": "44030",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PDT",
        "nome": "BRUNO MIRANDA",
        "numero": "12345",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTC",
        "nome": "BYA DRUMOND",
        "numero": "36277",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "DEM",
        "nome": "BÉIA SAVASSI",
        "numero": "25200",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PDT",
        "nome": "CABO ANÍZIO",
        "numero": "12356",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PDT",
        "nome": "CABO DANIEL",
        "numero": "12190",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PRTB",
        "nome": "CABO EMIDIO",
        "numero": "28190",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PMDB",
        "nome": "CABO JÚLIO",
        "numero": "15190",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PDT",
        "nome": "CABO LULU MARTINS",
        "numero": "12110",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PT do B",
        "nome": "CABO SILVANA",
        "numero": "70190",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PEN",
        "nome": "CABO WILLKER",
        "numero": "51190",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT do B",
        "nome": "CAETANO DO ESCOLAR",
        "numero": "70963",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PEN",
        "nome": "CALIXTO MARTINS SOUTO",
        "numero": "51088",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PCB",
        "nome": "CAMILA CASTRO",
        "numero": "21333",
        "coligacao": "PCB"
    },
    {
        "partido": "PV",
        "nome": "CAMILO MOTORISTA",
        "numero": "43999",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PMN",
        "nome": "CANECÃO",
        "numero": "33640",
        "coligacao": "PMN"
    },
    {
        "partido": "PSC",
        "nome": "CANTOR KELMER DE SOUZA",
        "numero": "20044",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PEN",
        "nome": "CANTORA BETH REIS",
        "numero": "51967",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PTB",
        "nome": "CAPITAO ANTUNES",
        "numero": "14568",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PDT",
        "nome": "CAPITÁO SOUSA",
        "numero": "12200",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PDT",
        "nome": "CARLA DE MELO",
        "numero": "12344",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "DEM",
        "nome": "CARLA LIMA",
        "numero": "25333",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PC do B",
        "nome": "CARLAO",
        "numero": "65999",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PT",
        "nome": "CARLINHO RODRIGUES",
        "numero": "13113",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PDT",
        "nome": "CARLINHO SEVERINO",
        "numero": "12699",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTB",
        "nome": "CARLINHOS BARBOSA",
        "numero": "14580",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PT",
        "nome": "CARLINHOS DO PT",
        "numero": "13413",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "CARLOS ALBERTO SILVA",
        "numero": "70160",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PSD",
        "nome": "CARLOS EDUARDO",
        "numero": "55321",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PT",
        "nome": "CARLOS GOMES",
        "numero": "13010",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "CARLOS HAMILTON",
        "numero": "70770",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PRB",
        "nome": "CARLOS HENRIQUE",
        "numero": "10123",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PHS",
        "nome": "CARLOS PAVANELLI BATISTA",
        "numero": "31222",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PC do B",
        "nome": "CARLOS PELEGRINI ADVOGADO",
        "numero": "65104",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PDT",
        "nome": "CARLOS PIMENTA",
        "numero": "12369",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PC do B",
        "nome": "CARLOS REZENDE",
        "numero": "65245",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PTN",
        "nome": "CARLOS ROBERTO",
        "numero": "19009",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PC do B",
        "nome": "CARLOS SILVEIRA",
        "numero": "65197",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PCB",
        "nome": "CARLÃO",
        "numero": "21444",
        "coligacao": "PCB"
    },
    {
        "partido": "PMDB",
        "nome": "CARLÃO CAMPOS",
        "numero": "15333",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PRP",
        "nome": "CARMEN LUCIA",
        "numero": "44001",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT",
        "nome": "CARMINHA DA SAUDE",
        "numero": "13159",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "CARMOZINO RODRIGUES",
        "numero": "70150",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PT",
        "nome": "CAROLA CASTRO",
        "numero": "13467",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "CASA GRANDE",
        "numero": "70038",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PT",
        "nome": "CASTELAR",
        "numero": "13221",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PR",
        "nome": "CASTRO MEU REI",
        "numero": "22900",
        "coligacao": "PR"
    },
    {
        "partido": "PTB",
        "nome": "CECÍLIA RUTE",
        "numero": "14129",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PEN",
        "nome": "CELIA CRISTINA",
        "numero": "51555",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT do B",
        "nome": "CELINA PEREIRA",
        "numero": "70144",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PC do B",
        "nome": "CELINHO DO SINTTROCEL",
        "numero": "65112",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PSDB",
        "nome": "CELIO MOREIRA",
        "numero": "45500",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PC do B",
        "nome": "CELIO ROBERTO",
        "numero": "65109",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PMDB",
        "nome": "CELISE LAVIOLA",
        "numero": "15196",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PRP",
        "nome": "CELSO BORGES",
        "numero": "44144",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT do B",
        "nome": "CELSO DO GAS",
        "numero": "70678",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PT do B",
        "nome": "CELSO PACHECO / CELSO CUNHA",
        "numero": "70199",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PRP",
        "nome": "CESAR JOIA",
        "numero": "44500",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PROS",
        "nome": "CESAR VIEIRA",
        "numero": "90800",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PRB",
        "nome": "CEZINHA ALVARENGA",
        "numero": "10777",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PDT",
        "nome": "CHAMONE",
        "numero": "12340",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PROS",
        "nome": "CHARLLES EVANGELISTA",
        "numero": "90012",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PHS",
        "nome": "CHICO ANISIO",
        "numero": "31936",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT",
        "nome": "CHICO SIMOES",
        "numero": "13658",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PV",
        "nome": "CHICÃO",
        "numero": "43800",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PR",
        "nome": "CHIQUE",
        "numero": "22111",
        "coligacao": "PR"
    },
    {
        "partido": "PSL",
        "nome": "CHIQUINHA",
        "numero": "17356",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PEN",
        "nome": "CHRISTIAN DA FINAUTO",
        "numero": "51223",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PR",
        "nome": "CHRISTIAN GONÇALVES",
        "numero": "22022",
        "coligacao": "PR"
    },
    {
        "partido": "PEN",
        "nome": "CIBELE ITABORAY",
        "numero": "51014",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT do B",
        "nome": "CIDA DO POSTO",
        "numero": "70224",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PSDB",
        "nome": "CIDA LÔBO",
        "numero": "45238",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSDB",
        "nome": "CIDA MORENA",
        "numero": "45027",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PR",
        "nome": "CIDA OLIVEIRA",
        "numero": "22369",
        "coligacao": "PR"
    },
    {
        "partido": "PT do B",
        "nome": "CIDA VELOSO",
        "numero": "70222",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PHS",
        "nome": "CIDÃO",
        "numero": "31770",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PC do B",
        "nome": "CINTIA GOMES",
        "numero": "65911",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PR",
        "nome": "CIÇA",
        "numero": "22225",
        "coligacao": "PR"
    },
    {
        "partido": "PSC",
        "nome": "CLARA TRANSPARENTE",
        "numero": "20091",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PRP",
        "nome": "CLAUDIA FERREIRA",
        "numero": "44005",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSC",
        "nome": "CLAUDIA MARCIA",
        "numero": "20230",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PRP",
        "nome": "CLAUDIA REGINA",
        "numero": "44987",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSC",
        "nome": "CLAUDIANO CORREA",
        "numero": "20192",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PPS",
        "nome": "CLAUDIM",
        "numero": "23252",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PDT",
        "nome": "CLAUDIO COSTA",
        "numero": "12555",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTB",
        "nome": "CLAUDIO DO MUNDO NOVO",
        "numero": "14123",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PPL",
        "nome": "CLAUDIO KCAU",
        "numero": "54547",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PHS",
        "nome": "CLAUDIO MACIEL",
        "numero": "31333",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT",
        "nome": "CLAUDIO PONCIANO",
        "numero": "13700",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTC",
        "nome": "CLEBERSON MATOS",
        "numero": "36070",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "CLEBERSON RODRIGUES",
        "numero": "70002",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PDT",
        "nome": "CLEIDE ENFERMEIRA",
        "numero": "12123",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PSB",
        "nome": "CLEIDE SOARES",
        "numero": "40027",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PEN",
        "nome": "CLEITON XAVIER",
        "numero": "51181",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "SD",
        "nome": "CLESE DA SAUDE",
        "numero": "77122",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PMN",
        "nome": "CLÁUDIA CAETANO",
        "numero": "33052",
        "coligacao": "PMN"
    },
    {
        "partido": "PP",
        "nome": "CLÁUDIA MALTA",
        "numero": "11444",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTB",
        "nome": "CLÁUDIO PRATES",
        "numero": "14333",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PMN",
        "nome": "CONCEIÇÃO APARECIDA - CIDA",
        "numero": "33888",
        "coligacao": "PMN"
    },
    {
        "partido": "PT",
        "nome": "CONCEIÇÃO LOPES",
        "numero": "13429",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PPS",
        "nome": "CONCEIÇÃO WINTER",
        "numero": "23181",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTB",
        "nome": "CORONEL HOTAM",
        "numero": "14350",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PSB",
        "nome": "CORONEL PICCININI",
        "numero": "40190",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PDT",
        "nome": "CRIS ALVES",
        "numero": "12023",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PSC",
        "nome": "CRISTIANE BARBOSA",
        "numero": "20826",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PC do B",
        "nome": "CRISTIANO CRISLLEYCE",
        "numero": "65765",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PT",
        "nome": "CRISTIANO SILVEIRA",
        "numero": "13120",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT",
        "nome": "CRISTINA CORREA",
        "numero": "13013",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSL",
        "nome": "CÁSSIA BARBOSA",
        "numero": "17070",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSD",
        "nome": "CÁSSIO SOARES",
        "numero": "55555",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSC",
        "nome": "DAGOBERTO",
        "numero": "20654",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PV",
        "nome": "DAK DIAS",
        "numero": "43024",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PSDB",
        "nome": "DALMO RIBEIRO",
        "numero": "45222",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PV",
        "nome": "DAN - DENTISTA",
        "numero": "43445",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PEN",
        "nome": "DANI CASTRO",
        "numero": "51004",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT",
        "nome": "DANIEL COSTA",
        "numero": "13600",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PCB",
        "nome": "DANIEL CRISTIANO",
        "numero": "21210",
        "coligacao": "PCB"
    },
    {
        "partido": "PTN",
        "nome": "DANIEL FREITAS",
        "numero": "19333",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSB",
        "nome": "DANIEL NEPOMUCENO",
        "numero": "40130",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT",
        "nome": "DANIEL SUCUPIRA",
        "numero": "13222",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PMN",
        "nome": "DANIELA PEREIRA",
        "numero": "33661",
        "coligacao": "PMN"
    },
    {
        "partido": "PR",
        "nome": "DANUZA BIAS FORTES",
        "numero": "22210",
        "coligacao": "PR"
    },
    {
        "partido": "PSD",
        "nome": "DARA LEAL",
        "numero": "55080",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSB",
        "nome": "DARCI ALVES",
        "numero": "40004",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSDB",
        "nome": "DARCI OLIVEIRA",
        "numero": "45255",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PROS",
        "nome": "DARIO FERREIRA",
        "numero": "90200",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTN",
        "nome": "DAVI COSTA",
        "numero": "19789",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PEN",
        "nome": "DAVISON SOBRINHO CAP. LINO",
        "numero": "51147",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PR",
        "nome": "DAYANNE OLIVEIRA",
        "numero": "22722",
        "coligacao": "PR"
    },
    {
        "partido": "PHS",
        "nome": "DECIO CAMARGOS",
        "numero": "31777",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PMN",
        "nome": "DEHON TRATORES",
        "numero": "33333",
        "coligacao": "PMN"
    },
    {
        "partido": "PR",
        "nome": "DEIRÓ MARRA",
        "numero": "22100",
        "coligacao": "PR"
    },
    {
        "partido": "PT",
        "nome": "DEISE LARA",
        "numero": "13640",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSDB",
        "nome": "DELEGADO AGILIO MONTEIRO",
        "numero": "45455",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSDB",
        "nome": "DELEGADO MARCIO HAZAN",
        "numero": "45000",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PEN",
        "nome": "DELEGATA",
        "numero": "51230",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSB",
        "nome": "DEMETRIO JUNQUEIRA FIGUEIREDO",
        "numero": "40180",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTN",
        "nome": "DENILSON FANTINI",
        "numero": "19321",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PT do B",
        "nome": "DENILSON MARTINS",
        "numero": "70500",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PT do B",
        "nome": "DENILSON SANTOS",
        "numero": "70071",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PR",
        "nome": "DENIS QUEIROZ",
        "numero": "22789",
        "coligacao": "PR"
    },
    {
        "partido": "PSDB",
        "nome": "DENISE COUTINHO",
        "numero": "45770",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PDT",
        "nome": "DENISE GABRIELA",
        "numero": "12412",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PSOL",
        "nome": "DEODATO MACHADO",
        "numero": "50100",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PDT",
        "nome": "DEPUTADO SARGENTO RODRIGUES",
        "numero": "12312",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PHS",
        "nome": "DIANA ROSS",
        "numero": "31125",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSD",
        "nome": "DIEGO OLIVEIRA",
        "numero": "55444",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PMN",
        "nome": "DILERMANDO (DINO)",
        "numero": "33007",
        "coligacao": "PMN"
    },
    {
        "partido": "PTB",
        "nome": "DILZON MELO",
        "numero": "14190",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PEN",
        "nome": "DIMAS TADEU",
        "numero": "51551",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PTN",
        "nome": "DIONISIO",
        "numero": "19555",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PMDB",
        "nome": "DIOSQUÉRIDA - VETERINÁRIA",
        "numero": "15010",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PHS",
        "nome": "DIRCEU RIBEIRO",
        "numero": "31111",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSL",
        "nome": "DIVINO PEREIRA",
        "numero": "17177",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "DOMINGAO RAMALHO",
        "numero": "70321",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PR",
        "nome": "DOMINGOS ALVES",
        "numero": "22567",
        "coligacao": "PR"
    },
    {
        "partido": "PT do B",
        "nome": "DONA FATIMA",
        "numero": "70013",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PPS",
        "nome": "DONA MARIA CORNÉLIA COSTUREIRA",
        "numero": "23322",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PV",
        "nome": "DONIZETTI TAVARES - TAVARES",
        "numero": "43645",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTC",
        "nome": "DORALICE",
        "numero": "36952",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSC",
        "nome": "DOUGLAS MELO DA MUSIRAMA",
        "numero": "20800",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PDT",
        "nome": "DOUGLAS VASCONCELOS",
        "numero": "12121",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PROS",
        "nome": "DOUTOR ADAIL",
        "numero": "90110",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "DR ANTONIO CORGOSINHO",
        "numero": "70221",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PMDB",
        "nome": "DR CARLOS WILSON",
        "numero": "15005",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PMDB",
        "nome": "DR DANIEL",
        "numero": "15150",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTB",
        "nome": "DR HAMILTON BAÊTA",
        "numero": "14131",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PT do B",
        "nome": "DR MILTON IRIAS",
        "numero": "70333",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PHS",
        "nome": "DR PAULO",
        "numero": "31113",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PTB",
        "nome": "DR RENATO GOMES",
        "numero": "14110",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PMDB",
        "nome": "DR. BERTOLINO",
        "numero": "15051",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PP",
        "nome": "DR. EURO",
        "numero": "11777",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PEN",
        "nome": "DR. FRITZ - MAURÍCIO",
        "numero": "51251",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PROS",
        "nome": "DR. GERALDO SCHUFFNER",
        "numero": "90170",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PV",
        "nome": "DR. HELY",
        "numero": "43120",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PC do B",
        "nome": "DR. IDSON",
        "numero": "65654",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PT",
        "nome": "DR. JEAN FREIRE",
        "numero": "13100",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTB",
        "nome": "DR. JORGE",
        "numero": "14199",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PMN",
        "nome": "DR. JOSÉ MARIO",
        "numero": "33220",
        "coligacao": "PMN"
    },
    {
        "partido": "PR",
        "nome": "DR. JOSÉ ORLANDO  TUTA",
        "numero": "22222",
        "coligacao": "PR"
    },
    {
        "partido": "PEN",
        "nome": "DR. LEMOS",
        "numero": "51650",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSD",
        "nome": "DR. MARCOS EDUARDO ONCOLOGISTA",
        "numero": "55888",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSC",
        "nome": "DR. MIZAEL",
        "numero": "20002",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PC do B",
        "nome": "DR. PIMENTA",
        "numero": "65065",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PDT",
        "nome": "DR. RAFAEL TERRA",
        "numero": "12342",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "DEM",
        "nome": "DR. REINALDO",
        "numero": "25222",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PV",
        "nome": "DR. RICARDO LOURENÇO",
        "numero": "43122",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PMN",
        "nome": "DR. RÔMULO FERNANDES",
        "numero": "33190",
        "coligacao": "PMN"
    },
    {
        "partido": "SD",
        "nome": "DR. VINICIUS",
        "numero": "77369",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PSD",
        "nome": "DR. WILSON BATISTA",
        "numero": "55123",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PDT",
        "nome": "DR.EVANDRO FANTOZZI",
        "numero": "12100",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PRB",
        "nome": "DR.JOSE ROBERTO",
        "numero": "10010",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PDT",
        "nome": "DR.MÁRIO MILKEN",
        "numero": "12120",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTN",
        "nome": "DR.RINALDO",
        "numero": "19000",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PR",
        "nome": "DR.RUBENS",
        "numero": "22014",
        "coligacao": "PR"
    },
    {
        "partido": "PT",
        "nome": "DRA CIDA",
        "numero": "13129",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PV",
        "nome": "DRA HELOISA CERRI",
        "numero": "43013",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PT do B",
        "nome": "DRA PILCHULINHA",
        "numero": "70999",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PC do B",
        "nome": "DU - EDUARDO REALINO",
        "numero": "65165",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PSD",
        "nome": "DUARTE",
        "numero": "55789",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PC do B",
        "nome": "DUDA",
        "numero": "65244",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PRTB",
        "nome": "DURVAL BATISTA",
        "numero": "28030",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT",
        "nome": "DURVAL ÂNGELO",
        "numero": "13139",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PMN",
        "nome": "DUÍLIO DE CASTRO",
        "numero": "33444",
        "coligacao": "PMN"
    },
    {
        "partido": "PV",
        "nome": "DYANA TEIXEIRA",
        "numero": "43855",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTC",
        "nome": "DÉBORA CRISTINA",
        "numero": "36412",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PPL",
        "nome": "ECKTON OLIVEIRA",
        "numero": "54777",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PR",
        "nome": "EDICLEUSA VELOSO",
        "numero": "22033",
        "coligacao": "PR"
    },
    {
        "partido": "PDT",
        "nome": "EDINHO DA SAUDE",
        "numero": "12580",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PT do B",
        "nome": "EDIVAL",
        "numero": "70051",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PMN",
        "nome": "EDMILSON BATISTA",
        "numero": "33678",
        "coligacao": "PMN"
    },
    {
        "partido": "PSD",
        "nome": "EDNA OLIVEIRA",
        "numero": "55155",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTB",
        "nome": "EDSON GUSMÃO",
        "numero": "14141",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PPS",
        "nome": "EDSON SANTANA",
        "numero": "23400",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTC",
        "nome": "EDSON SOUZA",
        "numero": "36500",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PEN",
        "nome": "EDUARDO COSTA",
        "numero": "51510",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSD",
        "nome": "EDUARDO MACHADO SOUTO",
        "numero": "55900",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSC",
        "nome": "EDUARDO MORAIS",
        "numero": "20456",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSDB",
        "nome": "EDUARDO PIZZOLANTE",
        "numero": "45654",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSD",
        "nome": "EDUARDO RODRIGUES",
        "numero": "55090",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PT do B",
        "nome": "EDUARDO TORRES",
        "numero": "70130",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PMDB",
        "nome": "EDVALDO SOARES",
        "numero": "15013",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "EGNALDO GAUDENCIO - SANDUICHE",
        "numero": "70852",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PT",
        "nome": "ELAINE SOUTO",
        "numero": "13780",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PHS",
        "nome": "ELCIO CARDOZO",
        "numero": "31102",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSB",
        "nome": "ELCIO TOLOBA",
        "numero": "40672",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PDT",
        "nome": "ELDEIR",
        "numero": "12788",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PSC",
        "nome": "ELIANA CASTRO (BAIANA)",
        "numero": "20321",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "ELIANA PIOLA",
        "numero": "70789",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PSDB",
        "nome": "ELIANA RIBEIRO",
        "numero": "45421",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PDT",
        "nome": "ELIAS",
        "numero": "12637",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTC",
        "nome": "ELIAS DA AUTO ESCOLA MÁXIMA",
        "numero": "36192",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PHS",
        "nome": "ELIAS MATOS",
        "numero": "31789",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PRP",
        "nome": "ELIAS O INDIO",
        "numero": "44888",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSDB",
        "nome": "ELIECI FERNANDES",
        "numero": "45890",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PT do B",
        "nome": "ELISA MACHADO",
        "numero": "70101",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PSB",
        "nome": "ELISANGELA DUARTE",
        "numero": "40012",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTB",
        "nome": "ELISETE SANTOS",
        "numero": "14124",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PT",
        "nome": "ELISMAR PRADO",
        "numero": "13913",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSB",
        "nome": "ELIZABETH PONTES",
        "numero": "40015",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PHS",
        "nome": "ELKSON-TIÃO DA BATATA FRITAIS",
        "numero": "31110",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PDT",
        "nome": "ELLEN FARIA",
        "numero": "12002",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PEN",
        "nome": "ELMIR GONÇALVES",
        "numero": "51600",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PMDB",
        "nome": "ELOISA CUNHA",
        "numero": "15671",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PRP",
        "nome": "ELOIZA SARTORI",
        "numero": "44258",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT do B",
        "nome": "ELVIRO SAMPAIO",
        "numero": "70045",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PTB",
        "nome": "ELZA CATEQUISTA",
        "numero": "14700",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PMN",
        "nome": "ELZO",
        "numero": "33433",
        "coligacao": "PMN"
    },
    {
        "partido": "PT do B",
        "nome": "EMIDINHO MADEIRA",
        "numero": "70200",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PTC",
        "nome": "EMILIA GUERRA",
        "numero": "36136",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "ENFERMEIRO RUBENS SOBRINHO",
        "numero": "13133",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSB",
        "nome": "ENG ELIFAS (NETO)",
        "numero": "40505",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PDT",
        "nome": "ENGENHEIRO MARCO AURELIO",
        "numero": "12600",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PDT",
        "nome": "ENI DO CIASC",
        "numero": "12610",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PHS",
        "nome": "ENILSON DE PAULA",
        "numero": "31620",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PEN",
        "nome": "ENIR PEREIRA",
        "numero": "51350",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PMN",
        "nome": "ERLINDA ARAÚJO",
        "numero": "33051",
        "coligacao": "PMN"
    },
    {
        "partido": "PRP",
        "nome": "ERNESTO MACHADO",
        "numero": "44691",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSL",
        "nome": "ESQUERDINHA",
        "numero": "17123",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTN",
        "nome": "EUNICE PEREIRA",
        "numero": "19997",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PPL",
        "nome": "EUSTAQUIO FERREIRA",
        "numero": "54789",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTC",
        "nome": "EVANDRO FELISBERTO DOS REIS",
        "numero": "36222",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PC do B",
        "nome": "EVARISTO COBRINHA",
        "numero": "65333",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PT do B",
        "nome": "FABIANA MALTA",
        "numero": "70001",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PT do B",
        "nome": "FABIANA SILVA",
        "numero": "70666",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PEN",
        "nome": "FABIANO ALKIMIN (KABAL)",
        "numero": "51042",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PPS",
        "nome": "FABIANO TOLENTINO",
        "numero": "23000",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSL",
        "nome": "FABIO ANDRADE",
        "numero": "17007",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "FABIO AVELAR",
        "numero": "70123",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PC do B",
        "nome": "FABIO CAPELLI",
        "numero": "65241",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PPS",
        "nome": "FABIO PERSI",
        "numero": "23789",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSC",
        "nome": "FABRICIO ALVES",
        "numero": "20856",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PC do B",
        "nome": "FARLEY SINDEAUX",
        "numero": "65192",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PMN",
        "nome": "FATIMA MEDEIROS",
        "numero": "33345",
        "coligacao": "PMN"
    },
    {
        "partido": "PRP",
        "nome": "FATINHA",
        "numero": "44004",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PP",
        "nome": "FELIPE ATTIÊ",
        "numero": "11911",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSOL",
        "nome": "FELIPE LINHARES",
        "numero": "50515",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PC do B",
        "nome": "FERNANDA NASCIMENTO",
        "numero": "65801",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PR",
        "nome": "FERNANDO CORTEZ",
        "numero": "22151",
        "coligacao": "PR"
    },
    {
        "partido": "PRP",
        "nome": "FERNANDO DA MERCEARIA",
        "numero": "44010",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PEN",
        "nome": "FERNANDO DE ALMENARA",
        "numero": "51567",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PDT",
        "nome": "FERNANDO MESSIAS",
        "numero": "12456",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "SD",
        "nome": "FERRARINHA",
        "numero": "77777",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PSD",
        "nome": "FIA CARDEAL",
        "numero": "55055",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTB",
        "nome": "FILIPE CARIELO",
        "numero": "14900",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PTN",
        "nome": "FLAVIA",
        "numero": "19390",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PDT",
        "nome": "FLAVIO BARBOSA",
        "numero": "12999",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PSC",
        "nome": "FLAVIO BRAGA",
        "numero": "20777",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTB",
        "nome": "FLAVIO MADEIRA",
        "numero": "14033",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PMDB",
        "nome": "FLÁVIA PESSÔA",
        "numero": "15111",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PR",
        "nome": "FRANCIELLE ARAUJO",
        "numero": "22888",
        "coligacao": "PR"
    },
    {
        "partido": "PEN",
        "nome": "FRED COSTA",
        "numero": "51333",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT",
        "nome": "FRED FERRAMENTA",
        "numero": "13106",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PMN",
        "nome": "FROIDINHO",
        "numero": "33193",
        "coligacao": "PMN"
    },
    {
        "partido": "PMDB",
        "nome": "FÁBIO CAMARGO",
        "numero": "15001",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSD",
        "nome": "FÁBIO CHEREM",
        "numero": "55787",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSL",
        "nome": "FÁTIMA DE PIU PIPIU",
        "numero": "17701",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSDB",
        "nome": "FÁTIMA PEDROSA",
        "numero": "45400",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PV",
        "nome": "GABRIEL GOBATTO",
        "numero": "43020",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PCB",
        "nome": "GABRIELA MARRECO",
        "numero": "21222",
        "coligacao": "PCB"
    },
    {
        "partido": "PTB",
        "nome": "GALBERTO PEREIRA",
        "numero": "14888",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PPS",
        "nome": "GAUCHO",
        "numero": "23111",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PT do B",
        "nome": "GE BAHIANA",
        "numero": "70021",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PSC",
        "nome": "GEAN",
        "numero": "20214",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTB",
        "nome": "GEDEON DE SOUZA",
        "numero": "14077",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PT",
        "nome": "GEISA TEIXEIRA",
        "numero": "13200",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSDC",
        "nome": "GENILSON DOS SANTOS",
        "numero": "27127",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PMN",
        "nome": "GENTILIM",
        "numero": "33350",
        "coligacao": "PMN"
    },
    {
        "partido": "PSL",
        "nome": "GEORGE EDUARDO",
        "numero": "17789",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "GEOVANNE HONORIO",
        "numero": "13456",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PC do B",
        "nome": "GERALDA",
        "numero": "65255",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PSDB",
        "nome": "GERALDA DO BAR AZULÃO",
        "numero": "45028",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSC",
        "nome": "GERALDINHO DINIZ",
        "numero": "20789",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PPL",
        "nome": "GERALDINO NUNES",
        "numero": "54197",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSL",
        "nome": "GERALDO",
        "numero": "17675",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTC",
        "nome": "GERALDO DO ZEQUINHA",
        "numero": "36150",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PHS",
        "nome": "GERALDO DONIZETTI",
        "numero": "31077",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PMDB",
        "nome": "GERALDO FÉLIX",
        "numero": "15100",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "GERALDO LIMA",
        "numero": "70639",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PC do B",
        "nome": "GERÔ",
        "numero": "65321",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PT do B",
        "nome": "GIL CONTADOR",
        "numero": "70043",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PR",
        "nome": "GIL DINIZ NETO",
        "numero": "22777",
        "coligacao": "PR"
    },
    {
        "partido": "PP",
        "nome": "GIL PEREIRA",
        "numero": "11210",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PRB",
        "nome": "GILBERTO ABRAMO",
        "numero": "10100",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PMDB",
        "nome": "GILBERTO DOCEIRO",
        "numero": "15777",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTB",
        "nome": "GILSON BICALHO",
        "numero": "14201",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PT",
        "nome": "GILSON DE SOUZA",
        "numero": "13630",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PC do B",
        "nome": "GILSON REIS",
        "numero": "65653",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PHS",
        "nome": "GILVAN GOMES",
        "numero": "31831",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PV",
        "nome": "GILVAN PINHO TAVARES",
        "numero": "43110",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PDT",
        "nome": "GIOVANNI COELHO",
        "numero": "12222",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PC do B",
        "nome": "GISELE CRISTIANE",
        "numero": "65903",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PRP",
        "nome": "GISELLE ROCHA",
        "numero": "44400",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSD",
        "nome": "GIÁCOMO DO VALE INDEPENDENTE",
        "numero": "55400",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSB",
        "nome": "GLADIS FREITAS",
        "numero": "40017",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PHS",
        "nome": "GLAUCO MARQUES",
        "numero": "31331",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PTN",
        "nome": "GLAYCON FRANCO",
        "numero": "19123",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PR",
        "nome": "GLEICE MARA",
        "numero": "22001",
        "coligacao": "PR"
    },
    {
        "partido": "PTB",
        "nome": "GLORIA RODRIGUES",
        "numero": "14202",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PMN",
        "nome": "GORDO DENTISTA",
        "numero": "33666",
        "coligacao": "PMN"
    },
    {
        "partido": "PTN",
        "nome": "GRACA DA PIPOCA",
        "numero": "19620",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PDT",
        "nome": "GRACE KELLY",
        "numero": "12010",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PRP",
        "nome": "GRAZIANO AMORIM",
        "numero": "44111",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PMN",
        "nome": "GRAZIELLE VIEIRA",
        "numero": "33051",
        "coligacao": "PMN"
    },
    {
        "partido": "PV",
        "nome": "GRAÇA FÁTIMA",
        "numero": "43444",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PEN",
        "nome": "GRAÇA LIMA",
        "numero": "51007",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PMDB",
        "nome": "GRAÇA THRAMM",
        "numero": "15999",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "GUDAO MIGUEL",
        "numero": "70155",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PTC",
        "nome": "GUIA HERMES FERNANDES",
        "numero": "36610",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "GUILHERME CORRETOR",
        "numero": "70662",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PHS",
        "nome": "GUILHERME PAPAGAIO",
        "numero": "31200",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PHS",
        "nome": "GUILHERME PIMPA",
        "numero": "31846",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PPL",
        "nome": "GUINA GUINÉ",
        "numero": "54501",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PRP",
        "nome": "GUNDA",
        "numero": "44369",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "DEM",
        "nome": "GUSTAVO CORREA",
        "numero": "25789",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTC",
        "nome": "GUSTAVO FURTADO",
        "numero": "36344",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PR",
        "nome": "GUSTAVO SANTANA",
        "numero": "22800",
        "coligacao": "PR"
    },
    {
        "partido": "PSDB",
        "nome": "GUSTAVO VALADARES",
        "numero": "45678",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTB",
        "nome": "GÍSELA KRIWITZKI",
        "numero": "14800",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PV",
        "nome": "HALPH CARVALHO",
        "numero": "43133",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PR",
        "nome": "HAMILTON VIGILANTE",
        "numero": "22617",
        "coligacao": "PR"
    },
    {
        "partido": "PHS",
        "nome": "HANDERSON MIRANDA",
        "numero": "31040",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PTN",
        "nome": "HANNA OLIVEIRA",
        "numero": "19650",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PTC",
        "nome": "HARLEY FABIANY",
        "numero": "36836",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PPL",
        "nome": "HAROLDO DARTAGNAN",
        "numero": "54800",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSB",
        "nome": "HAYZA FERNANDA",
        "numero": "40008",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTB",
        "nome": "HELBERTH MONTEIRO",
        "numero": "14911",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PRP",
        "nome": "HELDO ARMOND",
        "numero": "44444",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT",
        "nome": "HELENA VENTURA",
        "numero": "13025",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTB",
        "nome": "HELENICE MEIRELES",
        "numero": "14801",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PHS",
        "nome": "HELENICE SOUZA SILVA",
        "numero": "31257",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PEN",
        "nome": "HELI ANDRADE GRILO",
        "numero": "51111",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSOL",
        "nome": "HELI FIDELIS",
        "numero": "50600",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PT do B",
        "nome": "HELIA VILELA",
        "numero": "70132",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PMN",
        "nome": "HELIO CIOLETTI",
        "numero": "33013",
        "coligacao": "PMN"
    },
    {
        "partido": "PTC",
        "nome": "HELIO FERRO VELHO",
        "numero": "36258",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSD",
        "nome": "HELIO GOMES",
        "numero": "55456",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PP",
        "nome": "HELIO MACHADO",
        "numero": "11676",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTC",
        "nome": "HELIO PERERECA",
        "numero": "36125",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSOL",
        "nome": "HENRIQUE BRAZ",
        "numero": "50610",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PTN",
        "nome": "HILDA",
        "numero": "19370",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSL",
        "nome": "HILDA DA MAÇA DO AMOR",
        "numero": "17777",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PCO",
        "nome": "HIRON BERTOLDO",
        "numero": "29800",
        "coligacao": "PCO"
    },
    {
        "partido": "PR",
        "nome": "HITLER VAGNER DE OLIVEIRA",
        "numero": "22153",
        "coligacao": "PR"
    },
    {
        "partido": "PR",
        "nome": "HOMEM PIMENTA",
        "numero": "22007",
        "coligacao": "PR"
    },
    {
        "partido": "PHS",
        "nome": "HOT HOT DO AMENDOIM",
        "numero": "31112",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PTN",
        "nome": "HUGO LEANDRO",
        "numero": "19990",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSC",
        "nome": "HUMBERTO FALCAO",
        "numero": "20147",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "HÉLIO DA VAN",
        "numero": "13111",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "SD",
        "nome": "HÉRCULES CRISTO (CIGANO)",
        "numero": "77007",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PHS",
        "nome": "IGOR DE MATOS MONTEIRO",
        "numero": "31234",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSC",
        "nome": "ILACIR BICALHO",
        "numero": "20222",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PV",
        "nome": "INACIO FRANCO",
        "numero": "43000",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "DEM",
        "nome": "IONE PINHEIRO",
        "numero": "25141",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTB",
        "nome": "IR.  NEILO RODRIGUEES OLIVIERA",
        "numero": "14014",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PMDB",
        "nome": "IRAN BARBOSA",
        "numero": "15101",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PC do B",
        "nome": "IRISNALDA FERREIRA",
        "numero": "65075",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PMN",
        "nome": "IRMA GRACINHA",
        "numero": "33250",
        "coligacao": "PMN"
    },
    {
        "partido": "PEN",
        "nome": "IRMÃ IRACEMA",
        "numero": "51140",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PHS",
        "nome": "ISABEL DA SILVA IRSIGLER",
        "numero": "31300",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PV",
        "nome": "ISABEL VOVOZONA",
        "numero": "43888",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTC",
        "nome": "ISABELLA",
        "numero": "36015",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PC do B",
        "nome": "ISADORA SCORCIO",
        "numero": "65134",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PC do B",
        "nome": "ISAIS CARVALHO BRAÇO DE FERRO",
        "numero": "65553",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PMN",
        "nome": "ISAURO CALAIS",
        "numero": "33123",
        "coligacao": "PMN"
    },
    {
        "partido": "PTN",
        "nome": "ISMAEL CHUTEIRA",
        "numero": "19501",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PTC",
        "nome": "ISRAEL PEREIRA",
        "numero": "36999",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "ISRAEL PINHEIRO",
        "numero": "70194",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PHS",
        "nome": "ITALO ATILA",
        "numero": "31131",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PMDB",
        "nome": "IVAIR NOGUEIRA",
        "numero": "15222",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PHS",
        "nome": "IVALDO RODRIGUES",
        "numero": "31130",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSDB",
        "nome": "IVAN DE CASTRO",
        "numero": "45077",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTC",
        "nome": "IVANETE INACIO",
        "numero": "36036",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSL",
        "nome": "IVANI",
        "numero": "17234",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PC do B",
        "nome": "IVO MENDES",
        "numero": "65045",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PTB",
        "nome": "IZABEL -BELINHA",
        "numero": "14335",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PTN",
        "nome": "IZABELA",
        "numero": "19380",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSOL",
        "nome": "IZAIAS BORGES GONÇALVES",
        "numero": "50234",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSDB",
        "nome": "JACH SOUZA O GUERREIRO",
        "numero": "45115",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PEN",
        "nome": "JACONIAS GOMES",
        "numero": "51888",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PDT",
        "nome": "JACYR GUIDINE",
        "numero": "12341",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PDT",
        "nome": "JADE",
        "numero": "12012",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTN",
        "nome": "JADSON",
        "numero": "19670",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSDC",
        "nome": "JAIR AMBROSIO",
        "numero": "27615",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PPS",
        "nome": "JAIR CARRETEIRO",
        "numero": "23200",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSDC",
        "nome": "JAIR DE JESUS",
        "numero": "27177",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSB",
        "nome": "JAIR DI GREGÓRIO",
        "numero": "40500",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PC do B",
        "nome": "JAIR GOMES",
        "numero": "65345",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PDT",
        "nome": "JAN CARLOS BISPO",
        "numero": "12400",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTB",
        "nome": "JANE PROFESSORA",
        "numero": "14280",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PTN",
        "nome": "JANIO PAULO",
        "numero": "19500",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "DEM",
        "nome": "JAYRO LESSA",
        "numero": "25121",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "SD",
        "nome": "JEANE DE UBAI",
        "numero": "77789",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PC do B",
        "nome": "JEICE MARQUES",
        "numero": "65803",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PEN",
        "nome": "JEPHERSON NARCISO",
        "numero": "51015",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSB",
        "nome": "JESUS ALVES",
        "numero": "40020",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PC do B",
        "nome": "JOANA D'ARC",
        "numero": "65623",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PSC",
        "nome": "JOANA DO JURANDIR",
        "numero": "20600",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PRP",
        "nome": "JOAO CARLOS AMARAL",
        "numero": "44200",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT do B",
        "nome": "JOAO CLEBER",
        "numero": "70295",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PSL",
        "nome": "JOAO IZAEL QUERINO COELHO",
        "numero": "17022",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSOL",
        "nome": "JOAO RASGADO",
        "numero": "50560",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PTN",
        "nome": "JOAO SANTOS",
        "numero": "19012",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PTC",
        "nome": "JOEL MOREIRA FILHO",
        "numero": "36555",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTC",
        "nome": "JOICE BÁRBARA",
        "numero": "36022",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSOL",
        "nome": "JORGE METALURGICO",
        "numero": "50050",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PTC",
        "nome": "JORGINHO",
        "numero": "36000",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTN",
        "nome": "JOSE ACORDA BRASIL",
        "numero": "19008",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PHS",
        "nome": "JOSE AMÉRICO",
        "numero": "31031",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PRP",
        "nome": "JOSE CARLOS CRUZ",
        "numero": "44800",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSC",
        "nome": "JOSE CARVALHO ALVIM",
        "numero": "20200",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTN",
        "nome": "JOSE DOS SANTOS",
        "numero": "19030",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PTN",
        "nome": "JOSE GONSAGA",
        "numero": "19040",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PMN",
        "nome": "JOSE INACIO",
        "numero": "33144",
        "coligacao": "PMN"
    },
    {
        "partido": "PC do B",
        "nome": "JOSE LUIZ DE OLIVEIRA",
        "numero": "65651",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PPL",
        "nome": "JOSE PINTO",
        "numero": "54222",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PHS",
        "nome": "JOSE RODRIGUES - O INDIO",
        "numero": "31510",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT",
        "nome": "JOSIMAR DO PT",
        "numero": "13333",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PDT",
        "nome": "JOSÉ ANTÔNIO-MARUJO",
        "numero": "12648",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTB",
        "nome": "JOSÉ BERNARDO FIGUEIREDO",
        "numero": "14197",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PTC",
        "nome": "JOSÉ GERALDO",
        "numero": "36244",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSB",
        "nome": "JOSÉ MARIA LÍDER COMUNITÁRIO",
        "numero": "40333",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PR",
        "nome": "JOSÉ MÁRCIO",
        "numero": "22155",
        "coligacao": "PR"
    },
    {
        "partido": "PHS",
        "nome": "JOSÉ TIAGO DE CASTRO",
        "numero": "31001",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PC do B",
        "nome": "JOVINO PEREIRA",
        "numero": "65010",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PMDB",
        "nome": "JOÃO ALBERTO",
        "numero": "15118",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSDB",
        "nome": "JOÃO ANDRADE POETA DA VERDADE",
        "numero": "45699",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PC do B",
        "nome": "JOÃO BATISTA",
        "numero": "65300",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PDT",
        "nome": "JOÃO BATISTA RODRIGUES",
        "numero": "12122",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PMN",
        "nome": "JOÃO BAZAR",
        "numero": "33150",
        "coligacao": "PMN"
    },
    {
        "partido": "PSDB",
        "nome": "JOÃO CÉSAR DA ESCOLA",
        "numero": "45889",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PC do B",
        "nome": "JOÃO DO CIPÓ",
        "numero": "65888",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PEN",
        "nome": "JOÃO FERRÃO",
        "numero": "51100",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSDB",
        "nome": "JOÃO LEITE",
        "numero": "45777",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PMDB",
        "nome": "JOÃO MAGALHÃES",
        "numero": "15133",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSB",
        "nome": "JOÃO MARCOS LOBO",
        "numero": "40222",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSB",
        "nome": "JOÃO NETO",
        "numero": "40363",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PHS",
        "nome": "JOÃO OSCAR",
        "numero": "31070",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PCB",
        "nome": "JOÃO TORIBA",
        "numero": "21657",
        "coligacao": "PCB"
    },
    {
        "partido": "PSDB",
        "nome": "JOÃO VITOR XAVIER DA ITATIAIA",
        "numero": "45200",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSB",
        "nome": "JOÃO ÍNDIO",
        "numero": "40420",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PV",
        "nome": "JUAREZ JOSAFA",
        "numero": "43777",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PT do B",
        "nome": "JUAREZ TAVARES",
        "numero": "70577",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PV",
        "nome": "JUAREZ TÁVORA",
        "numero": "43436",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTN",
        "nome": "JUDISON DETETIVE",
        "numero": "19700",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PMDB",
        "nome": "JUDITH COELHO",
        "numero": "15145",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PPL",
        "nome": "JUDSON LANA",
        "numero": "54054",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSDB",
        "nome": "JUJU",
        "numero": "45258",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSB",
        "nome": "JULIA DOS ANJOS",
        "numero": "40234",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSC",
        "nome": "JULIANA BARBOSA",
        "numero": "20005",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTC",
        "nome": "JULIANA BENTO",
        "numero": "36191",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "JULIANA RODRIGUES",
        "numero": "70080",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PT",
        "nome": "JULIANA SILVA",
        "numero": "13430",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PC do B",
        "nome": "JULIO D. MELO",
        "numero": "65265",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PC do B",
        "nome": "JULIO DO ALTO",
        "numero": "65901",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PT",
        "nome": "JUNIA DE JESUS",
        "numero": "13782",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTB",
        "nome": "JUNIA SOBRINHO",
        "numero": "14601",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PTB",
        "nome": "JUNINHO ARAÚJO",
        "numero": "14000",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PHS",
        "nome": "JUNIOR RIBEIRO",
        "numero": "31120",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSC",
        "nome": "JUNYNHO MARTINS",
        "numero": "20000",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PC do B",
        "nome": "JUVENAL ABREU",
        "numero": "65800",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PSC",
        "nome": "JUVENAL DO CACHORRO QUENTE",
        "numero": "20021",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PMN",
        "nome": "JUVENIL LOPES FERREIRA",
        "numero": "33330",
        "coligacao": "PMN"
    },
    {
        "partido": "PEN",
        "nome": "JUVERLANDIO RODRIGUES",
        "numero": "51316",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PC do B",
        "nome": "JÔ DO PC DO B",
        "numero": "65001",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PMDB",
        "nome": "JÚNIOR DO SACOLÃO TOTAL",
        "numero": "15014",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTN",
        "nome": "KARINA DO SALAO",
        "numero": "19350",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PEN",
        "nome": "KATIA AUSTIN",
        "numero": "51050",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PRB",
        "nome": "KATIA BORDONI",
        "numero": "10222",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT",
        "nome": "KELLEN CRISTINA",
        "numero": "13190",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSB",
        "nome": "KELLY CRISTINA DE MORAES",
        "numero": "40013",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSDB",
        "nome": "KELLY MUNIZ",
        "numero": "45300",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PV",
        "nome": "KÁTIA",
        "numero": "43048",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PSC",
        "nome": "KÊNIA RIBEIRO",
        "numero": "20144",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PRP",
        "nome": "LADIM",
        "numero": "44381",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PPL",
        "nome": "LAERTE DO DEPÓSITO",
        "numero": "54170",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSDB",
        "nome": "LAFAYETTE ANDRADA",
        "numero": "45045",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSDB",
        "nome": "LAURINDO RODRIGUES",
        "numero": "45611",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PDT",
        "nome": "LAURO BRAZ",
        "numero": "12334",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PT",
        "nome": "LAYLA",
        "numero": "13866",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSB",
        "nome": "LEANDRO GENARO",
        "numero": "40444",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PRB",
        "nome": "LEDICE STELLA",
        "numero": "10510",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "LEIDIMAR ROCHA",
        "numero": "70184",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PSD",
        "nome": "LEILA ESTEVES",
        "numero": "55777",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PRP",
        "nome": "LEILA LOPES",
        "numero": "44555",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSB",
        "nome": "LEILA PETRATO",
        "numero": "40502",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT",
        "nome": "LELECO PIMENTEL",
        "numero": "13579",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSL",
        "nome": "LELIO PALANQUE",
        "numero": "17800",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "LENE TEIXEIRA",
        "numero": "13260",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "LEO BURGUES",
        "numero": "70000",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PEN",
        "nome": "LEO GUIMARÃES",
        "numero": "51032",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PDT",
        "nome": "LEO MOGOL",
        "numero": "12155",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PSDB",
        "nome": "LEONARDO MOREIRA",
        "numero": "45888",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PMDB",
        "nome": "LEONÍDIO BOUÇAS",
        "numero": "15130",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PEN",
        "nome": "LEOPOLDO GRAJEDA",
        "numero": "51515",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSB",
        "nome": "LERIN",
        "numero": "40696",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PC do B",
        "nome": "LEVY",
        "numero": "65111",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PSD",
        "nome": "LEY DO TRANSITO",
        "numero": "55700",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PHS",
        "nome": "LEÃO - JOSÉ CARLOS G SOUZA",
        "numero": "31415",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSDC",
        "nome": "LI",
        "numero": "27227",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PROS",
        "nome": "LIAN LUCAS",
        "numero": "90456",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PR",
        "nome": "LIETE FEITAL MOTTA",
        "numero": "22422",
        "coligacao": "PR"
    },
    {
        "partido": "PT do B",
        "nome": "LILI",
        "numero": "70010",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PP",
        "nome": "LILIAN VAZE",
        "numero": "11888",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTC",
        "nome": "LILIANE ALVES",
        "numero": "36082",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSB",
        "nome": "LINA BATISTA",
        "numero": "40021",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PR",
        "nome": "LINDA IZABEL",
        "numero": "22011",
        "coligacao": "PR"
    },
    {
        "partido": "PDT",
        "nome": "LINDALVA LEAO",
        "numero": "12084",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PT",
        "nome": "LINDOLFO DO SINDIFISCO",
        "numero": "13888",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PROS",
        "nome": "LIZA PRADO",
        "numero": "90123",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "LOURDES VITORINO",
        "numero": "70669",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PSC",
        "nome": "LOURIVAL",
        "numero": "20020",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSL",
        "nome": "LU FACHINELLI",
        "numero": "17190",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PEN",
        "nome": "LUCI MACHADO GODOI QUINTÃO",
        "numero": "51400",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PMN",
        "nome": "LUCIA HELENA",
        "numero": "33969",
        "coligacao": "PMN"
    },
    {
        "partido": "PDT",
        "nome": "LUCIANE ARCHETE",
        "numero": "12111",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PRP",
        "nome": "LUCIANO DIAS",
        "numero": "44666",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PV",
        "nome": "LUCIANO RIOS",
        "numero": "43456",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PPS",
        "nome": "LUCIENE FONSECA",
        "numero": "23023",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSOL",
        "nome": "LUIS EDUARDO",
        "numero": "50789",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSB",
        "nome": "LUISA CARLA GUIMARÃES",
        "numero": "40011",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT do B",
        "nome": "LUIZ ALBERTO",
        "numero": "70007",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PTB",
        "nome": "LUIZ CARLOS COSTA - TIO LULU",
        "numero": "14013",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "SD",
        "nome": "LUIZ CARLOS MIRANDA",
        "numero": "77123",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PR",
        "nome": "LUIZ COSTA",
        "numero": "22400",
        "coligacao": "PR"
    },
    {
        "partido": "PT do B",
        "nome": "LUIZ DA OTICA",
        "numero": "70450",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PROS",
        "nome": "LUIZ FERNANDO  - SERJUSMIG",
        "numero": "90190",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PHS",
        "nome": "LUIZ FERNANDO TECO",
        "numero": "31133",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSDB",
        "nome": "LUIZ HENRIQUE",
        "numero": "45151",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSDB",
        "nome": "LUIZ HUMBERTO CARNEIRO",
        "numero": "45999",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTN",
        "nome": "LUIZ LOPES PORCÃO",
        "numero": "19140",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PC do B",
        "nome": "LUIZ VAGNER",
        "numero": "65555",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PTB",
        "nome": "LUIZA DO HOSPITAL",
        "numero": "14100",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PC do B",
        "nome": "LUIZA LAFETA",
        "numero": "65123",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PHS",
        "nome": "LUIZA ROSA",
        "numero": "31099",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PTC",
        "nome": "LULA DA VAN",
        "numero": "36444",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTC",
        "nome": "LURDINHA",
        "numero": "36369",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSDC",
        "nome": "LÉIA CARDOSO",
        "numero": "27234",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PR",
        "nome": "LÉO PORTELA",
        "numero": "22333",
        "coligacao": "PR"
    },
    {
        "partido": "PHS",
        "nome": "LÍBIO DE SÁ VIEIRA",
        "numero": "31746",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PTC",
        "nome": "LÚCIA SOARES SILVA",
        "numero": "36400",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "MAGNO",
        "numero": "13450",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PV",
        "nome": "MAILCE MENDES",
        "numero": "43434",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PSB",
        "nome": "MAIRA PEREIRA",
        "numero": "40016",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PEN",
        "nome": "MAIZA VALÉRIO",
        "numero": "51150",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PV",
        "nome": "MANOEL CASTANON",
        "numero": "43011",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PHS",
        "nome": "MANOEL COSTA DOS SANTOS",
        "numero": "31431",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PRTB",
        "nome": "MANOEL DO IGUAÇU",
        "numero": "28111",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PMDB",
        "nome": "MARA",
        "numero": "15550",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "MARCAO CAMARA",
        "numero": "70111",
        "coligacao": "PTdo B"
    },
    {
        "partido": "SD",
        "nome": "MARCELO ALVES",
        "numero": "77890",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PSOL",
        "nome": "MARCELO DA CONTABILIDADE",
        "numero": "50250",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSC",
        "nome": "MARCELO DE ARAUJO",
        "numero": "20054",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSD",
        "nome": "MARCELO GIOVANINI DA VAN",
        "numero": "55111",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PC do B",
        "nome": "MARCIA FERREIRA",
        "numero": "65015",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PT do B",
        "nome": "MARCIA MELO",
        "numero": "70234",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PDT",
        "nome": "MARCILIA NEVES",
        "numero": "12567",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PSL",
        "nome": "MARCILIO DO DESINFETANTE",
        "numero": "17671",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PRB",
        "nome": "MARCIO LUBRIMAR",
        "numero": "10111",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PRP",
        "nome": "MARCIO LUIZ",
        "numero": "44784",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PEN",
        "nome": "MARCION FERREIRA",
        "numero": "51369",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSB",
        "nome": "MARCO ANTONIO FRANÇA",
        "numero": "40890",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSC",
        "nome": "MARCO ANTONIO PASTORAL DE RUA",
        "numero": "20033",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PRP",
        "nome": "MARCONI DO CAFE",
        "numero": "44333",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PMN",
        "nome": "MARCOS DO IORGUTE",
        "numero": "33100",
        "coligacao": "PMN"
    },
    {
        "partido": "PSB",
        "nome": "MARCOS FERREIRA DOS SANTOS",
        "numero": "40014",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PMDB",
        "nome": "MARCOS JUNQUEIRA",
        "numero": "15400",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT",
        "nome": "MARCOS MAIA",
        "numero": "13400",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PV",
        "nome": "MARCOS MORAIS",
        "numero": "43033",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PT do B",
        "nome": "MARCOS OLIVEIRA",
        "numero": "70147",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PTC",
        "nome": "MARCOS PAQUITO - POL. FEDERAL",
        "numero": "36345",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSL",
        "nome": "MARCOS PAULO ABREU",
        "numero": "17017",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PDT",
        "nome": "MARCOS SPINOLA",
        "numero": "12347",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PRP",
        "nome": "MARCUS VINICIUS FAVELADO",
        "numero": "44090",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT do B",
        "nome": "MARCUS VIRGILIO",
        "numero": "70070",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PV",
        "nome": "MARCÃO DA CNT AMBIENTAL",
        "numero": "43300",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PMDB",
        "nome": "MARCÍLIO MAGELA DE SOUZA",
        "numero": "15296",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PC do B",
        "nome": "MARGARETH DIAS",
        "numero": "65014",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PTN",
        "nome": "MARGOT PIOLI",
        "numero": "19233",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PT",
        "nome": "MARIA DA CONSOLAÇÃO MARZANO",
        "numero": "13910",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PC do B",
        "nome": "MARIA DE FATIMA",
        "numero": "65965",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PSB",
        "nome": "MARIA DO CARMO DA SILVA",
        "numero": "40009",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT",
        "nome": "MARIA GORETE",
        "numero": "13928",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT",
        "nome": "MARIA JOSE ADVOGADA",
        "numero": "13321",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PC do B",
        "nome": "MARIA JOSE CHIODI",
        "numero": "65002",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PSL",
        "nome": "MARIA JOSE RUGGIO STARLING",
        "numero": "17999",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PDT",
        "nome": "MARIA JOSE-GARI",
        "numero": "12900",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PT",
        "nome": "MARIA JOSÉ",
        "numero": "13815",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "DEM",
        "nome": "MARIA JOSÉ PEREIRA",
        "numero": "25667",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PRP",
        "nome": "MARIA LUCIA SANTOS",
        "numero": "44384",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PPS",
        "nome": "MARIA MARTA",
        "numero": "23010",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSDB",
        "nome": "MARIA SALES",
        "numero": "45444",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PT",
        "nome": "MARIA TEREZA LARA",
        "numero": "13151",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSOL",
        "nome": "MARIA ÂNGELA",
        "numero": "50321",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PHS",
        "nome": "MARIANA GUIMARÃES",
        "numero": "31451",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PC do B",
        "nome": "MARIANA LIDIA",
        "numero": "65074",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PDT",
        "nome": "MARILDA DINIZ",
        "numero": "12167",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTN",
        "nome": "MARILENE",
        "numero": "19250",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PC do B",
        "nome": "MARILENE MONT ALTO",
        "numero": "65038",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PRP",
        "nome": "MARILIA ALVES",
        "numero": "44999",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSB",
        "nome": "MARILIA CURI",
        "numero": "40007",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PEN",
        "nome": "MARILIA PEDROSO",
        "numero": "51770",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PEN",
        "nome": "MARILLAC",
        "numero": "51250",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PTN",
        "nome": "MARINALVA",
        "numero": "19018",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PDT",
        "nome": "MARINHO",
        "numero": "12163",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTB",
        "nome": "MARINÊS GONÇALVES",
        "numero": "14638",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PC do B",
        "nome": "MARIO HENRIQUE CAIXA",
        "numero": "65000",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PT",
        "nome": "MARIO LUCIO QUINTAO SOARES",
        "numero": "13213",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTC",
        "nome": "MARLA",
        "numero": "36541",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PV",
        "nome": "MARLENE",
        "numero": "43067",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PMDB",
        "nome": "MARLENE CARVALHO",
        "numero": "15115",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PHS",
        "nome": "MARLON GOUVEIA",
        "numero": "31456",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PPS",
        "nome": "MARLOS FERNANDES",
        "numero": "23130",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSOL",
        "nome": "MAROLINA",
        "numero": "50400",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PTB",
        "nome": "MARQUES ABREU",
        "numero": "14009",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PSC",
        "nome": "MARQUINHO DO MOTOTAXI",
        "numero": "20650",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "MARQUINHO DO PT",
        "numero": "13033",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PRP",
        "nome": "MARROM",
        "numero": "44700",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PTN",
        "nome": "MARTA AMORIM",
        "numero": "19360",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PMDB",
        "nome": "MARTA BRANDÃO",
        "numero": "15615",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PRB",
        "nome": "MARTA LANCA",
        "numero": "10345",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PV",
        "nome": "MARTIM ANDRADA",
        "numero": "43001",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PT do B",
        "nome": "MARY SANTOS",
        "numero": "70345",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PT",
        "nome": "MARÍLIA CAMPOS",
        "numero": "13900",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PC do B",
        "nome": "MATA COBRA",
        "numero": "65500",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PSDB",
        "nome": "MATEUS SIMÕES",
        "numero": "45456",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PDT",
        "nome": "MATIAS-O DEP. DAS COMUNIDADES",
        "numero": "12112",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PDT",
        "nome": "MATILDE PAULI",
        "numero": "12286",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PC do B",
        "nome": "MAURICIO MINÉIRO",
        "numero": "65330",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PDT",
        "nome": "MAURICIO RIBEIRO",
        "numero": "12132",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PROS",
        "nome": "MAURICIO TUTTY",
        "numero": "90789",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTC",
        "nome": "MAURÍLIO ARRUDA",
        "numero": "36111",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSB",
        "nome": "MAX SARDINHA",
        "numero": "40111",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT do B",
        "nome": "MEIRE MONICA",
        "numero": "70701",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PMN",
        "nome": "MEIRE VALENTIM",
        "numero": "33562",
        "coligacao": "PMN"
    },
    {
        "partido": "PRB",
        "nome": "MEIRI",
        "numero": "10369",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PRTB",
        "nome": "MELO PROFETA",
        "numero": "28666",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSL",
        "nome": "MESSIAS CORREA",
        "numero": "17147",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PC do B",
        "nome": "MESTRE URSO",
        "numero": "65777",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PRB",
        "nome": "MICHEL IRRTHUM",
        "numero": "10000",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "DEM",
        "nome": "MIL DOS CORREIOS",
        "numero": "25800",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTB",
        "nome": "MILHO BORRACHEIRO",
        "numero": "14035",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PMN",
        "nome": "MILTON DA RECICLAGEM",
        "numero": "33033",
        "coligacao": "PMN"
    },
    {
        "partido": "PTB",
        "nome": "MILTON NASCIMENTO",
        "numero": "14555",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PTC",
        "nome": "MIRIAM",
        "numero": "36377",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PMN",
        "nome": "MIRIAM FONSECA",
        "numero": "33692",
        "coligacao": "PMN"
    },
    {
        "partido": "PTN",
        "nome": "MIRIAN",
        "numero": "19070",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSB",
        "nome": "MISIA DAMARES",
        "numero": "40005",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTB",
        "nome": "MISSIONÁRIO MARCIO SANTIAGO",
        "numero": "14789",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PTN",
        "nome": "MOACIR FIGUEIREDO",
        "numero": "19888",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSDB",
        "nome": "MOURAO",
        "numero": "45123",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PRP",
        "nome": "MUCIO TREM MINEIRO",
        "numero": "44777",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PV",
        "nome": "MUCURI",
        "numero": "43002",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PMN",
        "nome": "MURILO",
        "numero": "33600",
        "coligacao": "PMN"
    },
    {
        "partido": "PMDB",
        "nome": "MÁRCIA NUNES",
        "numero": "15002",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTC",
        "nome": "MÁRCIA SOARES",
        "numero": "36008",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PR",
        "nome": "MÁRCIO ROBERTO",
        "numero": "22300",
        "coligacao": "PR"
    },
    {
        "partido": "PDT",
        "nome": "NA DE MATEUS",
        "numero": "12712",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTN",
        "nome": "NATAL CARDORINI",
        "numero": "19999",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSL",
        "nome": "NEIA DA CRIANÇA FELIZ",
        "numero": "17224",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSD",
        "nome": "NEIDER MOREIRA",
        "numero": "55000",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PV",
        "nome": "NEIDER NAGIB",
        "numero": "43443",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PT do B",
        "nome": "NEILA BARCELOS",
        "numero": "70112",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PP",
        "nome": "NEILANDO PIMENTA",
        "numero": "11789",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTN",
        "nome": "NEIVA",
        "numero": "19400",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PMDB",
        "nome": "NELCI BARREIROS",
        "numero": "15160",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PR",
        "nome": "NELINHA",
        "numero": "22280",
        "coligacao": "PR"
    },
    {
        "partido": "PT do B",
        "nome": "NELSON ESPIGÃO",
        "numero": "70888",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PTC",
        "nome": "NETO TANNUS",
        "numero": "36666",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "NEUILA SILVA - NEILDA - NEILA",
        "numero": "70369",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PPS",
        "nome": "NEUSA GUILHERME",
        "numero": "23555",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSOL",
        "nome": "NEUZA ZUZU",
        "numero": "50555",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PTC",
        "nome": "NEYVAL",
        "numero": "36456",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "NILSIN DA TRANSNIL 'É DE DEUS'",
        "numero": "70128",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PEN",
        "nome": "NILSON PEREIRA",
        "numero": "51500",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PMN",
        "nome": "NILTON ANTONIO",
        "numero": "33222",
        "coligacao": "PMN"
    },
    {
        "partido": "PT do B",
        "nome": "NILTON ROBERTO",
        "numero": "70950",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PHS",
        "nome": "NILZA DE FÁTIMA",
        "numero": "31555",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSL",
        "nome": "NITO NERY",
        "numero": "17555",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PC do B",
        "nome": "NIVALDO DO BOTA FOGO",
        "numero": "65020",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PTB",
        "nome": "NIZINHO",
        "numero": "14112",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PP",
        "nome": "NOEME MARTINS",
        "numero": "11213",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSC",
        "nome": "NORALDINO JUNIOR",
        "numero": "20123",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "DEM",
        "nome": "NORMA APARECIDA",
        "numero": "25444",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PDT",
        "nome": "NOZINHO",
        "numero": "12000",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PPL",
        "nome": "ODAIR SANTOS JUNIOR",
        "numero": "54021",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTC",
        "nome": "OLINTO GODINHO",
        "numero": "36210",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSB",
        "nome": "OLIVIA TEIXEIRA DO PRADO",
        "numero": "40401",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTB",
        "nome": "ONOFRE DE ANDRADE O TOCA FITA",
        "numero": "14200",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PMDB",
        "nome": "OSVALDO BILISQUETE",
        "numero": "15456",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSB",
        "nome": "OSVALDO LOPES",
        "numero": "40112",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSB",
        "nome": "OSVALDO SILVA",
        "numero": "40040",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTN",
        "nome": "PABLO",
        "numero": "19111",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PV",
        "nome": "PABLO CESAR - PABLITO",
        "numero": "43112",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PRP",
        "nome": "PABLO STARLING BERGAMINI",
        "numero": "44445",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PR",
        "nome": "PACOEL SOUZA",
        "numero": "22555",
        "coligacao": "PR"
    },
    {
        "partido": "PC do B",
        "nome": "PADRE EDUARDO INACIO",
        "numero": "65222",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PT",
        "nome": "PADRE ELSON",
        "numero": "13140",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PMDB",
        "nome": "PALMIRA FELICIANO DA SILVA",
        "numero": "15170",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PPS",
        "nome": "PALOMAR VARGAS",
        "numero": "23233",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PC do B",
        "nome": "PANIZOLO",
        "numero": "65789",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PTC",
        "nome": "PARDAL",
        "numero": "36661",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSL",
        "nome": "PARDAL VIEIRA",
        "numero": "17973",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PRB",
        "nome": "PASSARINHO",
        "numero": "10951",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PMN",
        "nome": "PASTOR CARLOS",
        "numero": "33300",
        "coligacao": "PMN"
    },
    {
        "partido": "PTN",
        "nome": "PASTOR JOAO",
        "numero": "19100",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PRTB",
        "nome": "PASTOR MATOZINHO",
        "numero": "28100",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTC",
        "nome": "PASTOR MIQUÉIAS",
        "numero": "36010",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "PASTOR ROBERTO JUSTO",
        "numero": "70987",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PTC",
        "nome": "PASTOR RODRIGO HENRIQUE",
        "numero": "36223",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "PASTOR TIAO BITENCOURT",
        "numero": "70610",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PMDB",
        "nome": "PASTOR VANDERLEI MIRANDA",
        "numero": "15000",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSC",
        "nome": "PASTORA MARIA",
        "numero": "20101",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "PASTORA MIRIAN ROCHA",
        "numero": "70330",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PSC",
        "nome": "PATRICE",
        "numero": "20007",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PEN",
        "nome": "PATRICIA NESSIM",
        "numero": "51112",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT do B",
        "nome": "PATRICIA ROSA",
        "numero": "70005",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PSC",
        "nome": "PATRICIA SOUZA",
        "numero": "20015",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PR",
        "nome": "PAULINHA",
        "numero": "22727",
        "coligacao": "PR"
    },
    {
        "partido": "PP",
        "nome": "PAULINHO",
        "numero": "11999",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSDC",
        "nome": "PAULINHO CABEÇÃO",
        "numero": "27080",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PDT",
        "nome": "PAULINHO COSTA",
        "numero": "12611",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PMN",
        "nome": "PAULINHO COUROMINAS",
        "numero": "33456",
        "coligacao": "PMN"
    },
    {
        "partido": "PTN",
        "nome": "PAULO",
        "numero": "19003",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PEN",
        "nome": "PAULO AGOSTINHO",
        "numero": "51031",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PEN",
        "nome": "PAULO BARBOSA",
        "numero": "51200",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSDB",
        "nome": "PAULO COUTINHO",
        "numero": "45007",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSB",
        "nome": "PAULO DJ A COISA",
        "numero": "40047",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT",
        "nome": "PAULO GUEDES",
        "numero": "13789",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT",
        "nome": "PAULO LAMAC",
        "numero": "13444",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PMN",
        "nome": "PAULO ROBSON",
        "numero": "33180",
        "coligacao": "PMN"
    },
    {
        "partido": "PT",
        "nome": "PAULO TADEU",
        "numero": "13313",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PPS",
        "nome": "PEDRO CAMPOS",
        "numero": "23500",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PMN",
        "nome": "PEDRO COIMBRA PROFESSOR",
        "numero": "33000",
        "coligacao": "PMN"
    },
    {
        "partido": "PTC",
        "nome": "PEDRO FELIPE",
        "numero": "36651",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTC",
        "nome": "PEDRO GONÇALVES (PEDRINHO)",
        "numero": "36146",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTB",
        "nome": "PEDRO O IKO",
        "numero": "14258",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PCB",
        "nome": "PEDRO RENNO",
        "numero": "21223",
        "coligacao": "PCB"
    },
    {
        "partido": "PT do B",
        "nome": "PETERSON SOARES",
        "numero": "70700",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PP",
        "nome": "PINDUCA",
        "numero": "11456",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PT",
        "nome": "POMPILIO CANAVEZ",
        "numero": "13122",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "DEM",
        "nome": "PR. WALDONIR SOARES",
        "numero": "25112",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PMDB",
        "nome": "PRESBÍTERO CARLOS EUFRÁSIO",
        "numero": "15677",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSB",
        "nome": "PRETA BARBOSA",
        "numero": "40122",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTC",
        "nome": "PRISCILA",
        "numero": "36741",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTB",
        "nome": "PRISCILA AQUILA",
        "numero": "14634",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PT do B",
        "nome": "PROF JAMIL AGRº",
        "numero": "70514",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PRTB",
        "nome": "PROF. DERIVALDO DAMAZIO",
        "numero": "28050",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PRTB",
        "nome": "PROF. GILSON LUNA",
        "numero": "28028",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSOL",
        "nome": "PROFA. ISABEL",
        "numero": "50005",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PRB",
        "nome": "PROFESSOR  ADILSON PUMA",
        "numero": "10456",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PCB",
        "nome": "PROFESSOR AGNALDO",
        "numero": "21478",
        "coligacao": "PCB"
    },
    {
        "partido": "PROS",
        "nome": "PROFESSOR GLEWTON",
        "numero": "90555",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PEN",
        "nome": "PROFESSOR JONATHAN SANTIAGO",
        "numero": "51900",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT do B",
        "nome": "PROFESSOR LEO SANTOS",
        "numero": "70456",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PSOL",
        "nome": "PROFESSOR LUIZ",
        "numero": "50501",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PMDB",
        "nome": "PROFESSOR MARCOS MAURÍCIO",
        "numero": "15151",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT",
        "nome": "PROFESSOR NEIVALDO",
        "numero": "13150",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "PROFESSOR PAULINHO DA LUZ",
        "numero": "70444",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PDT",
        "nome": "PROFESSOR PAULO CÉSAR",
        "numero": "12077",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PCB",
        "nome": "PROFESSOR PAULO RAMOS",
        "numero": "21234",
        "coligacao": "PCB"
    },
    {
        "partido": "PSB",
        "nome": "PROFESSOR RODRIGO BOLIVAR",
        "numero": "40006",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTN",
        "nome": "PROFESSOR RONALDO",
        "numero": "19548",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PMN",
        "nome": "PROFESSORA MAGDA",
        "numero": "33221",
        "coligacao": "PMN"
    },
    {
        "partido": "PTC",
        "nome": "PROFESSORA VALÉRIA",
        "numero": "36777",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PMDB",
        "nome": "PROMOTOR DE JUSTIÇA JOSÉ MARIA",
        "numero": "15500",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PPL",
        "nome": "RAFAEL",
        "numero": "54077",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT do B",
        "nome": "RAFAEL MARTINS",
        "numero": "70031",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PTC",
        "nome": "RAIMUNDO NONATO",
        "numero": "36987",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "RAISSA PEREIRA",
        "numero": "13615",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PEN",
        "nome": "RAMIRO CÉSAR",
        "numero": "51180",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSOL",
        "nome": "RANA",
        "numero": "50200",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PV",
        "nome": "RAPHAEL PRADO",
        "numero": "43043",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PSDB",
        "nome": "RAQUEL SERRA",
        "numero": "45333",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTC",
        "nome": "RAUL AIRES",
        "numero": "36101",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PV",
        "nome": "RAYONE MARQUES",
        "numero": "43222",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PSB",
        "nome": "REBECKA NIZIA",
        "numero": "40777",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PRB",
        "nome": "REGINA COSTA",
        "numero": "10020",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PHS",
        "nome": "REGINALDO PEREIRA ESPINDO",
        "numero": "31820",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PEN",
        "nome": "REJS",
        "numero": "51661",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PTC",
        "nome": "RELINA",
        "numero": "36080",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "RENA",
        "numero": "70033",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PT do B",
        "nome": "RENATA MACHADO",
        "numero": "70555",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PT do B",
        "nome": "RENATA MIRANDA",
        "numero": "70707",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PC do B",
        "nome": "RENATA RAMOS",
        "numero": "65257",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PCB",
        "nome": "RENATA REGINA",
        "numero": "21212",
        "coligacao": "PCB"
    },
    {
        "partido": "PC do B",
        "nome": "RENATA ROSA",
        "numero": "65656",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PMDB",
        "nome": "RENATA SANTOS",
        "numero": "15800",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PRP",
        "nome": "RENATINHO DA SAO",
        "numero": "44000",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PTB",
        "nome": "RENATINHO MAGALHAES",
        "numero": "14567",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PSC",
        "nome": "RENATO ASSUNÇÃO",
        "numero": "20170",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTB",
        "nome": "RENATO LOSCHA",
        "numero": "14250",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PPS",
        "nome": "RENATO SÉRGIO",
        "numero": "23900",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTN",
        "nome": "RENY DO CAMARGO",
        "numero": "19010",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PTC",
        "nome": "RICARDINHO",
        "numero": "36789",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "RICARDO BERNADÃO",
        "numero": "13360",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "RICARDO COTONETE",
        "numero": "70177",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PT",
        "nome": "RICARDO DA EMEX",
        "numero": "13777",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PC do B",
        "nome": "RICARDO FARIA",
        "numero": "65444",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PSOL",
        "nome": "RICARDO TAKAYUKI",
        "numero": "50000",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PRTB",
        "nome": "RICARDÃO",
        "numero": "28280",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PRB",
        "nome": "RINALDO DOS SANTOS XAVIER",
        "numero": "10113",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PC do B",
        "nome": "RITA LIMA",
        "numero": "65365",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PTN",
        "nome": "ROBERTO ANDRADE",
        "numero": "19222",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSB",
        "nome": "ROBERTO BIN LADEN",
        "numero": "40660",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTN",
        "nome": "ROBERTO BOTELHO",
        "numero": "19450",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PT",
        "nome": "ROBERTO CARVALHO",
        "numero": "13480",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTC",
        "nome": "ROBERTO VASCON",
        "numero": "36600",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PR",
        "nome": "ROBIN TROPICAL",
        "numero": "22600",
        "coligacao": "PR"
    },
    {
        "partido": "PC do B",
        "nome": "ROBINHO PQD FOREVER",
        "numero": "65200",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PT do B",
        "nome": "ROBSON SOUZINHA",
        "numero": "70168",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PHS",
        "nome": "ROBSON VILELA - ESQUERDINHA",
        "numero": "31374",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSL",
        "nome": "RODNEI ALVES",
        "numero": "17027",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSL",
        "nome": "RODOLFO DO GÁS",
        "numero": "17456",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PC do B",
        "nome": "RODRIGO MELO FRANCO",
        "numero": "65565",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PTC",
        "nome": "RODRIGO ROSATTI",
        "numero": "36256",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTC",
        "nome": "RODRIGUINHO DO CAVACO",
        "numero": "36114",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PPL",
        "nome": "ROGER DO COLÉGIO CÉU",
        "numero": "54321",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT",
        "nome": "ROGERIO CORREIA",
        "numero": "13123",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSOL",
        "nome": "ROGERIO PINTO DETETIZADOR",
        "numero": "50800",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PT do B",
        "nome": "ROGERIO SILVA",
        "numero": "70900",
        "coligacao": "PTdo B"
    },
    {
        "partido": "DEM",
        "nome": "ROGÉRIO ANÍCIO",
        "numero": "25015",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSL",
        "nome": "ROGÉRIO SANDI",
        "numero": "17067",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PEN",
        "nome": "ROGÉRIO SUÍNO",
        "numero": "51444",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PC do B",
        "nome": "ROMINHO DUARTE",
        "numero": "65600",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PC do B",
        "nome": "ROMUALDO",
        "numero": "65689",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PP",
        "nome": "ROMÃO",
        "numero": "11111",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PRP",
        "nome": "RONALDO AIRES DRUMOND",
        "numero": "44644",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT",
        "nome": "RONALDO LOPES PADRE RONALDO",
        "numero": "13513",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTB",
        "nome": "RONALDO MOOL",
        "numero": "14600",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PEN",
        "nome": "RONALDO NASCIMENTO",
        "numero": "51777",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PTN",
        "nome": "RONALDO PAIVA",
        "numero": "19660",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PPL",
        "nome": "RONILZE MARTINS",
        "numero": "54522",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PMN",
        "nome": "ROQUE SALDANHA",
        "numero": "33789",
        "coligacao": "PMN"
    },
    {
        "partido": "PPL",
        "nome": "ROSA",
        "numero": "54888",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PPS",
        "nome": "ROSANA LIMA",
        "numero": "23333",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PRP",
        "nome": "ROSANA MACARRÃO",
        "numero": "44589",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PTB",
        "nome": "ROSANGELA MARTELETO",
        "numero": "14570",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PROS",
        "nome": "ROSANGELA REIS",
        "numero": "90151",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PR",
        "nome": "ROSE CÂMARA",
        "numero": "22220",
        "coligacao": "PR"
    },
    {
        "partido": "PMN",
        "nome": "ROSELI DO MOTO TÁXI",
        "numero": "33018",
        "coligacao": "PMN"
    },
    {
        "partido": "PDT",
        "nome": "ROSILDA MENDES",
        "numero": "12888",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PEN",
        "nome": "ROSILEY",
        "numero": "51591",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSB",
        "nome": "ROSIMEIRE FELIZARDO",
        "numero": "40550",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSL",
        "nome": "ROVILSON DE LIMA",
        "numero": "17100",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSL",
        "nome": "ROXINHO DE TECO",
        "numero": "17580",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTN",
        "nome": "ROY DETETIVE",
        "numero": "19600",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSB",
        "nome": "ROZANGELA BITENCORT",
        "numero": "40010",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PEN",
        "nome": "RUBENS HERBERT",
        "numero": "51234",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PROS",
        "nome": "RUTE GUEDES",
        "numero": "90109",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSDB",
        "nome": "RÔMULO VIEGAS",
        "numero": "45555",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSC",
        "nome": "SAMANTHA DINIZ",
        "numero": "20016",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PHS",
        "nome": "SAMUEL GERALDO BRAGA",
        "numero": "31177",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PR",
        "nome": "SAMUEL PEREIRA",
        "numero": "22700",
        "coligacao": "PR"
    },
    {
        "partido": "PSC",
        "nome": "SANCHIRLES NOGUEIRA",
        "numero": "20104",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTN",
        "nome": "SANDRA",
        "numero": "19391",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PV",
        "nome": "SANDRA",
        "numero": "43236",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PMN",
        "nome": "SANDRA LUCENA",
        "numero": "33912",
        "coligacao": "PMN"
    },
    {
        "partido": "PSD",
        "nome": "SANDRA MESQUITA",
        "numero": "55007",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSB",
        "nome": "SANDRA RODRIGUES",
        "numero": "40644",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSC",
        "nome": "SANDRO LIMA",
        "numero": "20190",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTN",
        "nome": "SAPORI",
        "numero": "19433",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PHS",
        "nome": "SARGENTO AGUILAR",
        "numero": "31500",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PV",
        "nome": "SARGENTO ANA PAULA",
        "numero": "43193",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PT do B",
        "nome": "SARGENTO ANDERSON",
        "numero": "70193",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PSB",
        "nome": "SARGENTO ARAUJO",
        "numero": "40193",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSB",
        "nome": "SARGENTO CAMILO",
        "numero": "40100",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PPL",
        "nome": "SARGENTO CARDOSO",
        "numero": "54193",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PMDB",
        "nome": "SARGENTO FRANÇA",
        "numero": "15290",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTC",
        "nome": "SARGENTO MARCELO",
        "numero": "36888",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "SARGENTO MILVIO",
        "numero": "70170",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PRB",
        "nome": "SARGENTO ROCHA",
        "numero": "10360",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PC do B",
        "nome": "SAUL DAS PARABÓLICAS",
        "numero": "65200",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PMN",
        "nome": "SAYONARA CRUZ",
        "numero": "33061",
        "coligacao": "PMN"
    },
    {
        "partido": "PEN",
        "nome": "SERGIO BIGODE",
        "numero": "51451",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PV",
        "nome": "SERGIO FERNANDO PINHO TAVARES",
        "numero": "43333",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PSB",
        "nome": "SERGIO MENDES",
        "numero": "40456",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSL",
        "nome": "SERGIO PEREIRA",
        "numero": "17617",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PHS",
        "nome": "SERGIO TEIXEIRA",
        "numero": "31823",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PTB",
        "nome": "SEU TIÃO",
        "numero": "14220",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PDT",
        "nome": "SHANNA DIAS",
        "numero": "12444",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PMN",
        "nome": "SHEILA GOMES",
        "numero": "33832",
        "coligacao": "PMN"
    },
    {
        "partido": "PC do B",
        "nome": "SILMA ALVES",
        "numero": "65124",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PPS",
        "nome": "SILVANA DAMASIO",
        "numero": "23013",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTB",
        "nome": "SILVANA NUNES",
        "numero": "14999",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PTC",
        "nome": "SILVANA ZANDONA",
        "numero": "36356",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "SILVANO MAGRÃO",
        "numero": "70400",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PT do B",
        "nome": "SILVIO ANDRADE",
        "numero": "70879",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PTB",
        "nome": "SILVIO GAUCHO",
        "numero": "14321",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PR",
        "nome": "SIMOME DORNAS",
        "numero": "22676",
        "coligacao": "PR"
    },
    {
        "partido": "PC do B",
        "nome": "SIMONE LEITE",
        "numero": "65127",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PT do B",
        "nome": "SIMONE SALES",
        "numero": "70570",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PPS",
        "nome": "SIMONE SANTANA",
        "numero": "23113",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTC",
        "nome": "SINVAL LADEIRA",
        "numero": "36037",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PEN",
        "nome": "SIRLENE CADEIRANTE",
        "numero": "51051",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PDT",
        "nome": "SOCORRO DIVINOLÂNDIA",
        "numero": "12789",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PMN",
        "nome": "SOLANGE MARTINS",
        "numero": "33715",
        "coligacao": "PMN"
    },
    {
        "partido": "PTC",
        "nome": "SONIA DIAS",
        "numero": "36054",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PPS",
        "nome": "SONIA ISAAC",
        "numero": "23147",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PHS",
        "nome": "SONIA TAVARES",
        "numero": "31932",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PCB",
        "nome": "SOUZA DANTAS",
        "numero": "21000",
        "coligacao": "PCB"
    },
    {
        "partido": "PT do B",
        "nome": "SUCUPIRA",
        "numero": "70146",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PC do B",
        "nome": "SUELI PEREIRA",
        "numero": "65100",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PT",
        "nome": "SUELY",
        "numero": "13755",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTN",
        "nome": "SUZANA GALLO ART",
        "numero": "19340",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PTN",
        "nome": "SUZY",
        "numero": "19065",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PMDB",
        "nome": "SÁVIO SOUZA CRUZ",
        "numero": "15900",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTC",
        "nome": "SÔNIA GOMES",
        "numero": "36321",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PMDB",
        "nome": "TADEUZINHO",
        "numero": "15300",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PV",
        "nome": "TANIA CASTRO",
        "numero": "43023",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTB",
        "nome": "TANIA ROSA",
        "numero": "14575",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PT",
        "nome": "TARCISIO CAIXETA",
        "numero": "13500",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PDT",
        "nome": "TARCÍSIO DO BELLAVINHA",
        "numero": "12366",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PV",
        "nome": "TATACAR",
        "numero": "43010",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTN",
        "nome": "TATIANA",
        "numero": "19006",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSC",
        "nome": "TATIANA DE SOUZA",
        "numero": "20444",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "SD",
        "nome": "TATY DA FORÇA",
        "numero": "77000",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PT do B",
        "nome": "TEIA DOS PORFIRIOS",
        "numero": "70580",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PRTB",
        "nome": "TENENTE HAMILTON",
        "numero": "28193",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT do B",
        "nome": "TENORIO CAVALCANTI",
        "numero": "70022",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PROS",
        "nome": "TERAPEUTA DO JALECO ROSA",
        "numero": "90999",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PR",
        "nome": "TEREZA NAVARRO",
        "numero": "22234",
        "coligacao": "PR"
    },
    {
        "partido": "PSD",
        "nome": "TEREZINHA DE JESUS",
        "numero": "55060",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PT",
        "nome": "TEREZINHA LOMBARDI",
        "numero": "13741",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PTN",
        "nome": "TETEO DA PPL",
        "numero": "19790",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PMN",
        "nome": "TEÚ",
        "numero": "33031",
        "coligacao": "PMN"
    },
    {
        "partido": "PTB",
        "nome": "THAIS ANDREA",
        "numero": "14796",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PT",
        "nome": "THAIS MENEZES",
        "numero": "13643",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSC",
        "nome": "THALES RODRIGUES",
        "numero": "20700",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PEN",
        "nome": "THIAGO COIMBRA",
        "numero": "51789",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PPS",
        "nome": "THIAGO COTA",
        "numero": "23456",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PR",
        "nome": "THIAGO MARTINS",
        "numero": "22015",
        "coligacao": "PR"
    },
    {
        "partido": "PSOL",
        "nome": "THIAGO SOARES",
        "numero": "50500",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PDT",
        "nome": "THOMPSON COELHO",
        "numero": "12333",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PSC",
        "nome": "TIA CIDA",
        "numero": "20620",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PEN",
        "nome": "TIA ELZA",
        "numero": "51114",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PV",
        "nome": "TIAGO ULISSES",
        "numero": "43111",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PEN",
        "nome": "TIAOZINHO CUEM CUEM",
        "numero": "51222",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PRP",
        "nome": "TIAOZINHO DO SINDICATO",
        "numero": "44123",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PMN",
        "nome": "TIETA",
        "numero": "33680",
        "coligacao": "PMN"
    },
    {
        "partido": "PRP",
        "nome": "TINA",
        "numero": "44321",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PRB",
        "nome": "TINTINHA",
        "numero": "10234",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PPL",
        "nome": "TIO ELVIS",
        "numero": "54007",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSDB",
        "nome": "TITO TORRES",
        "numero": "45240",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PTC",
        "nome": "TIÃO DA ANTENA",
        "numero": "36147",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PHS",
        "nome": "TIÃO DO BARREIRO",
        "numero": "31129",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PPS",
        "nome": "TJ",
        "numero": "23743",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PSL",
        "nome": "TOBIAS",
        "numero": "17899",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PDT",
        "nome": "TOMAZ BRUM",
        "numero": "12321",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PT do B",
        "nome": "TONHAO CABELEIREIRO",
        "numero": "70670",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PRP",
        "nome": "TONINHO DO CARTUCHO",
        "numero": "44844",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PMDB",
        "nome": "TONINHO ZEITUNE",
        "numero": "15250",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PMDB",
        "nome": "TONY CARLOS",
        "numero": "15200",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PC do B",
        "nome": "TORORÓ",
        "numero": "65013",
        "coligacao": "PCdo B"
    },
    {
        "partido": "DEM",
        "nome": "TUPI SILVEIRA",
        "numero": "25025",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PR",
        "nome": "TÂNIA SANTANA",
        "numero": "22002",
        "coligacao": "PR"
    },
    {
        "partido": "PT do B",
        "nome": "UILMA GOMES",
        "numero": "70567",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PR",
        "nome": "ULDA",
        "numero": "22258",
        "coligacao": "PR"
    },
    {
        "partido": "PT",
        "nome": "ULYSSES GOMES",
        "numero": "13077",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PMN",
        "nome": "VAGUINHO",
        "numero": "33633",
        "coligacao": "PMN"
    },
    {
        "partido": "PTB",
        "nome": "VAIR DUTRA",
        "numero": "14678",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PTC",
        "nome": "VAL DO SALÃO",
        "numero": "36045",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PC do B",
        "nome": "VALDIRENE",
        "numero": "65432",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PSDB",
        "nome": "VALDIRENI CHISPITA",
        "numero": "45900",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PT do B",
        "nome": "VALDIVINO GUIMARAES",
        "numero": "70676",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PR",
        "nome": "VALDOMIRO",
        "numero": "22322",
        "coligacao": "PR"
    },
    {
        "partido": "PRP",
        "nome": "VANDA MARIA ALVES",
        "numero": "44077",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT do B",
        "nome": "VANDERLAN DA FARMACIA",
        "numero": "70870",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PROS",
        "nome": "VANDERLEI DELEI",
        "numero": "90300",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSOL",
        "nome": "VANDERLIN",
        "numero": "50444",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSTU",
        "nome": "VANESSA PORTUGAL",
        "numero": "16123",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PROS",
        "nome": "VARLEY MORAES",
        "numero": "90911",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PHS",
        "nome": "VERA LÚCIA",
        "numero": "31149",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PR",
        "nome": "VERA PRBH",
        "numero": "22580",
        "coligacao": "PR"
    },
    {
        "partido": "PHS",
        "nome": "VIGILANTE EDIMILSON",
        "numero": "31400",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PT do B",
        "nome": "VILMO GOMES",
        "numero": "70040",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PSC",
        "nome": "VINICIUS DE RESENDE",
        "numero": "20333",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSL",
        "nome": "VIRGINIA DO VALE",
        "numero": "17890",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PHS",
        "nome": "VITOR CARNEIRO",
        "numero": "31505",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PV",
        "nome": "VIVIAN RODRIGUES",
        "numero": "43145",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "DEM",
        "nome": "VIVIANE MATOS",
        "numero": "25888",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PR",
        "nome": "VÂNIA ADVOGADA",
        "numero": "22239",
        "coligacao": "PR"
    },
    {
        "partido": "PPL",
        "nome": "WADSON DA CORPORAÇÃO JOVEM",
        "numero": "54444",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT do B",
        "nome": "WAGNER",
        "numero": "70654",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PR",
        "nome": "WAGNER DO NASCIMENTO JÚNIOR",
        "numero": "22045",
        "coligacao": "PR"
    },
    {
        "partido": "PEN",
        "nome": "WAGNER FARIA",
        "numero": "51012",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PR",
        "nome": "WAGNEY MACHADO",
        "numero": "22500",
        "coligacao": "PR"
    },
    {
        "partido": "PR",
        "nome": "WALACE VENTURA",
        "numero": "22040",
        "coligacao": "PR"
    },
    {
        "partido": "PDT",
        "nome": "WALDIR BIGODE",
        "numero": "12876",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PT do B",
        "nome": "WALDIR O JOVEM",
        "numero": "70088",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PHS",
        "nome": "WALLACE ROGESTER",
        "numero": "31119",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSL",
        "nome": "WALTER RODRIGUES",
        "numero": "17500",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSB",
        "nome": "WANDER BORGES",
        "numero": "40640",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTB",
        "nome": "WANDERLEY LOBO",
        "numero": "14142",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PRB",
        "nome": "WANDERLEY SILVA",
        "numero": "10375",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "SD",
        "nome": "WANDERSON RODRIGUES",
        "numero": "77456",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PMDB",
        "nome": "WASHINGTON XAVIER",
        "numero": "15880",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PSL",
        "nome": "WATUSE",
        "numero": "17597",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSB",
        "nome": "WELINTON SAPÃO",
        "numero": "40123",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PRP",
        "nome": "WELLINGTON MINEIRO",
        "numero": "44100",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PV",
        "nome": "WESLEY DO SINDICATO",
        "numero": "43123",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PDT",
        "nome": "WESLEY JOSÉ DA ROCHA NAVES",
        "numero": "12612",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PTB",
        "nome": "WESLLEY MATOS",
        "numero": "14832",
        "coligacao": "PTB / SD"
    },
    {
        "partido": "PSB",
        "nome": "WHESLEY (NELINHO)",
        "numero": "40001",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTN",
        "nome": "WILLIAM",
        "numero": "19345",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PT do B",
        "nome": "WILLIAM BARREIRO",
        "numero": "70600",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PC do B",
        "nome": "WILLIAM DO SKATE",
        "numero": "65578",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PPS",
        "nome": "WILLIAN",
        "numero": "23540",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "DEM",
        "nome": "WILLIAN PACIFICO DE MENDONÇA",
        "numero": "25555",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PPL",
        "nome": "WILTON DO TÁXI",
        "numero": "54333",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTC",
        "nome": "XANDÃO",
        "numero": "36631",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PRB",
        "nome": "XAVIER",
        "numero": "10500",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PRP",
        "nome": "XICO MOURÃO",
        "numero": "44654",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSD",
        "nome": "YÊDA FERNAL",
        "numero": "55255",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PC do B",
        "nome": "ZACARIAS",
        "numero": "65665",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PP",
        "nome": "ZACARIAS TAVARES",
        "numero": "11633",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PDT",
        "nome": "ZAQUEU  RODRIGUES ZACA",
        "numero": "12300",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PDT",
        "nome": "ZE ANASTACIO",
        "numero": "12614",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PT do B",
        "nome": "ZE ANTONIO DO CAMINHAZINHO",
        "numero": "70124",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PDT",
        "nome": "ZE EMILIO",
        "numero": "12500",
        "coligacao": "PDT / PV"
    },
    {
        "partido": "PT do B",
        "nome": "ZE MARIA ORION",
        "numero": "70032",
        "coligacao": "PTdo B"
    },
    {
        "partido": "PT",
        "nome": "ZE PEDRO",
        "numero": "13130",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PEN",
        "nome": "ZE PRETINHO",
        "numero": "51335",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PRP",
        "nome": "ZE PRETO",
        "numero": "44610",
        "coligacao": "PRP / PEN / PHS"
    },
    {
        "partido": "PSDB",
        "nome": "ZEZINHO",
        "numero": "45050",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PROS",
        "nome": "ZEZINHO DA SILVA",
        "numero": "90100",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PROS",
        "nome": "ZEZINHO MENDONÇA",
        "numero": "90777",
        "coligacao": "PT / PROS / PMDB / PRB"
    },
    {
        "partido": "PC do B",
        "nome": "ZITO VIEIRA",
        "numero": "65650",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PCB",
        "nome": "ZULU",
        "numero": "21123",
        "coligacao": "PCB"
    },
    {
        "partido": "PC do B",
        "nome": "ZÉ CARLIN",
        "numero": "65110",
        "coligacao": "PCdo B"
    },
    {
        "partido": "PPS",
        "nome": "ZÉ COADOR",
        "numero": "23116",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PMN",
        "nome": "ZÉ DO CARMO",
        "numero": "33578",
        "coligacao": "PMN"
    },
    {
        "partido": "PSDB",
        "nome": "ZÉ MAIA",
        "numero": "45205",
        "coligacao": "DEM / PSDB / PP / PSD / PPS"
    },
    {
        "partido": "PR",
        "nome": "ÂNGELO RONCALLI",
        "numero": "22122",
        "coligacao": "PR"
    },
    {
        "partido": "PR",
        "nome": "ÉNEAS CHIARINI",
        "numero": "22344",
        "coligacao": "PR"
    },
    {
        "partido": "PSOL",
        "nome": "ÉRICA COLETTI",
        "numero": "50150",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PMDB",
        "nome": "ÉRIKA",
        "numero": "15069",
        "coligacao": "PT / PROS / PMDB / PRB"
    }
];

var options = {
  host: 'localhost',
  port: 9200,
  path: '/eleicoes2014/dep_estadual',
  method: 'POST'
};

for(var i=0; i < candidatos.length; i++) {
  console.log(JSON.stringify(candidatos[i]));
  var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  // write data to request body
  req.write(JSON.stringify(candidatos[i]));
  req.write('\n');
  req.end();
}