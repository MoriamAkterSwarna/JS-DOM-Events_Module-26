// Code: 26-2_events.js

// Option 1 - directly set on the HTML element
{/* <button onclick="console.log(70)">Another Button</button> */}



// Option 2 add onclick function 

{/* <button onclick="makeRed()">Make Red</button> */}


        function makeRed() {
            document.body.style.backgroundColor = 'red';
        }
    

// Option 3 - Version 1 

const makeBlueBtn = document.getElementById('make-blue');
        console.log(makeBlueBtn);

        makeBlueBtn.onclick = makeBlue; 
        function makeBlue() {
            document.body.style.backgroundColor = 'blue';
        }

// Option 3 - Version 2

const makePurpleBtn =document.getElementById('make-purple');
        console.log(makePurpleBtn);

       makePurpleBtn.onclick = function() {
           document.body.style.backgroundColor = 'purple';
       }