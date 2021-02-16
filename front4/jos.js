function afficherdate() {
    chaine="";
    var maDate = new Date();
    let dateJour = maDate.getDate();
    let mois = maDate.getMonth()+1;
    let annee = maDate.getFullYear();

    if (dateJour < 10) {
        chaine += "0"+dateJour;
    }else{
        chaine += dateJour;
    }

    (mois<10)?chaine+="/0"+mois:chaine+="/"+mois;
    chaine+="/"+annee;

    document.querySelector("#madate").value=chaine;
}

/* alert(chainedate);*/
var monbutton=document.querySelector("#btndate");
monbutton.addEventListener("click",function(){afficherdate();});
   
function afficherheure() {
    chaine="";
    var monHeure = new Date();
    let heure = monHeure.getHours();
    let min = monHeure.getMinutes();
    let sec = monHeure.getSeconds();

    if (heure < 10) {
        chaine += "0"+heure+":";
    }else{
        chaine += heure+":";
    }

    if (min < 10) {
        chaine += "0"+min+":";
    }else{
        chaine += min+":";
    }

    if (sec < 10) {
        chaine += "0"+sec;
    }else{
        chaine += sec;
    }

    document.querySelector("#monHeure").value=chaine;
}

var monbutton=document.querySelector("#btnHeure");
monbutton.addEventListener("click",function(){afficherheure();});