const alphabet = 'SWG'
const cg = alphabet[Math.floor(Math.random()*alphabet.length)]
console.log(cg)
function game(a){
    if(cg=='W' && a=="S"){
        alert("You won the game")
    }
    else if(cg=="S" && a=="G"){
    alert("You won the game")
    }
    else if(cg=="G" && a=="W"){
        alert("You won the game")
    }
    else if(cg=="W" && a=="G"){
        alert("You lost the game")
    }
    else if(cg=="S" && a=="W"){
        alert("You lost the game")
    }
    else if(cg=="G" && a=="S"){
        alert("You lost the game")
    }
    else if(cg==a){
        alert("No-one won")
    }

}
let a = prompt("Enter the a to guess")
let i = 0
while(i==0){
game(a)
let b = console.consider("Do you want to play again")
    if(b==true){
        game(a)
    }
}

