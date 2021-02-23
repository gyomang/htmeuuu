var monform=document.querySelector("#Valid");
monform.addEventListener("click",function(){
    sel1();
});

function sel1(){
    nom=document.querySelector("#NomUtilisateur").value;
    nom=nom.toUpperCase();
    alert(nom);
}