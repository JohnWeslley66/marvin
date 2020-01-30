function por42(num1, num2){
    var num1 = num1 + 42
    if(num1 > num2){
        return false
    }
    
    while ( num1 < num2 ){
        
        if ( num1 % 42 === 0){
            return num1
          
            
        }
    
    num1++
    }
}

