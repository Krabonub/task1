var objectInput = document.getElementById('objectInput');

var listElement1 = document.getElementById('t2listElement1');
var listElement2 = document.getElementById('t2listElement2');
var listElement3 = document.getElementById('t2listElement3');
var listElement4 = document.getElementById('t2listElement4');
var listElement5 = document.getElementById('t2listElement5');
var listElement6 = document.getElementById('t2listElement6');
var listElement7 = document.getElementById('t2listElement7');
var listElement8 = document.getElementById('t2listElement8');
var listElement9 = document.getElementById('t2listElement9');
var listElement10 = document.getElementById('t2listElement10');

objectInput.oninput = function(){
    
    if(objectInput.value.match(/([A-Za-z0-9-]+)\:([A-Za-z0-9-]+)/g)){
        listElement1.innerText = true;
    }
    else{
        listElement1.innerText = false;
    }
}