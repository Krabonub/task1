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

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

textInput.oninput = function(){
    var inputArr = textInput.value.split('');
    var numbersArr = textInput.value
    .replace(/\D/g, " ")
    .split(" ")
    .filter(function(item, index, arr){
        if(item.length){
            return item;
        }
    });
    var floatNumbersArr = textInput.value
    .replace(/\D/g, " ")
    .split(" ")
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
    listElement4.innerText = numbersArr.length;
    //5
    listElement5.innerText = numbersArr.map(function(item, index, arr){
        if(item.length <= 6){
            var tmp = '';
            for(var i=0 ; i < 6 - String(item).length; i++){
                tmp += '0';
            }
            return tmp+String(item);
        }
        else return "[To long number]"
    });
    //6
    listElement6.innerText='';
    //7
    listElement7.innerText = numbersArr.reduce(function(previousValue, currentItem, index, arr){
        return +previousValue + +currentItem;
    },0);
    //8
    listElement8.innerText = numbersArr.reduce(function(previousValue, currentItem, index, arr){
        return (+currentItem > +previousValue)? +currentItem : +previousValue;
    },0);
    //9
    listElement9.innerText = !!numbersArr.reduce(function(previousValue, currentItem, index, arr){
        if(previousValue === currentItem){
            return currentItem;
        }
        else return false;
    });
    //10
    listElement10.innerText = numbersArr[randomInteger(0, numbersArr.length-1)];
}