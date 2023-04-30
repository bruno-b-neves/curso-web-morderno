/*
    Exibir no console os numeros impares e pares
    Exemplos: { 1, 3, 5, 7, 9 } e { 2, 4, 6, 8, 10}
    Precisamos identificar qual é o bloco. Exemplo: Bloco 1 { 1, 3, 5, ...} e Bloco 2 { 2, 4, 6, ...}
*/

{
    console.log('Bloco 1')
    {
        console.log(1);
        console.log(3);
        console.log(5);
        console.log(7);
        console.log(9);
    }
}

{
    console.log('Bloco 2');
    {
        console.log(2);
        console.log(4);
        console.log(6);
        console.log(8);
        console.log(10);
    }
}