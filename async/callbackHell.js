function hello(name, callback){
    setTimeout(() => {
        console.log('Hi '+ name);
        callback(name);
    }, 1500);
}

function talk(callbackTalk){
    setTimeout(() => {
        console.log('bla bla bla...');
        callbackTalk();
    }, 900);
}

function conversation(name, times, funCallBack){
    if (times>0) {
        talk(() => {
            conversation(name,--times,funCallBack)
        })
    }else{
        adios(name,funCallBack)
    }
}

function adios(name,otherCallback){
    setTimeout(() => {
        console.log('Farewell '+name);
        otherCallback();
    }, 1000);
}

console.log('Iniciando proceso')
hello('Alejo',(name)=>{
    conversation(name,3,() =>{
        console.log('Termina proceso')
    })
});

// console.log('Iniciando proceso')
// hello('Alejo',(name)=>{
//     talk(function() {
//         talk(function() {
//             adios(name,function() {
//                 console.log('Termina Proceso');
//             });
//         });
//     })
// });
