const myHeading = document.querySelector('h1');
if(myHeading.textContent === "NATURE, Dont you love it? ") {
    alert('Switching Heading!');
    myHeading.textContent = 'Hello world!';
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/nature-background-mountian-riverside-preview.jpg') {
        myImage.setAttribute ('src', 'images/sequoia.jpeg');
    } else {
        myImage.setAttribute ('src', 'images/nature-background-mountian-riverside-preview.jpg');
    }
}

/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

/*
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
}

alert(multiply(5,5));
*/