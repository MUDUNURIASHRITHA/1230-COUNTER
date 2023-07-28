let update=document.getElementById("updatevalue");
function onincrement(){
    let a=update.textContent;
    let countervalue=parseInt(a)+1;
    if(countervalue>0){
        update.style.color="green";
    }
    else if(countervalue<0){
        update.style.color="red";
    }
    else{
        update.style.color="aqua";
    }
    update.textContent=countervalue;
}
function on1(){
    update.textContent=0;
    update.style.color="pink";
}
function ondecrement(){
     a=update.textContent;
     countervalue=parseInt(a)-1;
    if(countervalue>0){
        update.style.color="green";
    }
    else if(countervalue<0){
        update.style.color="red";
    }
    else{
        update.style.color="aqua";
    }
    update.textContent=countervalue;
}
