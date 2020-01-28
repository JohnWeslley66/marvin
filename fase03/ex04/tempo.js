function tempo(data1, data2, unidade){
    var dataInicialMilissegundos = new Date(data1).getTime()
    var dataFinalMilissegundos =   new Date(data2).getTime()
    var umDiaMilissegundos = 1000*60*60*24
    var umMesMilissegundos = 1000*60*60*24*30
    var umAnoMilissegundos = 1000*60*60*24*30*12
    var diferencaMilissegundos = dataFinalMilissegundos  - dataInicialMilissegundos
    
    if(unidade === "dia"){
    var diferencaDatadia = Math.round(diferencaMilissegundos/umDiaMilissegundos);
    return diferencaDatadia}
    
    if(unidade === "mês"){
    var diferencaDatames = Math.round(diferencaMilissegundos/umMesMilissegundos);
    return diferencaDatames}
    
    if(unidade === "ano"){
    var diferencaData = Math.round(diferencaMilissegundos/umAnoMilissegundos);
    return diferencaData}
}
