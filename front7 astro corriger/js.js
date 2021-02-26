function affichejour(){   
    for (let index = 1; index <= 31; index++) {
        var uneoption = document.createElement("option");
    
        uneoption.text=index;
        uneoption.setAttribute("value",index);

        document.querySelector("#jour").appendChild(uneoption);
    }
}

affichejour();

function affichemois(){
    var fruits = ['Banana','janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre', 'Banana'];

    for (let index = 1; index <= 12; index++) {
        var uneoption = document.createElement("option");
    
        uneoption.text=fruits[index];
        uneoption.setAttribute("value",index);
        uneoption.setAttribute("class","loul");

        document.querySelector("#mois").appendChild(uneoption);
    }
}

affichemois();

function afficheannee(){   
    for (let index = 1939; index <= 2021; index++) {
        var uneoption = document.createElement("option");
    
        uneoption.text=index;
        uneoption.setAttribute("value",index);

        document.querySelector("#annee").appendChild(uneoption);
    }
}

afficheannee();



function valNum(machaine){
    machaine=machaine.toUpperCase();
    var nb =0;
    for (let i = 0; i < machaine.length; i++) {
        let maval=machaine.charCodeAt(i)-64;
        nb+=maval;
    }
    return nb;
}
/*document.querySelector("#pseudo").value=valNum("gyom");*/

var monform=document.querySelector("#nom");
monform.addEventListener("keyup",function(){
    document.querySelector("#pseudo").value=valNum(monform.value);
});





var monform=document.querySelector("#mois");
monform.addEventListener("change",function(){
    afficherSigne(monform.value);
});

function afficherSigne(val){
    var signe = ["slip","Verseau","Poisson","Belier","Taureau","Gémeaux","Cancer","Lion","Vierge","Balance","Scor pion","Sagittaire","Capricorne","Verseau"] ;
    alert("Vous etes un ou une "+signe[val]);
}