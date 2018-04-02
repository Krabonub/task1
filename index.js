var textInput = document.getElementById('textInput');
var listElement1 = document.getElementById('listElement1');
var listElement2 = document.getElementById('listElement2');
var listElement3 = document.getElementById('listElement3');
var listElement4 = document.getElementById('listElement4');
var listElement5 = document.getElementById('listElement5');
var listElement6 = document.getElementById('listElement6');
var listElement7 = document.getElementById('listElement7');
var listElement8 = document.getElementById('listElement8');
var listElement9 = document.getElementById('listElement9');
var listElement10 = document.getElementById('listElement10');

textInput.oninput = function(){
    var inputArr = textInput.value.split('');
    //1
    listElement1.innerText = textInput.value.length;
    //2
    var unacceptable = [' ', '!', '@', '"', ';', '{', '}', '*', '&', '^', '%', '(', ')', '$', '#'];
    var tmpInput = inputArr.filter(function(item, index, arr){
        for(var i in unacceptable){
            if(item === unacceptable[i]){
                return false;
            }
        }
        return true;
    });
    listElement2.innerText = tmpInput.join('');
    //3
    var wordsNumber = inputArr.length ? 1: 0;
    inputArr.map(function(item, i, arr){
        if(item === ' ' && arr[i+1]!==' '){
            wordsNumber++;
        }
    });
    listElement3.innerText = wordsNumber;
    //4
    var digitsNumber = textInput.value.match(/\d/g);
    listElement4.innerText = digitsNumber;
}