
/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


let myVariable = 'Bob';


let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite…');
}



function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }



  document.querySelector('html').addEventListener('click', function () {
    alert('Ouch! Stop poking me!');
  });


  let myHTML = document.querySelector('html');
  myHTML.addEventListener('click', function () {
    alert('Ouch! Stop poking me!');
  });


  document.querySelector('html').addEventListener('click', () => {
  alert('Ouch! Stop poking me!');
});

  */
 

const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox.jfif') {
    myImage.setAttribute('src','images/firefox2.png');
  } else {
    myImage.setAttribute('src','images/firefox.jfif');
  }
}

/*
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }


  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  }
  */
 