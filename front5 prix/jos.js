var monbutton=document.querySelector("#quanti1");
monbutton.addEventListener("input",function(){
    afficherPrix1();
    afficherTotal();
});
var monbutton=document.querySelector("#prixuni1");
monbutton.addEventListener("input",function(){
    afficherPrix1();
    afficherTotal();
});

var monbutton=document.querySelector("#quanti2");
monbutton.addEventListener("input",function(){
    afficherPrix2();
    afficherTotal();
});
var monbutton=document.querySelector("#prixuni2");
monbutton.addEventListener("input",function(){
    afficherPrix2();
    afficherTotal();
});


function afficherPrix1(){
    quanti1 = document.querySelector("#quanti1").value;
    prixuni1 = document.querySelector("#prixuni1").value;
    result = quanti1*prixuni1;
    
    document.querySelector("#prix1").value=result;
}
function afficherPrix2(){
    quanti2 = document.querySelector("#quanti2").value;
    prixuni2 = document.querySelector("#prixuni2").value;
    result = quanti2*prixuni2;
    
    document.querySelector("#prix2").value=result;
}

function afficherTotal() {
    prix1 = document.querySelector("#prix1").value;
    prix2 = document.querySelector("#prix2").value;

    if (prix1 == "") { prix1=0; };
    if (prix2 == "") { prix2=0; };
    result = parseInt(prix1)+parseInt(prix2);

    document.querySelector("#final").value=result;
}