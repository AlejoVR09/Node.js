const test= document.getElementById("test");

let quantityOfTexts;
let anotherVar;
let anotherMulti;



function getSomeNumber(){
    fetch("http://localhost:3000/hola")
        .then(response => response.json())
        .then(data => {
            quantityOfTexts=parseInt(data)
        })
        .then(()=>{
            for (let i = 0; i < quantityOfTexts; i++) {
                let text = document.createElement('p');
                text.innerHTML='Hola mundo';
                test.appendChild(text);    
            }
            anotherVar=quantityOfTexts+2
            sendSomeNumber(anotherVar);
            
        })
}

function sendSomeNumber(anotherNumber){
    fetch("http://localhost:3000/hola",{
        method:'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            anotherNumber    
        })
    })
    getMulti();
}

function getMulti(){
    fetch("http://localhost:3000/multiply")
        .then(response => response.json())
        .then(data => {
            anotherMulti=parseInt(data)*2;
        })
        .then(()=>{
            console.log(anotherMulti);
            sendMulti(anotherMulti);
        })
        .catch((err)=>{
            console.log('Aun no es procesado el fetch')
        })
        
}

function sendMulti(anotherMult){
    fetch("http://localhost:3000/multiply",{
        method:'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            anotherMult
        })
    })
}

getSomeNumber();

