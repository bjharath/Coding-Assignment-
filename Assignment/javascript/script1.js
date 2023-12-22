const str = "This is a sunny day";
const newstr = str.split(' ');

for(let i = 0; i < newstr.length; i++){
    let word = newstr[i];
    let tempWord = "";

    for(let j = word.length - 1; j >= 0; j--){
        tempWord = tempWord + word[j];
        
    }
    
    newstr[i] = tempWord; 
}

const reversedStr = newstr.join(' ');
console.log(reversedStr);
