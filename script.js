'use strict'
function impares(num) {
    for (let i = 1; i <= num; i++){
        if (i % 2 !== 0) {
            console.log(i);
        }
        
    }
}
function disminuir_multiplos_3(num) {
    for (num; num >= 0; num--) {
        if (num % 3 == 0) {
            console.log(num);
        }

    }
}
function secuencia(num1, num2) {
    
    for (let i = num1; i >= num2; i-=1.5) {
        console.log(i);
        
    }
}
function sigma(num) {
    var arr = "";
    var sum = 0;
    for (let index = 1; index <= num; index++) {
        arr = arr+index+" + "
        sum += index;
    }
    arr = arr.substring(0, arr.length - 3);
    console.log(sum);
    console.log(arr);
    
}
function factorial(num) {
    var product = 1;
    var arr = "";
    for (let index = 1; index <= num; index++) {
        product = product * index;
        arr = arr + index + " * "
    }
    arr = arr.substring(0, arr.length - 3);
    console.log(product);
    console.log(arr);
}
impares(20);
disminuir_multiplos_3(100);
secuencia(4, -3.5);
sigma(100);
factorial(12);
