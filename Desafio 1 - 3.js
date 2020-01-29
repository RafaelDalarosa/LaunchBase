const usuarios = [{
    nome: 'Carlos',
    tecnologias: ['HTML', 'CSS']   
},
{
    nome: 'Jasmine',
    tecnologias: ['JavaScript', 'CSS']
},
{
    nome: 'Tuane',
    tecnologias: ['HTML', 'Node.js']
}]


function buscaTech(tech){
   for (let i = 0; i < tech.length; i++)
        console.log(tech[i].tecnologias)
   }


buscaTech(usuarios)

