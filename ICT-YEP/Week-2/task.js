// let admin = ("john")
// let newname = ("John")
 
// alert (admin)


// function area (a,b,h) {
//     alert (0.5+ 3.5 * 7)
// }

let balance = 2000
let amount = 300
function withdraw(balance,amount){
    if (amount > balance){
        return("insufficient funds")
    }else{
       if (amount < balance) {
        return("Transaction sucessful")
    }
    }
}
let response = withdraw(amount,balance)
alert (response)
    