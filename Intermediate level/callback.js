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

