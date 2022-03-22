// function goodboy(){
//     fetch("dino.json")
//     .then(response => response.json())
//     .then(data => dinoArray = data.Dinos)
//     .then(dinoArray => {
//         dietComper(createHuman(), dinoArray)
//         console.log(dinoArray)
//         console.log(response.json())
//     })
// }


async function goodboy(){
    const response = await fetch('dino.json');
    const data = await response.json();
    const dinoArray = await data.Dinos;
    dietComper(createHuman(),dinoArray);
    heightComper(createHuman(), dinoArray);
    weightComper(createHuman(), dinoArray);
    tiles(createHuman(), dinoArray);
}

// Create Human Object
class theHuman{
    constructor(name, height, weight, diet){
        this.name = document.getElementById('name').value,
        this.height = (parseInt(document.getElementById('feet').value) * 12 + parseInt(document.getElementById('inches').value)).toString(),
        this.weight = parseInt(document.getElementById('weight').value),
        this.diet = document.querySelector('#diet').value
    }
}
function createHuman(){
    const newHuman = new theHuman();
    console.log(newHuman);
    return newHuman
}
//compare the diets 
function dietComper(object1, object2){
    for (let i = 0; i < object2.length; i++){
        if(object1.diet.toLowerCase()===object2[i].diet){
            console.log(object2[i].species)
        }
    }
}

//compare the heights 
function heightComper(object1, object2){
    for (let i = 0; i < object2.length; i++){
        if(object1.height !== object2[i].height){
            console.log(object2[i].species)
        }
    }
}
//compare the weights 
function weightComper(object1, object2){
    for (let i = 0; i < object2.length; i++){
        if(object1.weight !== object2[i].weight){
            console.log(object2[i].species)
        }
    }
}


function tiles(human,dino){
    const theGrid = document.getElementById('grid')
    let humantile = document.createElement('div')

    humantile.classList.add('grid-item')
    humantile.innerHTML = `<h3>${human.name}</h3>
                          <img src ='images/human.png'></img>` 
    theGrid.appendChild(humantile)
    for(let i = 0; i < dino.length; i++){
        let tiles = document.createElement('div')
        tiles.classList.add('grid-item')
        tiles.innerHTML = `<h3>${dino[i].species}</h3>
                            <p>${dino[i].fact}</p>
                            <img src = 'images/${dino[i].species}.png'>`
        theGrid.appendChild(tiles)
    }
}

function moveForm(){
    const theForm = document.getElementById('dino-compare')
    theForm.style.display ='none'
}

 //creates new human object after clicking compare me!
const Compbutton = document.getElementById("btn");
Compbutton.addEventListener('click', goodboy); 
Compbutton.addEventListener('click', moveForm);

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    //test 4 - failed
// async function getDinos(){
//     let url = 'dino.json';
//     try{
//         let results = await fetch(url);
//         return await results.json();
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// async function renderDinos(){
//     let dinos = await getDinos();
//    console.log(dinos)
// }
// renderDinos();

    // test 1 - failed
// async function renderDinos(){
//     setTimeout(function(){
//         let dinos = await getDinos();
//         return dinos;
//     },700);
// }

    //test 2 - failed
// function timer(){
//     setTimeout(function(){
//         const newdino = renderDinos();
//         console.log(newdino[1]);
//     }, 700);
// }
// timer(newdino);

    //test 3- failed
// function grabData(){
//     return new Promise((resolve) =>{
//         fetch('dino.json')
//             .then(response =>{
//             return response.json();
//         }).then(fetchedData => {
//             let data =fetchedData.Dinos;
//             resolve(data);
//         })
//     })
// }
// let emptdino =[];
// grabData().then(data =>{
//     emptdino = data
// });

    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    // fetch("dino.json")
    // .then(response => response.json())
    // .then(dinoObject => {
    //     const dinoArray = dinoObject.Dinos
    //     console.log(dinoArray[3])
    // });
    
    // // Create Dino Compare Method 3
    // // NOTE: Weight in JSON file is in lbs, height in inches.
    // fetch("dino.json")
    // .then(response => response.json())
    // .then(dinoObject => {
    //     const dinoArray = dinoObject.Dinos
    //     console.log(dinoArray[3])
    // });

    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic

//listen for button click, after the click is heard compButton will create a human object

// lines 48-55 for testing
//  function displayclick(){
// //     let theName = document.getElementById('name').value;
// //     console.log("Name:" + theName);
// //     let theFeet = document.getElementById('feet').value;
// //     let theInch = document.getElementById('inches').value;
// //     console.log("height:"+theFeet+"'"+theInch);
//}
//console.log(Compbutton);
    //test button click
    
    // Compbutton.addEventListener('click',function(){
    //     console.log('hello')
    // } );

