const fs = require('fs');

const result = [];

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result.push("BIG BANG");
    } else if (i % 3 === 0) {
        result.push("BIG");
    } else if (i % 5 === 0) {
        result.push("BANG");
    } else {
        result.push(i.toString());
    }
}

fs.writeFile('output.json', JSON.stringify(result, null, 4), (err) => {
    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log("Successfully written to output.json");
    }
});