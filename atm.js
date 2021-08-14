console.log("welcome to SBI ATM")
your_balance=15000
const re=require('readline-sync'); 
console.log("please insert your card")
language=re.question(`please select language :-`)
if (language=="english"||language=="hindi"||language=="marathi"){
    pin=re.questionInt("please enter your pin:-")
        if (pin==1234){
            console.log("pin is correct")
            trans=re.question("please select the transction:-")
            if (trans=="transfer" || trans=="withdrawal" || trans=="balance inquiry"||"trans"=="deposite"){
                if (trans=="transfer"){
                    user_pin=1510
                    user=re.question("enter pin no")
                    if (user==user_pin){
                        s=re.questionInt("enter the amount that you want to transfer:-")
                        if (s<=your_balance){
                            console.log(`${s}is successfullt transferred`)
                            d=re.question("you want to check remaning balance")
                            if (d=="yes"){
                                console.log(`${your_balance-s} this is your remaning balance`)
                            }
                        }else{
                            console.log('you have less amount to ransfer')
                        }
                    }else{
                        console.log(`entered wrong pin`)
                    }

                }if (trans=='withdrawal'){
                    f=re.questionInt("enter the amount that you want to withdrawal:-")
                    if (f<=your_balance){
                        console.log(`${f}that you withdrawal`)
                        console.log(`${your_balance-f}remaning balance`)
                    }
                }if (trans=="deposite"){
                    v=re.questionInt("enter the amount you want to deposite :-")
                    console.log(`${your_balance+v}that much you deposite`)
                }if (trans=="balance inquire"){
                    console.log(`${your_balance}that much balance you have`)
                }
            }else{
                console.log("invalid transection")}
            }     

        }
        else{
            console.log("your password is wrong you can't move further ")
        }
