const express=require('express');
const cors=require('cors')

const app = express();
app.use(express.json());
app.use(cors());

let multi;
let num;

app.listen(3000, ()=>{
    console.log("Servidor funcionando")
})

app.get('/hola',(req,res)=>{
    const data ='5';
    res.send(data);
})

app.post('/hola',(req,res)=>{
    let number=req.body.anotherNumber;
    multi=number;
    res.end();
})

app.get('/multiply',(req,res)=>{
    const data =`${multi*2}`;
    res.send(data);
})

app.post('/multiply',(req,res)=>{
    let mult=req.body.anotherMult;
    num=mult;
    console.log(mult)
    res.end();
})



