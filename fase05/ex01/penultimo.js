function penultimo(array){
    let cont = 0;
    let penult = array.length - 2;
    while(cont <= array.length){
        if(cont === penult){
            return array[cont]
        }
        cont++;
    }
}

