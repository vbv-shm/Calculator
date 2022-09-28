for(const item of document.getElementsByClassName("typescreen")){
    item.addEventListener("click",typescreen)
}
for(const item of document.getElementsByClassName("typescreen2")){
    item.addEventListener("click",typescreen2)
}

document.getElementById("pressequal").addEventListener("click",equate);

function equate(){
    if(operator=="+"){
        secondValue=document.getElementById("screenbottom").innerText;
        document.getElementById("screenbottom").innerText=Number(firstValue)+Number(secondValue);
        firstValue=document.getElementById("screenbottom").innerText;
    }
    else if(operator=="-"){
        secondValue=document.getElementById("screenbottom").innerText;
        document.getElementById("screenbottom").innerText=Number(firstValue)-Number(secondValue);
        firstValue=document.getElementById("screenbottom").innerText;
    }
    else if(operator=="/"){
        secondValue=document.getElementById("screenbottom").innerText;
        document.getElementById("screenbottom").innerText=Number(firstValue)/Number(secondValue);
        firstValue=document.getElementById("screenbottom").innerText;
    }
    else if(operator=="*"){
        secondValue=document.getElementById("screenbottom").innerText;
        document.getElementById("screenbottom").innerText=Number(firstValue)*Number(secondValue);
        firstValue=document.getElementById("screenbottom").innerText;
    }
    timesOperator=0;
    operator=""
}

function clearBottom(){
    document.getElementById("screenbottom").innerText="";
}


function typescreen(){
    document.getElementById("screenbottom").innerText=document.getElementById("screenbottom").innerText+this.innerText;
    document.getElementById("screentop").innerText=document.getElementById("screentop").innerText+this.innerText;
} 
function typescreen2(){
    document.getElementById("screentop").innerText=document.getElementById("screentop").innerText+this.innerText;
    if(operator==""|| timesOperator<2){    
    firstValue=Number(document.getElementById("screenbottom").innerHTML);
    clearBottom();
    operator=this.innerHTML;
    timesOperator=timesOperator+1}
    else{
        secondValue=Number(document.getElementById("screenbottom").innerHTML);
        equate();
        clearBottom();
        operator=this.innerHTML;
    }
    }

document.getElementById("pressAC").addEventListener("click",clearScreen);

function clearScreen(){
    document.getElementById("screenbottom").innerText="";
    document.getElementById("screentop").innerText="";
    operator="";
}



var firstValue=0;
var secondValue=0;
var operator="";
var timesOperator=0;
