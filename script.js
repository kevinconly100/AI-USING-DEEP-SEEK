let currentUser = null;
let users = [];
let messages = [];

function login() {
    const username = document.getElementById('username').value;
    if (username) {
        currentUser = username;
        users.push(username);
        document.querySelector('.login').style.display = 'none';
        document.querySelector('.chat').style.display = 'block';
        updateUsers();
    }
}

function updateUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
        if (user !== currentUser) {
            const userItem = document.createElement('div');
            userItem.innerText = user;
            userList.appendChild(userItem);
        }
    });
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value;
    if (messageText) {
        const message = { user: currentUser, text: messageText };
        messages.push(message);
        updateMessages();
        messageInput.value = '';
    }
}

function updateMessages() {
    const messageList = document.getElementById('messageList');
    messageList.innerHTML = '';
    messages.forEach(message => {
        const messageItem = document.createElement('div');
        messageItem.innerHTML = `<strong>${message.user}:</strong> ${message.text}`;
        messageList.appendChild(messageItem);
    });
}
