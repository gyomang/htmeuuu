var monbutton=document.querySelector("#quanti1");
monbutton.addEventListener("keyup",function(){
    afficherPrix1();
});
var monbutton=document.querySelector("#prixuni1");
monbutton.addEventListener("keyup",function(){
    afficherPrix1();
});



var monbutton=document.querySelector("#quanti2");
monbutton.addEventListener("keyup",function(){
    afficherPrix2();
});
var monbutton=document.querySelector("#prixuni2");
monbutton.addEventListener("keyup",function(){
    afficherPrix2();
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
    quanti2 = document.querySelector("#prix1").value;
    prixuni2 = document.querySelector("#prix2").value;
}