
function nota_final(score) {
let notaA = score >= 90 && score <= 100
let notaB = score >= 80 && score <= 89
let notaC = score >= 70 && score <= 79
let notaD = score >= 60 && score <= 69
let notaE = score < 60 && score >=0

let nota_final

if (notaA){
    nota_final = 'A'
}else if (notaB){
    nota_final = 'B'
}else if (notaC){
    nota_final = 'C'
}else if (notaD){
    nota_final = 'D'
}else if (notaE){
    nota_final = 'E'
}else{
    nota_final = 'Nota inválida'
}
return nota_final
}

console.log(nota_final(101))
console.log(nota_final(50))
console.log(nota_final(75))
console.log(nota_final(93))
console.log(nota_final(61))
