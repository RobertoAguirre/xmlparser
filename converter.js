const fs = require('fs');
const xml2js = require('xml2js');

// Read XML file
const xml = fs.readFileSync('test.xml', 'utf8');

// Create a new instance of the parser
const parser = new xml2js.Parser();

// Convert XML to JSON
parser.parseString(xml, (err, result) => {
    if (err) {
        throw err;
    }

    // `result` is a JavaScript object
    // Convert it to a JSON string
    const json = JSON.stringify(result, null, 4);

    // Log JSON or use it as needed
    console.log(json);
});
