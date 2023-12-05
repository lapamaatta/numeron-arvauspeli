var Variables = {};

const play = () => {
    document.getElementById("guessLabel").style.display="block";
    document.getElementById("guess").style.display="block";
    document.getElementById("guessButton").style.display="block";
    document.getElementById("playButton").style.display="none";

    document.getElementById("playButton").innerHTML = "Pelaa!";
    document.getElementById("response").innerHTML = "";
    document.getElementById("guess").value = "";
    Variables.number =  Math.floor(Math.random()*1000)+1;
    if(Variables.oldhighscore == null){
        Variables.oldhighscore = 10000;
    }
    Variables.highscore = document.getElementById("highscore");
    Variables.arvaukset = 1;
    Variables.works = false;
}
const guess = () => {
    const response = document.getElementById("response");
    Variables.numberGuess = document.getElementById("guess").value;
    if(Variables.numberGuess == Variables.number){
        Variables.works = true;
    }
    try{
        if(Variables.numberGuess < 1 || Variables.numberGuess > 1000) throw "Arvaa numero väliltä 1-1000!";
        if(Variables.numberGuess < Variables.number){
            Variables.arvaukset++;
            throw "Numero on isompi!";
        }
        if(Variables.numberGuess > Variables.number){
            Variables.arvaukset++;
            throw "Numero on pienempi!";
        }
    }
    catch(err){
        Variables.works = false;
        response.innerHTML = "Väärin! : " + err;
    }
    finally{
        if(Variables.works){
            console.log("OH : " + Variables.oldhighscore);
            response.innerHTML = "Oikein meni! Sinulla meni: " + Variables.arvaukset + " arvausta!"
            if(Variables.oldhighscore > Variables.arvaukset){
                console.log("OH : " + Variables.oldhighscore);
                Variables.oldhighscore = Variables.arvaukset;
                console.log("OH : " + Variables.oldhighscore);
                Variables.highscore.innerHTML = "Ennätys: " + Variables.oldhighscore;
            } else {
                console.log("OH : " + Variables.oldhighscore);
                Variables.highscore.innerHTML = "Ennätys: " + Variables.oldhighscore;
            }

            document.getElementById("guess").style.display="none";
            document.getElementById("guessLabel").style.display="none";
            document.getElementById("guessButton").style.display="none";
            document.getElementById("playButton").innerHTML = "Pelaa uudelleen!";
            document.getElementById("playButton").style.display="block";
        }
    }
}