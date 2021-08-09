const express = require('express')
const app = express()
const port = 3000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const insetToArrayAt = (arr, index, value) => {
    arr.splice(index, 0, value);
    arr.splice(-1);
    return arr;
}

app.get('/parse', (req, res) => {
    const { text } = req.query;

    const wordCounts = { };
    const words = text.split(/\s+/);

    words.forEach(word => {
        const counter = wordCounts[word];
        if (!counter) {
            wordCounts[word] = 1;
        } else {
            wordCounts[word] += 1;
        }
    })

    // Most common word
    // const [mostReapeatWord] = Object.entries(wordCounts).reduce(([currWord, currCounter], [word, counter]) => 
    //     currCounter > counter ? [currWord, currCounter] : [word, counter]
    // , ['', 0])

    // most common words
    const numberOfCommonWords = 5;
    const result = Object.entries(wordCounts).reduce((mostCommonWords, [word, counter]) => { 
        const lastIndex = mostCommonWords.length - 1;
        const smallestCounter = lastIndex >= 0 ? mostCommonWords[lastIndex].counter : Infinity;
        if (counter <= smallestCounter) {
            if (mostCommonWords.length === numberOfCommonWords) return mostCommonWords;
            else                                                return [...mostCommonWords, { word, counter }];
        }

        for (let i = 0; i < mostCommonWords.length; i++) {
            if (counter > mostCommonWords[i].counter) return insetToArrayAt(mostCommonWords, i, { word, counter });
        }
    }, [])

    res.send({ result })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})