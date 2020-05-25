let user = {
    name: 'Rafael',
    transaction: [],
    balance: 0

}


function createTransaction(tr,x){
        if (x >= 0){
            let y = 0
            y = user.balance + x
            user.balance = y
            console.log(`Seu saldo e de ${user.balance} reais`)
            tr.transaction.push({
                type: 'Credit',
                value: x
            })
        }else{
            if (x <= 0){
                let y = 0
                y = user.balance + x
                user.balance = y
                console.log(`Seu saldo e de ${user.balance} reais`)
                tr.transaction.push({
                    type: 'Debit', 
                    value: x
                })
            } 
        }
    }



function getHigherTransactionByType(x){
    for (let i = 0; i < x.transaction; i++){
        for (let h = 0; h < x.transaction[h].type; i++){
            if ( x.transaction.type = "credit")
            console.log(`${trasaction.type}+${transaction.value}`)
            
        }
    }
}
    
createTransaction(user, 50)
createTransaction(user, -20)
createTransaction(user, 25)
createTransaction(user, 37)

console.log (user.balance)

getHigherTransactionByType("credit")
//getHigherTransactionByType("debit")

//getAverageTransactionValue()

//getTransactionsCount()


