

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
   
