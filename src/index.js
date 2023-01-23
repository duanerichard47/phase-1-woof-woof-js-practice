let dogImgBar = document.querySelector('#dog-info');
let dogbar = document.querySelector('#dog-bar');
const btn = document.createElement('button')
const filterBtn = document.querySelector('#good-dog-filter')

fetch('http://localhost:3000/pups')
.then(response=>response.json())
.then(resp=>console.log(resp))
.then(resp=> (resp.forEach(pup =>dog(pup)))) 

function dog(pup){
     
const dogSpan = document.createElement('span')
dogbar.appendChild(dogSpan)

const img = document.createElement("img");
img.src = pup.image;
dogSpan.appendChild(img)

const pupName = document.createElement('h2')
pupName.textContent = pup.name
dogSpan.appendChild(pupName)


dogSpan.appendChild(btn)


if (pup.isGoodDog === 'true'){ btn.textContent = "Good Dog!"}
else {  btn.textContent = "Bad Dog!"}

btn.addEventListener('click', event =>
{
if ( btn.textContent === "Good Dog!"){btn.textContent = "Bad Dog!"
const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          isGoodDog: "false",
         
        }),
      };
      
      fetch("http://localhost:3000/pups", configurationObject);}
 else if (btn.textContent = "Bad Dog!"){btn.textContent = "Good Dog!"
 const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          isGoodDog: "true",
         
        }),
      };
      
      fetch("http://localhost:3000/pups", configurationObject);}
})




  } 


filter.addEventListener('click', event =>{
        if(filter.textContent ==='Filter good dogs: OFF'){filter.textContent = "Filter good dogs: ON";
        }
        else if(filter.textContent ==='Filter good dogs: ON'){filter.textContent = "Filter good dogs: OFF"}

})




        

    
    
    