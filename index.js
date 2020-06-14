var choices=["paper","scissors","rock"];
function compute(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function rules(option1,option2)
{
if(option1=="paper"){
    if(option2=="rock") 
    return true;
    if(option2=="scissors") return false;
}
if(option1=="rock"){
    if(option2=="paper")
    return false;
    if(option2=="scissors")
    return true;
}
if(option1=="scissors")
{
    if(option2=="paper")
    return false;
    if(option2=="rock")
    return true;

}
}
unction getSymbol(choice){
    if (choice == "rock") return "<i class=\"button far fa-hand-rock fa-6x\"></i>";
    if (choice == "scissors") return "<i class=\"button far fa-hand-scissors fa-6x\"></i>";
    if (choice == "paper") return "<i class=\"button far fa-hand-paper fa-6x\"></i>";
}

function setUser(choice){
    $("userChoice").innerHTML=getSymbol(choice);

}
function setComputer(choice){
    $("computerchoice").innerHTML=getSymbol(choice);
}
userpoint=0;
robotpoint=0;
function run(choice){
    let computerchoice=compute();
     setComputer(computerchoice);

     let userChoice=choice;
     setUser(userChoice);
     if(userChoice==computerchoice){
         $("result").innerHTML="<p style='color:gray'>Continue</p>"}
         else{
           let userwon=rules(userChoice,computerchoice)  ;
           if(userwon){
               userpoint+=1;
           }else{robotpoint+=1;
           }
           pointMessage(userwon);
           updatePoint();
         }
     }
function pointMessage(userwon){
    if(userwon){
        $("result").innerHTML="<p style='color:gray>YOU point</p> "
    }else{
        $("result").innerHTML="<p style='color:red>Robot points</p>"
    }
}
function lostMessage(){
    $("result").innerHTML="<p style='color:red'>YOU LOST</p>"

}
unction wonMessage(){
    document.getElementById("result").innerHTML = "<p style='color:green'>YOU WIN</p>"
}

function updatePoints(){
    document.getElementById("userPoints").innerHTML = userPoints;
    document.getElementById("robotPoints").innerHTML = computerPoints;
    if (userPoints + computerPoints == 5){
        if (userPoints > computerPoints){
            wonMessage();
        }else{
            lostMessage();
        }
        userpoint=0;
        robotpoint=0;
    }
}