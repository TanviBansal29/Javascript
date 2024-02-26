let randomNum = Math.floor(Math.random() * 9);
let userInput = document.getElementById("num")
let output = document.getElementById("output")

function guessNum(){
    if(randomNum == userInput.value){
        output.innerHTML = "YEAH..You guessed it right!";
    }
    else{
        output.innerHTML = "OOPS..It was a wrong guess, The correct number was: " + randomNum;
    }
    setTimeout(()=>{
    window.location.reload()
    }, 2000)
}