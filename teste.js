const turmaA = [{
    nome: 'Rafael',
    nota: 9
},
{
    nome: 'Diego',
    nota: 5
},
{
    nome: 'Massei',
    nota: 7
}]

const turmaB = [{
    nome: 'Rafael',
    nota: 9
},
{
    nome: 'Diego',
    nota: 5
},
{
    nome: 'Massei',
    nota: 7
}]

function calculaMedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) /3
}

const media1 = calculaMedia(turmaA)
const media2 = calculaMedia(turmaB)

function enviaMensagem(media) {
    if (media > 5) {

    }
}

enviaMensagem(media1)
enviaMensagem(media1)