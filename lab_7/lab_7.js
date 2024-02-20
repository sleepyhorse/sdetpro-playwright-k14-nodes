const readline = require('readline');

// Function to count words in a sentence using an object
function countWords(sentence) {
    const words = sentence.split(/\s+/);
    const wordCount = {};
    let totalCount = 0;

    for (let word of words) {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
        totalCount++;
    }

    return { wordCount, totalCount };
}

// Console interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence: ', function(sentence) {
    const { wordCount, totalCount } = countWords(sentence);
    
    console.log("Word Counts:");
    for (let word in wordCount) {
        console.log(`${word}: ${wordCount[word]}`);
    }

    console.log(`\nTotal distinct words: ${Object.keys(wordCount).length}`);
    console.log(`Total words (including duplicates): ${totalCount}`);
    
    rl.close();
});
