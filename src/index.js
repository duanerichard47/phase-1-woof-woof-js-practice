let dogImgBar = document.querySelector('#dog-info');
let dogbar = document.querySelector('#dog-bar');

fetch('http://localhost:3000/pups')
.then(resp=>resp.json())
.then(data=> {
    data.forEach(element => {
     
        const img = document.createElement("img");
        img.src = element.image;
        dogImgBar.appendChild(img)
/*
        const himg = document.createElement("h4");
        himg.innerText = "This is a test";
        document.body.appendChild(h4)
*/
        let pupsName = document.createElement(h2);
        dogImgBar.appendchild(pupsName);
        pupsName.textContent = element.name;


    })  

    });

        

    
    
    