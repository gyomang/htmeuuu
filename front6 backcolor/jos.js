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

    document.body.style.backgroundColor = "#"+rvb1+rvb2+rvb3;
}

var monform=document.querySelector("#rvb1");
monform.addEventListener("keyup",function(){
    lol=control1();
    if (lol=="lol") {
        color();
    }
});
var monform=document.querySelector("#rvb2");
monform.addEventListener("keyup",function(){
    lol=control2();
    if (lol=="lol") {
        color();
    }
});
var monform=document.querySelector("#rvb3");
monform.addEventListener("keyup",function(){
    lol=control3();
    if (lol=="lol") {
        color();
    }
});





function integr1(){
    document.querySelector("#rvb1").value="FF";
    document.querySelector("#rvb2").value="00";
    document.querySelector("#rvb3").value="00";
}
function colored(){
    document.body.style.backgroundColor = "red";

}
var monbut=document.querySelector("#color1");
monbut.addEventListener("click",function(){
    colored();
    integr1();
    control1();
});

function integr2(){
    document.querySelector("#rvb1").value="00";
    document.querySelector("#rvb2").value="FF";
    document.querySelector("#rvb3").value="00";
}
function colorvert(){
    document.body.style.backgroundColor = "green";
}
var monbut=document.querySelector("#color2");
monbut.addEventListener("click",function(){
    colorvert();
    integr2();
    control2();
});

function integr3(){
    document.querySelector("#rvb1").value="00";
    document.querySelector("#rvb2").value="00";
    document.querySelector("#rvb3").value="FF";
}
function colorblue(){
    document.body.style.backgroundColor = "blue";
}
var monbut=document.querySelector("#color3");
monbut.addEventListener("click",function(){
    colorblue();
    integr3();
    control3();
});






function control1(){
    rvb1 = document.querySelector("#rvb1").value;
    regex=/^([0-9A-F]){2}$/;
    if (rvb1.match(regex)) {
        document.querySelector("#rvb1").style.backgroundColor = "#8bc34a";
        return "lol";
    }else{
        document.querySelector("#rvb1").style.backgroundColor = "#e05282";
    }
}
function control2(){
    rvb1 = document.querySelector("#rvb2").value;
    regex=/^([0-9A-F]){2}$/;
    if (rvb1.match(regex)) {
        document.querySelector("#rvb2").style.backgroundColor = "#8bc34a";
        return "lol";
    }else{
        document.querySelector("#rvb2").style.backgroundColor = "#e05282";
    }
}
function control3(){
    rvb1 = document.querySelector("#rvb3").value;
    regex=/^([0-9A-F]){2}$/;
    if (rvb1.match(regex)) {
        document.querySelector("#rvb3").style.backgroundColor = "#8bc34a";
        return "lol";
    }else{
        document.querySelector("#rvb3").style.backgroundColor = "#e05282";
    }
}