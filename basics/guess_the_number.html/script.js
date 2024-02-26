let randomNum = Math.floor(Math.random() * 9);
        let userInput = document.getElementById("num")
        let output = document.getElementById("output")

        function guess(){
            if(randomNum == userInput.value){
                output.innerHTML = "you guessed it right" + randomNum ;
            }
            else{
                output.innerHTML = "It was a wrong guess " + randomNum;
            }
            setTimeout(()=>{
            window.location.reload()
            }, 1000)
        }