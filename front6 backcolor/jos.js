function color(){
    rvb1 = document.querySelector("#rvb1").value;
    rvb2 = document.querySelector("#rvb2").value;
    rvb3 = document.querySelector("#rvb3").value;

    if (rvb1=="") {
        rvb1="00";
    }
    if (rvb2=="") {
        rvb2="00";
    }
    if (rvb3=="") {
        rvb3="00";
    }

    document.body.style.backgroundColor = "rgb("+rvb1+","+rvb2+","+rvb3+")";
}

var monform=document.querySelector("#rvb1");
monform.addEventListener("keyup",function(){
    color();
});
var monform=document.querySelector("#rvb2");
monform.addEventListener("keyup",function(){
    color();
});
var monform=document.querySelector("#rvb3");
monform.addEventListener("keyup",function(){
    color();
});





function colored(){
    document.body.style.backgroundColor = "red";
}
var monbut=document.querySelector("#color1");
monbut.addEventListener("click",function(){
    colored();
});

function colorvert(){
    document.body.style.backgroundColor = "green";
}
var monbut=document.querySelector("#color2");
monbut.addEventListener("click",function(){
    colorvert();
});

function colorblue(){
    document.body.style.backgroundColor = "blue";
}
var monbut=document.querySelector("#color3");
monbut.addEventListener("click",function(){
    colorblue();
});