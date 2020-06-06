//Return length of longest palindrome in the sentence

let testPhrase = "hannah loves racecars shannahs banAnAnanAnanan";
let testArray = testPhrase.toLowerCase().replace(/\s/g, '').split("");

function palindromeCount(wordArray) {
    let longestWordCount = 1;

    //Odd-lettered palindrome case
    for (let i = 1; i < wordArray.length; i++) {
        let counter = 1;
        let indexBehind = i - 1;
        let indexFront = i + 1;

        while (wordArray[indexBehind] === wordArray[indexFront] && indexBehind >= 0) {
            counter = counter + 2;
            indexBehind--;
            indexFront++;
            if (counter > longestWordCount) {
                longestWordCount = counter;
            }
        }
    }

    //Even-lettered palindrome case
    for (let i = 0; i < wordArray.length; i++) {
        let counter = 0;
        let indexBehind = i;
        let indexFront = i + 1;

        while (wordArray[indexBehind] === wordArray[indexFront] && indexBehind >= 0) {
            counter = counter + 2;
            indexBehind--;
            indexFront++;
            if (counter > longestWordCount) {
                longestWordCount = counter;
            }
        }
    }
    return longestWordCount;
}

console.log(palindromeCount(testArray));
