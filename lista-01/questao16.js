// 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

function is_prime(num) {
    let square_root = parseInt(num ** 0.5) 
    let count = 3;

    while(count <= square_root){
        if(num % count == 0){
            return false
        }
        count += 1
    }
    return true
}

function top50_primes(){
    let num = 101
    let count = 1

    while(count <= 50){
        if(is_prime(num)){
            console.log(`${count}. ${num} é primo`)
            count += 1
        }
        num += 1
    }
}

top50_primes()


