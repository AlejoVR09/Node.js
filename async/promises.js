function hello(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Hi '+ name);
            resolve(name);
            // reject();
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
            resolve(name);
        }, 1000);
    });
}

hello('Alejo')
.then(talk)
.then(talk)
.then(adios)
.then(adios)
.then(()=>{
    console.log('Terminado el proceso');
}).catch(e =>{
    console.log(e)
    console.log('Ha habido un error')
})

const myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML API.
    setTimeout(() => {
      resolve("Success!"); // Yay! Everything went well!
    }, 250);
  });
  
  myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log(`Yay! ${successMessage}`);
  });