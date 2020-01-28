function acharNumero(num){
    if(num < 5){
        return 'mercurio'
    }
    if(num >= 5 && num <= 10){
        return 'venus'
    }
    
    if(num >10 && num <=100){
        return 'terra'
    }
    
    if(num > 100){
        return 'marte'
    }
}
