app = {};

app.setSubmitListener = function() {
    const submitButton = document.querySelector('.submitButton');
    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const messageField = document.querySelector('#message')
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        if(nameField.value == '' || messageField.value == '') {
            alert('please enter your name and message')
        } else {
            //TODO: change the alert to a pop up
            alert('the data gremlins have received your message and are delivering it to me post haste!');
            nameField.value = '';
            emailField.value = '';
            messageField.value = '';
        }
    })
}

app.init = function() {
    app.setSubmitListener();
}

app.init();