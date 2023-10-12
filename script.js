let nota1 = prompt('Digite a primeira nota...');
let nota2 = prompt('Digite a segunda nota...');
let nota3 = prompt('Digite a terceira nota...');
let nota4 = prompt('Digite a quarta nota...');
let somaNotas = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4));

mediaNotas = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;

if (somaNotas < 0 || somaNotas > 40) {
    alert('Verifique as notas que foram colocadas.');
}

else if (mediaNotas < 6) {
    alert('Reprovado!');
}

else if (mediaNotas >= 6) {
    alert('Aprovado!');
} 

alert(`A média entre as notas foi: ${mediaNotas}`)


/*if (nota1 < 0 || nota1 > 10) {
    alert('Digite notas entre 0 e 10');
}

else if (nota2 < 0 || nota2 > 10) {
    alert('Digite notas entre 0 e 10');
}

else if (nota3 < 0 || nota3 > 10) {
    alert('Digite notas entre 0 e 10');
}

else if (nota4 < 0 || nota4 > 10) {
    alert('Digite notas entre 0 e 10');
}

else if (mediaNotas < 5) {
    alert('Reprovado!')
}

else if (mediaNotas) {
    alert('Aprovado!')
}
*/