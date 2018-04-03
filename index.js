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
function stringToArr(str){
    return str.split('');
}
function integersArr(str){
    return str
    .replace(/\D/g, " ")
    .split(" ")
    .filter(function(item, index, arr){
        if(item.length){
            return item;
        }
    });
}
//1
function textLength(str){
    return str.length;
}
//2
function textWithoutSigns(str){
    var unacceptable = [' ', '!', '@', '"', ';', '{', '}', '*', '&', '^', '%', '(', ')', '$', '#'];
    var inputArr = stringToArr(str);
    return inputArr
    .filter(function(item, index, arr){
        for(var i in unacceptable){
            if(item === unacceptable[i]){
                return false;
            }
        }
        return true;
    }).join('');
}
//3
function numberOfWords(str){
    return wordsNumber = str.split(' ').filter(function(item, i, arr){
        return item!==''?true:false;
    }).length;
}
//4
function integersNumber(str){
    var numbersArr = integersArr(str);
    return numbersArr.length;
}
//5
function formatedIntegers(str){
    var numbersArr = integersArr(str);
    return numbersArr.map(function(item, index, arr){
        if(item.length <= 6){
            var tmp = '';
            for(var i=0 ; i < 6 - String(item).length; i++){
                tmp += '0';
            }
            return tmp+String(item);
        }
        else return "[To long number!]"
    });
}
//6
function formatedFloats(str){ 
   var tmp = str.match(/\d+\.\d+/g);
   return tmp ? tmp
    .map(function(item, i, arr){
        var intZeroes = '';
        var floatZeroes = '';
        var devidedItem = item.split('.');
        if(String(devidedItem[0]).length <= 6){
            for(var i = 0; i < 6 - String(devidedItem[0]).length; i++){
                intZeroes += '0';
            }
        }
        else{
            return "[To long number!]"
        }
        devidedItem[1] = devidedItem[1].charAt(0) + devidedItem[1].charAt(1);
        for(var i = 0; i < 2 - String(devidedItem[1]).length; i++){
            floatZeroes += '0';
        }
        devidedItem[0] = intZeroes + String(devidedItem[0]);
        devidedItem[1] = String(devidedItem[1]) + floatZeroes;
        return devidedItem[0]+'.'+devidedItem[1];
    }):'';
}
//7
function numbersSum(str){
    var numbersArr = integersArr(str);
    return numbersArr.reduce(function(previousValue, currentItem, index, arr){
        return +previousValue + +currentItem;
    },0);
}
//8
function maxNumber(str){
    var numbersArr = integersArr(str);
    return numbersArr.reduce(function(previousValue, currentItem, index, arr){
        return (+currentItem > +previousValue)? +currentItem : +previousValue;
    },0);
}
//9
function equalityCheck(str){
    var numbersArr = integersArr(str);
    return numbersArr?!!numbersArr.reduce(function(previousValue, currentItem, index, arr){
        if(previousValue === currentItem){
            return currentItem;
        }
        else return false;
    }):'';
}
//10
function randomNumber(str){
    var numbersArr = integersArr(str);
    return numbersArr[randomInteger(0, numbersArr.length-1)];
}

textInput.oninput = function(){
    listElement1.innerText = textLength(textInput.value);
    listElement2.innerText = textWithoutSigns(textInput.value);
    listElement3.innerText = numberOfWords(textInput.value);
    listElement4.innerText = integersNumber(textInput.value);
    listElement5.innerText = formatedIntegers(textInput.value);
    listElement6.innerText = formatedFloats(textInput.value);
    listElement7.innerText = numbersSum(textInput.value);
    listElement8.innerText = maxNumber(textInput.value);
    listElement9.innerText = equalityCheck(textInput.value);
    listElement10.innerText = randomNumber(textInput.value);
}