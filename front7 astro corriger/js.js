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
    for (let index = 1; index <= 12; index++) {
        var uneoption = document.createElement("option");
    
        uneoption.text=index;
        uneoption.setAttribute("value",index);

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