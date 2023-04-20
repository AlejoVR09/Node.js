const test= document.getElementById("test");

let quantityOfTexts;
let anotherVar;



async function getSomeNumber(){
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
}

async function main(){
    await getSomeNumber();
    
    
}

main()

