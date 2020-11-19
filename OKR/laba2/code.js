let lastKey = 0;
function createMessage(senderName, textValue) { 
    let message = new Object();
    let message = {
        sender: senderName,
        text: textValue
    }
    let messageObject = JSON.stringify(message);
    addToLocalStorage(lastKey, messageObject)
    
}

function addToLocalStorage(key, value) {
    lastKey = key + 1;                    
    localStorage.setItem(key, value);
}

