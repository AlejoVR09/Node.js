async function hello(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Hi '+ name);
            resolve(name);
        }, 1500);
    });

}

async function talk(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla...');
            resolve(name);
        }, 3000);
    });
}

async function adios(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Farewell '+name);
            resolve();
        }, 1000);
    });
}
async function main(){
    let name = await hello('Alejo');
    await talk(name);
    await talk(name);
    await talk(name);
    await adios(name);
}
main()