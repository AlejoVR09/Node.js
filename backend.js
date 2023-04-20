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
            return anotherVar
        })
        console.log(anotherVar)
}

async function sendSomeNumber(anotherNumber){
    
    fetch("http://localhost:3000/hola",{
        method:'post',
        headers: {
            'Content-Type':'applicacion/json'
        },
        body: JSON.stringify({
            number:anotherNumber    
        })
    })
}

async function main(){
    anotherVar=await getSomeNumber();
    console.log(anotherVar)
    await sendSomeNumber(anotherVar);
}

main()

