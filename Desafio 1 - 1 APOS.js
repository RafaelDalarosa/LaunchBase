const nome = 'Rafael'
const sexo = 'M'
const idade = 29
const contribuicao =7

const tcontrib = idade + contribuicao

if (tcontrib >=95 && sexo == 'M' || tcontrib >=85 && sexo == 'F'){
    console.log(`${nome}, voce pode se aponsentar!`)
}else {
    console.log(`${nome}, voce ainda nao pode se aponsentar!`)
}
