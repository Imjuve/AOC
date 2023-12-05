import { texte } from "./input.js";

const splitted = texte.split('\n');




let result = 0;

function idk() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    

    splitted.forEach(element => {
   
        const wordLength = element.length;
        let tableau = [];
        let numbersInWord = 0;

        for (let i = 0; i < wordLength; i++) {
            const currentChar = parseInt(element[i]);
            
            if (!isNaN(currentChar) && numbers.includes(currentChar)) {
                numbersInWord++;
                tableau.push(currentChar);
            }
        }

        if (tableau.length > 0) {
            let firstAndLast = [tableau[0], tableau[tableau.length - 1]].filter(n => n !== undefined);
            const stringValue = firstAndLast.join('');
            const currentLineValue = parseInt(stringValue);

            if (!isNaN(currentLineValue)) {
                result += currentLineValue;
            }
        }
    });
    console.log(result)
}
idk();