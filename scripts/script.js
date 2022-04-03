app = {};

app.skillItems = [];
app.shuffledSkills = [];

//shuffles an array into a random order
app.shuffle = function(array) {
    for(let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

app.populateSkillsArray = function() {
    app.skillItems = document.querySelectorAll('.skillItem');
    for (let i = 0; i < app.skillItems.length; i++) {
        app.shuffledSkills.push(app.skillItems[i]);
    }
};

app.displaySkills = function(skillsArray) {
    const skillsList = document.querySelector('#skillsList');
    for (let i = 0; i < skillsArray.length; i++) {
        skillsList.appendChild(skillsArray[i]);
    }
}

app.setShuffleListener = function() {
    const shuffleButton = document.querySelector('#shuffle');
    shuffleButton.addEventListener('click', () => {
        app.shuffle(app.shuffledSkills);
        app.displaySkills(app.shuffledSkills);
    });
};

app.setSubmitListener = function() {
    const submitButton = document.querySelector('#submit');
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
    });
};

app.init = function() {
    // app.setSubmitListener();
    app.populateSkillsArray();
    app.setShuffleListener();
};

app.init();