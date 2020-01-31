function por42(num1, num2){
    var num1 = num1+42
   while ( num1 <= num2){
       if ( num1 % 42 === 0){
           return num1
       }
       num1++
   }
   while ( num1 < 0){
       if (num1 >= num2){
           console.log('Não encontrado')
           return false
           }
        if( num1 <= num2){
            if ( num1 % 42 === 0){
                return num1
       }
       }
        num1++
   }
   
  
}

