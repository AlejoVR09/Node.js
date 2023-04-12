function hello(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Hi '+ name);
            // resolve(name);
            reject();
        }, 1500);
    });

}

function talk(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla...');
            resolve(name);
        }, 900);
    });
}

function adios(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Farewell '+name);
            resolve();
            return 0;
        }, 1000);
    });
}

hello('Alejo')
.then(talk)
.then(talk)
.then(adios)
.then(()=>{
    console.log('Terminado el proceso');
}).catch(e =>{
    console.log(e)
    console.log('Ha habido un error')
})