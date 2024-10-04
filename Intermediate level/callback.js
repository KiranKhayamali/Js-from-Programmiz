function delayedTask(callback) {
    setTimeout(() => {
        let data = 20;
        callback(data);
    }, 2000);
}

function logValue(value) {
    console.log(value);
}

delayedTask(logValue);

//another example of callback function
function readFile(callback) {
    setTimeout(() => {
        console.log("Reading file...");
        const fileContent = "Hello, this is the file content!";
        callback(fileContent);
    }, 1000);
}

function processFileContent(content) {
    console.log("Processing file content to uppercase:");
    console.log(content.toUpperCase());
}

// Reading file and then processing its content
readFile(function(content) {
    processFileContent(content);
});