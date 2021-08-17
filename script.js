const closedMonkeyFace = document.querySelector('.closed')
const openMonkeyFace = document.querySelector('.open')
const btn = document.querySelector('.btn')
const message = document.querySelector('.message');

//Functions

displaymessage = function (messages) {
    message.textContent = messages;
}

closedMonkeyFace.addEventListener('click', function () {

    //If The monkey is  open
    if (openMonkeyFace.classList.contains('open')) {

        //Activate The BLock Of OpenMonkey
        openMonkeyFace.classList.add('active');

        //Activate The BLock Of CloseMonkey
        closedMonkeyFace.classList.remove('active');

        //Message when taping on monkey
        displaymessage("I Can See You");

        //Hide Hidden message CSS in The Monkey
        message.classList.remove('hidden');
    }
})

openMonkeyFace.addEventListener('click', function () {
    //If The monkey is close
    if (closedMonkeyFace.classList.contains('closed')) {

        //Activate The BLock Of CloseMonkey
        closedMonkeyFace.classList.add('active');

        //Activate The BLock Of OpenMonkey
        openMonkeyFace.classList.remove('active');
        displaymessage("I Can't See You");
        message.classList.remove('hidden');
    }
});

btn.addEventListener('click', function () {

    //hide the message panel at reset
    message.classList.add('hidden');
})
