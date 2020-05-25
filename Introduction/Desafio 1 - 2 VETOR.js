const tech = [{
    nome: 'C++',
    especialidade: 'Desktop'
},
{
    nome: 'Python',
    especialidade: 'Data Science'
},
{
    nome: 'JavaScript',
    especialidade: 'Web/Mobile'
}]



const programador = {
    nome: 'Rafael',
    idade: 29,
    tencnologias: [tech[1].nome,tech[2].nome]
}

console.log(`O usuario ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tencnologias} com especialidade ${tech[1].especialidade},${tech[2].especialidade}`)