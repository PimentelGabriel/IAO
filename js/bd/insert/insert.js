function in_sala(nome, capacidade){
    db.transaction((tx)=>{
        tx.executeSql(`INSERT INTO Sala(nome, capacidade) VALUES(`+nome+`,`+capacidade+`)`);
    }, errorDB, successDB);
}

function in_computer(lugar, mesa){
    db.transaction((tx)=>{
        tx.executeSql(`INSERT INTO Computador(lugar, mesa) VALUES(`+lugar+`, `+mesa+`)`);
    }, errorDB, successDB);
}

function in_Gabinete(nome, RP, SO, mesa, computer, dt_expira_so, descricao){
    db.transaction((tx)=>{
        tx.executeSql(`INSERT INTO Gabinete(nome, RP, SO, mesa, computer, dt_expira_so, descricao) VALUES(`+nome+`, `+RP+`,`+SO+`, `+mesa+`, `+computer+`, `+dt_expira_so+`, `+descricao+`)`);
    }, errorDB, successDB);
}

function in_Monitor(RP, mesa, computer, descricao){
    db.transaction((tx)=>{
        tx.executeSql(`INSERT INTO Monitor(RP, mesa, computer, descricao) VALUES(`+RP+`,`+mesa+`, `+computer+`, `+descricao+`,)`);
    }, errorDB, successDB);
}

function in_periferico(mouse, ps2, mesa, computer, descricao){
    var tabela = mouse?'Mouse':'Teclado';
    db.transaction((tx)=>{
        tx.executeSql(`INSERT INTO `+tabela+`(ps2, mesa, computer, descricao) VALUES(`+ps2+`,`+mesa+`, `+computer+`, `+descricao+`,)`);
    }, errorDB, successDB);
}

function in_Monitor(mesa, computer, descricao, RP){
    db.transaction((tx)=>{
        if(RP===undefined)
            tx.executeSql(`INSERT INTO Estabilizador(mesa, computer, descricao) VALUES(`+mesa+`, `+computer+`, `+descricao+`,)`);
        else
            tx.executeSql(`INSERT INTO Nobreak(mesa, computer, descricao, RP) VALUES(`+mesa+`, `+computer+`, `+descricao+`, `+RP+`)`);
    }, errorDB, successDB);
}

//=========== Tabelas de Falhas ================
function in_sala(tabela, id, problema){
    db.transaction((tx)=>{
        tx.executeSql(`INSERT INTO `+tabela+`_Falha (id, problema) VALUES(`+id+`,`+problema+`)`);
    }, errorDB, successDB);
}