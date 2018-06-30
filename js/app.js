import { EventAPI } from "./EventAPI.js";
import { UI } from "./ui.js";



const api = new EventAPI();
const ui = new UI(); 

// Listener for the submit button
document.querySelector("#searchBtn").addEventListener('click', (e) => {
    e.preventDefault();

    //get values 
    const city = document.querySelector("#city").value; 
    const category = document.querySelector("#category").value; 
    // console.log(city);
    // console.log(category);
    
    //VALIDATE: 
    if(city !== ''){
        console.log("success");
    }else{
        console.log("empty credentials");
        ui.displayErrorMessage("Please, fill in the name of the city.");
    }
    
});




// // console.log(UI);

// UI.city.addEventListener('submit', (e)=> {
//     e.preventDefault(); 

//     //read the data
//     const city = UI.cityInput.value, 
//           date = UI.dateInput.value,   
//           time = UI.timeInput;
    
//     //check       
//     // console.log(city, date, time);
          
//     //validate form 
//     if(city === '' ){
//         UI.messageDiv.innerHTML = "Error...City name is mandatory ";
//         UI.messageDiv.classList.add('error');
//         setTimeout( () => {
//             UI.messageDiv.innerHTML = '';
//             UI.messageDiv.classList.remove('error');

//         }, 3000); 
//     }else{
//         //Query the API 
//     }

// })










//EVENTBRITE : 
// const eventBrite = new EventBriteAuthenticator(); 
// console.log(eventBrite);
// console.log("Test");

