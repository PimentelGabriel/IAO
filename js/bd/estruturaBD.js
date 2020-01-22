var db = window.openDatabase("Database", "1.0", "IAO", 2000);
//db.transaction(createDB, errorDB, successDB);

function errorDB(e){
    alert(e.message);
    console.log(e);
}

function successDB(){
    console.log("Tudo Correu bem");
}

db.transaction((tx)=>{
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Sala(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        nome VARCHAR(50),
                        capacidade NUM(15)
                    )`);
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Computador(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        nome VARCHAR(30),
                        mesa NUM(15)
                    )`);
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Gabinete(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        RP VARCHAR(10)
                    )`);
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Monitor(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        RP VARCHAR(10),
                        mesa NUM(15)
                    )`);
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Notbreak(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        RP VARCHAR(10),
                        mesa NUM(15)
                    )`);
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Estabilizador(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        RP VARCHAR(10),
                        mesa NUM(15)
                    )`);
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Mouse(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        ps2 BIT,
                        mesa NUM(15)
                    )`);
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Teclado(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        ps2 BIT,
                        mesa NUM(15)
                    )`);

    //Tabela de Relacionamento Dispositios_Falha
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Gabinete_Falha(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        falha TINYINT
                    )`);
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Monitor_Falha(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        falha TINYINT
                    )`);
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Notbreak_Falha(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        falha TINYINT
                    )`);
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Estabilizador_Falha(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        falha TINYINT
                    )`);
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Mouse_Falha(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        falha TINYINT
                    )`);
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Teclado_Falha(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        falha TINYINT
                    )`);
}, errorDB, successDB);

