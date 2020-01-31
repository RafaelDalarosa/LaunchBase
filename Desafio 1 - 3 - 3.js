const usuarios = [
    {
      nome: 'Salvio',
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: 'Marcio',
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: 'Lucia',
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]




for (let i = 0; i < usuarios.length; i++){
    let resultado = calculaReceitas(usuarios[i])-calculaDespesas(usuarios[i])
        if (resultado < 0){
            console.log(usuarios[i].nome + ' ' + 'possui saldo negativo de' + ' ' + resultado)
        }else{
            console.log(usuarios[i].nome + ' ' + 'possui saldo positivo de' + ' ' + resultado)
        }
    
}


function calculaReceitas(rec){
    let y = 0
        for (let j = 0; j < rec.receitas.length; j++){
            y += rec.receitas[j];
    }
    return y
}

function calculaDespesas(dep){
    let x = 0
        for (let j = 0; j < dep.despesas.length; j++){
            x += dep.despesas[j];
        }
    return x
}
        

