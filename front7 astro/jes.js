var monform=document.querySelector("#Valid");
monform.addEventListener("click",function(){
    sel1();
});

function sel1(){
    nom=document.querySelector("#NomUtilisateur").value;
    nom=nom.toUpperCase();
    nom=nums(nom);
}

function nums(nom){
    
    tabnom=nom.split('');
    
    tabchif=[];
    lettre='a';
    alert(lettre);
    console.log(lettre);
    for (let index = 0; index < 26; index++) {
        alert(index);
        tabchif[index]=lettre
        lettre++;
        alert(lettre);
        console.log(lettre);
    }
}