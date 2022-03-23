let numeros =[]

for (let i = 1 ; i <=100 ; i++){
    numeros.push(i)
}

 numeros.forEach( function (item) {
     if(item % 3 === 0 && item % 5 === 0){
         item = 'FizzBuzz'
     } else if ( item % 5 === 0){
         item = 'Buzz'
     } else if (item % 3 === 0 ){
        item = 'Fizz'
     }
     console.log(item)
 })

