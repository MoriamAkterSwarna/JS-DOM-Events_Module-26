// Code: 26-2_events.js

// Option 1 - directly set on the HTML element
{/* <button onclick="console.log(70)">Another Button</button> */}



// Option 2 add onclick function 
//* Important [We will use this version sometimes]

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

//* Option 3 - Version 2 

const makePurpleBtn =document.getElementById('make-purple');
        console.log(makePurpleBtn);

       makePurpleBtn.onclick = function() {
           document.body.style.backgroundColor = 'purple';
       }



    //? Video 26-3 Start Here    


    //    option: 4

    const makePinkBtn = document.getElementById('make-pink');
        console.log(makePinkBtn);

        makePinkBtn.addEventListener('click', makePink);

        function makePink() {
            document.body.style.backgroundColor = 'pink';
        }

        // option : 4 another 

        const makeGreenBtn = document.getElementById('make-green');
        console.log(makeGreenBtn);

        makeGreenBtn.addEventListener('click', function makeGreen() {
            document.body.style.backgroundColor = 'green';
        });

        // option : 4 final
//* Important [We will use this version sometimes] 
        document.getElementById('make-orange').addEventListener('click', function() {
            document.body.style.backgroundColor = 'orange';
        });