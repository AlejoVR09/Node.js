// function asinc(miCallback){
//     setTimeout(() => {
//         console.log('Soy asincrona')
//         miCallback()
//     }, 1000);
// }

// console.log('Iniciando proceso')
// asinc(()=>{
//     console.log('Terminando proceso');
// });

function hello(name, callback){
    setTimeout(() => {
        console.log('Hi '+ name)
        callback(name);
    }, 1500);
}

function adios(name,otherCallback){
    setTimeout(() => {
        console.log('Farewell '+name);
        otherCallback();
    }, 1000);
}

console.log('Iniciando proceso')
hello('Alejo',(name)=>{
    adios(name,()=>{
        console.log('Termina Proceso')
    })
});
