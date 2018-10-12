function Name() {
    var name;
    name = prompt("Please enter your name.");
    document.getElementById("nameUp").innerHTML = 'Hi '+name;
    view3(event);
}

function isPalindrome() {
    var str, revString, text, meh, wuhuu;
    meh = "This is most def not a palindrome...";
    wuhuu = "Congrats!! The word is a palindrome!";

    text = document.getElementById("form1");
    str = text.elements["word"].value;

    revString = str.split('').reverse().join('');
    if (revString === '' && str === '') {
        alert('Please, write a word to the textbox!');
    }
    else if (revString === str) {
        document.getElementById("demo").innerHTML = wuhuu;
        view(event);
    } else {
        document.getElementById("demo").innerHTML = meh;
        view(event);
    }
}
function KeyboardHandler(event) {
    var str, text;
    text = document.getElementById("form1");
    str = text.elements["word"].value;
    if ((event.keyCode === 13) || (event.keyCode === 32)&& str==='') {
        alert('Please, write a word to Palindrome textbox!');
    }
    else if ((event.keyCode === 13) || (event.keyCode === 32)) {
        isPalindrome();
    }
}

function view(event) {
    event.preventDefault();
    let divHidden = document.getElementById("answer");
    divHidden.style.display = "block";
}
function view2(event) {
    event.preventDefault();
    let divHidden2 = document.getElementById("answer2");
    divHidden2.style.display = "block";
}
function view3(event) {
    event.preventDefault();
    let divHidden3 = document.getElementById("answer3");
    divHidden3.style.display = "block";
}

function resetAll(event) {
    event.preventDefault();
    view();
    document.getElementById("form1").reset();
}

function theme(event) {
    event.preventDefault();
    var themes= document.getElementById("mySelect").value;
    if (themes === "Vacation") {
        console.log('vacation');
        document.body.style.backgroundImage = "url('Content/images/vacation.jpg')";
        document.getElementById("header").style.backgroundColor = "lightgreen";
        document.getElementById("header").style.color = "purple";
    }
    else if (themes === "Puzzle") {
        console.log('puzzle');
        document.body.style.backgroundImage = "url('Content/images/puzzle.png')";
        document.getElementById("column3").style.backgroundColor = "antiquewhite";
        document.getElementById("column3").style.backgroundImage = "url('Content/images/balloons.png')";
    }
    else if (themes === "Sky") {
        console.log('sky');
        document.body.style.backgroundImage = "url('Content/images/sky.png')";
        document.getElementById("column2").style.backgroundColor = "lightblue";
        document.getElementById("word").style.backgroundColor = "aliceblue";
    }

    else if (themes === "All") {
        allThemes();
    }

    else if (themes === "Red") {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "red";
       
    }
    else if (themes === "White") {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "white";

    }
}

function reverseString() {
    let str, text, wuhuu;
    let revString = '';
    text = document.getElementById("form2");
    str = text.elements["word2"].value;
    for (let char of str) {
        revString = char + revString;
    }
    wuhuu = 'Word backwards: ' + revString;
    if (revString === '' && str === '') {
        alert('Please, write a word to Reverse string textbox!');
    }
    else {
        document.getElementById("demo2").innerHTML = wuhuu;
        view2(event);
    }
}


function KeyboardHandler2(event) {
    var str, text;
    text = document.getElementById("form2");
    str = text.elements["word2"].value;
    if ((event.keyCode === 13) || (event.keyCode === 32) && str === '') {
        alert('Please, write a word to the textbox!');
    }
    else if ((event.keyCode === 13) || (event.keyCode === 32)) {
        reverseString();
    }
}


function allThemes() {
 
    document.body.style.backgroundImage = "url('Content/images/girl.jpeg')";
    document.getElementById("column1").style.backgroundColor = "pink";

    document.body.style.backgroundImage = "url('Content/images/puzzle.png')";
    document.getElementById("column3").style.backgroundColor = "antiquewhite";
    document.getElementById("column3").style.backgroundImage = "url('Content/images/balloons.png')";

    document.body.style.backgroundImage = "url('Content/images/sky.png')";
    document.getElementById("column2").style.backgroundColor = "lightblue";
    document.getElementById("word").style.backgroundColor = "aliceblue";

    document.body.style.backgroundImage = "url('Content/images/vacation.jpg')";
    document.getElementById("header").style.backgroundColor = "lightgreen";
    document.getElementById("header").style.color = "purple";
    
}
 
