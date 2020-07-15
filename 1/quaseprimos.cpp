#include <iostream>

bool quasePrimo(int k);

int main(){
    int k; // numero que sera' conferido

    std::cin >> k;

    if(quasePrimo(k))
        std::cout << 'S\n';
    else
        std::cout << 'N\n';

    return 0;
}

bool quasePrimo(int k){
    int count = 0; // total de divisores

    for(int i=k; i>0; i--){// "i" sera o candidato a divisor.

        if(k%i == 0)// se o resto da divisao for igual a zero => e' divisor
            count++;
        
        if(count > 3)// se o total de divisores for maior que 3 => ja' nao e' "quase primo"
            return false;
    }

    return (count == 3) ? true : false;
}