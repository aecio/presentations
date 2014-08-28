var http = require('http'); 

var candidatos = [
    {
        "partido": "PPS",
        "nome": "ABDIAS BRAZ",
        "numero": "2340",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSL",
        "nome": "ADEILSON GAGUINHO",
        "numero": "1750",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PROS",
        "nome": "ADEIR BATISTA",
        "numero": "9020",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PRP",
        "nome": "ADELMO",
        "numero": "4488",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT",
        "nome": "ADELMO LEAO",
        "numero": "1350",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PROS",
        "nome": "ADEMIR CAMILO",
        "numero": "9010",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PTN",
        "nome": "ADILSON  DA VALE VERDE",
        "numero": "1945",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PR",
        "nome": "ADILSON PÉ DE CHUMBO",
        "numero": "2255",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PT do B",
        "nome": "ADMAR SOARES",
        "numero": "7081",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT do B",
        "nome": "ADRIAN PAZ",
        "numero": "7072",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSC",
        "nome": "ADRIANA PINHEIRO",
        "numero": "2015",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "ADRIANE DE MIRANDA",
        "numero": "1381",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PV",
        "nome": "ADRIANINHA MARQUES",
        "numero": "4326",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSB",
        "nome": "ADRIANO FERREIRA",
        "numero": "4067",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTB",
        "nome": "ADÃO GOMES",
        "numero": "1405",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PR",
        "nome": "AELTON FREITAS",
        "numero": "2222",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSB",
        "nome": "ALAERSON CHAVES",
        "numero": "4030",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTN",
        "nome": "ALAERTE ROCHA",
        "numero": "1952",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PTN",
        "nome": "ALAIDE PIMENTA",
        "numero": "1993",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSB",
        "nome": "ALBERTINHO TAMEIRÃO",
        "numero": "4025",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PDT",
        "nome": "ALDENI GUERRA",
        "numero": "1267",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSL",
        "nome": "ALESSANDRA MACHADO",
        "numero": "1707",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PHS",
        "nome": "ALESSANDRA VIEIRA JORGE",
        "numero": "3104",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PEN",
        "nome": "ALEXANDRE DE PADUA",
        "numero": "5177",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PTC",
        "nome": "ALEXANDRE GOMES",
        "numero": "3670",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSB",
        "nome": "ALEXANDRE KALIL",
        "numero": "4013",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSL",
        "nome": "ALEXANDRE LIMA",
        "numero": "1744",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PHS",
        "nome": "ALEXANDRE MAGNO",
        "numero": "3131",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PMDB",
        "nome": "ALEXANDRE MARQUES",
        "numero": "1519",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PV",
        "nome": "ALEXANDRE QUARESMA",
        "numero": "4355",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PTN",
        "nome": "ALICIO",
        "numero": "1999",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSB",
        "nome": "ALOISIO SANTOS NEIVA",
        "numero": "4011",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PRP",
        "nome": "ALOYSIO CUNHA",
        "numero": "4437",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "DEM",
        "nome": "ALOÍSIO RAFAEL",
        "numero": "2544",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSOL",
        "nome": "ALVARO LOBO",
        "numero": "5020",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSB",
        "nome": "ALVIMAR ROGERIO",
        "numero": "4090",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PRB",
        "nome": "ALZELANE SILVAS",
        "numero": "1041",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PRP",
        "nome": "ANA CAZZUALLI",
        "numero": "4420",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PRB",
        "nome": "ANDERSON ADAUTO",
        "numero": "1015",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSC",
        "nome": "ANDRE TURCI",
        "numero": "2017",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PPS",
        "nome": "ANDREA NEVES",
        "numero": "2307",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSL",
        "nome": "ANDREIA BOTELHO",
        "numero": "1723",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTC",
        "nome": "ANDREIA PACHECO",
        "numero": "3612",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PDT",
        "nome": "ANDRESA",
        "numero": "1292",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PHS",
        "nome": "ANDRESSA FREIRE",
        "numero": "3111",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSTU",
        "nome": "ANDRÉ NOGUEIRA",
        "numero": "1623",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PTC",
        "nome": "ANGELA FIA",
        "numero": "3630",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PRB",
        "nome": "ANGELA MAIRINK",
        "numero": "1002",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PRTB",
        "nome": "ANGELA MARIA",
        "numero": "2852",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSOL",
        "nome": "ANGELO AMARO",
        "numero": "5070",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSTU",
        "nome": "ANINHA",
        "numero": "1680",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSL",
        "nome": "ANINHA DO NAÚTICO",
        "numero": "1721",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PV",
        "nome": "ANNA LHAMAS",
        "numero": "4346",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSB",
        "nome": "ANTONIO C DUARTE",
        "numero": "4016",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "DEM",
        "nome": "ANTÔNIA DE JESUS",
        "numero": "2514",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PTC",
        "nome": "ANTÔNIO MELO",
        "numero": "3625",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "ARCANJO NUNES",
        "numero": "1316",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PTB",
        "nome": "ARQUIMEDES BORGES",
        "numero": "1477",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PSDB",
        "nome": "ASSIS MINEIRO BRASIL",
        "numero": "4544",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PRP",
        "nome": "ATALIBA",
        "numero": "4445",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT",
        "nome": "AUGUSTA ROCHA",
        "numero": "1317",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PPS",
        "nome": "AÉCIO DE RIBEIRÃO DAS NEVES",
        "numero": "2330",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PT do B",
        "nome": "BAIANA DO LUIS AMERICANO",
        "numero": "7042",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSOL",
        "nome": "BARTOLOMEU FIGUEIREDO - BARTO",
        "numero": "5028",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PTC",
        "nome": "BEL DETETIVE",
        "numero": "3644",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTN",
        "nome": "BERENICE SANTOS",
        "numero": "1961",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PR",
        "nome": "BERNARDO SANTANA",
        "numero": "2280",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PR",
        "nome": "BILAC PINTO",
        "numero": "2245",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PRTB",
        "nome": "BIRA DA RÁDIO",
        "numero": "2810",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PHS",
        "nome": "BISPO DAMASCENO",
        "numero": "3103",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PTC",
        "nome": "BISPO JOÃO GOMES DA SILVA",
        "numero": "3640",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSOL",
        "nome": "BIZUTE - LUIZ BIZUTE",
        "numero": "5053",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PT",
        "nome": "BLACK",
        "numero": "1345",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSDB",
        "nome": "BONIFÁCIO ANDRADA",
        "numero": "4566",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "DEM",
        "nome": "BORJÃO",
        "numero": "2550",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PDT",
        "nome": "BRANDÃO DA LIVRARIA",
        "numero": "1280",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PMDB",
        "nome": "BRENO CARONE",
        "numero": "1522",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PDT",
        "nome": "BRUNA CARLA",
        "numero": "1204",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSDB",
        "nome": "BRUNA MELO",
        "numero": "4524",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PTC",
        "nome": "BRUNNY",
        "numero": "3645",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PMDB",
        "nome": "BRUNO BORGES",
        "numero": "1566",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSDB",
        "nome": "BUENO BRANDÃO",
        "numero": "4567",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PV",
        "nome": "BUIÚ DE ZEZITO",
        "numero": "4303",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PTN",
        "nome": "CABO CAMARGO",
        "numero": "1978",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PT do B",
        "nome": "CABO COELHO",
        "numero": "7010",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PDT",
        "nome": "CABO MATEUS",
        "numero": "1203",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PDT",
        "nome": "CABO SILVIO CESAR",
        "numero": "1238",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PMDB",
        "nome": "CACILDA CARVALHO",
        "numero": "1505",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSDB",
        "nome": "CAIO NARCIO",
        "numero": "4520",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PPL",
        "nome": "CANJIQUINHA",
        "numero": "5413",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSB",
        "nome": "CAPITÃO COSTA JÚNIOR",
        "numero": "4055",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSTU",
        "nome": "CARINE MARTINS",
        "numero": "1688",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSD",
        "nome": "CARLA CRISTINA",
        "numero": "5520",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PPS",
        "nome": "CARLINHOS FIO",
        "numero": "2324",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PMN",
        "nome": "CARLOS ALBERTO",
        "numero": "3333",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PEN",
        "nome": "CARLOS ALBERTO",
        "numero": "5113",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSL",
        "nome": "CARLOS CUNHA",
        "numero": "1747",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PDT",
        "nome": "CARLOS DIAMANTINO",
        "numero": "1254",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PT",
        "nome": "CARLOS DO MG",
        "numero": "1390",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PTN",
        "nome": "CARLOS FERREIRA",
        "numero": "1921",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "DEM",
        "nome": "CARLOS MELLES",
        "numero": "2555",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSDB",
        "nome": "CARLOS MOSCONI",
        "numero": "4513",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PTN",
        "nome": "CARLOS TABORDA",
        "numero": "1972",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PTC",
        "nome": "CARLOS WAGNER",
        "numero": "3651",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "CAROLINA",
        "numero": "1360",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PV",
        "nome": "CELENE GOMES",
        "numero": "4390",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSB",
        "nome": "CELESTE FERNANDES",
        "numero": "4022",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "SD",
        "nome": "CELIA BENEVIDES",
        "numero": "7727",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PT do B",
        "nome": "CELIA DA CRECHE",
        "numero": "7031",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT do B",
        "nome": "CELTON MESQUITA",
        "numero": "7057",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT do B",
        "nome": "CEM DA BICICLETA",
        "numero": "7024",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT",
        "nome": "CESAR CAROLINO",
        "numero": "1301",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "CESINHA DA AUTO ESCOLA",
        "numero": "7019",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "SD",
        "nome": "CEZINHA",
        "numero": "7700",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PTB",
        "nome": "CHARLIN",
        "numero": "1425",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PEN",
        "nome": "CHEROSO",
        "numero": "5159",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSDC",
        "nome": "CHIBA",
        "numero": "2720",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSC",
        "nome": "CHICO GALO",
        "numero": "2013",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "CHIQUINHO MACIEL",
        "numero": "1366",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PV",
        "nome": "CHRISTIAN RANGEL",
        "numero": "4370",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSD",
        "nome": "CHRISTIANE PRINCE",
        "numero": "5590",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSB",
        "nome": "CIDA",
        "numero": "4070",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PEN",
        "nome": "CIDA BUZETTI",
        "numero": "5133",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PTC",
        "nome": "CIDA EULALIO",
        "numero": "3618",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PC do B",
        "nome": "CIDA VIEIRA",
        "numero": "6569",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PTN",
        "nome": "CIRLAINE LIBERATO",
        "numero": "1951",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PT do B",
        "nome": "CIRO CAMPOS",
        "numero": "7097",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PTC",
        "nome": "CLARA",
        "numero": "3660",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTN",
        "nome": "CLAUDIA SANTOS",
        "numero": "1927",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSL",
        "nome": "CLAUDINÊ BATALHA",
        "numero": "1722",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTC",
        "nome": "CLAUDIO NAVES",
        "numero": "3678",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSB",
        "nome": "CLESINHO",
        "numero": "4003",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT do B",
        "nome": "CLOVIS GARCIA",
        "numero": "7003",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSL",
        "nome": "CLÉSIO DO SACOLÃO",
        "numero": "1789",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTC",
        "nome": "COMANDANTE FRANÇA",
        "numero": "3663",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "SD",
        "nome": "CORONEL MAC DOWEL",
        "numero": "7766",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PRB",
        "nome": "CORONEL RAMALHO",
        "numero": "1020",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "CRESTON (TECO)",
        "numero": "7014",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSL",
        "nome": "CRISTIANE APARECIDA",
        "numero": "1785",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "CRISTINA FREITAS",
        "numero": "7026",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "DEM",
        "nome": "CRISTINA VILELA",
        "numero": "2580",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PMDB",
        "nome": "CROVYMARA",
        "numero": "1578",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PPS",
        "nome": "CYRANO",
        "numero": "2333",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PMDB",
        "nome": "CÁTHIA ÍNDIO DO BRASIL",
        "numero": "1509",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSDC",
        "nome": "DALCIO BOTELHO",
        "numero": "2780",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PEN",
        "nome": "DALTON HENRIQUE DE ALBUQUERQUE",
        "numero": "5170",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PV",
        "nome": "DANIEL ROBERTO",
        "numero": "4343",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PV",
        "nome": "DANIEL SIMIÃO",
        "numero": "4399",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSTU",
        "nome": "DANIEL WARDIL",
        "numero": "1644",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSL",
        "nome": "DANIELLA RIBEIRO",
        "numero": "1733",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "DEM",
        "nome": "DAVID DA SILVA",
        "numero": "2599",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PTC",
        "nome": "DECINHO BARBEIRO",
        "numero": "3600",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTN",
        "nome": "DELEGADO EDSON MOREIRA",
        "numero": "1907",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PT",
        "nome": "DENDEN",
        "numero": "1346",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PMDB",
        "nome": "DENISE FERREIRA",
        "numero": "1588",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PMN",
        "nome": "DETINHO",
        "numero": "3312",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PSD",
        "nome": "DEYSE COSTA",
        "numero": "5580",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSD",
        "nome": "DIEGO ANDRADE",
        "numero": "5555",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PP",
        "nome": "DIMAS FABIANO",
        "numero": "1111",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PTB",
        "nome": "DINA",
        "numero": "1402",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PSDB",
        "nome": "DINAERTI CARVALHO",
        "numero": "4528",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PDT",
        "nome": "DINHO DO BAR",
        "numero": "1290",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSDB",
        "nome": "DINO",
        "numero": "4501",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PV",
        "nome": "DIVA DA RECICLAGEM",
        "numero": "4302",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSL",
        "nome": "DIVA DOMINGOS",
        "numero": "1711",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTC",
        "nome": "DIVINO",
        "numero": "3646",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PRTB",
        "nome": "DJALBERT JOSÉ DE ALMEIDA",
        "numero": "2828",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT do B",
        "nome": "DOMINGOS DE CASTRO",
        "numero": "7040",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSDB",
        "nome": "DOMINGOS SÁVIO",
        "numero": "4560",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PDT",
        "nome": "DOUTOR BETINHO",
        "numero": "1236",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PTC",
        "nome": "DOUTOR FLÁVIO",
        "numero": "3611",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "SD",
        "nome": "DR GRILO",
        "numero": "7789",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PT do B",
        "nome": "DR RAIMUNDO SILVA",
        "numero": "7001",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSC",
        "nome": "DR. BONI",
        "numero": "2020",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "DR. CARLOS EINSTEIN",
        "numero": "1332",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PV",
        "nome": "DR. FERNANDO MORAES",
        "numero": "4312",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PPL",
        "nome": "DR. GERALDO",
        "numero": "5410",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT do B",
        "nome": "DR. GERALDO HILARIO",
        "numero": "7000",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PMN",
        "nome": "DR. GILBERTO BERNAL",
        "numero": "3335",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PMN",
        "nome": "DR. MARCO ANTONIO",
        "numero": "3340",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PDT",
        "nome": "DR. RICARDO SARAIVA",
        "numero": "1206",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PCB",
        "nome": "DR. ZOCRATO",
        "numero": "2122",
        "coligacao": "PCB"
    },
    {
        "partido": "PDT",
        "nome": "DR.ATILAS",
        "numero": "1200",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PRB",
        "nome": "DRA. ARIADNA",
        "numero": "1000",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PPS",
        "nome": "DRA. REGINA CIOFFI",
        "numero": "2345",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSB",
        "nome": "DRA. SALMA",
        "numero": "4000",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSDB",
        "nome": "DRA. WAL",
        "numero": "4554",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PMN",
        "nome": "DÂMINA PEREIRA",
        "numero": "3333",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PPS",
        "nome": "EDENILSON DURÃES",
        "numero": "2322",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSB",
        "nome": "EDIVAM TEODORO",
        "numero": "4027",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PEN",
        "nome": "EDMAR XAVIER",
        "numero": "5110",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT do B",
        "nome": "EDMUNDO CHOCOLATE MIGUEL",
        "numero": "7023",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PDT",
        "nome": "EDNA SANTOS",
        "numero": "1210",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PDT",
        "nome": "EDNA SARMENTO",
        "numero": "1232",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PTB",
        "nome": "EDNEIA LIMA",
        "numero": "1455",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PTC",
        "nome": "EDSON BITENCOURT",
        "numero": "3623",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PMDB",
        "nome": "EDSON PAREDÃO",
        "numero": "1555",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "EDSON SOARES",
        "numero": "7089",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PRTB",
        "nome": "EDSON VAREJÃO",
        "numero": "2813",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSDB",
        "nome": "EDUARDO BARBOSA",
        "numero": "4535",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PT do B",
        "nome": "EDUARDO MAIA",
        "numero": "7008",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PROS",
        "nome": "ELAINE WERMELINGER",
        "numero": "9011",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSDB",
        "nome": "ELBE BRANDÃO",
        "numero": "4530",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PV",
        "nome": "ELI MELO",
        "numero": "4363",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PT do B",
        "nome": "ELIAS GALDINO",
        "numero": "7087",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT do B",
        "nome": "ELISEU PERUEIRO",
        "numero": "7045",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT do B",
        "nome": "ELIZA GALLO",
        "numero": "7027",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PTC",
        "nome": "ELIZABETH",
        "numero": "3613",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTB",
        "nome": "ELIZEU ASSIS",
        "numero": "1409",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "DEM",
        "nome": "ELMIRO NASCIMENTO",
        "numero": "2520",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSB",
        "nome": "ELZI CANTORA",
        "numero": "4007",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSOL",
        "nome": "ENEAS",
        "numero": "5077",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PT",
        "nome": "ENGENHEIRO GILSON QUEIROZ",
        "numero": "1377",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSL",
        "nome": "ENIO DORNELES",
        "numero": "1718",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTB",
        "nome": "EROS BIONDINI",
        "numero": "1433",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PTB",
        "nome": "ESCARLET ORRANA",
        "numero": "1403",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PTC",
        "nome": "ESIO LEVINO",
        "numero": "3619",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "SD",
        "nome": "ESTER L.",
        "numero": "7788",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PEN",
        "nome": "EUCLIDES EXPERIMENTA",
        "numero": "5150",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PTB",
        "nome": "EUCLYDES PETTERSEN",
        "numero": "1415",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PDT",
        "nome": "EUSTAQUIO BINI",
        "numero": "1230",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PTN",
        "nome": "EVA MORAES",
        "numero": "1902",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PT do B",
        "nome": "EVA PAULINO",
        "numero": "7079",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PR",
        "nome": "EVANDRO MIZAEL",
        "numero": "2212",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSB",
        "nome": "EVANDRO PEDRAS MARTELINHO",
        "numero": "4051",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PMN",
        "nome": "EVANILDA GOMES",
        "numero": "3339",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PDT",
        "nome": "EVELIN",
        "numero": "1278",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PV",
        "nome": "FABIANA NUNES",
        "numero": "4323",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "SD",
        "nome": "FABIANO DINIZ",
        "numero": "7747",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PV",
        "nome": "FABINHO RAMALHO",
        "numero": "4311",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PPS",
        "nome": "FABIO ANTONIO",
        "numero": "2312",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSL",
        "nome": "FABIO ZOOI",
        "numero": "1701",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSL",
        "nome": "FATIMA DE PIPIU",
        "numero": "1716",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "DEM",
        "nome": "FATIMA VARGAS",
        "numero": "2570",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSTU",
        "nome": "FELIPE FONSECA",
        "numero": "1617",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PT do B",
        "nome": "FERNANDO BORJA",
        "numero": "7077",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PRB",
        "nome": "FERNANDO FRANCO",
        "numero": "1045",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "FERRARA",
        "numero": "7060",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSDC",
        "nome": "FILIPE NERY",
        "numero": "2725",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PPL",
        "nome": "FRANCISCO RUBIÓ",
        "numero": "5454",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PCB",
        "nome": "FREDERICO ESTOPA",
        "numero": "2199",
        "coligacao": "PCB"
    },
    {
        "partido": "PT do B",
        "nome": "FYLÉ DO BARRETÃO",
        "numero": "7007",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSDB",
        "nome": "FÁBIO",
        "numero": "4599",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSL",
        "nome": "FÁTIMA TAVARES",
        "numero": "1745",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "GABRIEL GUIMARÃES",
        "numero": "1311",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PHS",
        "nome": "GABRIELA ROSA DOS SANTOS",
        "numero": "3113",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT",
        "nome": "GALILEU",
        "numero": "1305",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PTC",
        "nome": "GAUDENCINHO",
        "numero": "3686",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PDT",
        "nome": "GELÉIA",
        "numero": "1245",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PRB",
        "nome": "GEORGE HILTON",
        "numero": "1010",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PTN",
        "nome": "GERALDA JANUARIA",
        "numero": "1910",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PPL",
        "nome": "GERALDO DA CARROCERIA",
        "numero": "5477",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PCB",
        "nome": "GERALDO FUMAÇA",
        "numero": "2111",
        "coligacao": "PCB"
    },
    {
        "partido": "PSB",
        "nome": "GERALDO MAGELA CEGUINHO",
        "numero": "4008",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSD",
        "nome": "GERALDO THADEU",
        "numero": "5540",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PMDB",
        "nome": "GI FERREIRA",
        "numero": "1545",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSTU",
        "nome": "GILBERTO CUNHA",
        "numero": "1606",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSC",
        "nome": "GILBERTO PIRES",
        "numero": "2016",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSDB",
        "nome": "GIOVANE GAVIO DO VOLEI",
        "numero": "4533",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PTN",
        "nome": "GIOVANI  BATISTA",
        "numero": "1980",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PDT",
        "nome": "GISELE DE DANIEL",
        "numero": "1286",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSB",
        "nome": "GLEIBE TERRA",
        "numero": "4033",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSL",
        "nome": "GLEISER BORONI",
        "numero": "1700",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PRB",
        "nome": "GREYCE ELIAS",
        "numero": "1011",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSB",
        "nome": "GUSTAVO CESAR OLIVEIRA",
        "numero": "4080",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PHS",
        "nome": "GUSTAVO MITRE",
        "numero": "3100",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSTU",
        "nome": "GUSTAVO OLÍMPIO",
        "numero": "1601",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "SD",
        "nome": "GUSTAVO PERRELLA",
        "numero": "7745",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PROS",
        "nome": "GUSTAVO PIRES",
        "numero": "9090",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PPL",
        "nome": "HELDER AGOSTINHO CARRARA",
        "numero": "5432",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT do B",
        "nome": "HELENA SANTOS",
        "numero": "7004",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSC",
        "nome": "HELENICE CUNHA",
        "numero": "2077",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSDC",
        "nome": "HELGA GREINER",
        "numero": "2712",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PTN",
        "nome": "HELIO LEITAO",
        "numero": "1953",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PT do B",
        "nome": "HELVECIO DA COBAL",
        "numero": "7036",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PPS",
        "nome": "HELY COELHO",
        "numero": "2350",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSB",
        "nome": "HENRIQUE BARRETO",
        "numero": "4099",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT do B",
        "nome": "HIE HIE",
        "numero": "7074",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSTU",
        "nome": "HUENDER FRANCO ADVOGADO",
        "numero": "1633",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSDC",
        "nome": "HUMBERTO",
        "numero": "2722",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PPS",
        "nome": "HUMBERTO SOUTO",
        "numero": "2360",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PMDB",
        "nome": "HÉLIO COSTA",
        "numero": "1513",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PTB",
        "nome": "IARA MARTINS",
        "numero": "1489",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PV",
        "nome": "IARINHA ESTEVES",
        "numero": "4315",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PMDB",
        "nome": "ILANA ARAÚJO",
        "numero": "1540",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PPS",
        "nome": "ILDEIA OTTONI",
        "numero": "2328",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PT do B",
        "nome": "ILDEU MENEZES",
        "numero": "7022",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PDT",
        "nome": "INDIA ALVES",
        "numero": "1242",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PTC",
        "nome": "IRACI CHAVES",
        "numero": "3652",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSB",
        "nome": "IRIS CHAVES",
        "numero": "4069",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSL",
        "nome": "IRMÃO NELSON",
        "numero": "1715",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "ISA MOTA",
        "numero": "7029",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSB",
        "nome": "ISAIAS SILVESTRE",
        "numero": "4077",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PPS",
        "nome": "IZABELA",
        "numero": "2310",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSTU",
        "nome": "IZABELLA LOURENÇA",
        "numero": "1610",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PT do B",
        "nome": "JACIEL PEREIRA",
        "numero": "7088",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSD",
        "nome": "JACINTA DE SETUBINHA",
        "numero": "5509",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PTC",
        "nome": "JACKSON MOTOBOY",
        "numero": "3672",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSD",
        "nome": "JAIMINHO MARTINS",
        "numero": "5550",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "DEM",
        "nome": "JAIRO ATAIDE",
        "numero": "2525",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PV",
        "nome": "JAKSON AUGUSTO",
        "numero": "4384",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PMDB",
        "nome": "JAMIR ANDRADE",
        "numero": "1569",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PTB",
        "nome": "JANDER FILARETTI",
        "numero": "1440",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PDT",
        "nome": "JANETE CHAGAS",
        "numero": "1252",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PTN",
        "nome": "JANIO SANTOS",
        "numero": "1911",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PTN",
        "nome": "JAPAO",
        "numero": "1901",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PMN",
        "nome": "JAQUELINE BERNARDES",
        "numero": "3394",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PT do B",
        "nome": "JARI MENDONCA",
        "numero": "7015",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSL",
        "nome": "JEFFERSON BASTOS",
        "numero": "1780",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PDT",
        "nome": "JEFINHO",
        "numero": "1299",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PCB",
        "nome": "JESSICA NICOLAI",
        "numero": "2132",
        "coligacao": "PCB"
    },
    {
        "partido": "PSOL",
        "nome": "JESSICA VIANA",
        "numero": "5005",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSDB",
        "nome": "JOAO BATISTA FOGUIM",
        "numero": "4511",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PROS",
        "nome": "JOAO PEREIRA",
        "numero": "9088",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PHS",
        "nome": "JOAQUIM ARAGUAIA",
        "numero": "3140",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSDC",
        "nome": "JOAQUIM GAMARRA",
        "numero": "2726",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PTB",
        "nome": "JOCANE",
        "numero": "1466",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PSDB",
        "nome": "JOICE MANGABEIRA",
        "numero": "4587",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PTB",
        "nome": "JORCELINO CARDOSO",
        "numero": "1422",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PSTU",
        "nome": "JORDANO CARVALHO",
        "numero": "1600",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PT",
        "nome": "JORGE PAULUCI",
        "numero": "1302",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSOL",
        "nome": "JORGE TORQUATO",
        "numero": "5044",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSL",
        "nome": "JOSE ANTONIO MENDONÇA",
        "numero": "1770",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTN",
        "nome": "JOSE BORGES",
        "numero": "1909",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PTB",
        "nome": "JOSE CARLOS CAMINHONEIRO",
        "numero": "1401",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PSC",
        "nome": "JOSE DO CARMO",
        "numero": "2012",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "JOSE MARCIO",
        "numero": "1356",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PHS",
        "nome": "JOSE MARIA DE NOVA CONTAGEM",
        "numero": "3177",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PTN",
        "nome": "JOSE NOEL",
        "numero": "1949",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PT do B",
        "nome": "JOSE RENATO BENCAO",
        "numero": "7017",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSL",
        "nome": "JOSE ROBERTO FAGUNDES",
        "numero": "1710",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSTU",
        "nome": "JOSIANE DE BOUCHERVILLE",
        "numero": "1677",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSD",
        "nome": "JOSÉ HUMBERTO",
        "numero": "5521",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSDB",
        "nome": "JOSÉ NUNES EVANGELISTA",
        "numero": "4580",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PMN",
        "nome": "JOÃO CHICO",
        "numero": "3345",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PDT",
        "nome": "JUAREZ MUNIZ",
        "numero": "1244",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PHS",
        "nome": "JULIANE LOURDES SILVA",
        "numero": "3114",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSC",
        "nome": "JULIO ALVES DA SILVA",
        "numero": "2001",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSB",
        "nome": "JULIO DELGADO",
        "numero": "4050",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSDC",
        "nome": "JUNIA AMARAL",
        "numero": "2718",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSL",
        "nome": "JUNINHO BEREGENO",
        "numero": "1740",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSTU",
        "nome": "JUVET",
        "numero": "1675",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PC do B",
        "nome": "JÔ MORAES",
        "numero": "6565",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "KATYA OLIVEIRA",
        "numero": "7091",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT do B",
        "nome": "KELMA COSTA",
        "numero": "7064",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PHS",
        "nome": "KENNYA CRISTINA",
        "numero": "3116",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSB",
        "nome": "KEZIM MARTINS",
        "numero": "4085",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSL",
        "nome": "LARISSA AUGUSTA",
        "numero": "1731",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "LAUDENY REGINA",
        "numero": "1398",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PMDB",
        "nome": "LAUDÍVIO CARVALHO",
        "numero": "1580",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PV",
        "nome": "LAURENCE BORGES",
        "numero": "4340",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PRB",
        "nome": "LAURINHA",
        "numero": "1040",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PDT",
        "nome": "LAÉRCIO LETRO",
        "numero": "1212",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "SD",
        "nome": "LEDA BRAGA",
        "numero": "7752",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PCB",
        "nome": "LENINHA",
        "numero": "2133",
        "coligacao": "PCB"
    },
    {
        "partido": "SD",
        "nome": "LEONARDO BARROS",
        "numero": "7707",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PT",
        "nome": "LEONARDO MONTEIRO",
        "numero": "1363",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PMDB",
        "nome": "LEONARDO QUINTÃO",
        "numero": "1500",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PMN",
        "nome": "LEONE MACIEL",
        "numero": "3344",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PTB",
        "nome": "LEOZINHA FABIO DE MELLO",
        "numero": "1404",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PT do B",
        "nome": "LIA MOVEIS",
        "numero": "7033",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PV",
        "nome": "LILIAN PINHO",
        "numero": "4330",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PR",
        "nome": "LINCOLN PORTELA",
        "numero": "2233",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PT",
        "nome": "LINDOMAR GOMES",
        "numero": "1313",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSOL",
        "nome": "LOURIVAL",
        "numero": "5055",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PT",
        "nome": "LUANA CAXEADO",
        "numero": "1392",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSB",
        "nome": "LUCAS DA SHEKINAH",
        "numero": "4012",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PRTB",
        "nome": "LUCAS GOMES ARCANJO",
        "numero": "2868",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PPS",
        "nome": "LUCAS MORAIS",
        "numero": "2338",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSB",
        "nome": "LUCIA MARIA",
        "numero": "4019",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSB",
        "nome": "LUCIANA ARCHETE",
        "numero": "4042",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PPL",
        "nome": "LUCIANA VAZ",
        "numero": "5421",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PDT",
        "nome": "LUCIANE ARCHETE",
        "numero": "1205",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PTN",
        "nome": "LUCIANO",
        "numero": "1960",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PTB",
        "nome": "LUCIANO BRETAS - MÃE DA IGREJA",
        "numero": "1444",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PSD",
        "nome": "LUCIANO JOSE DE OLIVEIRA",
        "numero": "5560",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSDB",
        "nome": "LUCIENE CRISTINE",
        "numero": "4505",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PT do B",
        "nome": "LUIS TIBE",
        "numero": "7070",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PP",
        "nome": "LUIZ FERNANDO",
        "numero": "1145",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSOL",
        "nome": "LUIZ FERNANDO GOMES",
        "numero": "5010",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PPS",
        "nome": "LUIZÃO PEREIRA",
        "numero": "2377",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSC",
        "nome": "LULA DEFENSOR",
        "numero": "2024",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "LULUCA DA CRECHE",
        "numero": "7083",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PPS",
        "nome": "LUZIA FERREIRA",
        "numero": "2323",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "DEM",
        "nome": "LÉO NASCIMENTO",
        "numero": "2500",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PHS",
        "nome": "MACACO TIÃO - WILLIAM",
        "numero": "3171",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT do B",
        "nome": "MADALENA GUALBERTO",
        "numero": "7059",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSL",
        "nome": "MAGNOLIA SOUZA",
        "numero": "1712",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PV",
        "nome": "MANOEL BISPO",
        "numero": "4380",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PDT",
        "nome": "MANOEL NERES",
        "numero": "1255",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PCB",
        "nome": "MARCELA",
        "numero": "2123",
        "coligacao": "PCB"
    },
    {
        "partido": "PMN",
        "nome": "MARCELLO DI MARTINS",
        "numero": "3355",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PRP",
        "nome": "MARCELO ALVARO ANTONIO",
        "numero": "4433",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PHS",
        "nome": "MARCELO ARO",
        "numero": "3133",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PEN",
        "nome": "MARCELO BAETA AGENTE FEDERAL",
        "numero": "5114",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSB",
        "nome": "MARCELO DA S.A ADVOCACIA",
        "numero": "4034",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSDB",
        "nome": "MARCIANO-JOSÉ MARCIANO",
        "numero": "4570",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PT do B",
        "nome": "MARCIO BILEY",
        "numero": "7018",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSC",
        "nome": "MARCIO CALAFIORI",
        "numero": "2011",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PMN",
        "nome": "MARCIO MARTINS",
        "numero": "3390",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PSDC",
        "nome": "MARCIO NOBRE",
        "numero": "2700",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "DEM",
        "nome": "MARCO FELÍCIO",
        "numero": "2560",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PMDB",
        "nome": "MARCO TÚLIO",
        "numero": "1530",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSC",
        "nome": "MARCOS ALVIM",
        "numero": "2014",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "MARCOS CRISPIM",
        "numero": "7056",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSD",
        "nome": "MARCOS MONTES",
        "numero": "5545",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PTC",
        "nome": "MARCOS MOURA",
        "numero": "3609",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PEN",
        "nome": "MARCOS TOLENTINO",
        "numero": "5151",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PEN",
        "nome": "MARCOS TULIO",
        "numero": "5100",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSL",
        "nome": "MARCUS FRESSATI",
        "numero": "1702",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSDB",
        "nome": "MARCUS PESTANA",
        "numero": "4555",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSB",
        "nome": "MARDELENE DA ROSA DE SARON",
        "numero": "4005",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT",
        "nome": "MARGARIDA SALOMÃO",
        "numero": "1314",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSB",
        "nome": "MARIA ANDRADA",
        "numero": "4043",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PV",
        "nome": "MARIA APARECIDA",
        "numero": "4383",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSDB",
        "nome": "MARIA APARECIDA VIEIRA",
        "numero": "4515",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PTN",
        "nome": "MARIA COSTA",
        "numero": "1924",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSOL",
        "nome": "MARIA DA CONSOLAÇÃO",
        "numero": "5050",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PT",
        "nome": "MARIA DO CARMO LARA",
        "numero": "1300",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSDB",
        "nome": "MARIA LUCIA LIA",
        "numero": "4510",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PTN",
        "nome": "MARIA MOREIRA",
        "numero": "1997",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PT",
        "nome": "MARIA SOUZA",
        "numero": "1371",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "MARILIA SIMIM CONSELHEIRA",
        "numero": "7047",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSC",
        "nome": "MARILZA FIGUEIREDO",
        "numero": "2030",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PPL",
        "nome": "MARINA VERDADE",
        "numero": "5455",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PDT",
        "nome": "MARIO HERINGER",
        "numero": "1234",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PHS",
        "nome": "MARIZA PEREIRA DA SILVA",
        "numero": "3117",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT do B",
        "nome": "MARLUCE RODRIGUES",
        "numero": "7066",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PTC",
        "nome": "MARÍLIA",
        "numero": "3633",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSTU",
        "nome": "MATHEUS COSTA",
        "numero": "1699",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PTB",
        "nome": "MAURA MACEDO",
        "numero": "1456",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PV",
        "nome": "MAURICIO VALLE",
        "numero": "4345",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "DEM",
        "nome": "MAURO",
        "numero": "2511",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PMN",
        "nome": "MAURO BOMFIM",
        "numero": "3300",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "SD",
        "nome": "MAURO CESAR",
        "numero": "7734",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PRTB",
        "nome": "MAURO DA 40",
        "numero": "2840",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PDT",
        "nome": "MAURO FERNANDES",
        "numero": "1201",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PT do B",
        "nome": "MAURO IMOVEIS",
        "numero": "7082",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PMDB",
        "nome": "MAURO LOPES",
        "numero": "1511",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PDT",
        "nome": "MAURÍLIO BARBOSA",
        "numero": "1260",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSTU",
        "nome": "MAX MOL",
        "numero": "1618",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PMDB",
        "nome": "MAÍRA CARLOS",
        "numero": "1520",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PRB",
        "nome": "MEDEIROS",
        "numero": "1050",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "MEIRE SILVA",
        "numero": "7095",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT do B",
        "nome": "MELO",
        "numero": "7080",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSDC",
        "nome": "MESTRE LÁZARO",
        "numero": "2737",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PT do B",
        "nome": "MIGUEL ANGELO",
        "numero": "7076",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT",
        "nome": "MIGUEL CORREA",
        "numero": "1330",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PPL",
        "nome": "MILENE",
        "numero": "5412",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSDB",
        "nome": "MILI",
        "numero": "4512",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "DEM",
        "nome": "MISAEL VARELLA",
        "numero": "2505",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PDT",
        "nome": "MISSIONÁRIO TEO",
        "numero": "1247",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PMDB",
        "nome": "MISTER M",
        "numero": "1591",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PMN",
        "nome": "MOABE SIDONIO",
        "numero": "3346",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PSC",
        "nome": "MOACIR COIMBRA BRASIL",
        "numero": "2000",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTN",
        "nome": "MOACIR SOUZA",
        "numero": "1989",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PDT",
        "nome": "MOAMED RACHID",
        "numero": "1233",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PT do B",
        "nome": "MURILINHO",
        "numero": "7041",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PRP",
        "nome": "NANCI",
        "numero": "4404",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PTN",
        "nome": "NANCY GOULART",
        "numero": "1928",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PDT",
        "nome": "NEGO ANJO",
        "numero": "1265",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PDT",
        "nome": "NEIA DA UNINORTE",
        "numero": "1256",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PMN",
        "nome": "NEIDE TANNUS",
        "numero": "3319",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "SD",
        "nome": "NEUSA ALVES",
        "numero": "7709",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PMDB",
        "nome": "NEWTON CARDOSO JR",
        "numero": "1510",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PT",
        "nome": "NILMARIO MIRANDA",
        "numero": "1331",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PT",
        "nome": "NILO SERGIO",
        "numero": "1388",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PTN",
        "nome": "NILSON",
        "numero": "1975",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSD",
        "nome": "NILZETE BANDEIRA",
        "numero": "5530",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PMN",
        "nome": "NIVALDO ANDRADE",
        "numero": "3322",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PSB",
        "nome": "NORMA MARIA LEÃO",
        "numero": "4039",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PRP",
        "nome": "NORMA VENANCIO",
        "numero": "4412",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PRP",
        "nome": "NORMANDIA",
        "numero": "4422",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSDB",
        "nome": "NÉIA",
        "numero": "4522",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PT",
        "nome": "ODAIR CUNHA",
        "numero": "1307",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PP",
        "nome": "ODELMO LEÃO",
        "numero": "1199",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSDC",
        "nome": "ONOFRE",
        "numero": "2715",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PT do B",
        "nome": "ORLANDO MONTEIRO",
        "numero": "7034",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSOL",
        "nome": "OTAGILDO",
        "numero": "5025",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PTC",
        "nome": "OVIMAR SOUTO - BOB",
        "numero": "3690",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PEN",
        "nome": "PABLO AMARAL",
        "numero": "5112",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT",
        "nome": "PADRE JOÃO",
        "numero": "1315",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PV",
        "nome": "PALHAÇO BREAK",
        "numero": "4314",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSD",
        "nome": "PASCHOALIN",
        "numero": "5544",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSB",
        "nome": "PASTOR AGUINALDO",
        "numero": "4001",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PRB",
        "nome": "PASTOR ALEXANDRE AMORIM",
        "numero": "1077",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PTC",
        "nome": "PASTOR EFRAIM LENINI",
        "numero": "3610",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "PASTOR FRANKLIN LIMA",
        "numero": "7012",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PTC",
        "nome": "PASTOR GERALDO MAGELO",
        "numero": "3637",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PMDB",
        "nome": "PASTOR JOSÉ MENDES PAPAGAIO",
        "numero": "1561",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PTC",
        "nome": "PASTOR MARCELO",
        "numero": "3614",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTC",
        "nome": "PASTOR MARCELO",
        "numero": "3635",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PDT",
        "nome": "PASTOR OVÍDIO",
        "numero": "1277",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PTC",
        "nome": "PASTOR WALTER MOURISSO",
        "numero": "3639",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "PASTOR WANDER CARLOS",
        "numero": "7002",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PTN",
        "nome": "PASTOR WELLINGTON DO CREDEQ",
        "numero": "1900",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PTC",
        "nome": "PASTORA APARECIDA",
        "numero": "3620",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSC",
        "nome": "PASTORA SILVANA",
        "numero": "2067",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PEN",
        "nome": "PATRICIA NESSIM",
        "numero": "5118",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PCB",
        "nome": "PATRICK OSORIO",
        "numero": "2112",
        "coligacao": "PCB"
    },
    {
        "partido": "PT",
        "nome": "PATRUS ANANIAS",
        "numero": "1333",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSDB",
        "nome": "PAULA CAMARGOS",
        "numero": "4523",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PT do B",
        "nome": "PAULINHO BIGODINHO",
        "numero": "7005",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSTU",
        "nome": "PAULINHO GABRIEL",
        "numero": "1611",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSB",
        "nome": "PAULINHO MOTORISTA",
        "numero": "4020",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSDB",
        "nome": "PAULO ABI-ACKEL",
        "numero": "4545",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PTN",
        "nome": "PAULO ELETRECISTA",
        "numero": "1933",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PPS",
        "nome": "PAULO GLORIA",
        "numero": "2363",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PT do B",
        "nome": "PAULO MALOCA",
        "numero": "7044",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT do B",
        "nome": "PAULO RISSO",
        "numero": "7090",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSD",
        "nome": "PAULO SIMÃO",
        "numero": "5510",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PMDB",
        "nome": "PAULO TELLES",
        "numero": "1533",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PPS",
        "nome": "PAULO VALLE",
        "numero": "2356",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PPS",
        "nome": "PEDRO ALVARENGA",
        "numero": "2399",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PT",
        "nome": "PEDRO BATISTA",
        "numero": "1344",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PP",
        "nome": "PEDRO ONZE",
        "numero": "1123",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSL",
        "nome": "PEDRO WILSON",
        "numero": "1720",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT",
        "nome": "PEDRO ZACARIAS",
        "numero": "1378",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PTB",
        "nome": "PENHA",
        "numero": "1435",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PTB",
        "nome": "PEREIRA SANCHES",
        "numero": "1420",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PRTB",
        "nome": "PEÇA",
        "numero": "2867",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PMN",
        "nome": "PITANGUI",
        "numero": "3310",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PT do B",
        "nome": "PO ROYAL",
        "numero": "7016",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT do B",
        "nome": "PRICILA PAULINO",
        "numero": "7025",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSDB",
        "nome": "PRISCILA MEDEIROS",
        "numero": "4525",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSL",
        "nome": "PROF LUIS ANTONIO",
        "numero": "1757",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "PROF SUPERVISORA LUCILIA OTONI",
        "numero": "7011",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSC",
        "nome": "PROF. CARLOS FREDERICO CFRED",
        "numero": "2022",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSL",
        "nome": "PROF. D. DILZA",
        "numero": "1777",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PEN",
        "nome": "PROF. GEZIEL RAMOS",
        "numero": "5122",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PDT",
        "nome": "PROF.RAFAEL TEIXEIRA",
        "numero": "1250",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSDC",
        "nome": "PROFESSOR IRINEU INACIO",
        "numero": "2727",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSB",
        "nome": "PROFESSOR JOSÉ LUIZ",
        "numero": "4078",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSOL",
        "nome": "PROFESSOR MAURILO",
        "numero": "5012",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSB",
        "nome": "PROFESSOR TECO",
        "numero": "4015",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PPL",
        "nome": "PROFESSORA EDNA SALES",
        "numero": "5480",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PDT",
        "nome": "PROFESSORA ELISETE",
        "numero": "1207",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSB",
        "nome": "PROFESSORA MARA",
        "numero": "4045",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSB",
        "nome": "PROFESSORA MARIENE",
        "numero": "4017",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSB",
        "nome": "PROFESSORA SOCORRO",
        "numero": "4054",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT do B",
        "nome": "PROFESSORA THAIS",
        "numero": "7037",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PDT",
        "nome": "QUERUBIM",
        "numero": "1222",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PT do B",
        "nome": "QUINQUINHA",
        "numero": "7030",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PPS",
        "nome": "RAILDA FERNANDEZ",
        "numero": "2388",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PCB",
        "nome": "RAIR ANICIO",
        "numero": "2100",
        "coligacao": "PCB"
    },
    {
        "partido": "PV",
        "nome": "RANDOLFO BARBOSA (FICO)",
        "numero": "4322",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSC",
        "nome": "RAQUEL MUNIZ",
        "numero": "2010",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSTU",
        "nome": "RAQUEL PRADO",
        "numero": "1666",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSC",
        "nome": "RAUL PLASSMANN",
        "numero": "2040",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSB",
        "nome": "REGILAINE PITORRA",
        "numero": "4014",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PMN",
        "nome": "REGINA ANJOS",
        "numero": "3305",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PV",
        "nome": "REGINA OLIVEIRA",
        "numero": "4328",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PT",
        "nome": "REGINALDO LOPES",
        "numero": "1312",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "REGINALDO ROSSI",
        "numero": "7092",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT do B",
        "nome": "REINALDO LIMA GALO",
        "numero": "7009",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT do B",
        "nome": "RENATA DO OTONI",
        "numero": "7055",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PP",
        "nome": "RENATO ANDRADE",
        "numero": "1100",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PMN",
        "nome": "RENATO FABIANO",
        "numero": "3313",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PV",
        "nome": "RENATO GOMES",
        "numero": "4333",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSDC",
        "nome": "RENATO TI REI",
        "numero": "2777",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PSDC",
        "nome": "RENILSON ALVES",
        "numero": "2767",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PP",
        "nome": "RENZO BRAZ",
        "numero": "1121",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PTB",
        "nome": "RICARDO ASSUNÇÃO",
        "numero": "1414",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PSB",
        "nome": "RICARDO LOBATO",
        "numero": "4018",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PEN",
        "nome": "RICARDO PEDROSA",
        "numero": "5123",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PPS",
        "nome": "RICHARD GUIMARÃES",
        "numero": "2325",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PDT",
        "nome": "RIVA GENTE BOA",
        "numero": "1221",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PT do B",
        "nome": "ROBERTO CARLOS",
        "numero": "7020",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PTC",
        "nome": "ROBERTO GONTIJO",
        "numero": "3699",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSB",
        "nome": "ROBERTO GONÇALVES",
        "numero": "4032",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PRTB",
        "nome": "ROBERTO SIMAO",
        "numero": "2820",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSTU",
        "nome": "ROBERTO VERÔNICA",
        "numero": "1602",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PHS",
        "nome": "ROBSON LACERDA",
        "numero": "3199",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PCO",
        "nome": "ROBSON RASTAFARI",
        "numero": "2929",
        "coligacao": "PCO"
    },
    {
        "partido": "PDT",
        "nome": "ROBÉSIO",
        "numero": "1213",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSB",
        "nome": "RODRIGO ARAUJO",
        "numero": "4089",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT",
        "nome": "RODRIGO CAMPOS",
        "numero": "1310",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSDB",
        "nome": "RODRIGO DE CASTRO",
        "numero": "4550",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PT do B",
        "nome": "RODRIGO MENDES",
        "numero": "7006",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PMDB",
        "nome": "RODRIGO PACHECO",
        "numero": "1515",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PT do B",
        "nome": "RODRIGO PORTO",
        "numero": "7050",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT",
        "nome": "ROGÉRIO",
        "numero": "1353",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PTC",
        "nome": "ROGÉRIO ALCÂNTARA POL. FEDERAL",
        "numero": "3634",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PV",
        "nome": "ROMULO VENEROSO",
        "numero": "4344",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PV",
        "nome": "ROMÁRIO",
        "numero": "4325",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PT do B",
        "nome": "RONALDINHO COVER",
        "numero": "7049",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PMDB",
        "nome": "RONALDO BRAGA",
        "numero": "1512",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PTC",
        "nome": "RONALDO LAÇADOR",
        "numero": "3615",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PRP",
        "nome": "RONALDO MARTINS",
        "numero": "4411",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PRB",
        "nome": "RONALDO RESENDE",
        "numero": "1001",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PDT",
        "nome": "ROSANE LOIRINHA",
        "numero": "1235",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PT",
        "nome": "ROSIANE APARECIDA",
        "numero": "1399",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSOL",
        "nome": "ROSILAINE DE FATIMA CORDEIRO",
        "numero": "5065",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PSDC",
        "nome": "ROSILENE DA SAÚDE",
        "numero": "2707",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PTB",
        "nome": "ROSSY DA AUTO ESCOLA",
        "numero": "1478",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PSC",
        "nome": "RUTE OLIVEIRA",
        "numero": "2034",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSB",
        "nome": "RUY MOREIRA",
        "numero": "4009",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PROS",
        "nome": "SANDRA DE SOUZA",
        "numero": "9015",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PTC",
        "nome": "SANDRA LAS CASAS",
        "numero": "3650",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PRP",
        "nome": "SANDRA ROCHA",
        "numero": "4415",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT do B",
        "nome": "SANDRINHA",
        "numero": "7094",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSB",
        "nome": "SANDRO COELHO",
        "numero": "4066",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT do B",
        "nome": "SANDRO ESPANTADO",
        "numero": "7098",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PSB",
        "nome": "SAOZINHA",
        "numero": "4006",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSOL",
        "nome": "SARA AZEVEDO",
        "numero": "5015",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PMDB",
        "nome": "SARAIVA FELIPE",
        "numero": "1590",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PPS",
        "nome": "SARGENTO ARISTÓTELES",
        "numero": "2311",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PV",
        "nome": "SARGENTO CARLOS",
        "numero": "4393",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSL",
        "nome": "SARGENTO FRAGA ALPES",
        "numero": "1790",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSB",
        "nome": "SAULO MIRANDA",
        "numero": "4002",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PMN",
        "nome": "SGT. GILBERTO",
        "numero": "3366",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PPL",
        "nome": "SIDENIR É SOLUÇÃO",
        "numero": "5444",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT do B",
        "nome": "SIDNEY LIMA",
        "numero": "7093",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PMDB",
        "nome": "SILAS BRASILEIRO",
        "numero": "1570",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PDT",
        "nome": "SILVIO COSTA",
        "numero": "1202",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PP",
        "nome": "SOCORRO SANFONEIRA",
        "numero": "1113",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PMDB",
        "nome": "SOLANGE OLIVEIRA",
        "numero": "1516",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSB",
        "nome": "SONIA DE DEUS",
        "numero": "4021",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSB",
        "nome": "SONIA TERRA",
        "numero": "4035",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSB",
        "nome": "STEFANO AGUIAR",
        "numero": "4044",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSTU",
        "nome": "STENIO DA PROTESE",
        "numero": "1631",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PPS",
        "nome": "STOESSEL VINHAS",
        "numero": "2300",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSTU",
        "nome": "STÊNIA JOURINK",
        "numero": "1615",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PDT",
        "nome": "SUB-TENENTE GONZAGA",
        "numero": "1231",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PTC",
        "nome": "SUELY GOMES",
        "numero": "3607",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PP",
        "nome": "SÔNIA",
        "numero": "1156",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PMDB",
        "nome": "SÔNIA PINHO",
        "numero": "1525",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSB",
        "nome": "TACINHO CARVALHO",
        "numero": "4088",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PMN",
        "nome": "TAMIRES MARTINS",
        "numero": "3393",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PTC",
        "nome": "TANIA SOCIAL",
        "numero": "3677",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSB",
        "nome": "TENENTE LÚCIO",
        "numero": "4010",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PR",
        "nome": "THAIS RIBEIRO",
        "numero": "2288",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSB",
        "nome": "THEREZINHA SANT'ANNA",
        "numero": "4053",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PCB",
        "nome": "THIAGO  CAMARGOS",
        "numero": "2121",
        "coligacao": "PCB"
    },
    {
        "partido": "DEM",
        "nome": "TIA LOURDES",
        "numero": "2560",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSDB",
        "nome": "TIA SONIA",
        "numero": "4517",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PDT",
        "nome": "TIAO NETO",
        "numero": "1214",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSB",
        "nome": "TILDEN SANTIAGO",
        "numero": "4004",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTN",
        "nome": "TIO CARLOS",
        "numero": "1995",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PDT",
        "nome": "TOM ZÉ",
        "numero": "1251",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PTC",
        "nome": "TONINHO JOSÉ",
        "numero": "3656",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PTB",
        "nome": "TONINHO MEDINA",
        "numero": "1410",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PP",
        "nome": "TONINHO PINHEIRO",
        "numero": "1122",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSL",
        "nome": "TONINHO TIMBIRA",
        "numero": "1717",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PROS",
        "nome": "TUANE GARCIA",
        "numero": "9040",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSL",
        "nome": "TUQUINHA",
        "numero": "1788",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSDB",
        "nome": "TÊCA",
        "numero": "4546",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PDT",
        "nome": "URBANO",
        "numero": "1211",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSB",
        "nome": "VAGUINHO A FORÇA DO POVO",
        "numero": "4041",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PTB",
        "nome": "VALERIA GOMES",
        "numero": "1457",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PDT",
        "nome": "VALTER FILHO",
        "numero": "1215",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PR",
        "nome": "VALÉRIO NETO",
        "numero": "2204",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSTU",
        "nome": "VALÉRIO VIEIRA",
        "numero": "1616",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PT",
        "nome": "VANDERLEI SANTOS",
        "numero": "1386",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSC",
        "nome": "VANDERLEI TOMAZ",
        "numero": "2021",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSTU",
        "nome": "VANGOGH",
        "numero": "1640",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "PTN",
        "nome": "VANILDA CARDOSO",
        "numero": "1934",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PT do B",
        "nome": "VERONICA CARVALHO",
        "numero": "7063",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PV",
        "nome": "VICENTE MARINHO MOTORISTA",
        "numero": "4353",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PTN",
        "nome": "VILMAR DO SITRAMONTI",
        "numero": "1919",
        "coligacao": "PTN / PSDC"
    },
    {
        "partido": "PTB",
        "nome": "VILSON ANTÔNIO",
        "numero": "1400",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PSB",
        "nome": "VILSON DA FETAEMG",
        "numero": "4057",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PT do B",
        "nome": "VINICIUS SAMOR DE LACERDA",
        "numero": "7099",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "DEM",
        "nome": "VITOR PENIDO",
        "numero": "2526",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PC do B",
        "nome": "WADSON RIBEIRO",
        "numero": "6510",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSC",
        "nome": "WAGNER SILVA",
        "numero": "2041",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PPL",
        "nome": "WALTER COSTA TENENTE CORONEL",
        "numero": "5445",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSD",
        "nome": "WALTER TOSTA",
        "numero": "5567",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSDB",
        "nome": "WALTINHO",
        "numero": "4540",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PSB",
        "nome": "WANDER DAMASCENO",
        "numero": "4056",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PDT",
        "nome": "WANDERLEI TROUXE A SORTE",
        "numero": "1258",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PPS",
        "nome": "WANDERLEIA ENFERMEIRA",
        "numero": "2303",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PHS",
        "nome": "WANDERLINO TEIXEIRA",
        "numero": "3122",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PTC",
        "nome": "WATSON AGUIAR",
        "numero": "3621",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PT do B",
        "nome": "WEDER MALOCA",
        "numero": "7044",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PHS",
        "nome": "WEDERSON MOREIRA",
        "numero": "3144",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PT",
        "nome": "WELITON PRADO",
        "numero": "1391",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PTC",
        "nome": "WELTON MANSO",
        "numero": "3636",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PC do B",
        "nome": "WILIAM RODRIGUES",
        "numero": "6530",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PCB",
        "nome": "WILLIAN HERCULANO",
        "numero": "2110",
        "coligacao": "PCB"
    },
    {
        "partido": "PPL",
        "nome": "WILLIAN PADEIRO",
        "numero": "5415",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PDT",
        "nome": "WILSON CALIXTO",
        "numero": "1240",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PHS",
        "nome": "WIRIS",
        "numero": "3132",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "PMDB",
        "nome": "WOSHINGTON CAPA",
        "numero": "1501",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PSB",
        "nome": "XICA DA SILVA",
        "numero": "4040",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PSC",
        "nome": "ZE CARLOS",
        "numero": "2033",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PSC",
        "nome": "ZE VITOR",
        "numero": "2078",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "DEM",
        "nome": "ZENILDA MARCHEZINE",
        "numero": "2501",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PMN",
        "nome": "ZEZÉ DO SALÃO",
        "numero": "3363",
        "coligacao": "PTB / PMN"
    },
    {
        "partido": "PT",
        "nome": "ZÉ BONOMO",
        "numero": "1347",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PRB",
        "nome": "ZÉ FRANCISCO",
        "numero": "1013",
        "coligacao": "PT / PMDB / PC do B / PROS / PRB"
    },
    {
        "partido": "PRTB",
        "nome": "ZÉ MANOEL",
        "numero": "2855",
        "coligacao": "PSB / PPL / PRTB"
    },
    {
        "partido": "PHS",
        "nome": "ZÉ PRATES",
        "numero": "3123",
        "coligacao": "PTdo B / PRP / PHS / PEN"
    },
    {
        "partido": "SD",
        "nome": "ZÉ SILVA",
        "numero": "7777",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    },
    {
        "partido": "PTC",
        "nome": "ÁDILA NEVES",
        "numero": "3680",
        "coligacao": "PSC / PTC / PSL"
    },
    {
        "partido": "PDT",
        "nome": "ÁUREA CÂNDIDA",
        "numero": "1224",
        "coligacao": "PPS / PV / PDT"
    },
    {
        "partido": "PSOL",
        "nome": "ÉRICO COLEN",
        "numero": "5000",
        "coligacao": "PSTU / PSOL"
    },
    {
        "partido": "DEM",
        "nome": "ÍTALO CASTELO BRANCO",
        "numero": "2545",
        "coligacao": "DEM / PSDB / PP / PR / PSD / SD"
    }
];

var options = {
  host: 'localhost',
  port: 9200,
  path: '/eleicoes2014/dep_federal',
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