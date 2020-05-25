const usuarios = [{
    nome: ['Carlos'],
    tecnologias: ['HTML', 'CSS']   
},
{
    nome: ['Jasmine'],
    tecnologias: ['JavaScript', 'CSS']
},
{
    nome: ['Tuane'],
    tecnologias: ['HTML', 'Node.js']
}]




function checkTech(check){
    let x
    for (let i = 0; i < check.tecnologias.length; i++){
        if (check.tecnologias[i] == 'CSS'){
            return x = true
        }
    }
   }


for (let x = 0; x < usuarios.length; x++){
    if (checkTech(usuarios[x]) == true){
        console.log(`O usuario ${usuarios[x].nome} trabalha com CSS`)
    }

}
